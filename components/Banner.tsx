const Banner = () => {
  return (
    <div className="relative bg-zinc-800 px-4 py-3 pr-14">
      <p className="text-left text-sm font-medium sm:text-center text-zinc-400">
        This is a demo.{" "}
        <a
          className="underline hover:translate-x-12 text-zinc-400 hover:text-zinc-300"
          href="/github-link"
        >
          View the Source Code &rarr;{" "}
        </a>
      </p>
    </div>
  );
};

export default Banner;
