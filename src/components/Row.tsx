import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type Props = { children: ReactNode };

export const Row = ({ children }: Props) => {
	return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
});
