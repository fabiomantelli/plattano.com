// app/api/send-lead/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  company: string;
  phone: string;
  email: string;
  note?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<LeadData>;

    // Basic validation
    if (!body.name || !body.company || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Name, company, phone number, and email are required.' },
        { status: 400 }
      );
    }

    const payload = {
      fields: {
        TITLE: `Lead from ${body.name} via Plattano US site`,
        NAME: body.name,
        COMPANY_TITLE: body.company,
        PHONE: [{ VALUE: body.phone, VALUE_TYPE: 'WORK' }],
        EMAIL: [{ VALUE: body.email, VALUE_TYPE: 'WORK' }],
        COMMENTS: body.note || '',
        SOURCE_ID: 'WEB'
      }
    };

    const webhook = process.env.BITRIX_WEBHOOK;

    if (!webhook) {
      console.error('Missing BITRIX_WEBHOOK in environment variables.');
      return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 });
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok || data.error || !data.result) {
      console.error('Bitrix error:', data);
      return NextResponse.json({ error: 'Failed to submit to Bitrix24.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, leadId: data.result });

  } catch (err) {
    console.error('Internal error:', err);
    return NextResponse.json({ error: 'Internal server error. Please try again.' }, { status: 500 });
  }
}
