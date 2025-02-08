import { Text, Image, View, StyleSheet } from 'react-native';
import Animated, {BounceInUp, BounceOutUp, BounceIn} from 'react-native-reanimated';
import { useEffect, useState } from 'react';

const MapIcons = ({name, icon}) => {

  const [ isVisible, setIsVisible ] = useState(false);
  const [ mapIcon, setMapIcon ] = useState(icon);
  const [ mapName, setMapName ] = useState(name);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      setMapIcon(icon);
      setMapName(name);
      setIsVisible(true);
    }, 300);
  }, [name]);


  return (
    <View style={mapIconStyle.container}>
      { isVisible ? (
      <>
        <Animated.Image 
          source={mapIcon}
          style={mapIconStyle.icon}
          entering={BounceInUp.delay(800)}
          exiting={BounceOutUp}
        />
        <Animated.Text 
          style={mapIconStyle.name}
          entering={BounceIn.delay(800)}
          exiting={BounceOutUp}
        >
          {mapName}
        </Animated.Text>
      </>
      ) : null }
    </View>
  )
}

const mapIconStyle = StyleSheet.create({
  container: {
    height: 250,
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
    width: 300,
    height: 200,
  },
  name: {
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'ShinGoProBold',
    fontSize: 20,
    color: '#fff',
  },
})

export default MapIcons;
