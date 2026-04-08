import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import "./styles/videoGrid.css";

const VideoGrid = () => {
	const [activeTab, setActiveTab] = useState("youtube");
	const { videos } = INFO.creative;

	return (
		<div className="video-grid-section">
			<div className="video-grid-header">
				<h2 className="video-grid-title">Watch My Work</h2>
				<div className="video-tabs">
					<button
						className={`video-tab ${activeTab === "youtube" ? "video-tab--active" : ""}`}
						onClick={() => setActiveTab("youtube")}
					>
						YouTube
					</button>
					<button
						className={`video-tab ${activeTab === "tiktok" ? "video-tab--active" : ""}`}
						onClick={() => setActiveTab("tiktok")}
					>
						TikTok
					</button>
				</div>
			</div>

			{activeTab === "youtube" && (
				<>
					<div className="video-platform-cta">
						<div className="video-platform-cta-icon video-platform-cta-icon--youtube">
							<FontAwesomeIcon icon={faYoutube} />
						</div>
						<div className="video-platform-cta-text">
							<p>Check out my vlogs and edits on YouTube</p>
							<span>Lifestyle · Day-in-the-life · Entrepreneur content</span>
						</div>
						<a
							href={INFO.creative.youtube}
							target="_blank"
							rel="noreferrer"
							className="video-platform-cta-btn"
						>
							Visit Channel <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
					<div className="video-grid">
						{videos.youtube.map((video, i) => (
							<div key={i} className="video-card">
								<div className="video-iframe-wrapper">
									<iframe
										src={`https://www.youtube.com/embed/${video.id}`}
										title={video.title}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
								<p className="video-card-title">{video.title}</p>
							</div>
						))}
					</div>
				</>
			)}

			{activeTab === "tiktok" && (
				<>
					<div className="video-platform-cta">
						<div className="video-platform-cta-icon video-platform-cta-icon--tiktok">
							<FontAwesomeIcon icon={faTiktok} />
						</div>
						<div className="video-platform-cta-text">
							<p>Check out my short-form edits on TikTok</p>
							<span>Short clips · Reels · Behind the scenes</span>
						</div>
						<a
							href={INFO.creative.tiktok}
							target="_blank"
							rel="noreferrer"
							className="video-platform-cta-btn"
						>
							Visit TikTok <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
					{videos.tiktok.length > 0 && (
						<div className="video-grid">
							{videos.tiktok.map((video, i) => (
								<div key={i} className="video-card video-card--tiktok">
									<blockquote
										className="tiktok-embed"
										cite={video.url}
										data-video-id={video.id}
									>
										<a href={video.url} target="_blank" rel="noreferrer">
											{video.title}
										</a>
									</blockquote>
								</div>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default VideoGrid;
