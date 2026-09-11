import { StyleSheet, View } from "react-native";

import { ThemedText } from "./themed-text";


type HintRowProps = {
  title?: string;
};

export function HintRow({ title = "Try editing" }: HintRowProps) {
  return (
    <View style={styles.stepRow}>
      <ThemedText type="small">{title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
