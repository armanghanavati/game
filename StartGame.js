import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "./Components/Card";
import Input from "./Components/Input";
import NumberContainer from "./Components/NumberContainer";

const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const onChangeEntered = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("عدد وارد شده قابل قبول نیست!", "عدد باید بین 1 تا 99 باشد", [
        { text: "تایید", style: "destructive", onPress: resetInputHandler },
      ]);
    }

    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };
  let confirmedOutPut;
  if (confirmed) {
    confirmedOutPut = (
      <Card style={styles.summeryContainer} >
        <Text style={{ color:'black', fontSize:20 }} > عدد شما </Text>
        <NumberContainer> {selectedNumber} </NumberContainer>
        <Button title="شروع بازی" onPress={()=> props.onStartGame(selectedNumber) } />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>شروع بازی جدید</Text>
        <Card style={styles.input}>
          <Text>یک رقم تایید کنید</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            style={styles.inputText}
            keyboardType="number-pad"
            value={enteredValue}
            onChangeText={onChangeEntered}
          />
          <View style={styles.btn}>
            <View style={styles.buttonConfirm}>
              <Button
                onPress={resetInputHandler}
                title="دوباره"
                color="#c717fc"
              />
            </View>
            <View style={styles.buttonConfirm}>
              <Button
                title="تایید"
                color="#f7287b"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutPut}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  title: { fontSize: 20, marginVertical: 20 },
  input: {
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
    fontSize:20
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  buttonConfirm: {
    width: 100,
  },
  inputText: {
    width: 50,
    textAlign: "center",
  },
  summeryContainer:{
    marginTop:20
  }
});
