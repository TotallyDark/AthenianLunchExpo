import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react'
const logoImg = require("../assets/icons/Logo.png");

interface TopbarProps {
  date: string;
}

const Topbar: React.FC<TopbarProps> = ({ date }) => {
  return (
    <View style={{width:"100%"}}>
            <View style={styles.header}>
              <Image style={{position:'relative', height:50, width:150}} source={logoImg}/>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.weekLunchText}>Menu for</Text>
                <Text style={styles.weekLunchText}>{date}</Text>
              </View>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
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
      weekLunchText: {
        fontFamily:"Merriweather_Bold",
        fontSize: 25,  
        color: '#026172'
      },
});
export default Topbar