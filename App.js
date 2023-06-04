import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Cronometro from './Cronometro';
import Temporizador from './Temporizador';

export default function App() {
  return (
    <View style={styles.container}>
      <Temporizador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
