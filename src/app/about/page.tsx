import Image from "next/image";
import { ArrowIcon, MailIcon, PhoneIcon, TrophyIcon } from "@/components/ui/Icon";
import { CTABand } from "@/components/layout/CTABand";
import { PageHead } from "@/components/sections/PageHead";
import { SectionHead } from "@/components/sections/SectionHead";
import { ABOUT } from "@/constants/about";
import { SITE } from "@/constants/site";

export default function AboutPage() {
  return (
    <div className="page-enter">
      <PageHead
        crumb={ABOUT.head.crumb}
        headline={{
          part1: ABOUT.head.headline.part1,
          italic: ABOUT.head.headline.italic,
          part2: ABOUT.head.headline.part2,
        }}
        lead={ABOUT.head.lead}
      />

      {/* Story */}
      <section className="section pad-sm">
        <div className="container">
          <div className="heritage">
            <div className="heritage-img">
              <Image
                src={ABOUT.story.image}
                alt="Showroom"
                width={900}
                height={1080}
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow">
                <span className="dot" />
                {ABOUT.story.eyebrow}
              </span>
              <h2 className="display story-display">
                {ABOUT.story.headlineLine1}
                <br />
                {ABOUT.story.headlineLine2Start}
                <span className="red-it">
                  {ABOUT.story.headlineLine2Italic}
                </span>
              </h2>
              {ABOUT.story.paragraphs.map((p, i) => (
                <p key={i} style={i === 0 ? { marginTop: 24, fontSize: 16 } : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            eyebrow={ABOUT.milestones.eyebrow}
            headlineStart={ABOUT.milestones.headlineStart}
            headlineItalic={ABOUT.milestones.headlineItalic}
            lead={ABOUT.milestones.lead}
          />
          <div className="timeline">
            {ABOUT.milestones.items.map((m) => (
              <div key={m.year} className="tl-item">
                <div className="year">{m.year}</div>
                <div className="title">{m.title}</div>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={ABOUT.leadership.eyebrow}
            headlineStart={ABOUT.leadership.headlineStart}
            headlineItalic={ABOUT.leadership.headlineItalic}
            lead={ABOUT.leadership.lead}
          />
          <div className="leader-card">
            <div className="leader-avatar">{ABOUT.leadership.leader.initials}</div>
            <div>
              <span className="kicker">{ABOUT.leadership.leader.kicker}</span>
              <h3 className="display leader-name">
                {ABOUT.leadership.leader.nameFirst}{" "}
                <span className="red-it">
                  {ABOUT.leadership.leader.nameLastItalic}
                </span>
              </h3>
              <p style={{ fontSize: 15, maxWidth: 640 }}>
                {ABOUT.leadership.leader.bio}
              </p>
              <div className="leader-contact">
                <a href={SITE.contact.primaryPhoneHref} className="phone-pill">
                  <PhoneIcon /> {SITE.contact.primaryPhone}
                </a>
                <a href={SITE.contact.emailHref} className="phone-pill">
                  <MailIcon /> {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            eyebrow={ABOUT.values.eyebrow}
            headlineStart={ABOUT.values.headlineStart}
            headlineItalic={ABOUT.values.headlineItalic}
            lead={ABOUT.values.lead}
          />
          <div className="values">
            {ABOUT.values.items.map((v) => (
              <div key={v.num} className="value">
                <div className="vn">{v.num}</div>
                <h4>
                  {v.headlineStart}
                  <span className="it">{v.headlineItalic}</span>
                  {"headlineEnd" in v ? v.headlineEnd : null}
                </h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={ABOUT.awards.eyebrow}
            headlineStart={ABOUT.awards.headlineStart}
            headlineItalic={ABOUT.awards.headlineItalic}
            lead={ABOUT.awards.lead}
          />
          <div className="awards-grid">
            {ABOUT.awards.items.map((a, i) => (
              <div key={i} className="award">
                <div className="a-emblem">
                  <TrophyIcon />
                </div>
                <div className="a-issuer">{a.issuer}</div>
                <div className="a-title">
                  {a.titleStart}
                  <span className="it">{a.titleItalic}</span>
                  {"titleEnd" in a ? a.titleEnd : null}
                </div>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
