import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ROGUE MPMS</Text>
      <Text> Mario Party Map Selector for</Text>
      <Image 
        source={require('./assets/Super_Mario_Party_Jamboree_Logo.png')}
        style={styles.logo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'stretch',
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
});
