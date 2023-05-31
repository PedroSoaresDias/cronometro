import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = value => {
    return value < 10 ? `0${value}` : value;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
  };

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos(minutos => minutos + 1);
    }

    if (minutos === 60) {
      setMinutos(0);
      setHoras(horas => horas + 1);
    }
  }, [segundos, minutos]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {formatTime(horas)}:{formatTime(minutos)}:{formatTime(segundos)}
      </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Cronometro;
