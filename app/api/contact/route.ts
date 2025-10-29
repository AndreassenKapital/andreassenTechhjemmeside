export async function POST(req: Request) {
  const form = await req.formData();
  const obj = Object.fromEntries(form.entries());
  console.log("CONTACT_FORM", obj);
  return new Response(null, { status: 200 });
}

