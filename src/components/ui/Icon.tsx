import type { ReactNode } from "react";

export type IconName =
  | "building"
  | "users"
  | "layers"
  | "pin"
  | "leaf"
  | "handshake"
  | "compass";

const paths: Record<IconName, ReactNode> = {
  building: (
    <>
      <path d="M3 22h18" />
      <path d="M5 10v12" />
      <path d="M19 10v12" />
      <path d="M3 10l9-7 9 7" />
      <path d="M9 22v-6h6v6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <path d="M14.5 20c0-2 2-3.5 4-3.5s3.5 1.5 3.5 3.5" />
    </>
  ),
  layers: (
    <>
      <path d="M2 17l10 4 10-4" />
      <path d="M2 12l10 4 10-4" />
      <path d="M12 3 2 7l10 4 10-4-10-4z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13V8a6 6 0 0 1 6-6h9v7a7 7 0 0 1-7 7" />
      <path d="M4 13c3-3 8-4 14-4" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="M7 20l1.6-1.4c.4-.4.9-.6 1.4-.6H14c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="M12 5c.2-.7.8-1.3 1.5-1.5a2.5 2.5 0 0 1 3 3c-.2.7-.8 1.3-1.5 1.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16 8 14 14 8 16 10 10 16 8" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

/** Lightweight inline icon set (no icon-library dependency). */
export function Icon({ name, className, size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
