import { Text, Image, View, StyleSheet } from 'react-native';

const MapIcons = ({name, icon}) => {


  return (
    <View style={mapIconStyle.container}>
      <Image 
        source={icon}
        style={mapIconStyle.icon}
      />
      <Text style={mapIconStyle.name}>{name}</Text>
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
