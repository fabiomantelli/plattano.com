'use client';

import { useEffect } from 'react';

export default function ContatoPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.bitrix24.com.br/b17869893/crm/form/loader_201.js?' + (Date.now() / 180000 | 0);
    script.async = true;
    script.setAttribute('data-b24-form', 'inline/201/4deyub');
    script.setAttribute('data-skip-moving', 'true');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Formulário de Contato</h1>
      {/* O formulário será carregado automaticamente aqui */}
      <div id="bitrix-form" className="min-h-[300px]"></div>
    </div>
  );
}
