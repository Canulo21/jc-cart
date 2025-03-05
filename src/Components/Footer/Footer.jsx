import footerLogo from "../../assets/images/jc-cart-logo.png";

function Footer() {
  return (
    <>
      <div className="footer-container bg-[#2d3748] text-white text-center pt-14 px-5 pb-16">
        <div className="logo flex justify-center mb-12">
          <img
            className="bg-white rounded-full p-[2x] w-28 h-28"
            src={footerLogo}
            alt="jc-cart"
          />
        </div>
        <p className="text-sm italic font-medium px-12 sm:px-28 md:px-40 2xl:px-96 leading-loose tracking-wider">
          "Seamless Shopping, Smarter Selling – Power Your Online Business with
          JC-Cart, the All-in-One eCommerce Platform Designed for Speed,
          Flexibility, and Growth. Sell More, Manage Better, and Scale
          Effortlessly with Cutting-Edge Features and a User-Friendly
          Experience!"
        </p>
      </div>
      <div className="all-rights py-2 bg-[#526481]">
        <p className="text-center text-sm tracking-widest text-white">
          Copyright © JC all rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
