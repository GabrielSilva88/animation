import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Platform} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50)
    };
    
  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.View style={{
          with: this.state.LarAnimada,
          height: this.state.AltAnimada,
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
