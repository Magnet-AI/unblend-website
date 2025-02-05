export function UnBlendLogo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform hover:scale-105 transition-transform duration-300"
    >
      {/* Background circle */}
      <circle cx="60" cy="60" r="55" fill="#7CD5F5" />

      {/* Eye */}
      <circle cx="40" cy="45" r="8" fill="#1E3A8A" />

      {/* Wink */}
      <path d="M75 45C75 45 80 40 85 45" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />

      {/* Smile */}
      <path d="M30 65C30 65 45 85 60 85C75 85 90 65 90 65" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />

      {/* Tongue sticking out */}
      <path
        d="M55 75L60 90L65 75"
        fill="#FF4444"
        stroke="#1E3A8A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

