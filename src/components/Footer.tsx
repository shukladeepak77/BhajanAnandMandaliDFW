import { CONTACT_PHONE, CONTACT_PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      className="shadow-[0_-2px_16px_rgba(69,10,10,0.25)]"
      style={{
        background:
          "linear-gradient(90deg, #450a0a 0%, #7c2d12 50%, #9a3412 100%)",
        borderTop: "1px solid rgba(253,224,71,0.35)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-white/85 sm:px-6">
        <p className="font-devanagari text-lg font-semibold text-gold">
          भजन से आनंद, आनंद से भगवान
        </p>
        <p className="mt-1 text-xs text-white/70 italic sm:text-sm">
          Bhajan se Anand, Anand se Bhagwan
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/75 sm:text-sm">
          <a href={`tel:${CONTACT_PHONE_HREF}`} className="hover:text-gold">
            📞 {CONTACT_PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            💬 WhatsApp
          </a>
        </div>

        <p className="mt-4 text-xs text-white/60">
          Jai Shri Ram · Jai Mata Di · Har Har Mahadev · Jai Shri Krishna
        </p>
      </div>
    </footer>
  );
}
