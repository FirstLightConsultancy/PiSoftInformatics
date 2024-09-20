"use client";
import {
  useState,
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
   navigationMenuTriggerStyle,
  
} from "@/components/ui/navigation-menu";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Our Products",
    url: "/ourproducts",
    submenu: [
      {
        title: "Web Development",
        url: "/ourproducts/web-development",
      },
      {
        title: "App Development",
        url: "/ourproducts/app-development",
      },
      {
        title: "SEO",
        url: "/ourproducts/seo",
        submenu: [
          {
            title: "On-Page SEO",
            url: "/ourproducts/seo/on-page",
          },
          {
            title: "Off-Page SEO",
            url: "/ourproducts/seo/off-page",
          },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState<number | null>(null);
  const [hoveredSubSubIndex, setHoveredSubSubIndex] = useState<number | null>(
    null
  );

  return (
    <nav className=" p-4">
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left side - Contact Number */}
          <div className="flex items-center space-x-2">
          <Image alt="" src="https://www.svgrepo.com/show/6064/phone-call.svg" className="h-6"/>
            <span className="text-gray-600 font-medium">+91-8288029930</span>
          </div>

          {/* Right side - Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition">
              Get a Quote
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-3xl hover:bg-green-600 transition">
              Take a Test
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-3xl hover:bg-yellow-600 transition">
              Register for Placement
            </button>
            <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
              {/* <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Sign in
            </a>
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Sign up
            </a> */}
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110 inline-block">
                Sign in
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110 inline-block">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#_"
          className="flex items-center mb-5 font-medium text-black lg:w-auto lg:items-center lg:justify-center md:mb-0"
        >
          <span className="mx-auto text-xl font-black leading-none  select-none">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              className="h-24 -mb-5"
            />
          </span>
        </a>{" "}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          {/* <div className="text-md font-semibold lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-6"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-6"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400"
            >
              Contact Us
            </Link>
          </div> */}
          <NavigationMenu className="pl-5 text-md">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <ul className="flex space-x-4">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={item.url}
                      className="px-4 py-2 hover:bg-gray-200 text-black font-semibold"
                    >
                      {item.title}
                    </Link>

                    {/* Level 1 */}
                    {item.submenu && hoveredIndex === index && (
                      <ul
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-50 text-black font-semibold"
                        onMouseEnter={() => setHoveredIndex(index)} // Keeps it open when hovering over submenu
                        onMouseLeave={() => {
                          setHoveredIndex(null);
                          setHoveredSubIndex(null);
                          setHoveredSubSubIndex(null);
                        }}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="relative group"
                            onMouseEnter={() => setHoveredSubIndex(subIndex)}
                          >
                            <Link
                              href={subItem.url}
                              className="block px-4 py-2 text-black font-semibold hover:bg-gray-200"
                            >
                              {subItem.title}
                            </Link>

                            {/* Level 2 */}
                            {subItem.submenu &&
                              hoveredSubIndex === subIndex && (
                                <ul
                                  className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg"
                                  onMouseEnter={() =>
                                    setHoveredSubIndex(subIndex)
                                  } // Keeps it open when hovering over submenu
                                  onMouseLeave={() => {
                                    setHoveredSubIndex(null);
                                    setHoveredSubSubIndex(null);
                                  }}
                                >
                                  {subItem.submenu.map(
                                    (subSubItem, subSubIndex) => (
                                      <li
                                        key={subSubIndex}
                                        className="relative group"
                                        onMouseEnter={() =>
                                          setHoveredSubSubIndex(subSubIndex)
                                        }
                                      >
                                        <Link
                                          href={subSubItem.url}
                                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                        >
                                          {subSubItem.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Carrer With Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <nav className="relative"></nav>
    </nav>
  );
};

export default Navbar;
const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
