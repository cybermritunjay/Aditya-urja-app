import React from 'react';
import {
	Icon,
	Text,
	View,
} from 'native-base';
import styles from './styles'

const FormMessage = ({message}) => {
	if (message) {
		return (
            <View style={styles.errorContainer}>
            <Icon name="ios-warning" style={styles.error} />
            <Text style={styles.error}>
                {message}
            </Text>
        </View>
		);
	}
};

export default FormMessage;