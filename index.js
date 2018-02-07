//import a lib to create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
//create a component

const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={"Albums!"} />
			<AlbumList />
		</View>
	);
};

//render that component to the device

//name of app must match up with project name and
//must have at least one component registered to it
AppRegistry.registerComponent("albums", () => App);
