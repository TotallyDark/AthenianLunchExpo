
import { StyleSheet,ScrollView, Image, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';

interface BoxProps {
    colorBorder: string,
    color: string,
    mainTitle: string,
    subTitle?: string,
    subTitleColor?: string,
    subText?: string,
    imgurl?: string,
    visible?: boolean,
  }
  
const Box: React.FC<BoxProps> = ({
    colorBorder,
    color,
    mainTitle,
    subText = "none",
    subTitle = "none",
    subTitleColor = colorBorder,
    imgurl,
    visible = true,
 }) => {
  if (!visible) return null
  return (
    <View style={{
      borderStyle: "solid",
      borderColor: colorBorder,
      borderWidth: 5, 
      width: 370,
      backgroundColor: color,
      borderRadius:20,
      padding:5,
    }}> 
      <Text style={{fontFamily:'Merriweather_Bold', fontSize: 35, color: 'white'}}>{mainTitle}</Text>
      <View>
        <Text style={{fontSize:20, color: subTitleColor, fontFamily: "Merriweather_Regular"}}>{subTitle}</Text>
        <Text style={tw`flex flex-row text-base text-white tracking-tight`}>{subText}</Text>
        {imgurl && <Image style={{height:200, borderRadius:20}} source={{uri:imgurl}}  />}
    </View>
    </View>
    /*
    <View>
    <Text style={{fontFamily:'Merriweather_Bold', fontSize: 35, color: 'white'}}>Luwnch</Text>
    <View>
      <Text style={{fontSize:20, color: '#780000', fontFamily: "Merriweather_Regular"}}>{lunchKitchen}</Text>
      <Text style={tw`flex flex-row text-base text-white tracking-tight`}>{lunch}</Text>
      <Image style={{height:200, position:'relative', borderRadius:20}} source={{uri:TodayImg}}  />
    </View> 
  </View>
  */
  )
}
export default Box