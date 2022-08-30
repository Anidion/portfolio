import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeSlider(Props: {
	handleSlider: (event: Event, newValue: number) => void;
}) {
	return (
		<Box sx={{ width: 200 }}>
			<Stack spacing={2} direction="row" alignItems="center">
				<DarkModeIcon htmlColor="rgb(108, 56, 146)" />
				<Slider
					color="secondary"
					aria-label="Brightness"
					onChange={Props.handleSlider}
				/>
				<LightModeIcon htmlColor="rgb(252, 161, 161)" />
			</Stack>
		</Box>
	);
}
