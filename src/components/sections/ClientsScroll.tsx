import { SectionHead } from "@/components/sections/SectionHead";
import { HOME } from "@/constants/home";

export function ClientsScroll() {
  const row = (
    <span className="clients-inner" aria-hidden="true">
      {HOME.clientsSection.items.map((client, i) => (
        <span key={i} className="client-chip">
          <span className="client-dot" />
          {client}
        </span>
      ))}
    </span>
  );

  return (
    <section className="section pad-sm clients-section">
      <div className="container">
        <SectionHead
          eyebrow={HOME.clientsSection.eyebrow}
          headlineStart={HOME.clientsSection.headlineStart}
          headlineItalic={HOME.clientsSection.headlineItalic}
          lead={HOME.clientsSection.lead}
        />
      </div>
      {/* Full-width scrolling strip — no container so it bleeds edge-to-edge */}
      <div className="clients-track-wrap" aria-label="Client list">
        <div className="clients-track">
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}
