type PageHeadProps = {
  crumb: string;
  headline: { part1: string; italic: string; part2?: string };
  lead: string;
};

export function PageHead({ crumb, headline, lead }: PageHeadProps) {
  return (
    <section className="page-head">
      <div className="container">
        <div className="crumbs">
          Home <span className="sep">/</span> {crumb}
        </div>
        <h1>
          {headline.part1}
          <span className="it">{headline.italic}</span>
          {headline.part2}
        </h1>
        <p className="ph-lead">{lead}</p>
      </div>
    </section>
  );
}
