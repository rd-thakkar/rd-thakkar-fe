import { ServiceIcon } from "@/components/ui/Icon";
import { CTABand } from "@/components/layout/CTABand";
import { PageHead } from "@/components/sections/PageHead";
import { SectionHead } from "@/components/sections/SectionHead";
import {
  PROCESS_STEPS,
  SERVICES,
  SERVICES_PAGE,
} from "@/constants/services";

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageHead
        crumb={SERVICES_PAGE.head.crumb}
        headline={{
          part1: SERVICES_PAGE.head.headline.part1,
          italic: SERVICES_PAGE.head.headline.italic,
        }}
        lead={SERVICES_PAGE.head.lead}
      />

      <section className="section pad-sm">
        <div className="container">
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="svc">
                <div className="svc-icon">
                  <ServiceIcon name={s.iconKey} />
                </div>
                <div>
                  <h3>
                    {s.titleStart}
                    <span className="it">{s.titleItalic}</span>
                  </h3>
                  <p>{s.body}</p>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead
            eyebrow={SERVICES_PAGE.process.eyebrow}
            headlineStart={SERVICES_PAGE.process.headlineStart}
            headlineItalic={SERVICES_PAGE.process.headlineItalic}
            lead={SERVICES_PAGE.process.lead}
          />
          <div className="process-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.n} className="process-step">
                <div className="kicker">Step {s.n}</div>
                <div className="t">{s.t}</div>
                <div className="d">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
