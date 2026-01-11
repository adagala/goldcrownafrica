import Link from "next/link";
import { useRouter } from "next/router";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

interface NavigationItem {
  title: string;
  route: string;
  external?: boolean;
}

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Services", route: "/services" },
    { title: "Products", route: "/products" },
    { title: "Diamonds", route: "/diamonds" },
    { title: "Blog", route: "/blog" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "py-4 glass shadow-sm" : "py-8 bg-transparent"}`}>
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between px-6 xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-3 text-xl font-serif font-bold tracking-tight text-gray-800 dark:text-white group">
                    <span className="rounded-full p-1 group-hover:rotate-12 transition-transform duration-300">
                      <Image
                        src="/img/logo.png"
                        alt="Logo"
                        width="32"
                        height="32"
                        className="w-8 h-8 object-contain"
                      />
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                      Gold Crown Africa
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-gold-500 focus:text-gold-500 focus:outline-none dark:text-gray-300"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden bg-white dark:bg-trueGray-900 absolute left-0 top-full px-6 py-4 shadow-xl border-t border-gray-100 dark:border-white/5">
                  <div className="flex flex-col w-full">
                    {navigation.map((item, index) => (
                      <Disclosure.Button
                        key={index}
                        as={Link}
                        href={item.route}
                        target={item.external ? "_blank" : "_self"}
                        className={`w-full px-4 py-3 text-lg font-medium transition-colors hover:text-gold-500 ${router.pathname === item.route ? "text-gold-500" : "text-gray-600 dark:text-gray-300"
                          }`}
                      >
                        {item.title}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 list-none lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3" key={index}>
                <Link
                  href={menu.route}
                  target={menu.external ? "_blank" : "_self"}
                  className={`relative px-3 py-1 text-base font-medium transition-all duration-300 hover:text-gold-500 group ${router.pathname === menu.route
                    ? "text-gold-500"
                    : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {menu.title}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transition-transform duration-300 origin-left ${router.pathname === menu.route ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex items-center">
          <ThemeChanger />
          <Link href="/contact" className="px-5 py-2 text-sm font-semibold text-white bg-gold-600 rounded-full hover:bg-gold-500 transition-all shadow-md hover:shadow-gold-500/20">
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
