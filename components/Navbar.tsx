import { useState } from "react";
import Link from "next/link";
import Navlink from "@/common/Navlink";
import Logo from "@/common/Logo";
import Button from "@/common/Buttons";
import { DownArrowSVG } from "@/images/svg/arrows";

interface NavbarProps {
  session: object | null;
}
const Navbar = ({ session }: NavbarProps) => {
  const [dropdown, toggleDropdown] = useState(false);
  const [notif, toggleNotif] = useState(false);

  const dropdownProps = {
    dropdown: dropdown,
    toggleDropdown: toggleDropdown,
  };

  const notifProps = {
    notif: notif,
    toggleNotif: toggleNotif,
  };

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
                <>
                  <Notifications
                    notifications={session.notifications.unread}
                    {...notifProps}
                  />
                  <AccountDropdown
                    user={session.user_name}
                    {...dropdownProps}
                  />
                </>
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

interface AccountDropdownProps {
  user: string;
  dropdown: boolean;
  toggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

// ${dropdown ? "inline-flex" : "hidden"}
function AccountDropdown({
  user,
  dropdown,
  toggleDropdown,
}: AccountDropdownProps) {
  return (
    <div className="inline-flex items-stretch rounded-md border bg-white">
      <a
        href="/account"
        className="rounded-l-md px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-700"
      >
        {user}
      </a>

      <div className="relative">
        <button
          onClick={() => toggleDropdown((current) => !current)}
          className="inline-flex h-full items-center justify-center rounded-r-md border-l border-zinc-100 px-2 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-700"
        >
          <span className="sr-only">Menu</span>
          <DownArrowSVG />
        </button>

        <div
          className={`${
            dropdown ? "absolute" : "hidden"
          }  right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-zinc-100 bg-white shadow-lg`}
          role="menu"
        >
          <div className="flow-root py-2">
            <div className="-my-2 divide-y divide-zinc-100">
              <div className="p-2">
                <DropdownEntry name="Account" path="/account" />
                <DropdownEntry name="Settings" path="/settings" />
              </div>

              <div className="p-2">
                <form method="POST" action="#">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-1 hover:bg-red-50"
                    role="menuitem"
                  >
                    <p className="text-sm text-red-700 ">Logout</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DropdownEntryProps {
  name: string;
  path: string;
}

function DropdownEntry({ name, path }: DropdownEntryProps) {
  return (
    <Link
      href={path}
      className="block rounded-lg px-4 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700"
      role="menuitem"
    >
      {name}
    </Link>
  );
}

interface NotificationsProps {
  notifications: string[];
  notif: boolean;
  toggleNotif: React.Dispatch<React.SetStateAction<boolean>>;
}
function Notifications({ notifications, notif, toggleNotif }) {
  const unreadNotifs = notifications.length != 0 ? notifications : null;
  return (
    <>
      <button
        onClick={() => toggleNotif((current) => !current)}
        className={`block shrink-0 rounded-full  p-2.5 shadow-sm ${
          unreadNotifs
            ? "bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700"
            : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-700"
        }`}
      >
        <span className="sr-only">Notifications</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      <div
        className={`${
          notif ? "absolute" : "hidden"
        }  right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-zinc-100 bg-white shadow-lg`}
        role="menu"
      >
        <div className="flow-root py-2">
          <div className="-my-2 divide-y divide-zinc-100">
            <div className="p-2">
              <DropdownEntry name="Account" path="/account" />
              <DropdownEntry name="Settings" path="/settings" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
