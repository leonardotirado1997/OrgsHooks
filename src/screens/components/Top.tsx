import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { loadTop } from "../../services/loadData";
import logo from "../../assets/logo.png";


class Top extends React.Component {
    state = {
        top: {
            welcome: '',
            caption: '',
        },
        list: []
    }
    updateTop() {
        const back = loadTop();
        this.setState({ top: back })
    }
    componentDidMount() {
        this.updateTop();
    }
    render() {
        return <View style={styles.top}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>{this.state.top.welcome}</Text>
            <Text style={styles.caption}>{this.state.top.caption}</Text>
        </View >
    }
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 30,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 16,
        lineHeight: 26,
    }
})

export default Top;