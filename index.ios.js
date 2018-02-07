//import a lib to create a component
import React from "react";
import { Text, AppRegistry } from "react-native";
//create a component

const App = () => <Text>Some Text</Text>;

//render that component to the device

//name of app must match up with project name and
//must have at least one component registered to it
AppRegistry.registerComponent("albums", () => App);
