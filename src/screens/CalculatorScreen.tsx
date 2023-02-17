import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CalcButton, ColorVariants, Display, Row } from "../components";
import { useCalculator } from "../hooks";

type Props = {};

const numbersRow0 = [
	{ color: "darkGrey", title: "0", isLargeButton: true },
	{ color: "darkGrey", title: ".", isLargeButton: false },
	{ color: "darkGrey", title: "=", isLargeButton: false },
];
const numbersRow1 = [
	{ color: "darkGrey", title: "1" },
	{ color: "darkGrey", title: "2" },
	{ color: "darkGrey", title: "3" },
	{ color: "orange", title: "+" },
];
const numbersRow2 = [
	{ color: "darkGrey", title: "4" },
	{ color: "darkGrey", title: "5" },
	{ color: "darkGrey", title: "6" },
	{ color: "orange", title: "-" },
];
const numbersRow3 = [
	{ color: "darkGrey", title: "7" },
	{ color: "darkGrey", title: "8" },
	{ color: "darkGrey", title: "9" },
	{ color: "orange", title: "×" },
];
const numbersRow4 = [
	{ color: "grey", title: "AC" },
	{ color: "grey", title: "±" },
	{ color: "grey", title: "%" },
	{ color: "orange", title: "÷" },
];

export const CalculatorScreen = (props: Props) => {
	const {
		displayNumber,
		prevNumber,
		cleanNumber,
		buildNumber,
		prepareOperation,
		solveOperation,
	} = useCalculator();

	return (
		<View style={styles.calculatorContainer}>
			<Display number={displayNumber} prevNumber={prevNumber} />

			<FlatList
				scrollEnabled={false}
				style={styles.row}
				horizontal
				data={numbersRow4} // AC | ± | % | ÷
				renderItem={({ item }) => (
					<CalcButton
						color={item.color as ColorVariants}
						title={item.title}
						onPress={symbol => {
							symbol === "AC" ? cleanNumber() : prepareOperation(symbol);
						}}
					/>
				)}
			/>
			<FlatList
				scrollEnabled={false}
				style={styles.row}
				horizontal
				data={numbersRow3} // 7 | 8 | 9 | ×
				renderItem={({ item }) => (
					<CalcButton
						color={item.color as ColorVariants}
						title={item.title}
						onPress={symbol => {
							!isNaN(Number(symbol))
								? buildNumber(symbol)
								: prepareOperation(symbol);
						}}
					/>
				)}
			/>
			<FlatList
				scrollEnabled={false}
				style={styles.row}
				horizontal
				data={numbersRow2} // 4 | 5 | 6 | -
				renderItem={({ item }) => (
					<CalcButton
						color={item.color as ColorVariants}
						title={item.title}
						onPress={symbol => {
							!isNaN(Number(symbol))
								? buildNumber(symbol)
								: prepareOperation(symbol);
						}}
					/>
				)}
			/>
			<FlatList
				scrollEnabled={false}
				style={styles.row}
				horizontal
				data={numbersRow1} // 1 | 2 | 3 | +
				renderItem={({ item }) => (
					<CalcButton
						color={item.color as ColorVariants}
						title={item.title}
						onPress={symbol => {
							!isNaN(Number(symbol))
								? buildNumber(symbol)
								: prepareOperation(symbol);
						}}
					/>
				)}
			/>
			<FlatList
				scrollEnabled={false}
				style={styles.row}
				horizontal
				data={numbersRow0} // 0 | . | =
				renderItem={({ item }) => (
					<CalcButton
						color={item.color as ColorVariants}
						title={item.title}
						onPress={symbol => {
							!isNaN(Number(symbol)) || symbol === "."
								? buildNumber(symbol)
								: symbol === "="
								? solveOperation()
								: prepareOperation(symbol);
						}}
						isLgButton={item.isLargeButton}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	calculatorContainer: {
		paddingVertical: 10,
		backgroundColor: "#000",
		flex: 1,
		justifyContent: "flex-end",
		alignContent: "center",
	},
	row: { maxHeight: 100 },
});
