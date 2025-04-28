'use client';

// Instagram is deprecated in typings but still functional; suppress TS warning
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-next-line
import { Phone, Mail, Instagram, Clock } from 'lucide-react';
import { useState } from 'react';

export default function FooterSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <footer className="w-full bg-black text-white">
      {/* COLUNAS */}
      <div className="mx-auto max-w-7xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center md:justify-items-start text-center md:text-left px-12">
        {/* Coluna ESQUERDA */}
        <div className="space-y-6 w-full max-w-sm">
          <h3 className="text-2xl font-semibold">CONNECT WITH US</h3>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <Phone size={20} className="text-primary" />
            <span>+1&nbsp;323&nbsp;1323</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <Clock size={20} className="text-primary" />
            <span>9&nbsp;AM – 6&nbsp;PM&nbsp;EST</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <Mail size={20} className="text-primary" />
            <span>contact@plattano.com</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <Instagram size={20} className="text-primary" />
            <span>@plattanotechnologies.us</span>
          </div>

          <h4 className="pt-8 text-xl font-semibold">WHERE WE ARE:</h4>
          <address className="not-italic leading-relaxed">
            7345 W Sand Lake Rd Ste 210 Office 6438
            <br />
            Orlando, FL 32819
          </address>
        </div>

        {/* Coluna DIREITA */}
        <div className="space-y-6 w-full max-w-md">
          <h3 className="text-2xl font-semibold">Get in touch with our team</h3>
          <p>Plattano Technologies US, always by your side</p>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-800 p-6 rounded-lg flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border border-white/40 rounded px-4 py-2 placeholder:text-white/60 focus:outline-none"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="bg-transparent border border-white/40 rounded px-4 py-2 placeholder:text-white/60 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="bg-transparent border border-white/40 rounded px-4 py-2 placeholder:text-white/60 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border border-white/40 rounded px-4 py-2 placeholder:text-white/60 focus:outline-none"
            />
            <textarea
              name="note"
              rows={3}
              placeholder="Note"
              value={form.note}
              onChange={handleChange}
              className="bg-transparent border border-white/40 rounded px-4 py-2 placeholder:text-white/60 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="self-center md:self-start px-8 py-3 rounded-md bg-primary text-white font-semibold shadow-lg transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <iframe
        title="Plattano US Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.6219827658123!2d-81.4734282!3d28.4488801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ed2d02e7e41%3A0x1234567890abcdef!2s7345%20W%20Sand%20Lake%20Rd%20%23210%2C%20Orlando%2C%20FL%2032819!5e0!3m2!1sen!2sus!4v1714300000000"
        className="w-full h-72 border-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Rodapé final */}
      <div className="w-full bg-black text-center text-sm py-6 border-t border-white/20">
        <span className="text-primary">Plattano Tecnologia LTDA 27.839.811/0001-37</span>
        <br />© 2025 Plattano® Technologies US
      </div>
    </footer>
  );
}
