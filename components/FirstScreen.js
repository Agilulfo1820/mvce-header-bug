import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Title, Icon, Button } from 'native-base'

export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Content>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>First Screen</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 100 }}>
                        <Text onPress={() =>  this.props.navigation.navigate('SecondScreen')}>Go to second screen of the stack</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
