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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({
          name: '',
          company: '',
          phone: '',
          email: '',
          note: '',
        });
      } else {
        setError(data.error || 'Error submitting the form.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fields: (keyof ContactFormData)[] = ['name', 'company', 'phone', 'email'];

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-white/10"
    >
      {fields.map((field) => (
        <input
          key={field}
          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          className="bg-transparent border rounded px-4 py-2 focus:outline-none border-neutral-300 placeholder:text-neutral-500 text-black dark:border-white/40 dark:placeholder:text-white/60 dark:text-white"
          required
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
        disabled={loading}
        className="w-full py-3 rounded-md font-semibold shadow-lg transition-all duration-200 border-2 bg-primary text-white border-primary hover:bg-white hover:text-primary dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-primary"
      >
        {loading ? 'Sending...' : 'SEND'}
      </button>

      {success && (
        <p className="text-green-600 font-medium">Lead successfully submitted!</p>
      )}
      {error && (
        <p className="text-red-500 font-medium">{error}</p>
      )}
    </form>
  );
}