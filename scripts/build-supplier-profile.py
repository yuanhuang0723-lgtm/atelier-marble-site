"""Build the public one-page supplier profile from the site's public contact fields."""
from pathlib import Path
from io import BytesIO
import re
import shutil
from PIL import Image

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
contact_source = (ROOT / "lib/assets.ts").read_text(encoding="utf-8").split("export const contact =", 1)[1]

def field(name):
    match = re.search(rf'\b{name}:\s*"([^"]+)"', contact_source)
    if not match:
        raise ValueError(f"Missing public contact field: {name}")
    return match.group(1)

company = field("companyName")
phone = field("whatsapp")
location = field("location")
email = re.search(r'emails:\s*\["([^"]+)"', contact_source).group(1)
website = "https://ateliermarblestone.com"
output = ROOT / "output/pdf/atelier-marble-supplier-profile.pdf"
output.parent.mkdir(parents=True, exist_ok=True)
W, H = A4
M = 36
CW = W - 2 * M
INK = HexColor("#24211D")
MUTED = HexColor("#625B51")
ACCENT = HexColor("#88734F")
PAPER = HexColor("#F7F3ED")
c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
c.setTitle("Atelier Marble - Natural Stone Supplier Profile")
c.setAuthor(company)
c.setCreator(company)
c.setSubject("Drawing-based natural stone components for trade and project buyers")
c.setKeywords("Atelier Marble, Yunfu, stone fabrication, countertops, vanity tops, cut-to-size stone")
c.setFillColor(PAPER)
c.rect(0, 0, W, H, stroke=0, fill=1)

def text(value, x, top, width, size=9.5, leading=14, color=INK, font="Helvetica"):
    style = ParagraphStyle("profile", fontName=font, fontSize=size, leading=leading, textColor=color)
    p = Paragraph(value, style)
    _, height = p.wrap(width, 1000)
    p.drawOn(c, x, top - height)
    return top - height

def label(value, top):
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(M, top, value)

def picture(src, x, top, width, height):
    c.setFillColor(HexColor("#EDE7DC"))
    c.rect(x, top - height, width, height, fill=1, stroke=0)
    image = Image.open(ROOT / "public" / src.lstrip("/")).convert("RGB")
    image.thumbnail((1000, 1000), Image.Resampling.LANCZOS)
    buffer = BytesIO()
    image.save(buffer, format="JPEG", quality=82, optimize=True)
    buffer.seek(0)
    c.drawImage(ImageReader(buffer), x, top - height,
                width=width, height=height, preserveAspectRatio=True, anchor="c", mask="auto")

c.setFillColor(INK)
c.setFont("Times-Roman", 16)
c.drawString(M, H - 45, "A T E L I E R   M A R B L E")
c.setStrokeColor(HexColor("#D1C6B3"))
c.line(M, H - 58, W - M, H - 58)
label("SUPPLIER PROFILE  /  YUNFU, CHINA", H - 78)
text("Natural stone components<br/>for trade and project buyers.", M, H - 97, CW, 25, 28, INK, "Times-Roman")
text("Atelier Marble works from Yunfu, Guangdong, China, combining our own processing with partner coordination. We review custom natural stone components from drawings, quantities, material direction, and destination requirements.", M, H - 167, CW, 9.5, 14, MUTED)

photo_top = H - 226
photo_width = (CW - 14) / 2
picture("/materials/materials/stone-vanity-basin-component-2bef9ce2df.webp", M, photo_top, photo_width, 132)
picture("/materials/materials/stone-vanity-basin-component-ad8667ba07.webp", M + photo_width + 14, photo_top, photo_width, 132)
text("Repeated vanity components", M, photo_top - 141, photo_width, 8, 11, MUTED)
text("Veining and opening placement", M + photo_width + 14, photo_top - 141, photo_width, 8, 11, MUTED)
text("Product references; no specific customer project is identified.", M, photo_top - 158, CW, 7.5, 10, MUTED)

label("WHAT WE CAN REVIEW", H - 409)
text("<b>Countertops and vanity tops</b> - basin openings, exposed edges, splash details and matching panels.<br/><b>Cut-to-size architectural parts</b> - panel marks, dimensions, joints, finish and drawing scope.<br/><b>Repeated project components</b> - room schedules, piece labels and packing groups.", M, H - 421, CW, 9.5, 15, INK)
label("MATERIAL DIRECTION", H - 482)
text("Marble, granite, quartzite and project-approved natural stone. Current lot, thickness, finish, matching and availability are confirmed for each quotation.", M, H - 495, CW, 9.5, 14, MUTED)
label("START A QUOTATION", H - 539)
text("Email and a short project note are enough to start. Drawings can follow. Include rough dimensions, units, quantities, basin or appliance details, material direction and destination when available.", M, H - 552, CW, 9.5, 14, INK)
text("Production scope, tolerances, inspection points, packing, delivery term and schedule are agreed for the project.", M, H - 595, CW, 8.5, 12, MUTED)

c.setFillColor(INK)
c.roundRect(M, 58, CW, 127, 6, stroke=0, fill=1)
text("CONTACT &amp; PROJECT REVIEW", M + 17, 168, CW - 34, 8, 11, HexColor("#D9C9A8"), "Helvetica-Bold")
text(f'{company} | {location}<br/>Email: <link href="mailto:{email}" color="#FFFFFF">{email}</link><br/>WhatsApp: <link href="https://wa.me/{re.sub(r"[^0-9]", "", phone)}" color="#FFFFFF">{phone}</link><br/>Website: <link href="{website}" color="#FFFFFF">ateliermarblestone.com</link>', M + 17, 151, CW - 34, 9.5, 15, white)
text(f'<link href="{website}/custom-stone-fabrication-china" color="#E9DBC2">Fabrication scope</link> &nbsp; | &nbsp; <link href="{website}/countertops/vanity-tops" color="#E9DBC2">Hotel vanity tops</link> &nbsp; | &nbsp; <link href="{website}/contact?utm_source=supplier_profile&amp;utm_medium=pdf&amp;utm_campaign=company_profile" color="#E9DBC2">Request pricing</link>', M + 17, 83, CW - 34, 8, 11, HexColor("#E9DBC2"))
text("Profile reviewed: 7 October 2026. Project-specific quotation required.", M, 37, CW, 7.5, 10, MUTED)
c.showPage()
c.save()
public_output = ROOT / "public/atelier-marble-supplier-profile.pdf"
shutil.copyfile(output, public_output)
print(f"Built {output.name}: {output.stat().st_size} bytes")
