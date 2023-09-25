import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b-4 border-indigo-500 shadow-lg top-0 sticky z-50">
      <div className="flex-1">
        <Link href="/">
          <Image
            src="https://cdn.procoding.org/assets/procoding.png"
            width={50}
            height={50}
            alt="ProCoding.org"
          />
        </Link>
        <Link href="/" className="btn btn-ghost normal-case text-xl px-0">
          ProCoding
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/cprograms">C Programs</Link>
          </li>
          <li>
            <Link href="/python">Python</Link>
          </li>
          <li>
            <Link href="/django">Django</Link>
          </li>
          <li>
            <Link href="/datastructures">Data Structures</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
