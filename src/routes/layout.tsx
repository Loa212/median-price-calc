import { component$, Slot } from "@builder.io/qwik";
// import Header from "../components/header/header";
import {
  Menu,
  Folder,
  Download,
  HelpCircle,
  Settings,
  Star,
  Code,
} from "../components/icons";

export default component$(() => {
  return (
    <body class={`absolute inset-0 flex flex-col justify-start`}>
      <header class={"grow-0 bg-[#121212] text-white p-4"}>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1  hover:bg-gray-700">
            <Menu size={14} color="#c1c1c1" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-48 space-y-2"
          >
            <li>
              <label class={` active:bg-slate-400`}>
                <input type="file" class={`hidden`} />
                <Folder size={18} />
                Open
              </label>
            </li>
            <li>
              <a class={`active:bg-slate-400`}>
                <Download size={18} />
                Save to...
              </a>
            </li>
            <li>
              <a class={`active:bg-slate-400`}>
                <HelpCircle size={24} />
                Help
              </a>
            </li>
            <li>
              <a class={`active:bg-slate-400`}>
                <Settings size={18} />
                Settings
              </a>
            </li>
            <hr />
            <li>
              <a class={`active:bg-slate-400`}>
                <Star size={18} />
                Star on GitHub
              </a>
            </li>
            <li>
              <a class={`active:bg-slate-400`}>
                <Code size={18} />
                Contribute
              </a>
            </li>
          </ul>
        </div>
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
