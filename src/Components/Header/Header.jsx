import { NavLink } from "react-router-dom";
import logo from "../../assets/images/jc-cart-logo.png";
import { menuList } from "../Menu/JsonMenu";
import SocialSection from "./SocialSection";

// icons
import { Heart, ShoppingBasket, User } from "lucide-react";

function Header() {
  return (
    <div className="fixed w-full  bg-white top-0  z-50 border-t-8 border-[#2d3748] masthead  ">
      <SocialSection />
      <div className=" h-28 flex">
        <div className="flex items-center justify-between px-[100px] w-full shadow-lg">
          <div className="logo-area">
            <img src={logo} alt="jc-cart" />
          </div>
          <div className="nav-holder">
            <ul className="flex items-center">
              {menuList.map((menu, i) => (
                <NavLink
                  key={i}
                  to={menu.url}
                  className={({ isActive }) =>
                    `py-1 px-3 capitalize text-[15px] font-medium text-[#2d3748] hover:opacity-75 rounded-[10px] ${
                      isActive ? "opacity-75" : "opacity-100"
                    }`
                  }
                >
                  {menu.menuName}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="cart-area flex flex-wrap gap-9">
            <div className="icon-group flex items-center gap-3">
              <div className="icon">
                <User />
              </div>
              <div>
                <p className="text-[#777] text-xs font-medium tracking-[0.6px] mb-[-2px]  ">
                  Account
                </p>
                <p className="">
                  <a
                    href="/"
                    className="text-[#4b5966] text-[13px] font-medium uppercase"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
            <div className="icon-group flex items-center gap-3">
              <div className="icon">
                <Heart />
              </div>
              <div>
                <p className="text-[#777] text-xs font-medium tracking-[0.6px] mb-[-2px]  ">
                  Wishlist
                </p>
                <p className="text-[#4b5966] text-[13px] font-medium uppercase ">
                  <span className="font-bold">3</span> - Items
                </p>
              </div>
            </div>
            <div className="icon-group flex items-center gap-3">
              <div className="icon">
                <ShoppingBasket />
              </div>
              <div>
                <p className="text-[#777] text-xs font-medium tracking-[0.6px] mb-[-2px]  ">
                  Cart
                </p>
                <p className="text-[#4b5966] text-[13px] font-medium uppercase">
                  <span className="font-bold">3</span> - Items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
