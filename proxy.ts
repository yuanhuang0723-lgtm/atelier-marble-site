import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (![
    "www.ateliermarblestone.com",
    "atelier-marble-site.vercel.app"
  ].includes(request.nextUrl.hostname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = "ateliermarblestone.com";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)"
};
