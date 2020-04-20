import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';


//Responsive
import { MediaQueryStyleSheet } from 'react-native-responsive';

const styles = MediaQueryStyleSheet.create(
    {

        header: {
            width: '100%',
            height: '10%',
            borderWidth: 0.5,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
        },
        div: {
            borderWidth: 0,
            width: '33.3%',
            height: '100%',
            marginTop: 5,
        },
        text: {
            fontSize: 17,
            fontWeight: '900',
            color: 'black',
        }
    },
);

export default class extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.div}>
                    <View style={{ justifyContent: 'center', height: '100%', marginLeft: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.openDrawer();
                            }}
                        >
                            <Image
                                source={require('../../assets/menu.png')}
                                style={{ width: 30, height: 35, marginLeft: 5 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.div}>
                    <View style={{ justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                        <Text style={styles.text}>{this.props.title}</Text>
                    </View>
                </View>
                <View style={styles.div}></View>
            </View>
        );
    }
}

