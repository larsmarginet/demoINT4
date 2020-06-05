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


var Painting = createReactClass({

  render: function() {
    return (
      <ViroARScene>
        <ViroImage
            height={4.80}
            width={3.81}
            position={[0, 0, -5]}
            source={require('./res/art.jpg')}
        />
      </ViroARScene>
    );
  },
});

module.exports = Painting;