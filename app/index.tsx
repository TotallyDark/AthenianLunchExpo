import { StyleSheet,ScrollView, Image, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api'
import { Link } from 'expo-router';

const logoImg = require("../assets/icons/Logo.png");
const feedbackImg = require("../assets/icons/feedback-icon.png");
//const date = new Date().toString();
const date = "Whats for Lunch?"

export default function TabOneScreen() {
  const groups = useQuery(api.groups.get) || [];
  const TodayImg = useQuery(api.groups.list) || "";

  const spacing = 10;
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
          <View>
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
              <Text style={{fontFamily:'Merriweather_Bold', fontSize: 35, color: 'white', paddingBottom:20}}>{date}</Text>
              <View style={{alignItems:'flex-start'}}>
                {groups.map((group) => (
                  <View>
                    <View style={{width:370, /* 370 is the width of red container*/  alignItems:'center'}}> 
                      <Text style={{fontSize:20, color: 'white', fontFamily: "Merriweather_Regular", width:'auto'}}>{group.kitchen}</Text>
                    </View>
                    <View style={{paddingBottom:10, paddingLeft: 20}}>
                      <Text style={{fontSize:15, color:'#e9c46a', fontFamily:"Merriweather_Bold"}}>{group.food}</Text>
                    </View>
                  </View>
                ))}
                
              </View>
              
            </View>
 
          </View>
          <View style={{paddingTop:5}}>
            <Image style={{height:TodayImg.length, position:'relative', borderRadius:20}} source={{uri:TodayImg}}  />
          </View>
      </ScrollView>
      
      <View style={styles.feedback}>
        <Link href="/feedback" asChild>
          <TouchableOpacity style={{alignContent:'center'}}> 
            <Image source={feedbackImg} style={{height:50, width:'auto'}}/>
          </TouchableOpacity>
        </Link>
      </View>
      
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  feedback: {
    position: "absolute",
    right:-30, 
    top: 100,
    borderColor: 'green', 
    width: 90, 
    height:75, 
    backgroundColor: '#6DB53E', 
    borderRadius: 50, 
    borderStyle:'solid', 
    borderWidth: 5
  },
  space: {
    justifyContent: 'space-evenly',
    backgroundColor: '#D2B27B',
    height: 270,
  },

  weekLunchText: {
    fontFamily:"Merriweather_Bold",
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
    borderStyle:'solid',
    borderWidth: 5,
    borderColor: '#026172',
    justifyContent: 'space-evenly',
    backgroundColor: "#0097b2",
    borderRadius:20,
    height: 70,
    
  },
  box: {
    paddingTop: 10, 
    borderStyle: "solid",
    borderColor: '#9F2909',
    borderWidth: 5, 
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
