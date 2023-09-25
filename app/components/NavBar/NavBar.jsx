import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b-4 border-indigo-500 shadow-lg top-0 sticky z-50">
      <div className="flex-1">
        <Image
          src="https://cdn.procoding.org/assets/procoding.png"
          width={50}
          height={50}
          alt="ProCoding.org"
        />
        <a className="btn btn-ghost normal-case text-xl px-0">ProCoding</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>C Programs</a>
          </li>
          <li>
            <a>Python</a>
          </li>
          <li>
            <a>Django</a>
          </li>
          <li>
            <a>Data Structures</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
