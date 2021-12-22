import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import GameIOver from "./GameIOver";
import Header from "./Components/Header";
import StartGame from "./StartGame";
import GameScreen from "./GameScreen";

const App = (props) => {
  const [userNumber, setUserNumber] = useState();
  const [rownds, setRownds] = useState(0);

  const gameOverHandler = (numRownds) => {
    setRownds(numRownds);
  };

  const resetGame = () => {
    setRownds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRownds(0);
  };
  let content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && rownds <= 0) {
    content = (
      <GameScreen onGameOver={gameOverHandler} userChoise={userNumber} />
    );
  } else if (rownds > 0) {
    content = <GameIOver roundsNumber={rownds} userNumber={userNumber} onRestart={resetGame} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="عدد شانس" />
      {content}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  rob: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7287b",
    height: 90,
    width: "100%",
  },
});
