import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoDefinido, setTempoDefinido] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTempo((tempo) => tempo - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    return `${formatValue(minutes)}:${formatValue(seconds)}`;
  };

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const startTimer = () => {
    setTempo(tempoDefinido);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTempo(0);
    setIsRunning(false);
  };

  const handleTempoDefinidoChange = (text) => {
    const tempoDefinido = parseInt(text);
    setTempoDefinido(isNaN(tempoDefinido) ? 0 : tempoDefinido);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(tempo)}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Definir tempo (em segundos):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tempoDefinido.toString()}
          onChangeText={handleTempoDefinidoChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Temporizador;