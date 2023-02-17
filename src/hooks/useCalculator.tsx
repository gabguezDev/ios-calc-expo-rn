import React, { useState } from "react";

type Props = {};

enum Operations {
	SUM = "sum",
	MIN = "min",
	DIV = "div",
	PROD = "prod",
	PERC = "perc",
	EQ = "equal",
}

const initialNumber = "0";

export const useCalculator = () => {
	const [prevNumber, setPrevNumber] = useState<string | undefined>(undefined);
	const [displayNumber, setDisplayNumber] = useState<string>(initialNumber);
	const [operation, setOperation] = useState<Operations | undefined>(undefined);

	const cleanNumber = () => {
		setDisplayNumber(initialNumber);
		setPrevNumber(undefined);
		setOperation(undefined);
	};

	const buildNumber = (symbol: string) => {
		console.log(operation);
		if (
			(displayNumber === "0" && symbol !== ".") ||
			(displayNumber.length >= 1 && !!operation)
		) {
			setDisplayNumber(symbol);
		} else if (!displayNumber.includes(".") && symbol === ".") {
			setDisplayNumber(displayNumber + symbol);
		} else if (symbol !== ".") {
			setDisplayNumber(displayNumber + symbol);
		}
	};

	const changeSign = () => {
		if (displayNumber !== "0" && displayNumber.includes("-")) {
			setDisplayNumber(displayNumber.slice(1));
		} else if (displayNumber === "0" && !displayNumber.includes("-")) {
			return;
		} else {
			setDisplayNumber("-" + displayNumber);
		}
	};

	const prepareOperation = (symbol: string) => {
		setDisplayNumber(initialNumber);
		switch (symbol) {
			case "+":
				setPrevNumber(displayNumber);
				setOperation(Operations.SUM);
				return;
			case "-":
				setPrevNumber(displayNumber);
				setOperation(Operations.MIN);
				return;
			case "±":
				changeSign();
				return;
			case "÷":
				setPrevNumber(displayNumber);
				setOperation(Operations.DIV);
				return;
			case "×":
				setPrevNumber(displayNumber);
				setOperation(Operations.PROD);
				return;
			case "=":
				setPrevNumber(displayNumber);
				setOperation(Operations.EQ);
				return;
			case "%":
				setPrevNumber(displayNumber);
				setOperation(Operations.PERC);
				return;
			default:
				return;
		}
	};

	const solveOperation = () => {
		let num1 = Number(displayNumber);
		let num2 = Number(prevNumber);

		switch (operation) {
			case Operations.SUM:
				console.log("SUM");
				setDisplayNumber(`${num1 + num2}`);
				return;
			case Operations.MIN:
				console.log("RES");
				setDisplayNumber(`${num2 - num1}`);
				return;
			case Operations.PROD:
				console.log("PROD");
				setDisplayNumber(`${num2 * num1}`);
				return;
			case Operations.DIV:
				console.log("DIV");
				setDisplayNumber(`${num2 / num1}`);
				return;
			case Operations.PERC:
				console.log("PERC");
				setDisplayNumber(`${(num1 * num2) / 100}`);
				return;
			default:
				return;
		}
	};

	return {
		displayNumber,
		prevNumber,
		cleanNumber,
		buildNumber,
		prepareOperation,
		solveOperation,
	};
};
