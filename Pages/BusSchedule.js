import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import StatusBarBackground from './StatusBarBackground';
import styles from './Styles';
import exitMap from './ExitDoorMap.jpg';
import SearchBar from './SearchBar';

export default class BusSchedule extends Component {
  constructor(props) {
    super(props)
    this.state ={
      newItemValue: '',
      schools:[
        {name:'Aitkin', arrival:'9:15am', departure:'12pm', door:'South'},
        {name:'Bertha-Hewitt', arrival:'9:15am', departure:'12:30pm', door:'South'},
        {name:'Brainerd', arrival:'10am', departure:'12:30pm', door:'West'},
        {name:'Browerville', arrival:'9:30am', departure:'12pm', door:'South'},
        {name:'Crosby-Ironton', arrival:'9am', departure:'12:15pm', door:'North'},
        {name:'Eagle Valley', arrival:'9:30am', departure:'12pm', door:'South'},
        {name:'Isle', arrival:'9:30am', departure:'12:30pm', door:'South'},
        {name:'Little Falls', arrival:'9:15am', departure:'12pm', door:'North'},
        {name:'Long Prairie-Grey Eagle', arrival:'9:15am', departure:'12:15pm', door:'South'},
        {name:'Menahga', arrival:'10am', departure:'12:30pm', door:'South'},
        {name:'Onamia', arrival:'9:45am', departure:'11pm', door:'South'},
        {name:'Pequot Lakes', arrival:'9:15am', departure:'12pm', door:'South'},
        {name:'Pierz', arrival:'9am', departure:'12:30pm', door:'South'},
        {name:'Pillager', arrival:'9:45am', departure:'12:30pm', door:'South'},
        {name:'Pine River-Backus', arrival:'9:15am', departure:'12:30pm', door:'South'},
        {name:'Sebeka', arrival:'10:15am', departure:'12:15pm', door:'South'},
        {name:'Staples-Motley', arrival:'9:15am', departure:'12:15pm', door:'South'},
        {name:'Swanville', arrival:'9:30am', departure:'12:30pm', door:'South'},
        {name:'Upsala', arrival:'9:30am', departure:'12:30pm', door:'South'},
        {name:'Verndale', arrival:'8:45am', departure:'12:30pm', door:'South'},

      ]
    }
  }

  // onSchoolSearch(text){
  //   this.setState({
  //     schools: text.value,
  //   })
  // }
  // onSearchSubmit(e) {
  //   e.preventDefault();
  //   var newSchool = this.state.schools.name.reduce();
  //       this.setState({
  //         schools: newSchool,
  //         newItemValue: ''
  //       })
  //   }

  render() {
    return(
        <ScrollView style={{backgroundColor:'#88B467'}}>
          <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <TextInput
              onChangeText={this.state.schools.filter((name) => {})}
              keyboardType='default'
              style={styles.inputSearch}
              value={this.state.newItemValue}
              placeholderTextColor='#88B467'
              placeholder="Search for school..." />
          </View>
          <View style={{flex:1, margin:10, justifyContent:'space-around'}}>
            <Text style={styles.schoolListTitle}>School  -  Arrival  -  Departure  -  Exit Door</Text>
            {this.state.schools.map((school, index) =>{
              return (<View key={index}><Text style={styles.schoolList} key={index}>{school.name}  -  {school.arrival}  -  {school.departure}  -  {school.door}</Text></View>)
            })}
          </View>
            <View style={{ marginBottom:130,}}>
              <Image source={exitMap} style={styles.exitMap}></Image>
            </View>
        </ScrollView>
    )
  }
}
