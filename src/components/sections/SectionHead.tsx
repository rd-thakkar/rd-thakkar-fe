type Props = {
  eyebrow: string;
  headlineStart: string;
  headlineItalic: string;
  headlineEnd?: string;
  lead: string;
};

export function SectionHead({
  eyebrow,
  headlineStart,
  headlineItalic,
  headlineEnd,
  lead,
}: Props) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">
          <span className="dot" />
          {eyebrow}
        </span>
        <h2>
          {headlineStart}
          <span className="it">{headlineItalic}</span>
          {headlineEnd}
        </h2>
      </div>
      <p className="lead">{lead}</p>
    </div>
  );
}
