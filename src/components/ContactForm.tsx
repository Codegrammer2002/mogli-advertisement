"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site-config";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-1.5 w-full border-2 border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Until a Web3Forms access key is configured, point visitors to WhatsApp
  // instead of showing a form that cannot deliver.
  if (!WEB3FORMS_KEY) {
    return (
      <div className="border-2 border-dashed border-border p-6 text-center">
        <p className="font-display font-extrabold">Online form coming soon.</p>
        <p className="mt-2 text-sm font-light text-muted">
          Meanwhile, reach us instantly on WhatsApp — we usually reply within
          minutes.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="tech-label mt-5 inline-block border-2 border-foreground bg-foreground px-5 py-3 text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-contrast"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY as string);
    formData.append("subject", "New enquiry from the Mogli website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-foreground p-6 text-center">
        <p className="font-display text-lg font-black">Thank you!</p>
        <p className="mt-2 text-sm font-light text-muted">
          Your enquiry has been sent. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="tech-label block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="phone" className="tech-label block">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="tech-label block">
          Email <span className="text-muted">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="tech-label block">
          What do you need printed?
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-accent">
          Something went wrong. Please try again, or contact us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="tech-label w-full border-2 border-foreground bg-foreground px-5 py-3.5 text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-contrast disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry →"}
      </button>
    </form>
  );
}
