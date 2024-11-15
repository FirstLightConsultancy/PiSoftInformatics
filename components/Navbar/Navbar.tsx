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
    url: "#",
    submenu: [
      {
        title: "ERP Solutions",
        url: "#",
        submenu:[
          {
            title: "Education",
            url: "/education",
          },
          {
            title: "Finance",
            url: "/finance",
          },
          {
            title: "Retails",
            url: "/retails",
          },
          {
            title: "Medical Store",
            url: "/medical-store",
          },
        ]
      },
      {
        title: "Our Portals",
        url: "#",
        submenu: [
          {
            title: "Elive Today",
            url: "/elive-today",
          },
          {
            title: "Chandigarh Web",
            url: "/chandigarh-web",
          },
        ],
      },
    ],
  },
  {
    title: "Our Services",
    url: "#",
    submenu: [
      {
        title: "ERP",
        url: "/erp",
      },
      {
        title: "Software Development",
        url: "/software-development",
      },
      {
        title: "Web Development",
        url: "/web-development",
      },
      {
        title: "Web Designing",
        url: "/web-designing",
      },
      {
        title: "Mobile Applications",
        url: "/mobile-applications",
      },
      {
        title: "Digital Marketing",
        url: "/digital-marketing",
      },
      {
        title: "Domain Registration",
        url: "/domain-registration",
      },
      {
        title: "Graphic Designing",
        url: "/graphic-designing",
      },
      {
        title: "Web Hosting",
        url: "/web-hosting",
      },
    ],
  },
  {
    title: "Know Us",
    url: "#",
    submenu: [
      {
        title: "Contact Us",
        url: "/contact-us",

      },
      {
        title: "Company Profile",
        url: "/about-us",

      },
      {
        title: "Awards and Honours",
        url: "/awards-honours",
      },
    ],
  },
  {
    title: "Carrer With Us",
    url: "/carrer-with-us",
    submenu: [
      {
        title: "Apply For Job",
        url: "/apply-for-job",

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
    <nav className="">
      <div className="bg-blue-500 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left side - Contact Number */}
          <div className="flex">
            <img src="/icons/call.svg" alt="" className="h-6 mt-1" />
            <span className="text-white">+91-8288029930</span>
          </div>

          {/* Right side - Buttons */}
          <div className="flex space-x-4">
            <div className="inline-flex items-center space-x-3 lg:justify-end">
              <Link href="/get-quote" className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold py-1 px-3 rounded-full hover:from-blue-800 hover:to-black transition-all duration-200 hover:scale-110 inline-block">
                Get a Quote
              </Link >
              <Link href="/take-test" className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold py-1 px-3 rounded-full hover:from-blue-800 hover:to-black transition-all duration-200 hover:scale-110 inline-block">
                Take a Test
              </Link>
              <Link href="/register" className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold py-1 px-3 rounded-full hover:from-blue-800 hover:to-black transition-all duration-200 hover:scale-110 inline-block">
                Register for Placement
              </Link>

              {/* <Link href="/sign-in" className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold py-1 px-3 rounded-full hover:from-blue-800 hover:to-black transition-all duration-200 hover:scale-110 inline-block">
                Sign in
              </Link>
              <Link href="/sign-up" className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold py-1 px-3 rounded-full hover:from-blue-800 hover:to-black transition-all duration-200 hover:scale-110 inline-block">
                Sign Up
              </Link> */}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="http://localhost:3000"
          className="flex items-center mb-5 font-medium text-black lg:w-auto lg:items-center lg:justify-center md:mb-0"
        >
          <span className="mx-auto text-xl font-black leading-none  select-none">
            <img
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
          <NavigationMenu className="pl-5 text-md">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <ul className="flex space-x-4 z-50">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group z-50"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={item.url}
                      className="px-4 py-2 z-50 hover:bg-blue-50 border-none rounded-sm text-black font-semibold"
                    >
                      {item.title}
                    </Link>

                    {/* Level 1 */}
                    {item.submenu && hoveredIndex === index && (
                      <ul
                        className="absolute left-0 mt-2 w-52 z-50 bg-white shadow-lg z-50 text-black font-semibold"
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
                            className="relative group z-50"
                            onMouseEnter={() => setHoveredSubIndex(subIndex)}
                          >
                            <Link
                              href={subItem.url}
                              className="block px-4 py-2 z-50 text-black font-semibold hover:bg-gray-200"
                            >
                              {subItem.title}
                            </Link>

                            {/* Level 2 */}
                            {subItem.submenu &&
                              hoveredSubIndex === subIndex && (
                                <ul
                                  className="absolute left-full z-50 top-0 mt-0 w-48 bg-white shadow-lg"
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
                                        className="relative group z-50"
                                        onMouseEnter={() =>
                                          setHoveredSubSubIndex(subSubIndex)
                                        }
                                      >
                                        <Link
                                          href={subSubItem.url}
                                          className="block px-4 py-2 z-50 text-gray-700 hover:bg-gray-200"
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
                    Training With Us
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
