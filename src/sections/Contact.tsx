
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  User,
  Mail,
  PenLine,
  Box,
  Send,
  Lock,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import { SiInstagram } from "react-icons/si";
import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    build: "",
  });

  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone,
          message: formData.message,
          build: formData.build,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            result.error ||
            "Unable to send your message. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Your message has been sent. We'll be in touch soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        build: "",
      });

      setPhone("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#DDE5DF] bg-white px-4 py-3.5 text-sm text-[#17251C] outline-none transition placeholder:text-[#929D95] focus:border-[#168653] focus:ring-2 focus:ring-[#168653]/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#26372C]";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F7FAF7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_rgba(20,45,28,0.08)] lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#14291D] p-8 text-white sm:p-10 lg:p-12">

            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#168653]/15 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#58D68D]" />
                <span className="text-xs font-semibold tracking-wide text-white">
                  LET'S BUILD SOMETHING
                </span>
              </div>

              <h2 className="max-w-lg text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
                Have a project in mind?
                <span className="mt-2 block text-[#71D99A]">
                  Let's make it happen.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                Tell us what you're working on. We'll help you find the right
                technology and turn your ideas into something meaningful.
              </p>
            </div>

            {/* CONTACT LINKS */}
            <div className="relative z-10 mt-16 space-y-7">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Get in touch
                </p>

                {/* EMAIL */}
                <a
                  href="mailto:info@ravewebs.in"
                  className="group flex items-center justify-between border-b border-white/15 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Mail size={19} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Email us</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        info@ravewebs.in
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-white/60 group-hover:text-[#71D99A]" />
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/918117028576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/15 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <MessageCircle size={19} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">WhatsApp</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Chat with our team
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-white/60 group-hover:text-[#71D99A]" />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/ravewebs.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit RaveWebs on Instagram"
                  className="group flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-[#E1306C]/20">
                      <SiInstagram
                        size={20}
                        className="text-white transition group-hover:text-[#F472A5]"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Instagram</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        @ravewebs.in
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-white/60 group-hover:text-[#71D99A]" />
                </a>
              </div>

              <div className="flex items-center gap-3 border-t border-white/15 pt-6">
                <Lock size={16} className="shrink-0 text-[#71D99A]" />
                <p className="text-xs leading-5 text-white/65">
                  Your information is only used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white p-7 sm:p-10 lg:p-12">

            <div className="mb-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#168653]">
                CONTACT RAVEWEBS
              </p>

              <h3 className="text-3xl font-bold tracking-tight text-[#17251C] sm:text-4xl">
                Tell us about your project.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#68766D]">
                Fill in the details below and our team will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87958B]"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87958B]"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone number
                </label>

                <div className="contact-phone-input">
                  <IntlTelInput
                    value={phone}
                    onChangeNumber={setPhone}
                    initialCountry="in"
                    separateDialCode={true}
                    countrySearch={true}
                    formatAsYouType={true}
                    loadUtils={() => import("intl-tel-input/utils")}
                    inputProps={{
                      id: "contact-phone",
                      name: "phone",
                      placeholder: "Enter your phone number",
                      required: true,
                      className: "contact-phone-field",
                    }}
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label htmlFor="build" className={labelClass}>
                  What are you looking for?
                </label>
                <div className="relative">
                  <Box
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87958B]"
                  />
                  <select
                    id="build"
                    name="build"
                    required
                    value={formData.build}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none pl-11`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Website Design & Development">
                      Website Design & Development
                    </option>
                    <option value="AI Lead Management System">
                      AI Lead Management System
                    </option>
                    <option value="AI Calling Agent">
                      AI Calling Agent
                    </option>
                    <option value="AI WhatsApp Agent">
                      AI WhatsApp Agent
                    </option>
                    <option value="AI Ads & UGC Ads">
                      AI Ads & UGC Ads
                    </option>
                    <option value="AI Automation">
                      AI Automation
                    </option>
                    <option value="CRM Solutions">
                      CRM Solutions
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Tell us more about it
                </label>
                <div className="relative">
                  <PenLine
                    size={18}
                    className="absolute left-4 top-4 text-[#87958B]"
                  />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, requirements, or challenges..."
                    className={`${inputClass} resize-none pl-11`}
                  />
                </div>
              </div>

              {/* STATUS */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl border p-4 ${
                    status.type === "success"
                      ? "border-[#B8E5C8] bg-[#F0FAF3] text-[#176B3B]"
                      : "border-[#F1C4C4] bg-[#FFF4F4] text-[#B42318]"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  ) : (
                    <span className="mt-0.5 font-bold">!</span>
                  )}
                  <p className="text-sm leading-6">{status.message}</p>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#147D4A] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(20,125,74,0.16)] transition hover:bg-[#10673D] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    Send your inquiry
                    <Send size={17} />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-[#89958D]">
                By submitting this form, you agree to be contacted by RaveWebs
                regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* PHONE INPUT STYLES */}
      <style>{`
        .contact-phone-input .iti {
          width: 100%;
        }

        .contact-phone-input .iti input {
          width: 100%;
          min-height: 50px;
          border: 1px solid #DDE5DF;
          border-radius: 12px;
          background: #FFFFFF;
          padding-top: 12px;
          padding-bottom: 12px;
          padding-right: 14px;
          color: #17251C;
          font-size: 14px;
          outline: none;
        }

        .contact-phone-input .iti input:focus {
          border-color: #168653;
          box-shadow: 0 0 0 2px rgba(22, 134, 83, 0.1);
        }

        .contact-phone-input .iti__selected-country {
          border-radius: 10px 0 0 10px;
          background: #FFFFFF;
        }

        .contact-phone-input .iti__selected-dial-code {
          color: #26372C;
          font-size: 14px;
        }

        .contact-phone-input .iti__country-list {
          z-index: 50;
          border: 1px solid #DDE5DF;
          border-radius: 12px;
          color: #17251C;
        }

        .contact-phone-input .iti__search-input {
          color: #17251C;
        }
      `}</style>
    </section>
  );
}
