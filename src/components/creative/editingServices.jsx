import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/editingServices.css";

const EditingServices = () => {
	return (
		<div className="services-section">
			<div className="services-inner">
				<div className="services-text">
					<div className="services-label">✦ For Hire</div>
					<h2 className="services-title">Video Editing Services</h2>
					<p className="services-description">
						Need your content to look cinematic, clean, and engaging? I edit vlogs,
						short-form content, and YouTube videos with a sharp eye for pacing,
						colour, and storytelling.
					</p>
					<Link to="/contact" className="services-cta">
						Get in Touch →
					</Link>
				</div>
				<div className="services-list-wrapper">
					{INFO.creative.services.map((service, i) => (
						<div key={i} className="services-item">
							<span className="services-item-dot">✦</span>
							<span>{service}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EditingServices;
