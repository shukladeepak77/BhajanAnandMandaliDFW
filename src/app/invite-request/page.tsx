import type { Metadata } from "next";
import Link from "next/link";
import EventRequestForm from "@/components/EventRequestForm";
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request an Event",
  description:
    "Request Bhajan Anand Mandali of DFW for your home or community gathering — Mata Ka Jagran, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path, Akhand RamCharitManas Path or Satsang. Share your date and location and we'll respond to confirm.",
};

export default function InviteRequestPage() {
  return (
    <div>
      {/* Page header band — mirrors /spiritual-seva's header band */}
      <div
        className="px-4 py-12 text-center sm:px-6 sm:py-16"
        style={{
          background:
            "linear-gradient(135deg, #521515 0%, #6b1f1f 45%, #b85000 100%)",
        }}
      >
        <p className="text-xs text-white/70 sm:text-sm">
          <Link href="/" className="hover:text-gold hover:underline">
            Home
          </Link>{" "}
          / Request an Event
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Request an Event
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
          Share your preferred date, location and gathering type below, and
          we&apos;ll reach out by phone or email to confirm the details. We
          serve the DFW area, Texas, by invitation.
        </p>
      </div>

      {/* Form */}
      <section className="px-4 py-14 sm:px-6" style={{ background: "var(--cream-card)" }}>
        <div className="mx-auto max-w-3xl">
          <EventRequestForm />
        </div>
      </section>

      {/* Alternate contact — for anyone who'd rather not fill out a form */}
      <section className="px-4 py-14 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm leading-relaxed text-foreground/75">
            Prefer to talk it through directly? Call, text, or WhatsApp us —
            we&apos;re happy to help plan your gathering either way.
          </p>
          <a
            href={`tel:${CONTACT_PHONE_HREF}`}
            className="mt-4 inline-block rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--orange)" }}
          >
            📞 Call {CONTACT_PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}
