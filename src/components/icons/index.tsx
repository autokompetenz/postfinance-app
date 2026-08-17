interface IconProps {
  className?: string;
  size?: number;
}

export function MenuIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M5.4 12.2a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0M14.2 12.2a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0M23 12.2a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0"
      />
    </svg>
  );
}

export function ChevronRightIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      style={{ height: size, width: size }}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m10 8 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      style={{ height: size, width: size }}
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        d="m.5 12-.4-.2v.5l.4-.2Zm24 0 .4.3v-.5l-.4.3Zm-23.6.3c2.3-4 6.6-6.8 11.6-6.8v-1c-5.4 0-10 3-12.4 7.3l.8.5Zm11.6-6.8c5 0 9.3 2.8 11.6 6.8l.8-.5c-2.4-4.3-7-7.3-12.4-7.3v1Zm11.6 6.3c-2.3 4.1-6.6 6.9-11.6 6.9v1c5.4 0 10-3 12.4-7.4l-.8-.5Zm-11.6 6.9c-5 0-9.3-2.8-11.6-6.9l-.8.5c2.4 4.4 7 7.4 12.4 7.4v-1Z"
        fill="currentColor"
      />
      <path
        d="M19 12c0 3.7-3 6.6-6.5 6.6v1c4.1 0 7.5-3.4 7.5-7.5h-1Zm-6.5 6.6c-3.6 0-6.5-3-6.5-6.5H5c0 4.1 3.4 7.5 7.5 7.5v-1ZM6 12c0-3.6 3-6.5 6.5-6.5v-1A7.5 7.5 0 0 0 5 12h1Zm6.5-6.5c3.6 0 6.5 2.9 6.5 6.5h1c0-4.2-3.4-7.5-7.5-7.5v1Z"
        fill="currentColor"
      />
      <circle cx="12.5" cy="12.1" r="3.2" stroke="currentColor" />
    </svg>
  );
}

export function EyeOffIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      style={{ height: size, width: size }}
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        d="m.5 12-.4-.2v.5l.4-.2Zm24 0 .4.3v-.5l-.4.3Zm-23.6.3c2.3-4 6.6-6.8 11.6-6.8v-1c-5.4 0-10 3-12.4 7.3l.8.5Zm11.6-6.8c5 0 9.3 2.8 11.6 6.8l.8-.5c-2.4-4.3-7-7.3-12.4-7.3v1Zm11.6 6.3c-2.3 4.1-6.6 6.9-11.6 6.9v1c5.4 0 10-3 12.4-7.4l-.8-.5Zm-11.6 6.9c-5 0-9.3-2.8-11.6-6.9l-.8.5c2.4 4.4 7 7.4 12.4 7.4v-1Z"
        fill="currentColor"
      />
      <path
        d="M19 12c0 3.7-3 6.6-6.5 6.6v1c4.1 0 7.5-3.4 7.5-7.5h-1Zm-6.5 6.6c-3.6 0-6.5-3-6.5-6.5H5c0 4.1 3.4 7.5 7.5 7.5v-1ZM6 12c0-3.6 3-6.5 6.5-6.5v-1A7.5 7.5 0 0 0 5 12h1Zm6.5-6.5c3.6 0 6.5 2.9 6.5 6.5h1c0-4.2-3.4-7.5-7.5-7.5v1Z"
        fill="currentColor"
      />
      <circle cx="12.5" cy="12.1" r="3.2" stroke="currentColor" />
      <line x1="3" y1="21" x2="22" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function InfoIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      style={{ height: size, width: size }}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M8.4 4.2h-1V3h1v1.2Zm0 8.8h-1V5.8h1V13Z"
        fill="currentColor"
      />
    </svg>
  );
}
