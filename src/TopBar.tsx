import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import headshot from "./assets/DanGroleau_Headshot.jpg";

export default function TopBar({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white py-4 px-4 lg:px-8 drop-shadow flex flex-col-reverse lg:items-center lg:flex-row lg:justify-between">
      <div className=" hidden lg:flex">
        <Input placeholder="Search for..." className="w-[16rem]" />
        <Button className="-ml-[2rem] rounded-none rounded-r" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </Button>
      </div>
      <div className="flex flex-row-reverse justify-between gap-4 lg:justify-start lg:flex-row items-center lg:gap-16">
        <div className="text-gray-400 flex gap-8 w-fit -mb-3">
          <button className="cursor-pointer hover:opacity-75" onClick={onClick}>
            <span className="absolute text-xs bg-red-500 py-[2px] px-[8px] -mt-3 text-center text-white rounded-xl">
              1
            </span>
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
              className="lucide lucide-bell"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          <button className="cursor-pointer hover:opacity-75" onClick={onClick}>
            <span className="absolute text-xs bg-red-500 py-[2px] px-[8px] -mt-3 text-center text-white rounded-xl">
              3
            </span>
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
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src={headshot}
            alt="Profile Picture"
            height={50}
            width={50}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="break-words text-black">Dan Groleau</p>
            <button
              className="underline cursor-pointer whitespace-nowrap text-gray-500 text-xs p-0 m-0 w-fit"
              onClick={onClick}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
