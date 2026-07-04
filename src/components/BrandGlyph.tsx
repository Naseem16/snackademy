// Small inline-SVG brand marks. Used where a colored-square emoji (🟧/🟦/🟨…)
// would otherwise render as a meaningless colour box.
type Name = 'aws' | 'gcp' | 'azure' | 'javascript'

const NAMES: Name[] = ['aws', 'gcp', 'azure', 'javascript']

export function hasBrandGlyph(name: string | undefined): name is Name {
  return !!name && (NAMES as string[]).includes(name)
}

export default function BrandGlyph({
  name,
  size = 32,
}: {
  name: Name
  size?: number
}) {
  const common = { width: size, height: size, viewBox: '0 0 40 40' } as const
  switch (name) {
    case 'aws':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg" aria-label="AWS">
          <rect width="40" height="40" rx="9" fill="#232F3E" />
          <text
            x="20"
            y="20"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="#fff"
          >
            aws
          </text>
          <path
            d="M9 27c7 3.6 15 3.6 22 0"
            stroke="#FF9900"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M29 25.2l2.2 1.8-1.9 2.2"
            stroke="#FF9900"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'gcp':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg" aria-label="Google Cloud">
          <rect width="40" height="40" rx="9" fill="#0B1B2B" />
          <g>
            <circle cx="15" cy="21" r="5" fill="#4285F4" />
            <circle cx="22" cy="17.5" r="6.5" fill="#4285F4" />
            <circle cx="27" cy="22" r="5" fill="#4285F4" />
            <rect x="12" y="21" width="17" height="6" rx="3" fill="#4285F4" />
          </g>
          <circle cx="16" cy="31" r="1.7" fill="#EA4335" />
          <circle cx="20.5" cy="31" r="1.7" fill="#FBBC05" />
          <circle cx="25" cy="31" r="1.7" fill="#34A853" />
        </svg>
      )
    case 'azure':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Azure">
          <rect width="40" height="40" rx="9" fill="#0B2A46" />
          <path d="M20 9L32 31H8L20 9Z" fill="#35C1F1" />
          <path d="M20 17.5L27 30H13L20 17.5Z" fill="#0B2A46" />
        </svg>
      )
    case 'javascript':
      return (
        <svg {...common} xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript">
          <rect width="40" height="40" rx="9" fill="#F7DF1E" />
          <text
            x="21"
            y="30"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="800"
            fontSize="17"
            fill="#111"
          >
            JS
          </text>
        </svg>
      )
  }
}
