import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1
        class={`text-center text-4xl lg:underline underline-offset-8 decoration-slate-50/20`}
      >
        Calculate median price <span class="lightning">⚡️</span>
      </h1>
      <div class="my-2 p-4 max-w-2xl  mx-auto flex flex-col items-center justify-start">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">What is your name?</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text-alt">Alt label</span>
            <span class="label-text-alt">Alt label</span>
          </label>
        </div>
      </div>
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
