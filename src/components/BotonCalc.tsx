import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  text: string;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({ text, accion }: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View style={styles.boton}>
        <Text style={styles.botonTexto}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  boton: {
    backgroundColor: "hsl(183, 100%, 15%)",
    borderRadius: 10,
    height: 50,
    width: 170,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    color: "white",
  },
});
