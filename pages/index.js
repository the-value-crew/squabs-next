import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <hero id="home">
        {/* Navbar */}
        <navbar className="absolute w-full z-50 hidden md:block">
          <div className="container">
            <ul className="pt-8 flex items-center justify-between">
              <li>
                <div className="bg-black bg-opacity-25 py-2 px-4 rounded-full">
                  <Link href="/">
                    <a className="cursor-pointer text-white text-uppercase text-lg font-medium">
                      Home
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer text-lg font-medium">The Park</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="cursor-pointer text-lg font-medium">
                    About Squabs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/merch">
                  <a className="cursor-pointer text-lg font-medium">
                    Buy a Merch
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/nft">
                  <a className="cursor-pointer text-lg font-medium">
                    Buy a Squab
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </navbar>

        {/* <!-- Mobile Navbar Button --> */}
        <div className="block md:hidden absolute z-50 right-0">
          <button className="open-navbar">
            <img 
              src="/assets/images/icons/hamburger.svg"
              alt="Open Navbar"
            />
          </button>
        </div>

        {/* <!-- Mobile Navbar --> */}
        <section id="mobile-navbar" className="hidden">
          <div className="z-40 top-0 w-screen h-screen backdrop-blur-sm fixed"></div>
          <div className="py-12 z-50 top-0 w-screen h-screen bg-brand-gray-dark opacity-80 fixed">
            <div className="close-navbar pl-20 mb-10">
              <img
                width="100%"
                height="100%"
                src="/assets/images/icons/cross.svg"
                alt="Cross"
              />
            </div>
            <nav>
              <ul className="space-y-7 text-center uppercase text-white">
                <li>
                  <Link href="/">
                    <a className="font-semibold">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/nft">
                    <a className="font-semibold">Buy a Squab</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="font-semibold">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/merch">
                    <a className="font-semibold">Buy Merch</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <img
          className="hero-background invisible"
          src="/assets/images/hero-buildings.png"
          alt="NYC Buildings"
        />

        <img
          className="hero-logo"
          src="/assets/images/squabs-nyc.png"
          alt="Squabs"
        />

        <img
          className="hero-foreground"
          src="/assets/images/hero-foreground.png"
          alt="Foreground"
        />

        <img
          className="hero-squabs"
          src="/assets/images/hero-birds.png"
          alt="Squabs"
        />
      </hero>

      <div className="flex items-center bg-black top-0 fixed w-screen h-screen z-50 video-wrapper">
        <video className="w-100 h-100" muted autoPlay>
          <source src="/assets/videos/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <Script id="animationScrolling" src="/assets/js/scrolling-animation.js" />

      {/* <!-- The Park --> */}
      <section className="py-24 lg:py-60 z-10 bg-brand-black" id="park">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <h1 className="text-white text-4xl lg:text-6xl">The Park</h1>
              <div className="mt-12">
                <p className="text-white text-lg">
                  The PARK will become operational once the presale preiod is
                  over. It contains a canvas accessible only to wallets
                  containing at least one SQUAB. Like any good park, this is the
                  place at drawsrawl, or write expletives Each NFT-holder will
                  be able to paint a pixel on the wall every fifteen minustes.
                  Think of it as a collaborative art experiment for the
                  cryptoshphere. A members-only canvas for the discerning minds
                  of crypto twitter.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="lg:absolute canvas"
                src="/assets/images/canvas.png"
                alt="Canvas"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
