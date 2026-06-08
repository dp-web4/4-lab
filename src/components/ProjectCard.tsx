interface ProjectCardProps {
  name: string;
  description: string;
  accentColor: string;
  isPublic: boolean;
  maturity?: "runnable" | "research-stage";
  url?: string;
  repoUrl?: string;
  links?: { label: string; url: string }[];
  footnote?: string;
}

export default function ProjectCard({
  name,
  description,
  accentColor,
  isPublic,
  maturity,
  url,
  repoUrl,
  links,
  footnote,
}: ProjectCardProps) {
  return (
    <div
      className="card"
      style={{ borderLeftWidth: "3px", borderLeftColor: accentColor }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <h3 style={{ margin: 0 }}>{name}</h3>
        <span className={isPublic ? "badge badge-public" : "badge badge-private"}>
          {isPublic ? "public" : "private"}
        </span>
        {maturity && (
          <span style={{
            fontSize: "0.7rem",
            padding: "0.15rem 0.5rem",
            borderRadius: "3px",
            background: maturity === "runnable" ? "rgba(16, 185, 129, 0.12)" : "rgba(245, 158, 11, 0.1)",
            color: maturity === "runnable" ? "#10b981" : "#d97706",
            letterSpacing: "0.04em",
          }}>
            {maturity}
          </span>
        )}
      </div>
      <p>{description}</p>
      {(url || repoUrl || links) && (
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "0.75rem",
            fontSize: "0.8125rem",
            flexWrap: "wrap",
          }}
        >
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              Site →
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              Repo →
            </a>
          )}
          {links && links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label} →
            </a>
          ))}
        </div>
      )}
      {footnote && (
        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "0.5rem", fontStyle: "italic" }}>
          {footnote}
        </p>
      )}
    </div>
  );
}
