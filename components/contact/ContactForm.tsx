"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const orgTypes = ["Government", "State Agency", "Behavioral Health Organization", "Sports Organization", "Individual / Consumer", "Other"];
const serviceOptions = [
  "Strategic Consulting",
  "Professional Training & Development",
  "Sports & Performance Consulting",
  "Government & Public Sector",
  "Healthcare & Community Organizations",
  "Merchandise",
  "General Inquiry",
];

type Fields = { name: string; organization: string; email: string; phone: string; orgType: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", organization: "", email: "", phone: "", orgType: "", service: "", message: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone && !/^[+()\-.\s\d]{7,20}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!v.orgType) e.orgType = "Please select an organization type.";
  if (!v.service) e.service = "Please select a service.";
  if (v.message.trim().length < 10) e.message = "Please share a few details (at least 10 characters).";
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`field-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("submitting");
    // TODO: Connect form submission to a backend / email service (e.g. a Next.js route handler
    // with Resend, Formspree, or the client's CRM). Nothing is sent yet — this only simulates success.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <div className="relative h-full rounded-[2rem] border border-forest/10 bg-white p-7 shadow-soft sm:p-12">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className="flex h-full min-h-[480px] flex-col items-center justify-center text-center"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-forest text-ivory">
              <Check aria-hidden className="h-9 w-9" strokeWidth={1.8} />
            </span>
            <h3 className="mt-8 text-4xl text-forest-dark">Thank You, {values.name.split(" ")[0]}.</h3>
            <p className="mt-4 max-w-sm leading-relaxed text-charcoal/70">
              Your inquiry has been received. A member of the GBX Consulting team will be in touch soon.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(empty);
                setStatus("idle");
              }}
              className="mt-8 rounded-full border border-moss/60 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0 }} aria-label="Contact GBX Consulting">
            <p className="label flex items-center gap-4 text-moss">
              Send an Inquiry <span aria-hidden className="h-px w-10 bg-leaf" />
            </p>
            <h2 className="mt-4 text-4xl text-forest-dark">Tell Us About Your Goals</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name" required error={errors.name}>
                <input id="field-name" autoComplete="name" value={values.name} onChange={set("name")} className={input(errors.name)} {...aria("name", errors.name)} />
              </Field>
              <Field id="organization" label="Organization" error={errors.organization}>
                <input id="field-organization" autoComplete="organization" value={values.organization} onChange={set("organization")} className={input()} />
              </Field>
              <Field id="email" label="Email" required error={errors.email}>
                <input id="field-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} className={input(errors.email)} {...aria("email", errors.email)} />
              </Field>
              <Field id="phone" label="Phone" error={errors.phone}>
                <input id="field-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={input(errors.phone)} {...aria("phone", errors.phone)} />
              </Field>
              <Field id="orgType" label="Organization Type" required error={errors.orgType}>
                <Select id="field-orgType" value={values.orgType} onChange={set("orgType")} options={orgTypes} error={errors.orgType} />
              </Field>
              <Field id="service" label="Service of Interest" required error={errors.service}>
                <Select id="field-service" value={values.service} onChange={set("service")} options={serviceOptions} error={errors.service} />
              </Field>
              <Field id="message" label="Message" required error={errors.message} className="sm:col-span-2">
                <textarea id="field-message" rows={5} value={values.message} onChange={set("message")} className={cn(input(errors.message), "resize-y py-4")} {...aria("message", errors.message)} />
              </Field>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-leaf to-moss px-8 font-semibold text-ivory shadow-[0_10px_30px_-10px_rgba(70,111,42,0.8)] transition-all hover:brightness-110 disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send Inquiry <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="mt-4 text-xs text-charcoal/50">Fields marked * are required. We respect your privacy.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const input = (error?: string) =>
  cn(
    "w-full rounded-xl border bg-ivory/60 px-4 text-[0.97rem] text-charcoal outline-none transition-all duration-200 placeholder:text-charcoal/40 focus:border-moss focus:bg-white focus:ring-4 focus:ring-sage/40 min-h-[52px]",
    error ? "border-red-700/60" : "border-forest/15",
  );

const aria = (id: string, error?: string) => ({
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-error` : undefined,
});

function Field({ id, label, required, error, className, children }: { id: string; label: string; required?: boolean; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={`field-${id}`} className="mb-2 block text-sm font-semibold text-forest">
        {label} {required && <span className="text-moss" aria-hidden>*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ id, value, onChange, options, error }: { id: string; value: string; onChange: React.ChangeEventHandler<HTMLSelectElement>; options: string[]; error?: string }) {
  const key = id.replace("field-", "");
  return (
    <div className="relative">
      <select id={id} value={value} onChange={onChange} className={cn(input(error), "appearance-none pr-10")} {...aria(key, error)}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-moss" />
    </div>
  );
}
