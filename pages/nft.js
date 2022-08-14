
export default function About() {
  return (
    <div>
      <div id="nft-body">
        <div className="coming-soon-page-wrapper">
          <div className="coming-soon-page-message text-[#EED878]">
            <marquee className="text-xl">Coming Soon...</marquee>
          </div>
        </div>

        <picture>
        <source media="(max-width:676px)" srcSet="/assets/images/nft-bg-mobile.png" />
        <img
          id="nft-image"
          src="/assets/images/squabs-nft-bg.png"
          alt="Coming Soon" 
        />
        </picture>
      </div>
    </div>
  );
}