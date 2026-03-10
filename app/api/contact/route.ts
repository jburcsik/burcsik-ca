import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_DEFAULT_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error: dbError } = await supabase
    .from("contact_messages")
    .insert({ name, email, message });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }

  const { error: emailError } = await resend.emails.send({
    from: "burcsik.ca <contact@burcsik.ca>",
    to: "jesse@burcsik.ca",
    replyTo: email,
    subject: `Message from ${name} via burcsik.ca`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (emailError) {
    console.error("Resend error:", emailError);
    // Message is saved — don't fail the request over email
  }

  return NextResponse.json({ success: true });
}
