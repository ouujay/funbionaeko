const INFO = {
	main: {
		title: "Funbi Onaeko | AI Engineer & Full Stack Developer",
		name: "Funbi Onaeko",
		email: "oluwafunbi.onaeko@gmail.com",
		logo: "../homepage.jpg",
	},

	socials: {
		github: "https://github.com/ouujay",
		linkedin: "https://linkedin.com/in/funbionaeko",
	},

	homepage: {
		title: "AI Engineer & Full Stack Developer",
		description:
			"I'm Funbi Onaeko, an AI Engineer and Full Stack Developer with 3+ years of experience building production-ready applications integrating Large Language Models (LLMs), voice recognition systems, and machine learning pipelines. I've shipped AI-powered products to 1000+ users, including conversational AI assistants, RAG systems, and recommendation engines. Passionate about building AI solutions for social impact and financial inclusion in Africa.",
	},

	about: {
		title: "I'm Funbi Onaeko. Building AI solutions for real-world impact.",
		description:
			"I've worked on a variety of AI and full-stack projects, from voice-powered banking assistants to campus delivery platforms with 1,016+ users. My focus is on integrating LLMs like GPT-4 and LLaMA into practical applications that solve real problems. I specialize in Python, JavaScript, React, React Native, Django, and FastAPI. I'm always exploring new ways to make AI accessible and impactful, especially for underserved communities.",
	},

	articles: {
		title: "Sharing my journey in AI, startups, and building for impact.",
		description:
			"A collection of my thoughts on AI engineering, LLM integration, building startups, and creating technology for social good.",
	},

	projects: [
		{
			title: "UniBot - AI Ordering Assistant",
			description:
				"Conversational AI chatbot enabling natural language food ordering using LLaMA 3.3 70B. Users can say 'I want rice and chicken' and the AI handles cart management, checkout, and payments automatically.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Live",
			link: "https://uniordering.com",
			tech: ["Python", "Django", "React", "LLaMA 3.3", "Together AI"],
		},
		{
			title: "UniOrdering - Campus Delivery Platform",
			description:
				"Multi-vendor campus marketplace serving 1,016+ users across 3 universities. Features AI recommendation engine (25% increase in order value), shop owner dashboards, delivery partner system, and WhatsApp notifications.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Live",
			link: "https://uniordering.com",
			tech: ["Django", "React", "PostgreSQL", "Redis", "Paystack"],
		},
		{
			title: "Intelligent Claims QA Service",
			description:
				"AI-powered medical claims processing system that extracts structured data from scanned documents using OCR and LLMs. Features hybrid regex + Llama 3.1 extraction pipeline and natural language Q&A interface.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/ouujay/ai-experiments-intelligent-claims-qa",
			tech: ["FastAPI", "Tesseract OCR", "LLaMA 3.1", "Together AI", "Poppler"],
		},
		{
			title: "EchoPay - Voice Banking Assistant",
			description:
				"Voice-driven AI banking app for the visually impaired. Features wake word activation ('Hello Echo'), multi-modal auth (voice biometrics + Face ID + PIN), and anti-deepfake detection. Built for 52M+ underserved Nigerians.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "Private Project",
			link: "#",
			tech: ["React Native", "FastAPI", "Whisper", "LLaMA", "GPT-4", "ElevenLabs"],
		},
		{
			title: "EchoMind - Voice Document Q&A (RAG)",
			description:
				"Voice-powered document Q&A system using RAG architecture. Hybrid TF-IDF + Word2Vec embeddings for 85%+ retrieval accuracy. Two-pass LLM pipeline with offline voice recognition (Vosk).",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "Private Project",
			link: "#",
			tech: ["FastAPI", "React", "ChromaDB", "Vosk", "RAG"],
		},
		{
			title: "Foka EduStudy - AI Education Platform",
			description:
				"AI-powered education platform generating quizzes and flashcards from uploaded course notes using RAG. Cross-platform mobile app with offline study mode.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/ouujay/fokastudy",
			tech: ["React", "React Native", "Django", "RAG"],
		},
		{
			title: "Spill - Women's Safety App",
			description:
				"Anonymous safety app with AI-powered gender verification using DeepFace facial analysis. Location-based feed system for sharing safety experiences.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/ouujay",
			tech: ["React Native", "Django", "Flask", "DeepFace"],
		},
		{
			title: "MedPortal - Healthcare SaaS",
			description:
				"Full-stack healthcare platform with RBAC for patients, doctors, and admins. Built in 5 days with subscription-based rate limiting and appointment management.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/ouujay/technical-assessment-pmhelp-oluwafunbi-onaeko",
			tech: ["Django", "React", "PostgreSQL", "JWT"],
		},
		{
			title: "AI SMS/USSD Chatbot",
			description:
				"AI chatbot accessible via SMS/USSD for low-connectivity Nigerian communities. NLP query processor with session management for users without internet.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/ouujay",
			tech: ["Flask", "Python", "Africa's Talking API"],
		},
	],
};

export default INFO;
