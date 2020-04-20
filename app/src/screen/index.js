import * as React from 'react';
import { View, Text, Image } from 'react-native';

//components
import Header from '../components/Header';

//Responsive
import { MediaQueryStyleSheet } from 'react-native-responsive';

const styles = MediaQueryStyleSheet.create(
    {
        main: {
            flex: 1,
            backgroundColor: 'gray',
            alignItems: 'center',
            flexDirection: 'column'
        },
        jumbo: {
            width: '95%',
            borderWidth: 0.5,
            marginTop: 20,
            borderRadius: 5,
            padding: 25,
            backgroundColor: '#20262A',
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            borderColor: 'white',
            
        },
        title: {
            color: 'white',
            fontSize: 23,
            marginBottom: 15
        },
        text: {
            color: 'white',
            fontSize: 15,
            textAlign: 'justify'
        }
    }
);



export default class extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Header
                    navigation={this.props.navigation}
                    title='Inicio'
                />
                <View style={styles.jumbo}>
                    <Text style={styles.title}>Bienvenidos</Text>
                    <Text style={styles.text}>Por medio de esta aplicacion podra administrar y gestionar los datos relacionados
                            a la aplicacion de cursos, profesores y estudiantes.</Text>                    
                </View>
                <Image source={require('../../assets/react.png')}/>
            </View>
        );
    }
}