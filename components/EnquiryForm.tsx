"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { productOptions, generalEnquiryLabel, findCategoryByValue } from "@/data/products";
import { submitEnquiry, type EnquiryData } from "@/lib/enquiry";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success";

interface EnquiryFormProps {
  initialProduct: string;
}

const fieldClass =
  "w-full rounded-sm border border-forest-900/20 bg-white px-3.5 py-2.5 text-[15px] text-forest-950 placeholder:text-stone-warm/60 focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-700/20";

export default function EnquiryForm({ initialProduct }: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") ?? "";

  const preselected = useMemo(() => {
    if (!productParam) return initialProduct;
    return findCategoryByValue(productParam)?.name ?? initialProduct;
  }, [productParam, initialProduct]);

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<EnquiryData, "product">>({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });
  const [product, setProduct] = useState(initialProduct);

  // Keep the select in sync if the query parameter changes (client-side nav).
  // preselected reflects the current ?product= param; fall back to the
  // server-provided initialProduct so the select is never left blank.
  useEffect(() => {
    setProduct(preselected);
  }, [preselected]);

  function update<K extends keyof Omit<EnquiryData, "product">>(
    key: K,
    value: Omit<EnquiryData, "product">[K],
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) return setError("Please enter your name.");
    if (!/^[+\d][\d\s-]{6,14}$/.test(form.phone.trim()))
      return setError("Please enter a valid phone number.");
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return setError("Please enter a valid email address.");
    if (!form.message.trim()) return setError("Please tell us about your requirement.");

    setStatus("submitting");
    try {
      await submitEnquiry({ ...form, product });
      setStatus("success");
    } catch {
      setError("Something went wrong. Please call or WhatsApp us instead.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-sm border border-leaf-500/30 bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-leaf-500/15">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-leaf-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-forest-950">
          Thank you. Your enquiry has been received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-stone-warm">
          Our team will get in touch with you. If WhatsApp did not open automatically, you can
          also reach us directly at{" "}
          <a href={site.phoneHref} className="font-semibold text-forest-800 hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ name: "", phone: "", email: "", business: "", message: "" });
            setProduct(generalEnquiryLabel);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-forest-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-forest-900"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {product !== generalEnquiryLabel ? (
        <div className="rounded-sm border border-lime-500/40 bg-lime-400/10 px-4 py-3 text-sm text-forest-900">
          Enquiring about: <strong className="font-semibold">{product}</strong>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className="mb-1.5 block text-sm font-medium text-forest-950">
            Name <span className="text-leaf-600">*</span>
          </label>
          <input
            id="enq-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="enq-phone" className="mb-1.5 block text-sm font-medium text-forest-950">
            Phone <span className="text-leaf-600">*</span>
          </label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="+91"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-email" className="mb-1.5 block text-sm font-medium text-forest-950">
            Email
          </label>
          <input
            id="enq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="enq-business" className="mb-1.5 block text-sm font-medium text-forest-950">
            Business / Farm Name
          </label>
          <input
            id="enq-business"
            name="business"
            type="text"
            autoComplete="organization"
            value={form.business}
            onChange={(e) => update("business", e.target.value)}
            className={fieldClass}
            placeholder="Dairy farm, dealership, etc."
          />
        </div>
      </div>

      <div>
        <label htmlFor="enq-product" className="mb-1.5 block text-sm font-medium text-forest-950">
          Product of Interest <span className="text-leaf-600">*</span>
        </label>
        <select
          id="enq-product"
          name="product"
          required
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className={fieldClass}
        >
          {productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enq-message" className="mb-1.5 block text-sm font-medium text-forest-950">
          Requirement / Message <span className="text-leaf-600">*</span>
        </label>
        <textarea
          id="enq-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={fieldClass}
          placeholder="Tell us about your animals, herd size, and what you need."
        />
      </div>

      {error ? (
        <p className="rounded-sm border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-sm bg-forest-800 px-7 py-3 text-base font-semibold text-cream-50 transition-colors hover:bg-forest-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
        </button>
        <p className="max-w-xs text-xs leading-5 text-stone-warm">
          Submitting opens WhatsApp with your enquiry pre-filled so our team can respond quickly.
        </p>
      </div>
    </form>
  );
}
