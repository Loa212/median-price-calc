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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
);
