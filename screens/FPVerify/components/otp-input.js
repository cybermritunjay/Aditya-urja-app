import React, { useState,useRef } from 'react';
import { TextInput,View,Text } from 'react-native';
import { Input, Button } from 'native-base';

import styles from '../styles'

const OtpInputs = (props) => {
    var inputRefs=['','','','']
    const [otpArray,setOtpArray] = useState(['','','',''])
    const onOTPTextChange = (index,value) => {
        if (isNaN(Number(value))) {
            return;
        }
        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);
        props.setOtpfunction(otpArrayCopy.join(''))
        // auto focus to next InputText if value is not blank
        if (value !== '' && index <3) {
            if (index != 3) {
                inputRefs[index+1]._root.focus();
                //secondTextInputRef._root.focus();
            } 
        }
};
const onOTPKeyPress =( index,value) => {
    value=value.nativeEvent.key
        if (value === 'Backspace' && otpArray[index] === '' && index > 0) {
            if (index != 0) {
                inputRefs[index-1]._root.focus()
            }
            if (index > 0) {
                const otpArrayCopy = otpArray.concat();
                otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
                setOtpArray(otpArrayCopy);
                props.setOtpfunction(otpArrayCopy.join(''))
            }
        }

};
    return (
        <View style={styles.otpRow}>
            {[0,1,2,3].map(
                (val,index) => (
                        <Input
                        style={styles.Input}
                        value={otpArray[index]}
                        onKeyPress={(key) =>onOTPKeyPress(index,key)}
                        onChangeText={(key => onOTPTextChange(index,key))}
                        keyboardType='numeric'
                        maxLength={1}
                        autoFocus = {index === 0 ? true : undefined}
                        key={index}
                        ref={ref => inputRefs[index] = ref}
                        />

                    )
            )}

        </View>
    )


}

export default OtpInputs;