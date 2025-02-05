export function CowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 16h16M4 8h16M12 4v16" />
      <path d="M8 12a4 4 0 0 1 8 0" />
      <path d="M8 16a4 4 0 0 1 8 0" />
      <path d="M6 20h12" />
      <path d="M6 4h12" />
      <circle cx="12" cy="8" r="2" />
      <path d="M10 12s-1 1-1 2" />
      <path d="M14 12s1 1 1 2" />
    </svg>
  )
}

