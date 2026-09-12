interface MachineCardProps {
  name: string;
  hardware: string;
  model: string;
  role: string;
  /** Raising-line liveness, derived from git (see the basis note on /fleet). Omit where the machine raises no line. */
  liveness?: string;
}

export default function MachineCard({
  name,
  hardware,
  model,
  role,
  liveness,
}: MachineCardProps) {
  return (
    <div className="card">
      <h3 style={{ color: "var(--color-accent)" }}>{name}</h3>
      <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
        {hardware}
      </div>
      <div style={{ fontSize: "0.8125rem", marginBottom: "0.25rem" }}>
        <span style={{ color: "var(--color-text-muted)" }}>Model:</span>{" "}
        <span style={{ color: "var(--color-text-secondary)" }}>{model}</span>
      </div>
      {liveness ? (
        <div style={{ fontSize: "0.8125rem", marginBottom: "0.25rem" }}>
          <span style={{ color: "var(--color-text-muted)" }}>Raising line:</span>{" "}
          <span style={{ color: "var(--color-text-secondary)" }}>{liveness}</span>
        </div>
      ) : null}
      <div style={{ fontSize: "0.8125rem" }}>
        <span style={{ color: "var(--color-text-muted)" }}>Role:</span>{" "}
        <span style={{ color: "var(--color-text-secondary)" }}>{role}</span>
      </div>
    </div>
  );
}
