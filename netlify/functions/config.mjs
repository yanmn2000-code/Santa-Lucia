// Expõe ao navegador apenas a URL do Supabase e a chave pública (anon/publishable).
// Usa só a origem da URL: se a variável vier como ".../rest/v1/", o cliente do Supabase quebra.
export default async () => {
  const rawUrl = (Netlify.env.get('SUPABASE_URL') || '').trim();
  const key = (Netlify.env.get('SUPABASE_ANON_KEY') || '').trim();
  let url = '';
  try { url = rawUrl ? new URL(rawUrl).origin : ''; } catch {}
  return Response.json({ url, key }, { headers: { 'Cache-Control': 'no-store' } });
};
