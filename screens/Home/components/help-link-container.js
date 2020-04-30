import React from "react";
import {Accordion, Icon, Text, View } from "native-base";
import styles from '../styles'
var nav;
var data = {}
function HelpLinkContainer(props) {
    console.log("Props From Help-Parent inside Home", props)
    nav = props.navigation
    data = [{
        title: props.title,
        content: props.dat
    }]

    const _renderHeader = (item, expanded) => {
        return (
            <View style={styles.helpHeaderMain}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.helpHeaderSeconery}>
                        {expanded
                            ? <Icon style={{ fontSize: 12 }} name="minus" type='FontAwesome5' />
                            : <Icon style={{ fontSize: 12 }} name="plus" type='FontAwesome5' />}
                    </View>
                    <Text style={{ fontWeight: "900", fontSize: 20, fontFamily: 'latoBold', color: '#002d73' }}>
                        {" "}{item.title}
                    </Text>
                </View>
            </View>
        );
    };
    const _renderContent = (item) => {
        //console.log(item)
        return (
            item.content.map(r => <Text onPress={() => nav.navigate('Help', { helpId: r._id })} style={{ backgroundColor: "#fff", marginLeft: 18, padding: 10, fontStyle: "italic", }}>{r.title}</Text>)
        );
    }
    return (
        <View padder>
            <Accordion dataArray={data}
                style={{ borderWidth: 0 }}
                animation={true}
                expanded={true}
                renderHeader={_renderHeader}
                renderContent={_renderContent} />
            <Text>{data.title}</Text>
        </View>
    );
};
export default HelpLinkContainer;