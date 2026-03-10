export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0"><channel><title>LuxeDate</title><description>Updates</description><link>https://luxedate.example</link></channel></rss>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
