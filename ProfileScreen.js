import React from 'react';
import styled from 'styled-components/native';
import colours from '../components/Colours';
import Navigator from '../App';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import {StyleSheet, View, Text, TouchableOpacity, Button, TextInput, Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';

export default class ProfileScreen extends React.Component{
   render(){
       return(
        <View style={{flex: 1, alignContent: "center", alignItems: "center", paddingTop: 50, backgroundColor: "#1d3557"}}>
            <Title1>Profile Page</Title1>
            <View style={{padding: 20}} />
            <Image style={{borderRadius: 100, width: 200, height: 200}}
            source={require('../assets/face.jpg')}/>
            <View style={{padding: 20}} />
            <Title>Myles Leslie</Title>
            <View style={{padding: 20}}>
            <TextInput
                    style={styles.whiteText}
                    placeholder={'Description'}
                    placeholderTextColor={'#eee'}
                    />
            </View>
        </View>
       );
   }
}

const styles = StyleSheet.create({
    whiteText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20
      },
})


//STYLES FOR EACH COMPONENT OF APP
const Container = styled.View`
flex: 1;
background-color: #000B29;
align-items:center;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 30%;
  background: ${colours.blue};
`;

const Body = styled.ScrollView`
  background: #fff;
  height: 65%;
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  top: 37%;
  padding:10px;
`;

const ItemsLayout = styled.View`
flex: 1;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
justify-content:space-evenly;
width:100%;
`;


const Title = styled.Text`
font-size:25px;
font-weight:500;
color: #EDB83D;
`;

const Title1 = styled.Text`
font-size:25px;
font-weight:500;
color: #CC2936;
`;

const Titlebar = styled.View`
 width: 100%;
 margin-top: 5px;
 margin-bottom: 5px;
 padding-left: 80px;
 background: black
`;

const Avatar = styled.Image`
width: 44px;
height: 44px;
background:black;
border-radius: 22px;
align-items: center;
position: absolute;
top: 0;
left: 0;
`;

const Name = styled.Text`
 font-size: 20px;
 color: white;
 font-weight: bold;
 align-items: center;
`;

const HeaderText = styled.Text`
  color: #333;
  font-size: 25px;
  margin-top: 5%;
  margin-left: 20px;
  font-weight: bold;
`;

const BodyText = styled.Text`
  color: black;
  font-size: 15px;
  margin: 20px 20px;
`;

const RowStyle = styled.View`
  flex-direction: row;
  width:100%;
`;

const Divide = styled.View`
  background: ${colours.blue};
  height: 1px;
  margin: 10px 20px;
  align-items: center;
`;

const StrengthSubText = styled.Text`
  color: ${colours.green};
  font-size: 20px;
  margin-left:  8%;
  font-weight: bold;
  margin-right:10px;
`;

const Subtitle = styled.Text`
	font-size: 20px;
	color: #333;
	font-weight: 500;
  text-transform: uppercase;
  padding-left:15px;
  padding-top:15px; 
`;

const TouchButton= styled.TouchableOpacity`
width:50%;
padding:10px;
`;