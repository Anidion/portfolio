import React from "react";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

interface CardState {
	flipped?: boolean;
}

interface CardProps {
	title: string;
	link: string;
	description: string;
	flipdesc?: string;
	isDark: boolean;
}

export default class Card extends React.Component<CardProps, CardState> {
	flipped: false;

	render() {
		return (
			<div className={this.props.isDark ? styles.card : styles.cardlight}>
				<Grid container>
					<Grid item xs={11}>
						<a target="_blank" rel="noreferrer" href={this.props.link}>
							<h2>{this.props.title} &raquo;</h2>
						</a>
					</Grid>
					<Grid item xs={1}>
						<IconButton
							onClick={() => this.setState({ flipped: !this.state?.flipped })}
						>
							{this.props.flipdesc != null ? (
								<ScreenRotationAltIcon htmlColor="rgb(252, 161, 161)" />
							) : (
								<></>
							)}
						</IconButton>
					</Grid>
				</Grid>

				<p>
					{this.state?.flipped ? this.props.flipdesc : this.props.description}
				</p>
			</div>
		);
	}
}
