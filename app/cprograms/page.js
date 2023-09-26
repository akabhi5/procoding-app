const page = () => {
  return (
    <>
      <section className="mx-auto max-w-3xl space-y-4 text-justify mb-5">
        <h1 className="text-4xl">C Programs</h1>
        <hr />

        <p>
          C language is a powerful general-purpose programming language. It can
          be used to do low-level programming &#40;drivers and kernels&#41;. It
          is generally used to develop softwares like operating systems,
          databases, compilers and so on.
        </p>

        <p>
          C programming is one of the best language to learn to for beginners to
          understand the basics of programming in depth.
        </p>

        <p>
          Following are the main topics under C language. Try programs from each
          topics to understand C language properly.
        </p>

        <section className="space-y-3">
          <button className="btn btn-outline btn-block">Basic Exercise</button>
          <button className="btn btn-outline btn-block">Operators</button>
          <button className="btn btn-outline btn-block">Conditonal</button>
          <button className="btn btn-outline btn-block">Loops</button>
          <button className="btn btn-outline btn-block">Function</button>
          <button className="btn btn-outline btn-block">Array</button>
          <button className="btn btn-outline btn-block">String</button>
          <button className="btn btn-outline btn-block">Pointer</button>
        </section>
      </section>
    </>
  );
};

export default page;
