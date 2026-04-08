import React, { useState } from "react";
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
				<div className="video-grid">
					{videos.youtube.length === 0 ? (
						<p className="video-empty">No YouTube videos added yet.</p>
					) : (
						videos.youtube.map((video, i) => (
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
						))
					)}
				</div>
			)}

			{activeTab === "tiktok" && (
				<div className="video-grid">
					{videos.tiktok.length === 0 ? (
						<div className="video-empty">
							<p>No TikTok videos added yet.</p>
							<a
								href={INFO.creative.tiktok}
								target="_blank"
								rel="noreferrer"
								className="video-tiktok-link"
							>
								Watch on TikTok ↗
							</a>
						</div>
					) : (
						videos.tiktok.map((video, i) => (
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
						))
					)}
				</div>
			)}
		</div>
	);
};

export default VideoGrid;
