const ContactUs = () => {
  return (
    <>
      <section className="mx-auto max-w-3xl space-y-4 text-justify mb-5">
        <h1 className="text-4xl">Contact us</h1>
        <hr />
        <p>
          Contact us for help, support and request for anything related to
          programming. If you find any errors on our website please inform us,
          we&#39;ll be thankful to you. :&#41;
        </p>

        <p>
          Fill this form or email us at{" "}
          <a
            href="mailto:contact@procoding.org"
            className="text-gray-600 underline"
          >
            contact@procoding.org
          </a>
        </p>

        <section className="">
          <form className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
                rows={6}
              ></textarea>
            </div>

            <div className="text-right my-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-sm btn-neutral"
              />
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default ContactUs;
