const Banner = () => {
  return (
    <div className="relative bg-neutral-800 px-4 py-3 pr-14 text-white">
      <p className="text-left text-sm font-medium sm:text-center">
        This is a demo build.{" "}
        <a className="underline hover:translate-x-12" href="/docusaurus-link">
          View the Design Guide &rarr;{" "}
        </a>
      </p>
    </div>
  );
};

export default Banner;
