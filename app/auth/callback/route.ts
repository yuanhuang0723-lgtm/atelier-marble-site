import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/admin/reset-password";
  const client = await getSupabaseServerClient();
  if (!client || !code) return NextResponse.redirect(new URL("/admin/login?error=invalid-recovery-link", request.url));
  const { error } = await client.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(new URL("/admin/login?error=expired-recovery-link", request.url));
  return NextResponse.redirect(new URL(next, request.url));
}
