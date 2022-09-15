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
					University of Calgary.
				</p>

				<h1 className={styles.title}>Projects</h1>

				<div className={styles.grid}>
					<Card
						title="Portfolio"
						link="https://github.com/anidion/portfolio"
						description="The page you're on!"
						flipdesc="Flipside"
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="Aquavolution"
						link="https://github.com/tech-start-ucalgary/aquavolution"
						description="A browser-based 2D game where you play as a fish who must navigate
						the ocean, avoiding danger and evolving as you eat more and more."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="Raytracer"
						link="https://github.com/anidion/raytracer"
						description="A C++ raytracer. Built thanks to Peter Shirley's Ray Tracing in One Weekend."
						isDark={theme.palette.mode == "dark" ? true : false}
					/>

					<Card
						title="Password Manager"
						link="https://github.com/anidion/password-manager"
						description="A functional browser-based password manager built for a final
						project in a security and privacy class."
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
							<ArticleRoundedIcon fontSize="large" color="success" />
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
