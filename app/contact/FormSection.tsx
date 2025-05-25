'use client';

import ContactForm from "../components/ContactForm";

export default function FormSection() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">I CAN WAIT</h2>

        <p className="text-primary text-sm sm:text-base font-medium">
          If you&apos;d rather we get in touch later, just fill out the form below — it&apos;s quick and easy.
        </p>

        <p className="text-base sm:text-lg font-semibold">
          Have any questions about our company? Reach out now.
        </p>

        <div className="pt-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
