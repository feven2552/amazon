import React from "react";

import LayOut from "../../Components/LayOut/LayOut";
import BackFooter from "../../Components/Footer/BackFooter"
import ClosingFooter from "../../Components/Footer/ClosingFooter";
import MainFooter from "../../Components/Footer/MainFooter";
import {footerSections} from "../../Components/Footer/FooterData";
import LastFooter from "../../Components/Footer/LastFooter";
import {footerItems} from "../../Components/Footer/Fdata";

import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
function Landing() {
	return (
		<LayOut>
			<Carousel />
			<Category />
			<Product />
			<BackFooter />
			<MainFooter sections={footerSections} />
			<ClosingFooter />
			<LastFooter items={footerItems} />
		</LayOut>
	);
}

export default Landing;
