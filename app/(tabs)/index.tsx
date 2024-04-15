import { StyleSheet,ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useFonts, MerriweatherSans_400Regular } from '@expo-google-fonts/merriweather-sans';
import AppLoading from 'expo-app-loading';

export default function TabOneScreen() {
  let [fontsLoaded] = useFonts({
    MerriweatherSans_400Regular,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  const spacing = 12;
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={{paddingTop:spacing}}>
            <View style={styles.header}>
              <Text style={styles.weekLunchText}>Lunch Menu</Text>
            </View>
          </View>
          <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#D2B27B',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
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
