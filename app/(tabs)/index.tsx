import { StyleSheet,ScrollView, Image, View } from 'react-native';
import { Text  } from '@/components/Themed';
import { useFonts, MerriweatherSans_400Regular, MerriweatherSans_700Bold } from '@expo-google-fonts/merriweather-sans';

export default function TabOneScreen() {
  let [fontsLoaded] = useFonts({
    MerriweatherSans_400Regular,
    MerriweatherSans_700Bold
  });
  
  if (!fontsLoaded) {
    return null;
  } else {
  const spacing = 12;
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={{paddingTop:spacing}}>
            <View style={styles.header}>
              <Image style={{position:'relative', height:50}} source={{uri: 'https://epicurean-group.com/wp-content/uploads/2022/08/Epicurean_LandscapeLogo_CORRECT.png'}}/>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.weekLunchText}>Athenian</Text>
                <Text style={styles.weekLunchText}>Menu</Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:spacing}}>
            <View style={styles.box}>
              <Text style={{fontFamily:"MerriweatherSans_400Regular", fontSize: 30}}>What for Lunch today?</Text>
            </View>
          </View>
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  space: {
    justifyContent: 'space-evenly',
    backgroundColor: '#D2B27B',
    height: 270,
  },
  weekLunchText: {
    fontFamily:"MerriweatherSans_700Bold",
    fontSize: 25  
  },
  container: {
    flex: 1,
    backgroundColor: '#D2B27B',
    alignItems: 'center',
  },
  header: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: "#0097b2",
    borderRadius:20,
    height: 70,
    
  },
  box: {
    alignItems: "center",
    height: 200,
    width: 370,
    backgroundColor: '#b94728',
    borderRadius:20,
  }
  
});
