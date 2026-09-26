import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Sent | Prakash Satish Sankapal",
  description: "Your message was sent successfully.",
};

export default function MessageSuccessPage() {
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

      <div className="relative mx-auto w-full max-w-lg px-4 text-center sm:px-6">
        <div className="glass rounded-2xl border border-border p-8 shadow-2xl shadow-elevated sm:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10">
            <CheckCircle2 className="text-emerald-400" size={28} />
          </div>

          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Message sent successfully!
          </h1>
          <p className="mt-3 text-base leading-relaxed text-fg-muted">
            I&apos;ll get back to you soon.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-105"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
            <Link
              href="/message"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-transform hover:scale-105"
            >
              Send another message
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
