import React from "react";
import {
	View,
	Text,
	Button,
	StyleSheet,
	Touchable,
	TouchableOpacity,
} from "react-native";

export type ColorVariants = "orange" | "grey" | "darkGrey";

type Props = {
	color: ColorVariants;
	title: string;
	isLgButton?: boolean;
	onPress: (symbol: string) => void;
};

const colors = {
	orange: "#ef9228",
	grey: "#a4a4a4",
	darkGrey: "#333333",
};

export const CalcButton = ({
	color,
	title,
	isLgButton = false,
	onPress,
}: Props) => {
	return (
		<TouchableOpacity onPress={() => onPress(title)}>
			<View
				style={
					isLgButton
						? { ...styles.largeContainer, backgroundColor: colors[color] }
						: { ...styles.container, backgroundColor: colors[color] }
				}
			>
				<Text
					style={{
						...styles.title,
						color:
							color === "darkGrey" || color === "orange"
								? "#fff"
								: colors.darkGrey,
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		width: 85,
		height: 85,
		marginVertical: 7,
		marginHorizontal: 7,
	},
	largeContainer: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		width: 180,
		height: 80,
		marginVertical: 5,
		marginLeft: 8,
		marginRight: 10,
		paddingRight: 100,
	},
	title: {
		fontSize: 35,
	},
});
