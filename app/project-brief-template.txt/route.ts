import fs from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const content = await fs.readFile(path.join(process.cwd(), "public", "project-brief-template.txt"), "utf8");
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": "attachment; filename=atelier-marble-project-brief.txt",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
