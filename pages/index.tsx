import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "../components/card";

export default function Home() {
	const theme = useTheme();

	return (
		<div>
			<Head>
				<title>Ben Schmidt - Portfolio</title>
				<meta
					name="description"
					content="Ben Schmidt's Portfolio of Projects"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Ben Schmidt / Portfolio</h1>

				<p className={styles.description}>
					Hi! I&apos;m Ben, a 3rd-year Computer Science student at the
					University of Calgary with a concentration in Networks and Distributed Computing.<br/>
					I&apos;m interested in web development and computer networks, and am currently managing a team of 7 developers as part of a software club.
					<br/>Seeking co-op/internship positions for 2023.
				</p>

				<h1 className={styles.title}>Projects</h1>

				<div className={styles.grid}>
					<Card
						title="Portfolio"
						link="https://github.com/anidion/portfolio"
						description="The website you're on!"
						flipdesc="These cards can flip for more information! Technical Details: Built with React and TypeScript, hosted on Vercel."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="CyberHire"
						link="https://github.com/techstartucalgary/cyberhire"
						description="A platform for employers and applicants to connect based on skills required by a job."
						flipdesc="I am the project manager for CyberHire, and I'm managing a team of 7. Technical Details: Built with React, TypeScript, and FlaskAPI, hosted on GitHub Pages and Amazon RDS."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="Aquavolution"
						link="https://github.com/techstartucalgary/aquavolution"
						description="A browser-based 2D game where you play as a fish who must navigate
						the ocean, avoiding danger and evolving as you eat more and more."
						flipdesc="I was a developer on the Aquavolution team, and I worked primarily on the movement and procedural generation systems.
						Technical Details: Built with Unity and C#."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="Raytracer"
						link="https://github.com/anidion/raytracer"
						description="A C++ raytracer."
						flipdesc="Built thanks to Peter Shirley's Ray Tracing in One Weekend. I haven't got very far, but I'd like to make more progress once I find the time."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="Password Manager"
						link="https://github.com/anidion/password-manager"
						description="A functional browser-based password manager built for a final
						project in a security and privacy class."
						flipdesc="I built this project with a team of 4, and I worked primarily on the front-end. No promises that it's super secure, so please don't store your actual passwords! Technical Details: Built with React, JavaScript, and MongoDB, hosted on Vercel and Heroku."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>
				</div>

				<h1 className={styles.title}>Experience</h1>

				<div className={styles.expGrid}>
					<p className={styles.experience}>
						Project Manager &laquo;{" "}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://techstartucalgary.com/"
						>
							Tech Start UCalgary
						</a>{" "}
						&laquo; 2022-2023
					</p>
					<p className={styles.experience}>
						Software Developer &laquo;{" "}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://techstartucalgary.com/"
						>
							Tech Start UCalgary
						</a>{" "}
						&laquo; 2021-2022
					</p>
				</div>
			</main>

			<footer className={styles.footer}>
				<div className={styles.footergrid}>
					<Tooltip title="GitHub" arrow>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/anidion"
							className={styles.logo}
						>
							<Image
								src={
									theme.palette.mode == "dark"
										? "/GitHub-Mark-Light-120px-plus.png"
										: "/GitHub-Mark-120px-plus.png"
								}
								alt="GitHub Logo"
								width={32}
								height={32}
							/>
						</a>
					</Tooltip>

					<Tooltip title="Resume" arrow>
						<IconButton
							target="_blank"
							rel="noreferrer"
							href="https://drive.google.com/file/d/1d0FfUxD_vgxqGDBiI2zrGJsgVOL74tPy/view?usp=sharing"
							className={styles.logo}
						>
							<ArticleRoundedIcon
								fontSize="large"
								color="success"
							/>
						</IconButton>
					</Tooltip>

					<Tooltip title="LinkedIn" arrow>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://linkedin.com/in/benschmidt2343"
							className={styles.logo}
						>
							<Image
								src="/LI-In-Bug.png"
								alt="LinkedIn Logo"
								width={38}
								height={32}
							/>
						</a>
					</Tooltip>
				</div>
			</footer>
		</div>
	);
}
