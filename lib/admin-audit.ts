import type { SupabaseClient } from "@supabase/supabase-js";

export async function recordContentAudit(
  client: SupabaseClient,
  tableName: string,
  recordId: string | undefined,
  action: "create" | "update" | "publish" | "archive" | "delete",
  details: Record<string, unknown> = {}
) {
  const { data } = await client.auth.getUser();
  if (!data.user) return;
  const result = await client.from("content_audit_log").insert({ table_name: tableName, record_id: recordId || null, action, changed_by: data.user.id, details });
  if (result.error) console.error("Content audit failed", result.error.message);
}
