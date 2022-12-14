import Image from "next/image";
import Script from "next/script";

export default function Footer() {
  return (
    <>
    <Script src="/assets/js/navbar.js" />

    <footer className="bg-brand-gray-dark">
      <div className="container">
        <div className="w-8/12 md:w-4/12 lg:w-2/12 2xl:w-2/12 pt-32 pb-24 mx-auto flex items-center justify-between">
          <div>
            <a
              href="https://www.instagram.com/squabsnyc/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/assets/images/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/nyc_squabs"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/assets/images/icons/twitter.svg"
                alt="Twitter"
              />
            </a>
          </div>
          <div className="bg-[#212121] rounded-lg">
            <a
              href="https://www.tiktok.com/@squabs_nyc?_t=8VRrxDN81Hv&_r=1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
              className="w-[42px] h-[42px]"
                src="/assets/images/icons/tiktok.svg"
                alt="Tiktok"
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCHMsjMZBpgirAl-wjNU6Qtg>">
              <img
                src="/assets/images/icons/youtube.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
