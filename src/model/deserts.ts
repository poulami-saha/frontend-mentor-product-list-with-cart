import desert from "../data.json";
import baklavaThumbnail from "../assets/images/image-baklava-thumbnail.jpg";
import baklavaDesktop from "../assets/images/image-baklava-desktop.jpg";
import baklavaTablet from "../assets/images/image-baklava-tablet.jpg";
import baklavaMobile from "../assets/images/image-baklava-mobile.jpg";
import waffleThumbnail from "../assets/images/image-waffle-thumbnail.jpg";
import waffleDesktop from "../assets/images/image-waffle-desktop.jpg";
import waffleTablet from "../assets/images/image-waffle-tablet.jpg";
import waffleMobile from "../assets/images/image-waffle-mobile.jpg";
import cremeBruleeThumbnail from "../assets/images/image-creme-brulee-thumbnail.jpg";
import cremeBruleeDesktop from "../assets/images/image-creme-brulee-desktop.jpg";
import cremeBruleeTablet from "../assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeMobile from "../assets/images/image-creme-brulee-mobile.jpg";
import macaronThumbnail from "../assets/images/image-macaron-thumbnail.jpg";
import macaronDesktop from "../assets/images/image-macaron-desktop.jpg";
import macaronTablet from "../assets/images/image-macaron-tablet.jpg";
import macaronMobile from "../assets/images/image-macaron-mobile.jpg";
import tiramisuThumbnail from "../assets/images/image-tiramisu-thumbnail.jpg";
import tiramisuDesktop from "../assets/images/image-tiramisu-desktop.jpg";
import tiramisuTablet from "../assets/images/image-tiramisu-tablet.jpg";
import tiramisuMobile from "../assets/images/image-tiramisu-mobile.jpg";
import pieThumbnail from "../assets/images/image-meringue-thumbnail.jpg";
import pieDesktop from "../assets/images/image-meringue-desktop.jpg";
import pieTablet from "../assets/images/image-meringue-tablet.jpg";
import pieMobile from "../assets/images/image-meringue-mobile.jpg";
import cakeThumbnail from "../assets/images/image-cake-thumbnail.jpg";
import cakeDesktop from "../assets/images/image-cake-desktop.jpg";
import cakeTablet from "../assets/images/image-cake-tablet.jpg";
import cakeMobile from "../assets/images/image-cake-mobile.jpg";
import brownieThumbnail from "../assets/images/image-brownie-thumbnail.jpg";
import brownieDesktop from "../assets/images/image-brownie-desktop.jpg";
import brownieTablet from "../assets/images/image-brownie-tablet.jpg";
import brownieMobile from "../assets/images/image-brownie-mobile.jpg";
import pannacottaThumbnail from "../assets/images/image-panna-cotta-thumbnail.jpg";
import pannacottaDesktop from "../assets/images/image-panna-cotta-desktop.jpg";
import pannacottaTablet from "../assets/images/image-panna-cotta-tablet.jpg";
import pannacottaMobile from "../assets/images/image-panna-cotta-mobile.jpg";

export interface Desert {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    desktop: string;
    tablet: string;
  };
  name: string;
  price: number;
  category: string;
}

export interface Image {
  thumbnail: string;
  desktop: string;
  mobile: string;
  tablet: string;
}
const getCategoryImage = (category: string): Image => {
  switch (category) {
    case "Baklava": {
      return {
        thumbnail: baklavaThumbnail,
        desktop: baklavaDesktop,
        mobile: baklavaMobile,
        tablet: baklavaTablet,
      };
    }
    case "Waffle": {
      return {
        thumbnail: waffleThumbnail,
        desktop: waffleDesktop,
        mobile: waffleMobile,
        tablet: waffleTablet,
      };
    }
    case "Crème Brûlée": {
      return {
        thumbnail: cremeBruleeThumbnail,
        desktop: cremeBruleeDesktop,
        mobile: cremeBruleeMobile,
        tablet: cremeBruleeTablet,
      };
    }
    case "Macaron": {
      return {
        thumbnail: macaronThumbnail,
        desktop: macaronDesktop,
        mobile: macaronMobile,
        tablet: macaronTablet,
      };
    }
    case "Tiramisu": {
      return {
        thumbnail: tiramisuThumbnail,
        desktop: tiramisuDesktop,
        mobile: tiramisuMobile,
        tablet: tiramisuTablet,
      };
    }
    case "Pie": {
      return {
        thumbnail: pieThumbnail,
        desktop: pieDesktop,
        mobile: pieMobile,
        tablet: pieTablet,
      };
    }
    case "Cake": {
      return {
        thumbnail: cakeThumbnail,
        desktop: cakeDesktop,
        mobile: cakeMobile,
        tablet: cakeTablet,
      };
    }
    case "Brownie": {
      return {
        thumbnail: brownieThumbnail,
        desktop: brownieDesktop,
        mobile: brownieMobile,
        tablet: brownieTablet,
      };
    }
    case "Panna Cotta": {
      return {
        thumbnail: pannacottaThumbnail,
        desktop: pannacottaDesktop,
        mobile: pannacottaMobile,
        tablet: pannacottaTablet,
      };
    }
    default:
      return {
        thumbnail: baklavaThumbnail,
        desktop: baklavaDesktop,
        mobile: baklavaMobile,
        tablet: baklavaTablet,
      };
  }
};

export const Deserts: Desert[] = desert.map((item, index) => {
  return {
    id: index + 1,
    ...item,
    image: getCategoryImage(item.category),
  };
});
