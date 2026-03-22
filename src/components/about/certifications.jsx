import React from "react";
import INFO from "../../data/user";
import "./styles/certifications.css";

const MetaLogo = () => (
	<img src="/meta-logo.png" alt="Meta" className="certification-badge-logo" />
);

const ClaudeLogo = () => (
	<img src="/claude-logo.png" alt="Claude AI" className="certification-badge-logo" />
);

const THEMES = {
	meta: {
		card: "certification-card--meta",
		badge: "certification-badge--meta",
	},
	claude: {
		card: "certification-card--claude",
		badge: "certification-badge--claude",
	},
};

const Certifications = () => {
	return (
		<div className="certifications-container">
			<div className="certifications-title">Certifications</div>
			<div className="certifications-list">
				{INFO.certifications.map((cert, index) => {
					const theme = THEMES[cert.theme] || THEMES.claude;
					return (
						<div key={index} className={`certification-card ${theme.card}`}>
							<div className="certification-header">
								<div className={`certification-badge ${theme.badge}`}>
									{cert.theme === "meta" ? <MetaLogo /> : <ClaudeLogo />}
								</div>
								<div className="certification-meta">
									<div className="certification-name">{cert.title}</div>
									<div className="certification-issuer">
										{cert.issuer} &middot; {cert.date}
										{cert.certNumber && (
											<span className="certification-cert-number"> &middot; {cert.certNumber}</span>
										)}
										{cert.link && (
											<a href={cert.link} target="_blank" rel="noreferrer" className="certification-verify-link">
												&nbsp;&middot; Verify ↗
											</a>
										)}
										{cert.certImage && (
											<a href={cert.certImage} target="_blank" rel="noreferrer" className="certification-verify-link">
												&nbsp;&middot; View Certificate ↗
											</a>
										)}
									</div>
								</div>
							</div>
							<div className="certification-description">{cert.description}</div>
							<div className="certification-skills">
								{cert.skills.map((skill, i) => (
									<span key={i} className="certification-skill-tag">
										{skill}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Certifications;
