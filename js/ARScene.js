'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { ViroARSceneNavigator, ViroCamera, ViroARScene } from 'react-viro';

const arScene = require('./scenes/ImgRecognition.js')


const ARScene = ({test, nav}) => {
    return (
        <>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => nav("home")}>
              <Text style={styles.cancel}>x</Text>
            </TouchableOpacity>
          </View>
          <ViroARSceneNavigator
            ref={ARSceneNav => (test = ARSceneNav)}
            initialScene={{
              scene: arScene,
            }}
            />
          </>
    )
}

const styles = StyleSheet.create({
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

export default ARScene;