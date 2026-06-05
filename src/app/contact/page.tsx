"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icon";
import { PageHead } from "@/components/sections/PageHead";
import { CONTACT_PAGE } from "@/constants/contact";
import { SITE } from "@/constants/site";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (k: keyof typeof INITIAL_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email || "—",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("sent");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="page-enter">
      <PageHead
        crumb={CONTACT_PAGE.head.crumb}
        headline={{
          part1: CONTACT_PAGE.head.headline.part1,
          italic: CONTACT_PAGE.head.headline.italic,
        }}
        lead={CONTACT_PAGE.head.lead}
      />

      <section className="section pad-sm">
        <div className="container">
          <div className="contact-grid">
            {/* ── Info card ── */}
            <div className="contact-info-card">
              <div className="ci-block">
                <div className="lbl">{CONTACT_PAGE.labels.showroom}</div>
                <div className="val italic">
                  {SITE.address.line1},
                  <br />
                  {SITE.address.line2},
                  <br />
                  {SITE.address.line3}
                </div>
              </div>

              <div className="divider-dark" />

              <div className="ci-block">
                <div className="lbl">{CONTACT_PAGE.labels.speakTo}</div>
                <div className="val" style={{ marginBottom: 10 }}>
                  <a
                    href={SITE.contact.primaryPhoneHref}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "inherit" }}
                  >
                    <PhoneIcon /> {SITE.contact.primaryPhone}
                  </a>
                </div>
                <div className="val">
                  <a
                    href={SITE.contact.devangPhoneHref}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "inherit" }}
                  >
                    <PhoneIcon /> {SITE.contact.devangPhone}
                  </a>
                </div>
              </div>

              <div className="divider-dark" />

              <div className="ci-block">
                <div className="lbl">{CONTACT_PAGE.labels.email}</div>
                <div className="val" style={{ fontSize: 19 }}>
                  <a href={SITE.contact.emailHref} style={{ color: "inherit" }}>
                    {SITE.contact.email}
                  </a>
                </div>
              </div>

              <div className="divider-dark" />

              <div className="ci-block">
                <div className="lbl">{CONTACT_PAGE.labels.hours}</div>
                <div className="val" style={{ fontSize: 17 }}>
                  {SITE.hours.weekday}
                  <br />
                  {SITE.hours.weekend}
                </div>
              </div>
            </div>

            {/* ── Enquiry form ── */}
            <div>
              <span className="eyebrow">
                <span className="dot" />
                {CONTACT_PAGE.form.eyebrow}
              </span>
              <h2 className="display contact-form-display">
                {CONTACT_PAGE.form.headlineStart}
                <span className="red-it">
                  {CONTACT_PAGE.form.headlineItalic}
                </span>
              </h2>

              {status === "sent" && (
                <div
                  className="form-msg"
                  style={{ marginBottom: 20, borderColor: "var(--navy)", background: "#fff" }}
                >
                  <strong style={{ color: "var(--navy-ink)" }}>
                    {CONTACT_PAGE.form.successPrefix}
                  </strong>{" "}
                  {CONTACT_PAGE.form.successMessage}
                </div>
              )}

              {status === "error" && (
                <div
                  className="form-msg"
                  style={{ marginBottom: 20, borderColor: "#c0392b", background: "#fff2f2" }}
                >
                  <strong style={{ color: "#c0392b" }}>Something went wrong.</strong>{" "}
                  Please call us directly or email{" "}
                  <a href={SITE.contact.emailHref} style={{ color: "#c0392b" }}>
                    {SITE.contact.email}
                  </a>
                </div>
              )}

              <form className="form" onSubmit={submit}>
                <div className="field">
                  <label>{CONTACT_PAGE.form.fields.name.label}</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder={CONTACT_PAGE.form.fields.name.placeholder}
                    disabled={status === "sending"}
                  />
                </div>
                <div className="field">
                  <label>{CONTACT_PAGE.form.fields.phone.label}</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder={CONTACT_PAGE.form.fields.phone.placeholder}
                    disabled={status === "sending"}
                  />
                </div>
                <div className="field full">
                  <label>{CONTACT_PAGE.form.fields.email.label}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder={CONTACT_PAGE.form.fields.email.placeholder}
                    disabled={status === "sending"}
                  />
                </div>
                <div className="field full">
                  <label>{CONTACT_PAGE.form.fields.message.label}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder={CONTACT_PAGE.form.fields.message.placeholder}
                    disabled={status === "sending"}
                  />
                </div>
                <div className="field full form-submit-row">
                  <span className="hint">
                    {CONTACT_PAGE.form.whatsappNote}{" "}
                    <strong>{SITE.contact.primaryPhone}</strong>
                    {" / "}
                    <strong>{SITE.contact.devangPhone}</strong>
                  </span>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === "sending"}
                    style={{ opacity: status === "sending" ? 0.7 : 1 }}
                  >
                    {status === "sending" ? "Sending…" : CONTACT_PAGE.form.submit}{" "}
                    {status !== "sending" && <ArrowIcon />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Map ── */}
      <section className="section pad-sm">
        <div className="container">
          <div className="section-head map-section-head">
            <div>
              <span className="eyebrow">
                <span className="dot" />
                {CONTACT_PAGE.map.eyebrow}
              </span>
              <h2>
                {CONTACT_PAGE.map.headlineStart}
                <span className="it">{CONTACT_PAGE.map.headlineItalic}</span>
              </h2>
            </div>
            <p className="lead">{CONTACT_PAGE.map.lead}</p>
          </div>
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2988691508326!2d72.58560307828049!3d23.012796163034402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b682f1bb63%3A0x7aa2aed524f5fbe7!2sR.D.%20Thakkar%20%26%20Sons!5e0!3m2!1sen!2sin!4v1780658013573!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="R.D. Thakkar & Sons showroom location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
