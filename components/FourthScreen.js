import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Title, Icon, Button } from 'native-base'

export default class FourthScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header transparent>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() =>  this.props.navigation.navigate('ThirdScreen')}>
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title style={{
                            alignSelf: "center",
                            color: '#000'
                        }}>Fourth Screen Title</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>

                    </Right>
                </Header>
                <Content bounces={false}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>Fourth Screen</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
