import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import bridgesApple from './BridgesLogo2c.jpg';
import bridgesWords from './BridgesWORDSonly2c.jpg';

import HomePage from './HomePage';
import BusSchedule from './BusSchedule';
import AddCode from './AddCode';
import CareerInfo from './CareerInfo';
import BusinessesPage from './BusinessesPage';
import OneBusiness from './OneBusiness';
import ProfilePage from './ProfilePage';


import Tabs from 'react-native-tabs';


export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'ProfilePage',
    };
  }
  renderPage() {
      switch (this.state.page) {
      case 'HomePage':
        return <View><HomePage /></View>;

      case 'BusinessesPage':
        return <View><BusinessesPage /></View>;

      case 'CareerInfo':
        return <View><CareerInfo /></View>;

      case 'BusSchedule':
        return <View><BusSchedule /></View>;

      case 'AddCode':
        return <View><AddCode /></View>;

      default:
        return <View><ProfilePage /></View>;
      }
    };

    onTabSelect(e) {
      console.log(e.props.name);
      this.setState({page:e.props.name})
    }
  render() {
    return (
      <View>
        <View style={{borderBottomColor:'#88B467'}}>
          <View style={{flexDirection:'row', justifyContent:'flex-start',borderBottomWidth:1, borderBottomColor:'#88B467'}}>
            <Image source={bridgesApple} style={{height:60, width:120, }}></Image>
            <Image source={bridgesWords} style={{height:40, width:120, padding: 0, marginTop:20, marginLeft:5}}></Image>
          </View>
        </View>
        <View style={styles.navContent}>
          <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                onSelect={this.onTabSelect.bind(this)}>
              <Text name="HomePage"><FAIcon key='first' style={styles.navIcons} selectedIconStyle={styles.navIconsTwo} type='icon' name='calendar' size={20}/></Text>
              <Text name="BusinessesPage"><Icon style={styles.navIcons} selectedIconStyle={styles.navIconsTwo} type='icon' name='ios-briefcase' size={20}/></Text>
              <Text name="CareerInfo"><FAIcon style={styles.navIcons} selectedIconStyle={styles.navIconsTwo} type='icon' name='map' size={20}/></Text>
              <Text name="BusSchedule"><FAIcon style={styles.navIcons} selectedIconStyle={styles.navIconsTwo} type='icon' name='bus' size={20}/></Text>
              <Text name="AddCode"><FAIcon style={styles.navIcons} selectedIconStyle={styles.navIconsTwo} type='icon' name='gift' size={20}/></Text>
          </Tabs>
        </View>
        {this.renderPage()}
      </View>
   );
  }
}
