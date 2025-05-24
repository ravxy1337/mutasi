export async function getServerSideProps({ res }) {
  const merchant_id = "OK1926265";
  const merchant_code = "210440317480985371926265OKCTDEECF78ECD96D5D955145AA50F2D22A6"

  try {
    const apiRes = await fetch(
      `https://gateway.okeconnect.com/api/mutasi/qris/${merchant_id}/${merchant_code}`
    );

    if (!apiRes.ok) {
      throw new Error(`Fetch failed: ${apiRes.status}`);
    }

    const data = await apiRes.json();

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();

    return { props: {} };
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 500;
    res.write(JSON.stringify({ error: error.message }));
    res.end();

    return { props: {} };
  }
}

export default function EmptyPage() {
  return null;
}
