import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import ThemeSlider from "../components/themeslider";
import { Color } from "@mui/material";

function MyApp({ Component, pageProps }) {
	const [prefersDarkMode, setMode] = React.useState<boolean>(true);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
					primary: {
						main: "rgb(252, 161, 161)",
					},
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

	interface themeSliderPropTypes {
		handleSlider: (event: Event, newValue: number) => void;
		defaultValue: number;
		color: "primary" | "secondary";
	}

	let themeSliderProps:themeSliderPropTypes = {
		handleSlider: handleSlider,
		defaultValue: 0,
		color: brightness < 50 ? "secondary" : "primary",
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main className={styles.main}>
				<ThemeSlider {...themeSliderProps}/>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
