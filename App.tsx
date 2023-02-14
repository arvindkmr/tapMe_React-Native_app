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
  Image,
  Pressable,
} from 'react-native';

const diceone = require('./assets/diceone.png');
const dicetwo = require('./assets/dice2.png');
const dicethree = require('./assets/dice3.png');
const dicefour = require('./assets/dice4.png');
const dicefive = require('./assets/dice5.png');
const dicesix = require('./assets/dice6.png');
var Sound = require('react-native-sound');
function App(): JSX.Element {
  const [randomColor, setRandomColor] = useState('rgb(ff,ff,ff)');
  const [dice, setDice] = useState(dicetwo);

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
  const playButton = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setDice(diceone);
        break;
      case 2:
        setDice(dicetwo);
        break;
      case 3:
        setDice(dicethree);
        break;
      case 4:
        setDice(dicefour);
        break;
      case 5:
        setDice(dicefive);
        break;
      case 6:
        setDice(dicesix);
        break;

      default:
        setDice(diceone);
        break;
    }
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container]}>
        <View style={styles.diceBox}>
          <Image
            style={{
              height: 100,
              width: 100,
            }}
            source={dice}
          />
          <Pressable
            onPress={playButton}
            style={{
              backgroundColor: 'black',
              padding: 8,
              marginVertical: 8,
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              {' '}
              Play game
            </Text>
          </Pressable>
        </View>
        <View style={[styles.colorBox, {backgroundColor: randomColor}]}>
          <TouchableOpacity style={styles.pressBox} onPress={random}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Change status bar Color
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  diceBox: {
    marginVertical: 16,
  },
  colorBox: {
    height: 100,
    width: '100%',
  },
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pressBox: {
    backgroundColor: 'black',
    padding: 12,
  },
});

export default App;
