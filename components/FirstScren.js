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
                <Header transparent>
                    <Left style={{ flex: 1 }}>
                        
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title style={{
                            alignSelf: "center",
                            color: '#000'
                        }}>First Screen Title</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        
                    </Right>
                </Header>
                <Content bounces={false}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>First Screen</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
