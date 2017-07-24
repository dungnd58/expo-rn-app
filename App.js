import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Todo from './src/js/todo';

export default class App extends React.Component {
  componentWillMount() {
    console.log("Debuging");
  }
  render() {
    return (
        <Todo />
    );
  }
}