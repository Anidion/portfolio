import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styles from "../styles/Home.module.css";
import { Color } from "@mui/material";

export default function ThemeSlider(Props: {
	handleSlider: (event: Event, newValue: number) => void;
	defaultValue: number;
	color: "primary" | "secondary";
}) {
	return (
		<Box className={styles.themeSlider}>
			<Stack spacing={2} direction="row" alignItems="center">
				<DarkModeIcon htmlColor="rgb(108, 56, 146)" />
				<Slider
					className={styles.themeSliderslider}
					color={Props.color}
					aria-label="Brightness"
					defaultValue={Props.defaultValue}
					onChange={Props.handleSlider}
				/>
				<LightModeIcon htmlColor="rgb(252, 161, 161)" />
			</Stack>
		</Box>
	);
}
