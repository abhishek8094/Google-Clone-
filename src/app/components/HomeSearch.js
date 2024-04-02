"use client";

import { CiSearch } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  // console.log(input);

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
    .then ((res) =>res.json())
    .then((data) => data[0]);
    if(! response) return;
    router.push(`/search/web?searchTerm=${response}`);

    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md  focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <CiSearch className="text-xl text-gray-500 mr-3 " />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google Search
        </button>

        <button
          onClick={randomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          {randomSearchLoading ? "loading..." : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
}