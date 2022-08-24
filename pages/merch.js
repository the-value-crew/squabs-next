import Head from "next/head";

export default function Merch() {
  return (
    <>
     <Head>
        <meta
          name="description"
          content="Buy Squabs NYC Merchandise. Coming Soon."
        />
        <meta
          name="keywords"
          content="squabs, squabsnyc, merch, squabs merch"
        />
        <meta name="robots" content="index,follow" />
      </Head>
    <div id="ecom-body">
      <picture>
        <source
          media="(max-width:676px)"
          srcSet="/assets/images/squabs-merch-min.png"
        />
        <img
          id="ecomMerchImage"
          src="/assets/images/squabs-nft-merch.png"
          alt="Coming Soon"
        />
      </picture>
    </div>
    </>
  );
}
