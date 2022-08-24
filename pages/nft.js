import Head from "next/head";

export default function Nft() {
  return (
    <>
      <Head>
        <meta name="description" content="Buy Squabs NFT. Coming Soon." />
        <meta
          name="keywords"
          content="squabs, squabsnyc, nft, squabs nft"
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <div>
        <div id="nft-body">
          <div className="coming-soon-page-wrapper">
            <div className="coming-soon-page-message text-[#EED878]">
              <marquee className="text-xl">Coming Soon...</marquee>
            </div>
          </div>

          <picture>
            <source
              media="(max-width:676px)"
              srcSet="/assets/images/nft-bg-mobile.png"
            />
            <img
              id="nft-image"
              src="/assets/images/squabs-nft-bg.png"
              alt="Coming Soon"
            />
          </picture>
        </div>
      </div>
    </>
  );
}
