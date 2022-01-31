import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import {
  MicrophoneIcon,
  SearchIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="google Image"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
          <input
            className="flex-grow w-full outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            className="h-7 text-gray cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            className="h-7 text-blue-500 hidden sm:inline-flex pl-2 cursor-pointer"
            onClick={search}
          />
          <button hidden onClick={search}>
            serach
          </button>
        </form>
        <UserCircleIcon className=" ml-auto h-10" />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
