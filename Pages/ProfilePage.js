import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';
import { Router, Scene, Actions } from 'react-native-router-flux';


import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';


export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      newItemValue:'',
      entry: {
        name:'',
        school:'',
        phone:'',
        email:'',
      }
    }
  }

  onStudentDataChange() {

  }

  onInputSubmit(e) {
    return (<View><Text>Thanks!</Text></View>)
  }
  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467', height: 600}}>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, margin:40, width:300}}>We just need a couple things to get you registered for the giveaways!</Text>
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            keyboardType='default'
            style={styles.profileInput}
            // value={this.state.entry.name}
            placeholderTextColor='#88B467'
            placeholder="Name"
            returnKeyType="next"
            onChangeText={name => this.setState({name})}
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus();
            }}
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            ref="SecondInput"
            keyboardType='default'
            style={styles.profileInput}
            // value={this.state.entry.school}
            placeholderTextColor='#88B467'
            placeholder="School"
            returnKeyType='next'
            onSubmitEditing={(event) => {
              this.refs.ThirdInput.focus();
            }}
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            ref="ThirdInput"
            keyboardType='numbers-and-punctuation'
            style={styles.profileInput}
            // value={this.state.entry.phone}
            placeholderTextColor='#88B467'
            placeholder="Phone"
            returnKeyType='next'
            onSubmitEditing={(event) => {
              this.refs.FourthInput.focus();
            }}
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            ref="FourthInput"
            keyboardType='email-address'
            style={styles.profileInput}
            // value={this.state.entry.email}
            placeholderTextColor='#88B467'
            placeholder="Email"
            returnKeyType='done'
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <Button
            containerStyle={{backgroundColor:'#43781C', padding:10, width:180, marginTop:10 }}
            style={{fontSize: 14, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={this.onInputSubmit.bind(this)}>
            Lets get to exploring!
          </Button>
        </View>
      </ScrollView>
    )
  }
}
