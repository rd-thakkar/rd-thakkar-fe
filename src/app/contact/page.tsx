"use client";

import { useState } from "react";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icon";
import { PageHead } from "@/components/sections/PageHead";
import { CONTACT_PAGE } from "@/constants/contact";
import { SITE } from "@/constants/site";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  interest: "Plywood",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof typeof INITIAL_FORM) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    setForm(INITIAL_FORM);
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
                <div className="val">
                  <PhoneIcon /> &nbsp;{SITE.contact.primaryPhone}
                </div>
                <div
                  className="val"
                  style={{ fontSize: 16, marginTop: 8, opacity: 0.85 }}
                >
                  {CONTACT_PAGE.labels.landline} · {SITE.contact.landline}
                </div>
                <div
                  className="val"
                  style={{ fontSize: 16, marginTop: 4, opacity: 0.85 }}
                >
                  {CONTACT_PAGE.labels.altMobile} · {SITE.contact.altMobile}
                </div>
              </div>
              <div className="divider-dark" />
              <div className="ci-block">
                <div className="lbl">{CONTACT_PAGE.labels.email}</div>
                <div className="val" style={{ fontSize: 19 }}>
                  {SITE.contact.email}
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

              {sent && (
                <div
                  className="form-msg"
                  style={{
                    marginBottom: 20,
                    borderColor: "var(--navy)",
                    background: "#fff",
                  }}
                >
                  <strong style={{ color: "var(--navy-ink)" }}>
                    {CONTACT_PAGE.form.successPrefix}
                  </strong>{" "}
                  {CONTACT_PAGE.form.successMessage}
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
                  />
                </div>
                <div className="field">
                  <label>{CONTACT_PAGE.form.fields.email.label}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder={CONTACT_PAGE.form.fields.email.placeholder}
                  />
                </div>
                <div className="field">
                  <label>{CONTACT_PAGE.form.fields.interest.label}</label>
                  <select value={form.interest} onChange={update("interest")}>
                    {CONTACT_PAGE.form.interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="field full">
                  <label>{CONTACT_PAGE.form.fields.message.label}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder={CONTACT_PAGE.form.fields.message.placeholder}
                  />
                </div>
                <div className="field full form-submit-row">
                  <span className="hint">
                    {CONTACT_PAGE.form.whatsappNote}{" "}
                    <strong>{SITE.contact.primaryPhone}</strong>
                  </span>
                  <button type="submit" className="btn btn-primary">
                    {CONTACT_PAGE.form.submit} <ArrowIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

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
            <div className="map-pin">
              <div className="pin-label">{SITE.name}</div>
              <div className="pin" />
            </div>
            <div className="map-coords">{SITE.address.coordinates}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
