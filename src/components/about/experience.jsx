import React from "react";
import INFO from "../../data/user";
import "./styles/experience.css";

const Experience = () => {
	return (
		<div className="experience-container">
			<div className="experience-title">Experience</div>
			<div className="experience-list">
				{INFO.experience.map((job, index) => (
					<div key={index} className="experience-card">
						{job.logo && (
							<div className="experience-logo-wrapper">
								<img src={job.logo} alt={job.company} className="experience-logo" />
							</div>
						)}
						<div className="experience-details">
							<div className="experience-role">{job.role}</div>
							<div className="experience-company">{job.company} · {job.type}</div>
							<div className="experience-period">{job.period}</div>
							<div className="experience-location">{job.location}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
