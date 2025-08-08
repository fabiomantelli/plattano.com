'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!form.name || !form.company || !form.email || !form.phone) {
      return 'Name, company, phone number, and email are required.';
    }

    if (!emailRegex.test(form.email)) {
      return 'Invalid email address.';
    }

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      return 'Invalid phone number.';
    }

    return null;
  };

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

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

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
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-white/10"
    >
      <input
        type="text"
        name="name"
        placeholder="Name *"
        value={form.name}
        onChange={handleChange}
        required
        className="bg-transparent border rounded px-4 py-2 focus:outline-none border-neutral-300 placeholder:text-neutral-500 text-black dark:border-white/40 dark:placeholder:text-white/60 dark:text-white"
      />

      <input
        type="text"
        name="company"
        placeholder="Company *"
        value={form.company}
        onChange={handleChange}
        required
        className="bg-transparent border rounded px-4 py-2 focus:outline-none border-neutral-300 placeholder:text-neutral-500 text-black dark:border-white/40 dark:placeholder:text-white/60 dark:text-white"
      />

      <PhoneInput
        country={'us'}
        onlyCountries={['us']}
        disableDropdown={true}
        countryCodeEditable={false}
        value={form.phone}
        onChange={(value) => setForm({ ...form, phone: value })}
        masks={{ us: '(...) ...-....' }}
        inputProps={{
          name: 'phone',
          required: true,
          placeholder: '(999) 999-9999',
        }}
        inputClass="
          !w-full !h-[42px]
          !bg-transparent !border !rounded !pl-12 !pr-4 !py-2
          !text-black dark:!text-white
          !border-neutral-300 dark:!border-white/40
          placeholder:!text-neutral-500 dark:placeholder:!text-white/60
        "
        buttonClass="
          !bg-transparent !border-none !shadow-none
          !left-2 !top-1/2 !-translate-y-1/2
          pointer-events-none absolute
        "
        containerClass="!w-full relative"
      />

      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={form.email}
        onChange={handleChange}
        required
        className="bg-transparent border rounded px-4 py-2 focus:outline-none border-neutral-300 placeholder:text-neutral-500 text-black dark:border-white/40 dark:placeholder:text-white/60 dark:text-white"
      />

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
        <p className="text-primary font-medium">Lead successfully submitted!</p>
      )}
      {error && (
        <p className="text-red-500 font-medium">{error}</p>
      )}
    </form>
  );
}
