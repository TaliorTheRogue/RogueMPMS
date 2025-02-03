import { Text, Image } from 'react-native';

const MapIcons = (name, icon) => {

  return (
    <View>
      <Image 
        source={require(icon)}
      />
      <Text>{name}</Text>
    </View>
  )
}

export default MapIcons;
