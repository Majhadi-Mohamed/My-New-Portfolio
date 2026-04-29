import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Log to server — replace with Nodemailer / Resend in production
    console.log('📩 New contact message:')
    console.log(`  Name    : ${name}`)
    console.log(`  Email   : ${email}`)
    console.log(`  Message : ${message}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
