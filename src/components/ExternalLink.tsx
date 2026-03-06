import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  title: string;
  description?: string;
}

export default function ExternalLink({
  href,
  title,
  description,
}: ExternalLinkProps) {
  return (
    <li>
      <ExternalLinkIcon
        size={14}
        style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
      />
      <div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="link-title"
        >
          {title}
        </a>
        {description && <div className="link-desc">{description}</div>}
      </div>
    </li>
  );
}
