import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class={`text-center text-4xl`}>
        Calculate median price <span class="lightning">⚡️</span>
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Median price calculator",
  meta: [
    {
      name: "description",
      content: "A simple median price calculator",
    },
  ],
};
