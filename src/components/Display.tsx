import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = { number: string; prevNumber: string | undefined };
["+", "-", "±", "÷", "×", "%"];
export const Display = ({ number, prevNumber }: Props) => {
	return (
		<View style={styles.container}>
			{(number !== "0" || !!prevNumber) && (
				<Text style={styles.prevNumber}>{prevNumber}</Text>
			)}

			<Text adjustsFontSizeToFit numberOfLines={1} style={styles.number}>
				{number}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		maxWidth: 360,
		marginHorizontal: 5,
	},
	number: {
		color: "#fff",
		fontSize: 70,
	},
	prevNumber: {
		color: "#a4a4a4",
		fontSize: 30,
	},
});
