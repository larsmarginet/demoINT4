'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView, Image } from 'react-native';
import { ViroARSceneNavigator, ViroCamera, ViroARScene } from 'react-viro';

import ARScene from './js/ARScene';

const painting = require('./js/Painting.js');


export default class ViroSample extends Component {
  constructor(){
    super();
    this.state = {
      nav : "home",
    }
  }
  
  render() {
    if (this.state.nav === "home") {
      return (
        <SafeAreaView>
          <ScrollView contentContainerStyle={{height: 1000}}>
            <ScrollView horizontal contentContainerStyle={{width: 1500}} scrollEnabled={true}>
              <ImageBackground source={require('./js/res/map.jpg')} style={styles.container} >
                <TouchableOpacity style={styles.paintigBtn} onPress={() => this.setState({nav : "AR"})}>
                  <Image style={styles.paintigImg} source={require('./js/res/art.jpg')}/>
                </TouchableOpacity>
              </ImageBackground>
             </ScrollView>
          </ScrollView>
        </SafeAreaView>
      )
    }

    if (this.state.nav === "AR") {
      return (
        <ARScene nav={() => { this.setState({
            nav : "home"
          })}} test={this.ARSceneNav} />
        );
      }

      if (this.state.nav === "painting") {
        return (
          <>
            <View style={styles.top}>
              <TouchableOpacity onPress={() => {
              this.setState({
                nav : "home"
              })}}>
                <Text style={styles.cancel}>x</Text>
              </TouchableOpacity>
            </View>
            <ViroARSceneNavigator
              ref={ARSceneNav => (this.ARSceneNav = ARSceneNav)}
              initialScene={{
                scene: painting,
              }}
              />
            <View style={styles.bottom}>
              <TouchableOpacity onPress={() => {
                this.ARSceneNav.sceneNavigator.takeScreenshot("picture", true);
              }}>
                <Text style={styles.capture}>capture</Text>
              </TouchableOpacity>
            </View>
            </>
          );
        }
    }
};

const styles = StyleSheet.create({
  scroll: {
    marginHorizontal: 20
  }, 
  container: {
    flex: 1,
    width: 1500, 
    height: 1000
  },
  paintigImg: {
    width: 200,
    height: 250,
    marginLeft: 250, 
    marginTop: 500,
  },
  button: {
    backgroundColor: '#18528F',
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    marginBottom: 16
  }, 
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }, 
  top: {
    padding: 16,
    backgroundColor: '#27C2E6',
    borderBottomColor: '#18528F',
    borderBottomWidth: 5
  },
  bottom: {
    padding: 16,
    backgroundColor: '#27C2E6',
    borderTopColor: '#18528F',
    borderTopWidth: 5, 
    justifyContent: "center",
    alignItems: "center"
  },
  cancel: {
    fontSize: 20,
    fontWeight: "700",
    color: "white"
  }, 
  capture: {
    fontSize: 20,
    fontWeight: "700",
    color: "white"
  }
});
