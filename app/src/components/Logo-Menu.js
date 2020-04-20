import * as React from 'react';
import { Text, View, Image} from 'react-native';

//Responsive
import { MediaQueryStyleSheet } from 'react-native-responsive';

const styles = MediaQueryStyleSheet.create(
    {
        main: {
            width: '100%',
            height: '45%',
            borderWidth: 0.5,
            backgroundColor: '#20262A',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: 10
        },
        containerImage: {
            height: 150,
            width: 150,
            borderRadius: 80,
            borderWidth: 2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row', 
        },
        image: {
            width: '60%',
            height: '60%',
            margin: 5
        }

    }
);

export default class extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.containerImage}>
                    <Image source={require('../../assets/user.png')} style={styles.image}/>
                </View>
            </View>
        );
    }
}