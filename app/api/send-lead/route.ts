// app/api/send-lead/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  company: string;
  phone: string;
  email: string;
  note: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadData;

    // Validação básica
    if (!body.name || !body.company || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Nome, telefone e email são obrigatórios.' },
        { status: 400 }
      );
    }

    const payload = {
      fields: {
        TITLE: `Lead de ${body.name} via site Plattano US`,
        NAME: body.name,
        COMPANY_TITLE: body.company || '',
        PHONE: [{ VALUE: body.phone, VALUE_TYPE: 'WORK' }],
        EMAIL: [{ VALUE: body.email, VALUE_TYPE: 'WORK' }],
        COMMENTS: body.note || '',
        SOURCE_ID: 'WEB'
      }
    };

    const res = await fetch(process.env.BITRIX_WEBHOOK!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      

    const data = await res.json();

    if (data.error || !data.result) {
      console.error('Erro Bitrix:', data);
      return NextResponse.json({ error: 'Erro ao enviar ao Bitrix24.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, leadId: data.result });

  } catch (err) {
    console.error('Erro interno:', err);
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });
  }
}
