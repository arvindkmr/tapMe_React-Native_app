/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [randomColor, setRandomColor] = useState('rgb(ff,ff,ff)');

  const random = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
      setRandomColor(color);
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor= {randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity style={styles.pressBox} onPress={random}>
          <Text style={{color: 'white'}}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressBox: {
    backgroundColor: 'black',
    padding: 12,
  },
});

export default App;
