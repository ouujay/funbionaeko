import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import heroBg from "../../assets/creative-hero-bg.jpg";
import "./styles/creativeHero.css";

const CreativeHero = () => {
	return (
		<div className="creative-hero" style={{ backgroundImage: `url(${heroBg})` }}>
			<div className="creative-hero-content">
				<p className="creative-hero-tagline">{INFO.creative.tagline}</p>
				<p className="creative-hero-bio">{INFO.creative.bio}</p>
				<div className="creative-hero-socials">
					<a
						href={INFO.creative.youtube}
						target="_blank"
						rel="noreferrer"
						className="creative-social-btn creative-social-btn--youtube"
					>
						<FontAwesomeIcon icon={faYoutube} />
						<span>YouTube</span>
					</a>
					<a
						href={INFO.creative.tiktok}
						target="_blank"
						rel="noreferrer"
						className="creative-social-btn creative-social-btn--tiktok"
					>
						<FontAwesomeIcon icon={faTiktok} />
						<span>TikTok</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CreativeHero;
