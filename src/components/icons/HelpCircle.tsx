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
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
);
