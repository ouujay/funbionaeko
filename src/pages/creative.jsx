import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import CreativeHero from "../components/creative/creativeHero";
import VideoGrid from "../components/creative/videoGrid";
import EditingServices from "../components/creative/editingServices";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/creative.css";

const Creative = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "creative");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Creative | ${INFO.main.name}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="creative-page">
				<NavBar active="creative" />
				<CreativeHero />
				<VideoGrid />
				<EditingServices />
				<div className="creative-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Creative;
