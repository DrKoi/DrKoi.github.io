import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Kevin Figueroa Cueto",
					description:
						"Desarrollador Flutter en crecimiento",
					image: "https://avatars.githubusercontent.com/u/64949206?v=4",
					url: "https://drkoi.tech",
					keywords: [
						"Kevin Alejandro",
						"Kevin Figueroa",
						"@kevin",
						"@quebim.efe",
						"Portafolio",
						"Kevin Figueroa Portafolio",
						"drkoi portafolio",
						"web developer",
						"flutter developer",
						"mobile apps dev",
						"android developer",
						"flutter",
						"dart",
					],
				}}
			/>
			<Greetings />
			<Experience />
			<Skills />
			<Navigation />
			<Education />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
