import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import MapView, {Polyline, PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styled from 'styled-components';
import colours from '../components/Colours';
import mapStyle from '../components/mapStyle';
import 'react-native-gesture-handler';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

export default class MapScreen extends React.Component {
    

    state = {
        markers: [],
        coordinates: [
            {name: 'Game Jam', latitude: 53.226711, longitude: -0.546308},
            {name: 'Pre Drinks', latitude: 53.226192, longitude: -0.544589},
            {name: 'Quiz Night', latitude: 53.223687, longitude: -0.546273},
            {name: 'Nandos?', latitude: 53.229880, longitude: -0.545557},
            {name: 'Football Training', latitude: 53.230188, longitude: -0.553110},
            {name: 'Quack and Props', latitude: 53.227131, longitude: -0.545203},
            {name: 'Church Service', latitude: 53.234356, longitude: -0.537403},
            {name: 'Pub Crawl', latitude: 53.229527, longitude: -0.539645},
            {name: 'Me coding this app', latitude: 54.529443, longitude: -6.040277}
        ]
    }
    render() {
        return (
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.container}
            initialRegion={{
                latitude: 53.226710,
                longitude: -0.546309,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            >
                {
                    this.state.coordinates.map(marker => (
                        <Marker
                        key={marker.name}
                        coordinate={{latitude: marker.latitude, longitude:marker.longitude}}
                        >
                        <View style={styles.marker}>
                        <Image style={{width: 20, height: 20}}
                        source={require('../assets/swan.png')} />
                            <Text style={styles.text}>{marker.name}</Text>
                        </View> 
                        </Marker>
                    ))
                }
            </MapView>
    
        );
      }
    }

    const styles = StyleSheet.create({
        map1: {
            height: '100%'
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
            backgroundColor: '#bb1d68',
            height: 60,
        
          },
          container: {
              flex: 1,
          },
        marker: {
            backgroundColor: "#FEFFFE",
            padding: 5,
            borderRadius: 5,
        },
        text: {
            color: "#454545",
        },
    })