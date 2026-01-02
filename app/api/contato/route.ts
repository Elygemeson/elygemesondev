import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { nome, email, mensagem } = await request.json();

    // Validação dos campos
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM || 'elygemeson@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD || 'jkkp niqm yfls ngfr',
      },
    });

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'elygemeson@gmail.com',
      to: process.env.EMAIL_TO || 'elygemeson@gmail.com',
      subject: `Nova mensagem de contato de ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nova Mensagem de Contato</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${mensagem}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Esta mensagem foi enviada através do formulário de contato do portfólio.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Envio do email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}

