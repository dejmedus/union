import Navlink from "@/components/Common/Navlink";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="dark:bg-zinc-800 bg-zinc-100">
      <div className="relative mx-auto max-w-screen-xl px-8 py-8 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <a
            className="inline-block rounded-full bg-blue-400 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
            href="#navbar"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-blue-400 lg:justify-start">
              <h3>Union</h3>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed dark:text-zinc-400 text-zinc-500 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end text-sm">
              <Navlink name="design guide" path="https://docusaurus.io" />
              <Navlink name="source code" path="https://github-repo" />
              <Navlink name="other work" path="https://portfolio" />
            </ul>
          </nav>
        </div>
        {/* 
        <p className="mt-12 text-center text-sm text-zinc-500 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;

// interface SocialIconProps {
//   name: string;
//   svgPath: string;
// }

// function SocialIcon({ name, svgPath }: SocialIconProps) {
//   return (
//     <li>
//       <a
//         href="/"
//         rel="noreferrer"
//         target="_blank"
//         className="text-zinc-700 transition hover:text-zinc-700/75"
//       >
//         <span className="sr-only">{name}</span>
//         <svg
//           className="h-6 w-6"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path fillRule="evenodd" d={svgPath} clipRule="evenodd" />
//         </svg>
//       </a>
//     </li>
//   );
// }
