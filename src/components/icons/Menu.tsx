import { component$ } from "@builder.io/qwik";

export default component$(
  ({
    size = 32,
    color = "currentColor",
    ...props
  }: {
    size?: number;
    color?: string;
  }) => (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 8V6h18v2H3Zm0 5h18v-2H3v2Zm0 5h18v-2H3v2Z"
        clipRule="evenodd"
      />
    </svg>
  )
);
