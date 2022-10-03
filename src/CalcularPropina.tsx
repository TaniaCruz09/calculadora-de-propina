import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export const CalcularPropina = () => {
  const [bill, setBill] = useState("200");
  const [numberPerson, setNumberPerson] = useState("5");
  const [tipAmount, setTipAmount] = useState("0");
  const [total, setTotal] = useState("0");
  const [porcentaje, setPorcentaje] = useState("%");

  const calcular = (porcentajeDecimal: number) => {
    const calcularTipNumber: number =
      (Number(bill) * porcentajeDecimal) / Number(numberPerson);
    setTipAmount(String(calcularTipNumber));

    const multiOfBill: number = Number(bill) * porcentajeDecimal;

    const calcularTotal: number =
      (Number(bill) + multiOfBill) / Number(numberPerson);
    setTotal(String(calcularTotal));
  };
  const calcularCustom = (porcentajeCustom: string) => {
    const custom = porcentajeCustom.substring(0, porcentajeCustom.length - 1);
    const CustomDecimal = Number(custom) / 100;

    const calcularTipNumber =
      (Number(bill) * CustomDecimal) / Number(numberPerson);
    setTipAmount(String(calcularTipNumber));

    const multiOfBill = Number(bill) * CustomDecimal;

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
        <View style={styles.fila}>
          <TouchableOpacity onPress={() => calcular(0.05)}>
            <View style={styles.boton}>
              <TextInput
                style={styles.botonTexto}
                editable={false}
                value={"5%"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular(0.1)}>
            <View style={styles.boton}>
              <TextInput
                style={styles.botonTexto}
                editable={false}
                value={"10%"}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity onPress={() => calcular(0.15)}>
            <View style={styles.boton}>
              <TextInput
                style={styles.botonTexto}
                editable={false}
                value={"15%"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular(0.25)}>
            <View style={styles.boton}>
              <TextInput
                style={styles.botonTexto}
                editable={false}
                value={"25%"}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity onPress={() => calcular(0.5)}>
            <View style={styles.boton}>
              <TextInput
                style={styles.botonTexto}
                editable={false}
                value={"50%"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcularCustom(porcentaje)}>
            <View style={styles.botonCustom}>
              <TextInput
                style={styles.inputCustom}
                onChangeText={(e) => setPorcentaje(e)}
                value={porcentaje}
                keyboardType="numeric"
              />
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              setTipAmount("0");
              setTotal("0");
            }}
          >
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
  input: {
    flex: 1,
    textAlign: "right",
    fontSize: 25,
    fontWeight: "bold",
    color: "hsl(183, 100%, 15%)",
    margin: 15,
    height: "100%",
  },
  inputCustom: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  botonCustom: {
    backgroundColor: "hsl(189, 41%, 97%)",
    borderRadius: 10,
    height: 55,
    width: 170,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  imageStyle: {
    margin: 5,
    height: 17,
    width: 14,
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
