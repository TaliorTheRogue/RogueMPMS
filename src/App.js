import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useStore } from './store/store';

export default function App() {

  useFonts({
    'ShinGoProRegular': require('../assets/fonts/AOTFShinGoProRegular.otf'),
    'ShinGoProBold': require('../assets/fonts/AOTFShinGoProBold.otf'),
    'ShinGoProDeBold': require('../assets/fonts/AOTFShinGoProDeBold.otf'),
    'ShinGoProHeavy': require('../assets/fonts/AOTFShinGoProHeavy.otf'),
    'ShinGoProExLight': require('../assets/fonts/AOTFShinGoProExLight.otf'),
    'ShinGoProLight': require('../assets/fonts/AOTFShinGoProLight.otf'),
    'ShinGoProMedium': require('../assets/fonts/AOTFShinGoProMedium.otf'),
    'SuperMario256': require('../assets/fonts/SuperMario256.ttf')
  });

  const { selectedMap, random } = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('../assets/Super_Mario_Party_Jamboree_Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>MAP SELECTOR</Text>
      </View>
      <View>
        <Text>{selectedMap}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={random}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Choisis moi une Map !</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Developped & Powered by RogueCorp.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: 'red',
  },
  titleContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    resizeMode: 'stretch',
    width: 200,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: 'SuperMario256',
    color: '#fff',
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  buttonText: {
    fontFamily: 'ShinGoProBold'
  },
  footer: {
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'ShinGoProExLight',
  }
});
