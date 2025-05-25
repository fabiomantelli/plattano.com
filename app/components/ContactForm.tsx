'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  note: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', form);
    // 👉 futuramente envie ao Bitrix24 ou API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-white/10"
    >
      {['name', 'company', 'phone', 'email'].map((field) => (
        <input
          key={field}
          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field as keyof ContactFormData]}
          onChange={handleChange}
          className="bg-transparent border rounded px-4 py-2 focus:outline-none border-neutral-300 placeholder:text-neutral-500 text-black dark:border-white/40 dark:placeholder:text-white/60 dark:text-white"
        />
      ))}
      <textarea
        name="note"
        rows={3}
        placeholder="Note"
        value={form.note}
        onChange={handleChange}
        className="bg-transparent border rounded px-4 py-2 focus:outline-none resize-none border-neutral-300 placeholder:text-neutral-500 text-black dark:border-white/40 dark:placeholder:text-white/60 dark:text-white"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-md font-semibold shadow-lg transition-all duration-200 border-2 bg-primary text-white border-primary hover:bg-white hover:text-primary dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-primary"
      >
        SEND
      </button>
    </form>
  );
}
