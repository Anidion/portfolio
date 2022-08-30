import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import ThemeSlider from "../components/themeslider";

function MyApp({ Component, pageProps }) {
	const [prefersDarkMode, setMode] = React.useState<boolean>(
		useMediaQuery("(prefers-color-scheme: dark)")
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	const [brightness, setBrightness] = React.useState<number>(
		prefersDarkMode ? 0 : 100
	);

	const handleSlider = (event: Event, newBrightness: number) => {
		setBrightness(newBrightness);
		newBrightness < 50 ? setMode(true) : setMode(false);
	};

	const themeSliderProps = {
		handleSlider: handleSlider,
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main className={styles.main}>
				<ThemeSlider {...themeSliderProps} />
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
