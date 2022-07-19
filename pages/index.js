import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ben Schmidt - Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Ben Schmidt</h1>

				<h1 className={styles.title}>Portfolio</h1>

				<p className={styles.description}>
					Hi! I'm Ben, a 3rd-year Computer Science student at the University of
					Calgary.
				</p>

				<h1 className={styles.title}>Projects</h1>

				<div className={styles.grid}>
					<div className={styles.card}>
						<a href="https://github.com/anidion/portfolio">
							<h2>Portfolio &rarr;</h2>
						</a>
						<p>
							The page you're on! WIP: Automatically populates the project list
							with GitHub repositories I've contributed to.
						</p>
					</div>

					<div className={styles.card}>
						<a href="https://github.com/tech-start-ucalgary/aquavolution">
							<h2>Aquavolution &rarr;</h2>
						</a>
						<p>
							A browser-based 2D game where you play as a fish who must navigate
							the ocean, avoiding danger and evolving as you eat more and more.
						</p>
					</div>

					<div className={styles.card}>
						<a href="https://github.com/anidion/raytracer">
							<h2>Raytracer &rarr;</h2>
						</a>
						<p>
							A C++ raytracer. Built thanks to Peter Shirley's{" "}
							<a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">
								Ray Tracing in One Weekend.
							</a>
						</p>
					</div>

					<div className={styles.card}>
						<a href="https://github.com/anidion/password-manager">
							<h2>Password Manager &rarr;</h2>
						</a>
						<p>
							A functional browser-based password manager built for a final
							project in a security and privacy class.
						</p>
					</div>

					<h1 className={styles.title}>Experience</h1>

					<div className={styles.description}>
						<p>
							Project Manager &lt;&lt; Tech Start UCalgary &lt;&lt; 2022-2023
						</p>
						<p>
							Software Developer &lt;&lt; Tech Start UCalgary &lt;&lt; 2021-2022
						</p>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<div className={styles.grid}>
					<a href="https://github.com/anidion" className={styles.logo}>
						<Image
							src="/Github-Mark-32px.png"
							alt="GitHub Logo"
							width={32}
							height={32}
						/>
					</a>

					<a
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
				</div>
			</footer>
		</div>
	);
}
