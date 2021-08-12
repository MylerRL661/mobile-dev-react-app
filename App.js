import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import CreateEvent from './screens/CreateEvent';
import Map from './screens/Map';
import ProfileScreen from './screens/ProfileScreen';
import Gallery from './screens/Gallery';
import Header from './components/Header';
import React from 'react';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='HOME' />,
      
      }
    }
  },
  EventScreen: {
    screen: EventScreen,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='EVENTS' />,
      }  
    }
  },
  CreateEvent:{
    screen: CreateEvent,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='CREATE POST' />,
      }
    }
  },
  Map:{
    screen: Map,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='MAP' />,
      }
    }
  },
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='PROFILE' />
      }
    }
  },
  Gallery:{
    screen: Gallery,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='GALLERY VIEW' />
      }
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#F8F5F2', height: 60}
  }
});

export default createAppContainer(HomeStack);