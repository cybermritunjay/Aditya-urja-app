import React from "react";
import {Accordion, Icon } from "native-base";
import {Text, View} from 'react-native'
import styles from '../styles'
var nav;
var data = {}
function HelpLinkContainer(props) {
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
            item.content.map(r => <Text key={r._id} onPress={() => nav.navigate('Help', { helpId: r._id })} style={styles.helpLinks}>{r.title}</Text>)
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