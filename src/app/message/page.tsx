import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Message Me | Prakash Satish Sankapal",
  description: "Send Prakash Satish Sankapal a direct message.",
};

export default function MessagePage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden py-24">
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-xl px-4 sm:px-6">
        <Link
          href="/#contact"
          className="mb-8 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <div className="glass rounded-2xl border border-border p-6 shadow-2xl shadow-elevated sm:p-8">
          <p className="mb-3 font-mono text-sm tracking-wider text-accent-2 uppercase">
            Message Me
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            Fill out the form below and it&apos;ll land directly in my inbox. I usually reply
            within a day or two.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
