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
			"I'm Funbi Onaeko, an AI Engineer and Full Stack Developer with 3+ years of experience building production-ready applications. My work spans deep learning and computer vision (CNNs, TensorFlow), NLP and LLM integrations (GPT-4, LLaMA, RAG systems), voice recognition pipelines, and full-stack web/mobile development. I've shipped AI-powered products to 1,000+ users and I'm passionate about building technology for social impact in Africa.",
	},

	about: {
		title: "I'm Funbi Onaeko. Building AI solutions for real-world impact.",
		description:
			"I'm a versatile AI Engineer and Full Stack Developer with experience across the entire ML spectrum - from deep learning and computer vision (CNNs for image classification) to NLP, voice recognition systems, and LLM integrations. I've built production applications serving 1,016+ users, including multi-vendor platforms, RAG-powered document systems, and voice-driven assistants. My stack spans Python (TensorFlow, Keras, FastAPI, Django) and JavaScript (React, React Native, Next.js). Whether it's training CNN models for disease detection, building conversational AI with LLaMA and GPT-4, or architecting full-stack platforms with real-time features - I enjoy solving complex problems end-to-end. Passionate about making AI accessible and impactful, especially for underserved communities in Africa.",
	},

	articles: {
		title: "Sharing my journey in AI, startups, and building for impact.",
		description:
			"A collection of my thoughts on AI engineering, LLM integration, building startups, and creating technology for social good.",
	},

	projects: [
		{
			title: "Bloom - AI Maternal Health Platform",
			description:
				"AI-powered maternal health CRM for Nigerian mothers, addressing 512 deaths per 100,000 live births. Features voice-first AI triage with Llama 3.3 (classifies symptoms as critical/urgent/moderate/normal), 40-week pregnancy education program, healthcare CRM for hospitals, and gamified token rewards.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Live",
			link: "https://bloom-sigma-lake.vercel.app/",
			tech: ["Django", "React", "Llama 3.3", "OpenAI Whisper", "TailwindCSS", "Azure"],
		},
		{
			title: "CertifyTube - YouTube Learning Certificates",
			description:
				"Platform that transforms YouTube educational content into verifiable learning experiences. Features voice-based AI assessments (questions spoken by AI, answers by users) to prevent cheating, semantic grading with Claude AI that understands explanations and analogies, and verifiable certificates with unique IDs and QR codes.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Live",
			link: "https://certifytube.vercel.app/dashboard",
			tech: ["Django", "React", "Claude API", "PostgreSQL", "TailwindCSS", "Web Speech API"],
		},
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
				"AI-powered anonymous women's safety platform with DeepFace gender verification, location-based feed, and content moderation. Full microservices architecture with React Native mobile app, Django REST API, and Flask ML service.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/ouujay/Spill-AI-Safety-App-Full-Stack",
			tech: ["React Native", "Django", "Flask", "DeepFace", "Deep Learning"],
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
		{
			title: "Potato Disease Classification",
			description:
				"Deep learning CNN model to classify potato leaf diseases (Early Blight, Late Blight, Healthy) with 100% test accuracy. Trained on PlantVillage dataset using 6-layer convolutional architecture.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/ouujay/Deep-learning-potato-Disease-Classification-",
			tech: ["TensorFlow", "Keras", "CNN", "Deep Learning", "Python"],
		},
		{
			title: "VoiceRAG - Voice Document Q&A",
			description:
				"Voice-powered document Q&A system using RAG architecture. Features offline speech recognition (Vosk), hybrid TF-IDF + Word2Vec embeddings, two-pass LLM pipeline, and real-time transcription with smart interruption.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/ouujay/Ai-experiment--Voice-Rag",
			tech: ["FastAPI", "React", "Vosk", "ChromaDB", "Together AI", "RAG"],
		},
	],
};

export default INFO;
