import React from 'react';
import { Item, Icon } from 'native-base';
import { Text, View, Platform } from 'react-native'
import styles from '../styles';
import {Picker,PickerIOS,ActionSheetIOS} from 'react-native'

export default function InputField(props) {
    const data = props.data
    const name = props.name
    const selectFunction = props.selectFunction;
    if (data) return (<View style={styles.inputView}>
        <Text style={styles.inputText}>{name}<Text style={{ color: 'red' }}>*</Text></Text>
        <View style={{borderWidth:1,borderStyle:'solid',borderColor:'#ccc'}}>
            {(Platform.OS === 'ios')?(<PickerIOS
        
                onValueChange={(itemValue, itemIndex) => selectFunction(itemValue)}
                selectedValue={props.selection || 0}
            >

                <PickerIOS.Item key={'unselectable'} label={"Select" + name} value={0} />

                {data.map((val) => <PickerIOS.Item key={val.id} label={val.name} value={val.id} />)}

            </PickerIOS>

            ):(<Picker
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => selectFunction(itemValue)}
                selectedValue={props.selection || 0}
            >

                <Picker.Item key={'unselectable'} label={"Select" + name} value={0} />

                {data.map((val) => <Picker.Item key={val.id} label={val.name} value={val.id} />)}

            </Picker>
            )}
            </View>
    </View>
    )
};