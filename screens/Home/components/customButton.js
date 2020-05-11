import React from 'react';
import {FontAwesome5} from '@expo/vector-icons'
import {TouchableOpacity,View,Text} from 'react-native'
import styles from '../styles';

const CustomButton = ({navigation,name,link,underText,icon}) => {
    return (
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(link)}>
        <View style={styles.buttonIcon}>
            <FontAwesome5 name={icon} color='#002d73' />
        </View>
        <View>
          <Text style={styles.buttonTextPrimary}>{name}</Text>
          <Text style={styles.buttonTextSecendory}>{underText}</Text>
        </View>
      </TouchableOpacity>
    );
};

export default CustomButton;