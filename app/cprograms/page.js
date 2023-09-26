import Link from "next/link";

const page = () => {
  return (
    <>
      <h1 className="text-4xl">C Programs</h1>
      <hr />

      <p>
        C language is a powerful general-purpose programming language. It can be
        used to do low-level programming &#40;drivers and kernels&#41;. It is
        generally used to develop softwares like operating systems, databases,
        compilers and so on.
      </p>

      <p>
        C programming is one of the best language to learn to for beginners to
        understand the basics of programming in depth.
      </p>

      <p>
        Following are the main topics under C language. Try programs from each
        topics to understand C language properly.
      </p>

      <section className="flex flex-col space-y-3">
        <Link href="/cprograms/basic">
          <button className="btn btn-outline btn-block">Basic Exercise</button>
        </Link>
        <Link href="/cprograms/operators">
          <button className="btn btn-outline btn-block">Operators</button>
        </Link>
        <Link href="/cprograms/conditional">
          <button className="btn btn-outline btn-block">Conditonal</button>
        </Link>
        <Link href="/cprograms/loops">
          <button className="btn btn-outline btn-block">Loops</button>
        </Link>
        <Link href="/cprograms/function">
          <button className="btn btn-outline btn-block">Function</button>
        </Link>
        <Link href="/cprograms/array">
          <button className="btn btn-outline btn-block">Array</button>
        </Link>
        <Link href="/cprograms/string">
          <button className="btn btn-outline btn-block">String</button>
        </Link>
        <Link href="/cprograms/pointer">
          <button className="btn btn-outline btn-block">Pointer</button>
        </Link>
      </section>
    </>
  );
};

export default page;
