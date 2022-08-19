import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  if (router.pathname != "/") return <PageNavbar />;
}

function PageNavbar() {
  const router = useRouter();

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="hidden md:block bg-brand-gray-dark">
        <div className="container">
          <ul className="py-4 flex items-center justify-between">
            <li>
              <div
                className={
                  router.pathname == "/"
                    ? "bg-black bg-opacity-25 py-2 px-4 rounded-full"
                    : "py-2 px-4"
                }
              ></div>
              <Link href="/">
                <a className="cursor-pointer text-white text-uppercase text-lg font-medium">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <div
                className={
                  router.pathname == "/"
                    ? "bg-black bg-opacity-25 py-2 px-4 rounded-full"
                    : "py-2 px-4"
                }
              >
                <Link href="/#park">
                  <a className="cursor-pointer text-white text-uppercase text-lg font-medium">
                    The Park
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div
                className={
                  router.pathname == "/about"
                    ? "bg-black bg-opacity-25 py-2 px-4 rounded-full"
                    : "py-2 px-4"
                }
              >
                <Link href="/about">
                  <a className="cursor-pointer text-white text-uppercase text-lg text-white font-medium">
                    About Squabs
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div
                className={
                  router.pathname == "/merch"
                    ? "bg-black bg-opacity-25 py-2 px-4 rounded-full"
                    : "py-2 px-4"
                }
              >
                <Link href="/merch">
                  <a className="cursor-pointer text-white text-uppercase text-lg font-medium">
                    Buy a Merch
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div
                className={
                  router.pathname == "/nft"
                    ? "bg-black bg-opacity-25 py-2 px-4 rounded-full"
                    : "py-2 px-4"
                }
              >
                <Link href="/nft">
                  <a className="cursor-pointer text-white text-uppercase text-lg font-medium">
                    Buy a Squab
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Mobile Navbar Button --> */}
      <div className="block md:hidden absolute right-[10px]">
        <button className="open-navbar">
          <img src="./assets/images/icons/hamburger.svg" alt="Open Navbar" />
        </button>
      </div>

      {/* <!-- Mobile Navbar --> */}
      <section id="mobile-navbar" className="hidden">
        <div className="z-40 top-0 w-screen h-screen backdrop-blur-sm fixed"></div>
        <div className="py-12 z-50 top-0 w-screen h-screen bg-brand-gray-dark opacity-80 fixed">
          <div className="close-navbar pl-20 mb-10">
            <img src="./assets/images/icons/cross.svg" alt="Cross" />
          </div>
          <nav>
            <ul className="space-y-7 text-center uppercase text-white">
              <li>
                <Link href="/">
                  <a className="font-semibold nav-link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/nft">
                  <a className="font-semibold nav-link">Buy a Squab</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="font-semibold nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/merch">
                  <a className="font-semibold nav-link">Buy Merch</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
