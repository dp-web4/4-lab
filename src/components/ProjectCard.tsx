interface ProjectCardProps {
  name: string;
  description: string;
  accentColor: string;
  isPublic: boolean;
  url?: string;
  repoUrl?: string;
}

export default function ProjectCard({
  name,
  description,
  accentColor,
  isPublic,
  url,
  repoUrl,
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
        }}
      >
        <h3 style={{ margin: 0 }}>{name}</h3>
        <span className={isPublic ? "badge badge-public" : "badge badge-private"}>
          {isPublic ? "public" : "private"}
        </span>
      </div>
      <p>{description}</p>
      {(url || repoUrl) && (
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "0.75rem",
            fontSize: "0.8125rem",
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
        </div>
      )}
    </div>
  );
}
