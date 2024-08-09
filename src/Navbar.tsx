import { useEffect, useState } from "react";

export default function Navbar() {
  const [expandNav, setExpandNav] = useState(false);

  useEffect(() => {
    setExpandNav(window && window.innerWidth >= 1024);
  }, []);

  return (
    <nav
      className={`flex flex-col bg-primary px-1 py-4 md:p-4 text-white gap-y-4 ${
        expandNav ? "min-w-[100vw] md:min-w-fit" : ""
      }`}
      id="nav-menu"
    >
      <a
        href="./"
        className="p-4 items-center flex gap-4 cursor-pointer"
        title="Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-hop"
        >
          <path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" />
          <path d="M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" />
          <path d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" />
          <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" />
          <path d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" />
          <path d="M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" />
          <path d="M4.93 4.93 3 3a.7.7 0 0 1 0-1" />
          <path d="M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" />
        </svg>
        <h2
          className={`text-xl text-nowrap pr-4 transition font-thin ${
            !expandNav ? "hidden" : "block"
          }`}
        >
          Company Admin
        </h2>
      </a>
      <ul>
        <li className="pb-4">
          <hr className="mb-2 bg-white opacity-15" />
          <a
            href="./"
            className="flex gap-4 p-4 items-center"
            title="Dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-dashboard"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            <span
              className={`font-semibold uppercase ${
                !expandNav ? "hidden" : "block"
              }`}
            >
              Dashboard
            </span>
          </a>
          <hr className="my-2 bg-white opacity-15" />
        </li>
        <li
          className="opacity-50 flex gap-4 p-4 cursor-not-allowed"
          title="Customers"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span
            className={`font-semibold uppercase ${
              !expandNav ? "hidden" : "block"
            }`}
          >
            Customers
          </span>
        </li>
        <li
          className="opacity-50 flex gap-4 p-4 cursor-not-allowed"
          title="Projects"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-folder-check"
          >
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            <path d="m9 13 2 2 4-4" />
          </svg>
          <span
            className={`font-semibold uppercase ${
              !expandNav ? "hidden" : "block"
            }`}
          >
            Projects
          </span>
        </li>
        <li
          className="opacity-50 flex gap-4 p-4 cursor-not-allowed"
          title="Reporting"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-notebook-pen"
          >
            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
          </svg>
          <span
            className={`font-semibold uppercase ${
              !expandNav ? "hidden" : "block"
            }`}
          >
            Reporting
          </span>
        </li>
      </ul>
      <div
        className={`flex pt-8 ${
          expandNav ? "justify-start ml-3 md:ml-2" : "justify-center"
        }`}
      >
        <button
          aria-label="Toggle navigation"
          aria-expanded={expandNav}
          aria-controls="nav-menu"
          title="Toggle Nav"
          className={`rounded-full flex justify-center items-center p-1 md:p-2 max-w-fit cursor-pointer transition ${
            !expandNav ? "rotate-180" : ""
          }`}
          style={{
            background: "rgba(255,255,255,0.25",
          }}
          onClick={() => setExpandNav((x) => !x)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
