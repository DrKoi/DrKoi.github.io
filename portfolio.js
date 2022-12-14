import emoji from "react-easy-emoji";

export const greetings = {
	name: "Kevin Figueroa Cueto",
	title: "Bienvenidos",
	description:
		"Soy actualmente egresado de Técnico en informática, ya cuento con unos meses de experiencia en el desarrollo de aplicaciónes móviles" +
		" utilizando el SDK Flutter y lenguaje de programación Dart." +
		" Estoy siempre dispuesto a seguir ganando experiencia en el área del desarrollo de Apps y " +
		"progresar con nuevas ideas para las interfaces de usuario.",
	resumeLink: "https://drkoi.tech/CV_Kevin_Figueroa.pdf",
};

export const openSource = {
	githubUserName: "DrKoi",
};

export const contact = {};

export const socialLinks = {
	//twitter: "https://twitter.com/LucasIV5",
	github: "https://github.com/DrKoi",
	linkedin: "https://www.linkedin.com/in/kevin-figueroa-cueto-449b42144/",
};

export const skillsSection = {
	title: "Qué tecnologías utilizo",
	subTitle:
		"CON ESTAS TECNOLOGÍAS REALIZO DIVERSOS PROYECTOS.",
	skills: [
		emoji(
			"⚡ Desarrollo de aplicaciones móviles con Flutter y Dart"
		),
		emoji(
			"⚡ Manejo de bases de datos con SQL"
		),
		emoji(
			"⚡ Autenticación y manipulación de bases de datos no relacionales con las herramientas de Firebase"
		),
	],

	softwareSkills: [

		{
			skillName: "Laravel",
			fontAwesomeClassname: "logos:laravel",
		},
		{
			skillName: "php",
			fontAwesomeClassname: "vscode-icons:file-type-php",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "MySql",
			fontAwesomeClassname: "logos:mysql",
		},
		{
			skillName: "github",
			fontAwesomeClassname: "logos:github",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Flutter", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend y diseño",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Universidad Técnica Federico Santa María",
		subHeader: "Técnico Universitario en Informática",
		duration: "Marzo 2020 - Diciembre 2022",
		desc: "Formación en desarrollo de software desde su plánificación hasta su implementación"
	},
	/* {
		schoolName: "Pontificia Universidad Técnica Federico Santa María",
		subHeader: "Ingenieria de Ejecución en Software",
		duration: "Marzo 2022 - Actual",
		desc: "Ejerciendo como programador y estudiando sobre el desarrollo enfocado en el área menos técnica.",
	} */
];

export const experience = [
	{
		role: "Desarrollador Flutter",
		company: "Universidad Andrés Bello",
		companylogo: "/img/logo_unab.png",
		date: "Septiembre 2022 - Diciembre 2022",
		desc: "Desarrollo de aplicaciones móviles.",
		descBullets: [
			"Dart",
			"Flutter",
			"Firebase"
		],
	},

];

export const projects = [
	{
		name: "Ob Calculator UNAB",
		desc: "Aplicación para calcular edad gestacional desde FUR y fecha de ecografía. Incluye apartado con información semana a semana sobre el embarazo y probable signo zodiacal al nacer el bebé",
		github: "https://github.com/DrKoi/obcalculator_unab",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
