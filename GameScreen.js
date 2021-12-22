import React, { useState, useRef, useEffect } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import Card from "./Components/Card";
import NumberContainer from "./Components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumb = Math.floor(Math.random() * (max - min) + min);

  if (exclude === rndNumb) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumb;
  }
};

const GameScreen = (props) => {

  const [rounds, setRounds] = useState(0)
  const [currentGuss, setCurrentGuss] = useState(
    generateRandomBetween(1, 100, props.userChoise)
  );

  const {userChoise, onGameOver} = props

useEffect(() => {
  if (currentGuss === props.userChoise ){
    onGameOver( rounds )
  }
}, [ currentGuss, userChoise, onGameOver  ])

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextHandlerGuss = (direction) => {
    if (
      (direction === "پایین" && currentGuss < props.userChoise) ||
      (direction === "بالا" && currentGuss > props.userChoise)
    ) {
      Alert.alert("اشتباه است",'گزینه انتخابی شما اشتباه است', [{ text: "متاسفم", style: "لغو" }]);

      return;
    }
    if (direction === "پایین") {
      currentHigh.current = currentGuss;
    } else {
      currentLow.current = currentGuss;
    }
    const nextNmb = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuss
    );
    setCurrentGuss(nextNmb);
      setRounds(curRounds => curRounds+1 )
  };
  return (
    <View style={styles.screen}>
      <Text> عدد شانس شما </Text>
      <NumberContainer> {currentGuss} </NumberContainer>
      <Card style={styles.button}>
        <Button
          title="بالا"
          onPress={nextHandlerGuss.bind(this, "بالا")}
        />
        <Button
          title="پایین"
          onPress={nextHandlerGuss.bind(this, "پایین")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
