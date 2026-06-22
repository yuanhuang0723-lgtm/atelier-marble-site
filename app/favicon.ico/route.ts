export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#252321"/>
  <path d="M10 48 26 14l12 25 9-13 7 22H10Z" fill="#f4f0e9"/>
  <path d="M18 46c10-9 18-14 31-18" fill="none" stroke="#9a6d3b" stroke-width="3" stroke-linecap="round"/>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
