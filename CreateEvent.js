import React, {Component} from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import Navigator from '../App';
import Card from '../components/Card';
import {StyleSheet, ScrollView, ActivityIndicator, View, TextInput, TouchableOpacity, Alert, Image, Button} from 'react-native';
import firebase from '../components/Firebase';
import colours from '../components/Colours';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';
import '@firebase/firestore';

class CreateEvent extends React.Component{
    constructor() {
        super();
        this.ref = firebase.firestore().collection("Posts");
        this.state = {
            title: '',
            description: '',
            isLoading: false,
            image: null,
            date: '',
        };
    }

    //access camera roll permission
    componentDidMount() {
        this.getPermissionAsync();
        console.log('hey there');
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                Alert.alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    //launch and use the image picker
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, //types allowed
            allowsEditing: true, //able to edit pics, uses native editing
            aspect: [4, 3],
            base64: true, //gets a base 64 string to save in image field
            quality: 0.5 //reduced quality
        });
        //if image is accepted
        if(!result.cancelled) {
            //make data:image attribute the base64 string
            //easier to render an image element
            let selectedimage = `data:image/jpg;base64,${result.base64}`
            this.setState({image: selectedimage});
        }
    };

    //dynamically change values fro input field
    updateTextInput = (text, field) => {
        const state = this.state
        state[field] = text;

        //update the state
        this.setState(state);
    }

    //save post 
    savePost() {
        //included otherwise an error will occur when pulling data
        //unless the field has been checked if it exists each time
        if(this.state.title) {
            console.log('save');
            this.setState({
                isLoading: true,

            });

            //we use firestore.Timestamp which needs an object of secs and milli secs
            let tstamp = firebase.firestore.Timestamp.fromDate(new Date());
            console.log(tstamp);
            //add to firebase
            this.ref.add({
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                date: tstamp
            }).then((docRef) => {
                //clear state
                this.setState({
                    title: '',
                    description: '',
                    isLoading: false,
                });
                //go back a page
                this.props.navigation.goBack();
            })
            .catch((error) => {
                console.error("Error adding document:", error);
                this.setState({
                    isLoading: false,
                });
            });
        }else{
            Alert.alert('Sorry, we need at least a title!');
        }
    }
    
    render() {

        if(this.state.isLoading) {
            return(
             <View style={styles.activity}>
                <ActivityIndicator size="large" color={colours.green} />
             </View>   
            )
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainer}>
                    {this.state.image ? (
                        <Image
                        source={{uri:this.state.image}}
                        style={{width: '100%', height: 300}}
                        />
                    ):(
                        <Ionicons.Button
                        name="ios-images"
                        backgroundColor="#e63946"
                        size={20}
                        onPress={() => this._pickImage()}>
                            Upload Image
                        </Ionicons.Button>
                    )}
                </View>
                <View style={styles.subContainer}>
                    <TextInput
                    style={styles.whiteText}
                    placeholder={'Title'}
                    placeholderTextColor={'#eee'}
                    value={this.state.title}
                    onChangeText={(text) => this.updateTextInput(text, 'title')}
                    />
                </View>
                <View style={styles.subContainer}>
                    <TextInput
                    style={styles.whiteText}
                    multiline={true}
                    numberOfLines={4}
                    placeholder={'Description'}
                    placeholderTextColor={'#eee'}
                    value={this.state.description}
                    onChangeText={(text) => this.updateTextInput(text, 'description')}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Ionicons.Button
                    name="md-cloud-upload"
                    backgroundColor="#e63946"
                    size={20}
                    onPress={() => this.savePost()}>
                        Save
                    </Ionicons.Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#1d3557"
    },
    subContainer: {
      flex: 1,
      marginBottom: 10,
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: colours.green,
      paddingBottom: 20
    },
    whiteText: {
      color: 'white',
      fontWeight: "bold",
      fontSize: 20
    },
    activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colours.background
    },
    button: {
      backgroundColor: colours.green,
      color: "white"
    }
  })
  

export default CreateEvent;