import Navlink from "@/common/Navlink";
import Logo from "@/common/Logo";
import Button from "@/common/Buttons";

interface NavbarProps {
  session: boolean;
}
const Navbar = ({ session }: NavbarProps) => {
  return (
    <header id="navbar" aria-label="Site Header" className="">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {!session ? (
                  <>
                    <Navlink name="About" path="#about" />
                    <Navlink name="Pricing" path="#pricing" />
                    <Navlink name="FAQs" path="#faqs" />
                  </>
                ) : null}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!session ? (
                <Button content="Login" path="/login" />
              ) : (
                <Button content="Account" path="/account" />
              )}

              <div className="block md:hidden">
                <button className="p-2 border border-violet-400 bg-zinc-50 text-violet-400 transition hover:bg-violet-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
