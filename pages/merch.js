export default function About() {
  return (
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
  );
}
