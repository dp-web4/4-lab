// One status vocabulary for the front pages. It says where a thing stands in a word, so a
// visitor does not have to read a paragraph of qualifications to find out. The qualifications
// themselves live in the notebook (/notebook), which each front page links to.
const STYLES: Record<string, { label: string; color: string }> = {
  running: { label: "RUNNING", color: "#10b981" },
  building: { label: "BUILDING", color: "#f59e0b" },
  research: { label: "RESEARCH", color: "#8b5cf6" },
  archived: { label: "ARCHIVED", color: "#64748b" },
};

export default function Status({ kind }: { kind: keyof typeof STYLES }) {
  const s = STYLES[kind];
  return (
    <span
      style={{
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: s.color,
        border: `1px solid ${s.color}`,
        borderRadius: "0.25rem",
        padding: "0.1rem 0.4rem",
        marginLeft: "0.5rem",
        verticalAlign: "middle",
      }}
    >
      {s.label}
    </span>
  );
}
