"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const PARTNER_TYPES = [
  "Hotel or resort",
  "DMC",
  "Boat partner",
  "Marina or destination",
  "Other",
] as const;

const fieldBase =
  "w-full rounded-xl border border-sea-950/15 bg-white px-4 py-3 text-[15px] text-sea-950 " +
  "placeholder:text-sea-950/35 transition-colors duration-200 " +
  "focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/30";

const labelBase =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-sea-950/55";

/**
 * Partner enquiry form. The site is a static export (no server), so on submit
 * we compose a pre-filled email to SAIL-E and hand off to the visitor's mail
 * client. To wire this to a real backend later, swap the body of `onSubmit`
 * for a fetch() to your form endpoint (Formspree, an API route, etc.).
 */
export function PartnerForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Partner enquiry — ${company || name || "SAIL-E"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Partner type: ${type}`,
      "",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[28px] bg-coastal px-8 py-12 text-center shadow-[0_30px_80px_rgba(1,24,30,0.45)]">
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-aqua/15 text-aqua">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-display text-2xl font-light text-sea-950">
          Your message is ready
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-sea-950/65">
          We&apos;ve opened your email app with the details pre-filled — just hit
          send and our team will be in touch shortly. Prefer to write directly?
          Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-aqua underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 text-[13px] font-medium text-sea-950/55 underline-offset-2 transition-colors hover:text-aqua hover:underline"
        >
          ← Back to the form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[28px] bg-coastal p-7 shadow-[0_30px_80px_rgba(1,24,30,0.45)] sm:p-9"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="pf-name" className={labelBase}>
            Full name
          </label>
          <input
            id="pf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Maria Pappas"
            className={fieldBase}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="pf-email" className={labelBase}>
            Work email
          </label>
          <input
            id="pf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="maria@yourcompany.com"
            className={fieldBase}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="pf-company" className={labelBase}>
            Company / brand
          </label>
          <input
            id="pf-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your hotel, DMC or marina"
            className={fieldBase}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="pf-type" className={labelBase}>
            I am a…
          </label>
          <select id="pf-type" name="type" defaultValue="" className={cn(fieldBase, "appearance-none bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2301181E' stroke-opacity='0.5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Choose one
            </option>
            {PARTNER_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="pf-message" className={labelBase}>
            How can we help?
          </label>
          <textarea
            id="pf-message"
            name="message"
            rows={5}
            placeholder="Tell us about your routes, guest volumes, or what you'd like to offer."
            className={cn(fieldBase, "resize-y")}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3 text-sm font-medium tracking-[0.03em] text-white",
            "shadow-[0_12px_32px_rgba(38,189,216,0.28)] transition-all duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)]",
            "hover:-translate-y-px hover:bg-aqua-500 hover:shadow-[0_20px_48px_rgba(38,189,216,0.42)] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2",
          )}
        >
          Send enquiry →
        </button>
        <p className="text-[12px] leading-relaxed text-sea-950/45">
          We&apos;ll only use your details to reply about partnering.
        </p>
      </div>
    </form>
  );
}
