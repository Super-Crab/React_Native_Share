'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import rootApp from './App/root.js'

AppRegistry.registerComponent('book', () => rootApp);
