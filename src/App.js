import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useStore } from './store/store';
import Animated, { useSharedValue, withTiming, withRepeat, ReduceMotion, Keyframe, Easing } from "react-native-reanimated";
import  MapIcon  from './components/MapIcons';

export default function App() {

  const { mapData, random } = useStore();

  const [fontsLoaded] = useFonts({
    'ShinGoProRegular': require('../assets/fonts/AOTFShinGoProRegular.otf'),
    'ShinGoProBold': require('../assets/fonts/AOTFShinGoProBold.otf'),
    'ShinGoProDeBold': require('../assets/fonts/AOTFShinGoProDeBold.otf'),
    'ShinGoProHeavy': require('../assets/fonts/AOTFShinGoProHeavy.otf'),
    'ShinGoProExLight': require('../assets/fonts/AOTFShinGoProExLight.otf'),
    'ShinGoProLight': require('../assets/fonts/AOTFShinGoProLight.otf'),
    'ShinGoProMedium': require('../assets/fonts/AOTFShinGoProMedium.otf'),
    'SuperMario256': require('../assets/fonts/SuperMario256.ttf')
  });
  const [isReady, setIsReady] = useState(false);
  
  const translateY = useSharedValue(-60);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
    translateY.value = withRepeat(
        withTiming(50, { duration: 800 }),
        -1,
        true,
        () => {},
        ReduceMotion.System,
      )
  }, [fontsLoaded]);

  if (!isReady) return null;

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
        {mapData !== null ?
          <MapIcon 
            icon={mapData.boardIcon} 
            name={mapData.name} 
          />
          :
          <Animated.Image 
            source={require('../assets/QuestionBlock.png')}
            style={[styles.questionLogo, {transform: [{translateY}]}]}
          />
        }
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
        <Text style={styles.footerText}>Developed & Powered by RogueCorp.</Text>
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
    backgroundColor: '#E4000F',
  },
  titleContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    resizeMode: 'stretch',
    width: 200,
    height: 170,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: 'SuperMario256',
    color: '#fff',
  },
  questionLogo: {
    resizeMode: 'contain',
    width: 240,
    height: 240,
    marginBottom: 10,
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
    elevation: 5,
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
    color:'#fff',
  }
});
