import { component$ } from "@builder.io/qwik";

export default component$(
  ({ size = 32, fill = "transparent" }: { size?: number; fill?: string }) => (
    <svg
      width={size}
      height={size}
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  )
);
