import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { BotonCalc } from "./components/BotonCalc";
import { useState } from "react";
import { number } from "yup/lib/locale";

export const CalcularPropina = () => {
  const [bill, setBill] = useState("200");
  const [numberPerson, setNumberPerson] = useState("5");
  const [tipAmount, setTipAmount] = useState("0");
  const [total, setTotal] = useState("0");

  const calcular = () => {
    const calcularTipNumber = (Number(bill) * 0.05) / Number(numberPerson);
    setTipAmount(String(calcularTipNumber));

    const multiOfBill = Number(bill) * 0.05;

    const calcularTotal = (Number(bill) + multiOfBill) / Number(numberPerson);
    setTotal(String(calcularTotal));
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../images/svgtopng/logo.png")}
      />
      <View style={styles.subContainerB}>
        <Text style={styles.text}>Bill</Text>
        <View style={styles.bill}>
          <Image
            source={require("../images/svgtopng/icon-dollar.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setBill(e)}
            keyboardType="numeric"
            value={bill}
          />
        </View>
        <Text style={styles.text}>Select Tip %</Text>
        <View style={styles.containerFilas}>
          <View style={styles.fila}>
            <BotonCalc text="5%" accion={calcular} />
            <BotonCalc text="10%" accion={calcular} />
          </View>
          <View style={styles.fila}>
            <BotonCalc text="15%" accion={calcular} />
            <BotonCalc text="25%" accion={calcular} />
          </View>
          <View style={styles.fila}>
            <BotonCalc text="50%" accion={calcular} />
            <BotonCalc text="Custom" accion={calcular} />
          </View>
        </View>
        <Text style={styles.text}>Number of People</Text>
        <View style={styles.bill}>
          <Image
            source={require("../images/svgtopng/icon-person.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setNumberPerson(e)}
            value={numberPerson}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.subContainerC}>
          <Text style={styles.textAmount}>Tip Amount</Text>
          <View style={styles.billEnd}>
            <Text style={styles.textPerson}>/ person</Text>
            <TextInput
              style={styles.inputEnd}
              value={tipAmount}
              editable={false}
            />
          </View>
          <Text style={styles.textAmount}>Total</Text>
          <View style={styles.billEnd}>
            <Text style={styles.textPerson}>/ person</Text>
            <TextInput style={styles.inputEnd} value={total} editable={false} />
          </View>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: " hsl(185, 41%, 84%)",
  },
  logo: {
    margin: 70,
    width: 87,
    height: 54,
    color: "white",
  },
  text: {
    fontSize: 15,
    color: " hsl(186, 14%, 43%)",
    marginTop: 15,
    marginBottom: 7,
    marginLeft: 40,
  },
  subContainerB: {
    height: "82%",
    backgroundColor: " hsl(0, 0%, 100%)",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  bill: {
    marginHorizontal: 40,
    backgroundColor: "hsl(189, 41%, 97%)",
    width: "82%",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  input: {
    flex: 1,
    textAlign: "right",
    fontSize: 25,
    fontWeight: "bold",
    color: "hsl(183, 100%, 15%)",
    margin: 15,
    height: "100%",
  },
  imageStyle: {
    margin: 5,
    height: 17,
    width: 14,
    resizeMode: "stretch",
    alignItems: "center",
  },
  fila: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
  },
  people: {
    marginTop: 10,
    marginBottom: 25,
    marginHorizontal: 50,
  },
  subContainerC: {
    margin: 20,
    alignSelf: "center",
    width: "83%",
    height: 260,
    borderRadius: 30,
    backgroundColor: "hsl(183, 100%, 15%)",
  },
  billEnd: {
    marginHorizontal: 40,
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
  },
  textAmount: {
    color: "white",
    fontSize: 15,
    marginTop: 20,
    marginLeft: 40,
  },
  textPerson: {
    alignSelf: "center",
    color: "hsl(186, 14%, 43%)",
    fontSize: 17,
  },
  inputEnd: {
    color: "hsl(172, 67%, 45%)",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "right",
    width: "80%",
  },
  btn: {
    backgroundColor: " hsl(172, 67%, 45%)",
    width: "80%",
    height: 50,
    alignSelf: "center",
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "hsl(183, 100%, 15%)",
  },
});
