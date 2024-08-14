import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import tw from 'twrnc';

const Navigation = () => {
  return (
    <View style={tw`flex-auto flex-row gap-2 justify-self-center`}>
        <Link href={"/"} asChild>
            <TouchableOpacity>
            <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            </TouchableOpacity>
        </Link>
        <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
        <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
    </View>
  )
}

export default Navigation