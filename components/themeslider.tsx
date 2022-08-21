import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useMediaQuery from "@mui/material/useMediaQuery";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeSlider() {
	const prefersDarkMode: boolean = useMediaQuery(
		"(prefers-color-scheme: dark)"
	);

	const colorMode = React.useContext(ColorModeContext);

	const [value, setValue] = React.useState<number>(prefersDarkMode ? 0 : 100);

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number);
		if (newValue < 50) {
			colorMode.toggleColorMode;
		} else {
			colorMode.toggleColorMode;
		}
	};

	return (
		<Box sx={{ width: 200, margin: "0 0 2rem" }}>
			<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
				<DarkModeIcon htmlColor="rgb(108, 56, 146)" />
				<Slider
					color="secondary"
					aria-label="Brightness"
					value={value}
					onChange={handleChange}
				/>
				<LightModeIcon htmlColor="rgb(252, 161, 161)" />
			</Stack>
		</Box>
	);
}
