import React from 'react';
import { Item, Picker, Icon } from 'native-base';
import {Text, View} from 'react-native'
import styles from '../styles';

export default function InputField(props) {
    const data = props.data
    const name = props.name
    const selectFunction = props.selectFunction;
    if(data) return(<View style={styles.inputView}>
            <Text style={styles.inputText}>{name}<Text style={{ color: 'red' }}>*</Text></Text>
            <Item picker>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder={"Select " + name}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    onValueChange={(itemValue, itemIndex) => selectFunction(itemValue)}
                    selectedValue={props.selection || 0}
                >
                    
                    <Picker.Item key={'unselectable'} label={"Select" + name} value={0} />

                    {data.map((val) => <Picker.Item key={val.id} label={val.name} value={val.id} />)}

                </Picker>
            </Item>
        </View>
    )
};