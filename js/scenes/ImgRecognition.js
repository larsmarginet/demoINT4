'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroAmbientLight,
  ViroOmniLight,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
} from 'react-viro';

var createReactClass = require('create-react-class');


var Demo = createReactClass({
  getInitialState() {
    return {
      playAnim: false,
      animateFlower: false
    }
  },

  render: function() {
    return (
      <ViroARScene>

        {/* <ViroLightingEnvironment source={require('./res/qwantani_1k.hdr')}/> */}
  
        <ViroARImageMarker target={"card"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
        <ViroAmbientLight color="#ffffff" />
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('../res/cartoon_flower.obj')}
            resources={[require('../res/cartoon_flower.mtl'),
                        ]}
            type="OBJ"
            onClick={this._toggleButtons}
            animation={{name:"scaleUp", run:this.state.animateFlower,}} />

          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0,-1,0]}
            position={[0, 5, 1]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={.7} />

          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5} height={2.5}
            arShadowReceiver={true} />

        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animateFlower: true,
    })
  }
});

ViroARTrackingTargets.createTargets({
  card : {
    source : require('../res/card.jpg'),
    orientation : "Up",
    physicalWidth : 0.158 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
    scaleUp:{properties:{scaleX:.5, scaleY:.5, scaleZ:.5,},
                  duration: 500, easing: "bounce"}
});

module.exports = Demo;