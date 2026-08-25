import { useEffect, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const PHONE_URL = 'tel:+966501401518';
const WHATSAPP_MESSAGE = 'مرحباً، أحتاج تسليك مجاري بالكمبروسر في حي [أدخل اسم الحي].. هل متاحين؟';
const WHATSAPP_URL = `https://wa.me/966501401518?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function CallInvitePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCall = () => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(PHONE_URL);
    } else {
      window.location.href = PHONE_URL;
    }
  };

  const handleWhatsApp = () => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(WHATSAPP_URL);
    } else {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-invite-title"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border p-6 text-center shadow-2xl sm:p-8"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          borderColor: 'rgba(245, 197, 24, 0.55)',
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="إغلاق النافذة"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>

        <div
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            backgroundColor: 'rgba(220, 38, 38, 0.16)',
            color: 'var(--color-emergency-red)',
          }}
        >
          <Phone size={32} className="pulse-animation" />
        </div>

        <p
          className="mb-2 text-sm font-bold"
          style={{ color: 'var(--color-electric-yellow)' }}
        >
          خدمة سريعة داخل الرياض
        </p>
        <h2 id="call-invite-title" className="mb-3 text-2xl font-extrabold text-white sm:text-3xl">
          تحتاج تسليك مجاري الآن؟
        </h2>
        <p className="mb-6 text-base leading-8 text-white/75">
          اتصل بنا الآن، وسننسق وصول الفني إليك ونوضح لك الحل والتكلفة قبل بدء العمل.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCall}
            className="flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-extrabold text-white transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--color-emergency-red)' }}
          >
            <Phone size={19} />
            اتصل الآن
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-extrabold text-white transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--color-whatsapp-green)' }}
          >
            <MessageCircle size={19} />
            واتساب
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-5 text-sm font-semibold text-white/55 transition-colors hover:text-white"
        >
          متابعة تصفح الموقع
        </button>
      </div>
    </div>
  );
}

