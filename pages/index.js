import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { enableScrolling, disableScrolling } from "../utils/scrolling";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const squabsLogoRef = useRef(null);
  const foregroundRef = useRef(null);

  let videoComponent = null;
  let videoPlayed;

  const handleScrollAnimation = () => {
    // Scrolling animation
    let squabsLogo = squabsLogoRef.current;
    let foreground = foregroundRef.current;

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      let initialStartValuePercent = 0;
      let scrollBottomLimit = 40;

      if (window.screen.width < 640) {
        initialStartValuePercent = 40;
        scrollBottomLimit = 500;
      }

      if (value * 0.05 <= scrollBottomLimit) {
        squabsLogo.style.top = value * 0.05 + initialStartValuePercent + "%";
      }
      foreground.style.top = value * 1 + "px";
    });
  };

  useEffect(() => {
    // Initially disable scrolling
    // disableScrolling();

    let videoPlayed = sessionStorage.getItem("videoPlayed");

    // Handle initial scrolling animation
    handleScrollAnimation();

    // Video Condition
    // checkVideoShouldPlay();
  });

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Squabs is an uplifting animated series that provides an encouraging
          message that we all need to hear. It is a call to be your best self."
        />
        <meta
          name="keywords"
          content="squabs, squabsnyc"
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <hero id="home">
        {/* Navbar */}
        <nav className="absolute w-full z-50 hidden md:block">
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
                <Link href="/#park">
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
        </nav>

        {/* <!-- Mobile Navbar Button --> */}
        <div className="block md:hidden absolute z-50 right-[10px]">
          <button className="open-navbar">
            <img src="/assets/images/icons/hamburger.svg" alt="Open Navbar" />
          </button>
        </div>

        {/* <!-- Mobile Navbar --> */}
        <section id="mobile-navbar" className="hidden">
          <div className="z-40 top-0 w-screen h-screen backdrop-blur-sm fixed"></div>
          <div className="py-12 z-50 top-0 w-screen h-screen bg-brand-gray-dark opacity-80 fixed">
            <div className="close-navbar pl-20 mb-10">
              <img src="/assets/images/icons/cross.svg" alt="Cross" />
            </div>
            <nav>
              <ul className="space-y-7 text-center uppercase text-white">
                <li>
                  <Link href="/">
                    <a className="nav-link font-semibold">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/nft">
                    <a className="nav-link font-semibold">Buy a Squab</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="nav-link font-semibold">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/merch">
                    <a className="nav-link font-semibold">Buy Merch</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <img
          ref={foregroundRef}
          className="hero-background invisible"
          src="/assets/images/hero-buildings.png"
          alt="NYC Buildings"
        />

        <img
          ref={squabsLogoRef}
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

      {videoPlayed != "true" && <IntroVideo />}
      {/* <IntroVideo /> */}

      <Script id="home" src="/assets/js/home.js" />

      {/* <!-- The Park --> */}
      <section className="py-24 lg:py-60 z-10 bg-brand-black" id="park">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <h1 className="text-white text-4xl lg:text-6xl">The Park</h1>
              <div className="mt-12">
                <p className="text-white text-lg">
                  The PARK will become operational once the pre-sale period is
                  over. It contains a canvas accessible only to wallets
                  containing at least one SQUAB. Like any good park, this is the
                  place at drawsrawl, or write expletives Each NFT-holder will
                  be able to paint a pixel on the wall every fifteen minutes.
                  Think of it as a collaborative art experiment for the
                  cryptosphere. A members-only canvas for the discerning minds
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

export function IntroVideo() {
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);

  const [soundButtonIconUrl, setSoundButtonIconUrl] = useState(
    "/assets/images/icons/volume-mute-solid.svg"
  );

  const videoSoundToggle = () => {
    const video = videoRef.current;

    if (video.muted) {
      video.muted = false;

      setSoundButtonIconUrl("/assets/images/icons/volume-high-solid.svg");
    } else {
      video.muted = true;

      setSoundButtonIconUrl("/assets/images/icons/volume-mute-solid.svg");
    }
  };

  const onVideoEnded = () => {
    const video = videoRef.current;
    const videoWrapper = videoWrapperRef.current;

    video.style.display = "none";
    videoWrapper.style.display = "none";
    // enableScrolling();

    // Set video played
    sessionStorage.setItem("videoPlayed", "true");
  };

  return (
    <>
      <div
        ref={videoWrapperRef}
        className="flex items-center bg-black top-0 fixed w-screen h-screen z-50 video-wrapper"
      >
        <video
          onEnded={onVideoEnded}
          ref={videoRef}
          className="w-100 h-100"
          muted
          autoPlay
        >
          <source src="/assets/videos/intro.mp4" type="video/mp4" />
        </video>

        {/* Volume Control */}
        <div
          onClick={videoSoundToggle}
          className="cursor-pointer bottom-[20px] right-[20px] toggleSound rounded-full w-10 h-10 bg-white bg-opacity-75 flex items-center justify-center absolute"
        >
          <Image
            alt="Volume Off"
            width="20px"
            height="20px"
            src={soundButtonIconUrl}
          ></Image>
        </div>
      </div>
    </>
  );
}
