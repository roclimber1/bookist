import React from 'react'
import { Content, List, ListItem, Text, Body } from 'native-base'

const BookList = props => {
    const { navigation } = props
    const data = navigation.getParam('data')

    return <Content>
      <List>
        <ListItem>
            <Body>
                <Text>BookList: {data}</Text>
            </Body>
        </ListItem>
      </List>
    </Content>
}

export default BookList