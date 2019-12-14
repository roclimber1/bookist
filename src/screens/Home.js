import React from 'react'
import { Linking, Alert } from 'react-native'
import { Content, List, ListItem, Text, Body } from 'native-base'
  
const handlePressTestBtn = () => openUrl('myapp://myapp/test/888')

const openUrl = url => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url)
        } else {
            console.log("Don't know how to open URI: " + url)
            Alert.alert(
                'Error',
                `Don't know how to open URI: ${url}`
                )
        }
    })
}

const Home = (props) => {
    const { navigation } = props

	return (<Content>
	  <List>
	    <ListItem itemDivider>
	        <Body>
	            <Text>Bookist application</Text>
	        </Body>
	    </ListItem>
	    <ListItem onPress={() => navigation.navigate('BookList', { data: 665 })}>
	        <Body>
	            <Text>Go to BookList</Text>
	        </Body>
	    </ListItem>
	    <ListItem onPress={() => handlePressTestBtn()}>
	        <Body>
	            <Text>Go to Tst application</Text>
	        </Body>
	    </ListItem>
	  </List>
	</Content>)
}

Home.navigationOptions = { title: 'Home' }

export default Home