import Image from "next/image";
import Link from "next/link";
import BirgerIcon from "../../../public/icons/burger-menu.svg";

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
        <Link href="/" className="normal-case text-xl px-0 font-extrabold">
          ProCoding
        </Link>
      </div>

      {/* Normal menu */}
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <MenuItems />
        </ul>
      </div>
      {/* Normal menu end */}

      {/* Hamburger menu */}
      <div className="block md:hidden">
        <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-square drawer-button">
              <Image src={BirgerIcon} alt="Menu" height={30} width={30} />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <MenuItems />
            </ul>
          </div>
        </div>
      </div>
      {/* Hamburger menu end */}
    </div>
  );
};

export default NavBar;

const MenuItems = () => {
  return (
    <>
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
    </>
  );
};
