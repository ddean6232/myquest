import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AgeQuestion = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (age == "") {
      setMessage("Please enter your age");
      return;
    }
    let ageInt = parseInt(age);
    if (isNaN(ageInt)) {
      setMessage("Please enter a valid number");
      return;
    }
    if (ageInt < 0) {
      setMessage("Age cannot be negative");
      return;
    }
    if (ageInt < 10) {
      setMessage("You are just a kid!");
    } else if (ageInt < 20) {
      setMessage("You are a teenager!");
    } else if (ageInt < 30) {
      setMessage("You are a young adult!");
    } else if (ageInt < 50) {
      setMessage("You are in your prime!");
    } else {
      setMessage("You are wise beyond your years!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How old are you?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        value={age}
        placeholder="Enter your age"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {message !== "" ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    width: "50%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  message: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default AgeQuestion;
