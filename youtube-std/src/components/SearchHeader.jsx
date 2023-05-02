import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const { keyword } = useParams();
  useEffect(() => setText(keyword || ""), [keyword]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <header className="w-full text-2xl flex p4 mb-4 border-b border-zincs-600">
      <Link to={"/"} className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={handleChange}
          className="w-7/12 p-2 outline-none bg-black placeholder-gray-500"
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
