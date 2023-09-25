import React from "react";

const SideBar = () => {
  const data = ["Python", "Django", "JavaScript", "Blog", "Tailwind"];

  return (
    <ul className="rounded-lg">
      <li className="bg-slate-800 rounded-t p-2 text-white">Heading</li>
      {data.map((d) => (
        <li
          key={d}
          className="hover:bg-slate-300 p-2 cursor-pointer border last:rounded-b"
        >
          {d}
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
