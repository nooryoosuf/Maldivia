async function main() {
  const res = await fetch('https://tourism.gov.mv/en/downloads/status-update');
  const html = await res.text();
  const rows = html.match(/<tr>[\s\S]*?<\/tr>/gi) || [];
  console.log('Total table rows:', rows.length);
  for (const r of rows.slice(0, 10)) {
    console.log(r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  }
}
main().catch(console.error);
