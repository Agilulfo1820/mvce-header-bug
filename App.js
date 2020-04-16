import React from 'react';
import { Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {View, Root, StyleProvider} from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

//Screens
import FirstScreen from './components/FirstScren'
import SecondScreen from './components/SecondScreen'

// Configurations and options for the AppTabNavigator
const configurations = {
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: {
      tabBarLabel: 'FirstScreen',
      tabBarIcon: () => (
        <Text>FirstScreen</Text>
      )
    }
  },
  SecondScreen: {
    screen: SecondScreen,
    navigationOptions: {
      tabBarLabel: 'SecondScreen',
      tabBarIcon: () => (
        <Text>SecondScreen</Text>
      )
    }
  },
}

const options = {
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#7991d1',
    inactiveTintColor: '#000',
    style: {
      backgroundColor: '#fff',
      height: 50,
      alignIApptems: "center",
      justifyContent: 'center',
      borderTopColor: '#fff',
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  }
}

// Bottom App tabs
const AppTabNavigator = createBottomTabNavigator(configurations, options)

const RootNavigator = createSwitchNavigator({
  App: AppTabNavigator, // the App stack
})

const AppContainer = createAppContainer(RootNavigator)

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Root>
          <AppContainer />
        </Root>
      </StyleProvider>
    )
  }
}
