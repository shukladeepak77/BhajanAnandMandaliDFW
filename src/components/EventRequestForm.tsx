"use client";

import { useState, type FormEvent } from "react";
import { EVENT_TYPE_OPTIONS } from "@/content/mandali";

// Netlify Forms: this is a plain, server-renderable form (static export
// prerenders it, so Netlify's build-time bot can detect the "event-request"
// form and its fields — no separate hidden duplicate form is needed).
// Submission itself is intercepted client-side with fetch() so the visitor
// gets an inline thank-you message instead of a full page reload.
function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const today = new Date().toISOString().split("T")[0];

export default function EventRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-[18px] px-6 py-10 text-center shadow-[var(--shadow)]"
        style={{ background: "var(--surface)" }}
      >
        <p className="text-4xl">🙏</p>
        <h3 className="font-display mt-3 text-xl font-bold text-maroon">
          Request Received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-foreground/75">
          Thank you for reaching out. We&apos;ve received your event request
          and will respond by phone or email soon to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <form
      name="event-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-[18px] px-5 py-6 shadow-[var(--shadow)] sm:px-8 sm:py-8"
      style={{ background: "var(--surface)" }}
    >
      {/* Required for Netlify's form-detection bot */}
      <input type="hidden" name="form-name" value="event-request" />
      {/* Honeypot spam trap — kept off-screen, real visitors never fill it */}
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-maroon">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
            style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-maroon">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(214) 555-0100"
            className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
            style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-maroon">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
            style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
          />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-semibold text-maroon">
            Type of Gathering *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
            style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
          >
            <option value="" disabled>
              Select a gathering type
            </option>
            {EVENT_TYPE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
            <option value="Other">Other / Not Sure Yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="requestedDate" className="block text-sm font-semibold text-maroon">
            Requested Date *
          </label>
          <input
            id="requestedDate"
            name="requestedDate"
            type="date"
            required
            min={today}
            className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
            style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-maroon">
            Location / Venue *
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            placeholder="City or venue in the DFW area"
            className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
            style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold text-maroon">
          Additional Details <span className="font-normal text-foreground/50">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Preferred time, approximate number of guests, any special intentions..."
          className="mt-1.5 w-full rounded-[10px] border px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2"
          style={{ borderColor: "var(--border-muted)", background: "var(--cream-card)" }}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm font-semibold text-red-700">
          Something went wrong submitting your request. Please call or text us
          directly instead — we don&apos;t want to miss you.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
        style={{ background: "var(--orange)" }}
      >
        {status === "submitting" ? "Submitting…" : "Submit Event Request →"}
      </button>
    </form>
  );
}
