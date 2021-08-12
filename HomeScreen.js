import React from 'react';
import styled from 'styled-components/native';
import colours from '../components/Colours';
import Navigator from '../App';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import {StyleSheet, View, Text, TouchableOpacity, Button, Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';

export default class HomeScreen extends React.Component{
  render() {
    console.log('homeScreen');
      //navigation for event button
   this.props.navigation
    const pressEvents = () => {
        this.props.navigation.push('EventScreen');
    }
    //navigation for create event button
    this.props.navigation
    const pressCreateEvents = () => {
      this.props.navigation.push('CreateEvent');   
    }
    //navigation for map button
    this.props.navigation
    const pressMap = () => {
      this.props.navigation.push('Map');
    }
    //navigation for profile button
    this.props.navigation
    const pressProfile = () => {
      this.props.navigation.push('ProfileScreen');
    }
//home screen components
    return(    
      <Container>
        <Titlebar>
          <Avatar source={require('../assets/face.jpg')}/>
        <Title>Welcome to, </Title>
        <Name>The Lincoln Student Den</Name>
        </Titlebar>
        <HeaderImage source={require('../assets/MB.jpg')}/>
               <Body>
          <Subtitle>
            Find an Event or Create One?
          </Subtitle>
          <ItemsLayout>

            <TouchButton onPress={pressEvents}>
              <Card cardtitle= 'Find Events' caption='Find Student Events' cardsrc={require('../assets/UoLEvents.jpg')} />
            </TouchButton>

            <TouchButton onPress={pressCreateEvents}>
              <Card cardtitle= 'Create Event' caption='Create a new student event' cardsrc={require('../assets/quack.jpg')} />
            </TouchButton>

            <TouchButton onPress={pressMap}>
              <Card cardtitle= 'View Map' caption='Look at map' cardsrc={require('../assets/map.jpg')} />
            </TouchButton>

            <TouchButton onPress={pressProfile}>
              <Card cardtitle= 'View Profile' caption='Look at user profile' cardsrc={require('../assets/profile.png')} />
            </TouchButton>
            
          </ItemsLayout>
        </Body>
      </Container>
    )
  }
}

//STYLES FOR EACH COMPONENT OF APP
const Container = styled.View`
flex: 1;
background-color: #1d3557;
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

const Titlebar = styled.View`
 width: 100%;
 margin-top: 5px;
 margin-bottom: 5px;
 padding-left: 80px;
 background: #1d3557
`;

const Avatar = styled.Image`
width: 44px;
height: 44px;
background:black;
border-radius: 22px;
margin-left: 20px;
position: absolute;
top: 0;
left: 0;
`;

const Name = styled.Text`
 font-size: 20px;
 color: #D70026;
 font-weight: bold;
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
