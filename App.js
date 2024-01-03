import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(50)
    };
    Animated.timing(
      this.state.altAnimada,
      {
        toValue: 150,
        duration: 3000
      }
    ).start();

  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.View style={{
          with: this.state.LarAnimada,
          height: this.state.altAnimada,
          backgroundColor: '#4169E1',
          justifyContent: 'center'
        }}>

          <Text style={{
            color: '#FFF',
            fontSize: 22,
            textAlign: 'center'
          }}> Carregando... </Text>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
