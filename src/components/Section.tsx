import type { ReactNode } from "react";

interface Props {
  title: string;
  icon?: string;
  children: ReactNode;
}

export function Section({ title, icon = "✦", children }: Props) {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="section-icon">{icon}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
