import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppCard =( props )=> (
<View style={styles.container}>{props.children}</View>
)

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width:2, height:2 },
        elevation: 8,
        borderRadius: 10,
        marginBottom: 20
    }
})

 