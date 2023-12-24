import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Mustafa ACAR 221120221083</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.box}></View>
        <View style={styles.boxs}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  view2: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
  box: {
    height: 35,
    width: 35,
    backgroundColor: 'blue',
    margin: 10,
    flexDirection: 'row',
  },
  boxs: {
    flexDirection: 'row'
  },
});
