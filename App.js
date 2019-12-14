/**
 * Bookist application
 * Application for planning and tracking progress while reading books
 * https://github.com/roclimber1/bookist
 *
 * @format
 * @flow
 */

import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import BookList from './src/screens/BookList'
import Home from './src/screens/Home'
import APP_PREFIX from './src/constants/config'

const AppNavigator = createStackNavigator({ 
    Home: { screen: Home },
    BookList: { screen: BookList, path: 'list/:data' },
  },{
    initialRouteName: "Home"
  })

const App = createAppContainer(AppNavigator)
const MainApp = () => <App uriPrefix={APP_PREFIX} />

export default MainApp
