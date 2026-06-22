import { NextResponse } from "next/server";

export async function POST() {
  return new NextResponse(null, { status: 204 });
}

export function GET() {
  return NextResponse.json({ ok: false, message: "Method not allowed." }, { status: 405 });
}
