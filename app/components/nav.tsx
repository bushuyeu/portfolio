import Link from "next/link";

const navItems = {
  "/": {
    name: "home", // home
  },
  "/portfolio": {
    name: "portfolio", // portfolio
  },
  "/blog": {
    name: "blog", // blog
  },
};

export function Navbar() {
  return (
    <nav
      id="nav"
      className="mb-16 tracking-tight"
    >
      <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <li key={path}>
                  <Link
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
      </ul>
    </nav>
  );
}
