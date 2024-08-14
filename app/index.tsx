import { StyleSheet,ScrollView, View, Image, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api'
import { Link } from 'expo-router';
import Topbar from './topbar';
import tw from 'twrnc';
import Box from './box';

const feedbackImg = require("../assets/icons/feedback-icon.png");
const breakfastImg = require("../assets/icons/breakfast-icon.png");
const lunchImg = require("../assets/icons/lunch-icon.png")
const dinnerImg = require("../assets/icons/dinner-icon.png")

export default function TabOneScreen() {
  const lunchQuery = useQuery(api.groups.getLunch) || [
    {food: "loading", kitchen: "loading", _creationTime: "loading"}, 
    {food:"loading", kitchen: "loading"}];
  const breakfastQuery = useQuery(api.groups.getBreakfast) || [{food:"loading", kitchen:"loading"}]
  const dinnerQuery = useQuery(api.groups.getDinner) || [{food:"loading", kitchen:"loading"}]

  const TodayImg = useQuery(api.groups.list) || "";
  let date = new Date(lunchQuery[0]._creationTime || 1200).toDateString()
  let lunchKitchen = lunchQuery[0].kitchen
  let lunch = lunchQuery[0].food
  let saladKitchen = lunchQuery[1].kitchen
  let salad = lunchQuery[1].food

  let breakfastKitchen = breakfastQuery[0].kitchen
  let breakfast = breakfastQuery[0].food

  let dinnerKitchen = dinnerQuery[0].kitchen
  let dinner = dinnerQuery[0].food


  const [boxBreakfast, setBoxBreakfast] = useState<boolean>(false)
  const [boxLunch, setBoxLunch] = useState<boolean>(true)
  const [boxDinner, setBoxDinner] = useState<boolean>(false)

  const handleBreakfast = () => {
    setBoxBreakfast(true)
    setBoxDinner(false)
    setBoxLunch(false)
  }
  const handleLunch = () => {
    setBoxBreakfast(false)
    setBoxDinner(false)
    setBoxLunch(true)
  }
  const handleDinner = () => {
    setBoxBreakfast(false)
    setBoxDinner(true)
    setBoxLunch(false)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={tw`flex flex-col gap-2`}>
      <Topbar date={date}/>

    <View style={{alignItems:'center'}}>
      <View style={tw`flex flex-row gap-2`}>
          <View style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <TouchableOpacity onPress={() => handleBreakfast()}>
              <View style={{width:75, height:50, borderRadius: 20,
                justifyContent:'center', alignItems:'center', backgroundColor: boxBreakfast ? '#283618': '#606c38'}}>
                  <Image source={breakfastImg} style={{width:40, height:40, tintColor: boxBreakfast ? '#606c38':'#283618'}}/>
              </View>
            </TouchableOpacity>
            <Text style={{color:'white', marginBottom:-10}}>Breakfast</Text>
          </View>

          <TouchableOpacity onPress={() => handleLunch()}>
          <View style={{width:75, height:75, marginBottom:-12, marginTop:-5, 
            borderRadius: 20, alignItems:'center',justifyContent:'center', backgroundColor: boxLunch ? '#283618': '#606c38'}}>
            <Image source={lunchImg} style={{width:50, height:50, tintColor: boxLunch ? '#606c38':'#283618'}}/>
          </View>
          </TouchableOpacity>

        <View style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
          <TouchableOpacity onPress={() => handleDinner()}>
            <View style={{width:75, height:50, borderRadius: 20,alignItems:'center', justifyContent:'center',backgroundColor: boxDinner ? '#283618': '#606c38'}}>
              <Image source={dinnerImg} style={{width:40, height:40, tintColor: boxDinner ? '#606c38':'#283618'}}/>
            </View>
          </TouchableOpacity>
          <Text style={{color:'white', marginBottom:-10}}>Dinner</Text>
        </View>
    </View>
    </View>


      <View>
      </View>
          <Box 
          colorBorder='#f9c80e'
          color='#ee964b'
          subTitleColor='#f9c80e'
          mainTitle='Breakfast'
          subText={breakfast}
          subTitle={breakfastKitchen}
          visible={boxBreakfast}
          />
          <Box 
          colorBorder='#9F2909'
          color={'#b94728'}
          mainTitle='Lunch'
          subText={lunch}
          subTitle={lunchKitchen}
          imgurl={TodayImg}
          visible={boxLunch}
          />
          <Box 
          colorBorder='green'
          color='#6DB53E'
          mainTitle='Salad Bar'
          subText={salad}
          subTitle={saladKitchen}
          visible={boxLunch}
          />
          <Box 
          colorBorder='#353535'
          color='#3c6e71'
          mainTitle='Dinner'
          subText={dinner}
          subTitle={dinnerKitchen}
          visible={boxDinner}
          />
          
          <Link href={"/feedback"} asChild>
            <TouchableOpacity>
            <View style={styles.feedbackBar}>
              <Text style={{fontSize:20, color:'white'}}> Is something incorrect? Report it here! </Text>
            </View>
            </TouchableOpacity>
          </Link>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  feedbackBar: {
    alignItems: "center",
    justifyContent:'center',
    height: 50,
    backgroundColor: '#7f7f7f',
    borderRadius:20,
    borderWidth: 5,
    borderColor: '#595959',
  },
  container: {
    flex: 1,
    backgroundColor: '#D2B27B',
    alignItems: 'center',
  },
});
