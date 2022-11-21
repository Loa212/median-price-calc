import { component$, Slot } from "@builder.io/qwik";
// import Header from "../components/header/header";
import { Menu } from "../components/icons";

export default component$(() => {
  return (
    <body class={`absolute inset-0 flex flex-col justify-start`}>
      <header class={"grow-0 bg-[#121212] text-white p-4"}>
        <button
          class={`p-2 bg-gray-800 hover:bg-gray-700 ring-1 ring-gray-700 hover:ring-gray-500 rounded-md`}
        >
          <Menu size={14} color="#c1c1c1" />
        </button>
      </header>
      <main class={`bg-[#121212] grow text-white flex flex-col items-start`}>
        {/* <Header /> */}
        <section
          class={`grow max-w-5xl lg:w-full mx-4 lg:mx-auto my-6 p-6 ring animate-ring-pulse ring-slate-500 rounded-lg`}
        >
          <Slot />
        </section>
      </main>
      <footer
        class={`bg-[#121212] text-white pb-6  flex flex-col items-center justify-center`}
      >
        <a
          class={`underline hover:decoration-4 underline-offset-4`}
          href="https://github.com/Loa212"
          target="_blank"
        >
          Made with ♡ by Loa212
        </a>
      </footer>
    </body>
  );
});
