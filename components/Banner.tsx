
const Banner = () => {
  return (
    <div className="relative bg-neutral-800 px-4 py-3 pr-14 text-white">
      <p className="text-left text-sm font-medium sm:text-center">
        This is a demo build.{" "}
        <a
          className="underline hover:translate-x-12"
          href="/docusaurus-link"
        >
          View the Design Guide &rarr;{" "}
        </a>
      </p>

      {/* <button
        aria-label="Close"
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-neutral-700/60 p-1 transition hover:bg-neutral-700/90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
    </div>
  );
}

export default Banner
