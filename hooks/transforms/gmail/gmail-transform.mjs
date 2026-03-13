export default async function transform(payload) {
  const data = payload?.payload || payload || {};
  const messages = Array.isArray(data.messages) ? data.messages : [];
  const first = messages[0] || {};
  const from = String(first.from || "unknown sender").trim();
  const subject = String(first.subject || "(no subject)").trim();
  const snippet = String(first.snippet || "").trim();
  return {
    message: `New email from ${from}\nSubject: ${subject}\n${snippet}`.trim(),
    messages,
    name: "Gmail",
    wakeMode: "now",
  };
}
