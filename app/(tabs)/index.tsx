import { StyleSheet,ScrollView, Image, View, } from 'react-native';
import { Text  } from '@/components/Themed';
import { useFonts, MerriweatherSans_400Regular, MerriweatherSans_700Bold } from '@expo-google-fonts/merriweather-sans';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api'


const logoImg = require("../../assets/images/Logo.png");

export default function TabOneScreen() {
  const groups = useQuery(api.groups.get) || [];

  let [fontsLoaded] = useFonts({
    MerriweatherSans_400Regular,
    MerriweatherSans_700Bold
  });
  
  if (!fontsLoaded) {
    return null;
  } else {
  const spacing = 10;
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={{paddingTop:spacing}}>
            <View style={styles.header}>
              <Image style={{position:'relative', height:50, width:150}} source={logoImg}/>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.weekLunchText}>Athenian</Text>
                <Text style={styles.weekLunchText}>Menu</Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:spacing-5}}>
            <View style={styles.box}>
              <Text style={{fontFamily:"MerriweatherSans_700Bold", fontSize: 35, color: 'white', paddingBottom:20}}>What's for Lunch?</Text>
              <View style={{alignItems:'flex-start'}}>
                {groups.map((group) => (
                  <View>
                    <View>
                      <Text style={{fontSize:20}}>{group.kitchen}</Text>
                    </View>
                    <View style={{paddingBottom:10}}>
                      <Text style={{fontSize:12, color:'#e9c46a'}}>{group.food}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{paddingTop:spacing}}>
            <View style={styles.box2}>
              <Text style={{fontFamily:"MerriweatherSans_400Regular", fontSize: 35, color: 'white'}}>Tomorrow Lunch?</Text>
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
    fontSize: 25,  
    color: 'black'
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
    paddingTop: 10, 
    alignItems: "center",
    width: 370,
    backgroundColor: '#b94728',
    borderRadius:20,
  },
  box2: {
    paddingTop: 10, 
    alignItems: "center",
    height: 400,
    width: 370,
    backgroundColor: '#0097b2',
    borderRadius:20,
  }
  
});
