import React, {Component} from 'react';
import styled from 'styled-components/native';
import colours from '../components/Colours';
import Navigator from '../App';
import Card from '../components/Card';
import {StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator, FlatList, Image} from 'react-native';
import 'react-native-gesture-handler';
import firebase from '../components/Firebase';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import dimensions from '../components/ScreenSize';
import '@firebase/firestore';
import {CheckBox} from 'react-native-elements';

class Gallery extends React.Component{
   constructor() {
       super ();
       //makes collection and orders posts by date
       this.ref = firebase.firestore().collection("Posts").orderBy("date","desc");

       this.unsubscribe = null;
       this.state = {
           isRefreshing: true,
           DATA: null
       };
   }
   
   componentDidMount(){
       //snapp shot
       this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
   }

   onCollectionUpdate = (querySnapshot) => {
       const posts = [];
       querySnapshot.forEach((doc) => {
           const {title, description, image, date} = doc.data();
           posts.push({
            key: doc.id,//use id as key
            doc, // DocumentSnapshot
            title,
            description,
            image,
            date
          });
        });
    
       console.log('update',posts.length);
       this.setState({
           DATA: posts,
           isRefreshing: false,
       });
   }

   componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidCatch(error, info) {
    console.log(error, info.componentStack);
  }
  render () {
    const item = ({ item }) => (
      <View style="" key={item.key}>
         {
        <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
      />
      }
  </View>
    )
      //navigation for create event button
  this.props.navigation
  const pressNewPost = () => {
    this.props.navigation.push('CreateEvent');
  }
     

 if(this.state.DATA != null){
  return(

      <SafeAreaView style={styles.container}>
          {
          this.state.DATA.length == 0 &&
              <Text style={{ padding: 10, color: 'white', marginTop: 40 }}>
                  Sorry there are no posts yet! Click the "Add Post" button below
              </Text>
          }

          <FlatList 
          data={this.state.DATA}
          renderItem={item}
          keyExtractor={item.id}//must be a string
          refreshing={this.state.isRefreshing}
          />
          <View style={styles.navbar}>
              <Ionicons.Button name="ios-add-circle"
              backgroundColor="#e63946"
              size={20}
              onPress={pressNewPost}>
                 Add Post
              </Ionicons.Button>
          </View>
      </SafeAreaView>

    )
   } else{
       return(
          <View 
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <ActivityIndicator size='large' />   
          </View>
       );
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1d3557",
      paddingBottom: 90
    },
    navbar: {
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#e63946',
      height: 60,
  
    },
    editContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      marginBottom: 10,
      padding: 10
  
    },
    btn: {
      padding: 8,
      color: 'white',
      flexGrow: 1,
      width: dimensions.width / 3 - 10,
    },
    whiteText: {
      color: 'white',
    },
    card: {
      backgroundColor: 'red',
      marginBottom: 25
    },
    cardImage: {
      width: '100%',
      height: 300
    },
    cardHeader: {
        padding: 10,
      },
      title: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 30
      },
      copy: {
        color: 'white',
        fontSize: 18
      },
      date: {
        color: colours.green,
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
      }
    });
    


export default Gallery;