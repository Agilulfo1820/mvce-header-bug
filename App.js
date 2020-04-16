import React from 'react';
import { Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {View, Root, StyleProvider} from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

//Screens
import FirstScreen from './components/FirstScreen'
import SecondScreen from './components/SecondScreen'
import ThirdScreen from './components/ThirdScreen'
import FourthScreen from './components/FourthScreen'

const FirstStack = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen
  },
  SecondScreen: {
    screen: SecondScreen
  }
},
  {
    headerMode: 'none'
  })

const SecondStack = createStackNavigator({
  ThirdScreen: {
    screen: ThirdScreen
  },
  FourthScreen: {
    screen: FourthScreen
  }
},
  {
    headerMode: 'none'
  })

// Configurations and options for the AppTabNavigator
const configurations = {
  FirstStack: {
    screen: FirstStack,
    navigationOptions: {
      tabBarLabel: 'FirstStack',
      tabBarIcon: () => (
        <Text>FirstStack</Text>
      )
    }
  },
  SecondStack: {
    screen: SecondStack,
    navigationOptions: {
      tabBarLabel: 'SecondStack',
      tabBarIcon: () => (
        <Text>SecondStack</Text>
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
