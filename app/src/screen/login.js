import * as React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { MediaQueryStyleSheet } from 'react-native-responsive';

//Estilos 

const styles = MediaQueryStyleSheet.create(
    {
        main: {
            borderWidth: 1,
            flex: 1,
            backgroundColor: "#eaeaea",
            justifyContent: 'center',
            alignItems: 'center',
        },

        login: {
            width: '98%',
            height: '95%',
            borderWidth: 0,
            flexDirection: 'column',
            alignItems: 'center',
            padding: 20,
        },

        viewImage: {
            width: '100%',
            height: '25%',
            borderWidth: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            marginTop: 20,
            paddingTop: 10
        },
        image: {
            width: '70%',
            height: '200%',
            marginTop: 10,
            marginBottom: 40
        },
        textInput: {
            backgroundColor: 'white',
            paddingLeft: 10,
            margin: 10
        },
        button: {
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
        }
    },
    {

        "@media (max-device-width: 1024) and (max-device-height: 1366)": {
            textInput: {
                width: '60%',
                height: 38,
            },
            button: {
                width: '25%',
                height: '16%',
            },
            buttonText: {
                fontSize: 28,
                color: 'white'
            },
            ano: {
                fontWeight: '800',
                fontSize: 25
            },
            image: {
                width: '60%',
                height: '165%',
            }
        },
        "@media (max-device-width: 768) and (max-device-height: 1024)": {
            textInput: {
                width: '60%',
                height: 38,
            },
            button: {
                width: '25%',
                height: '17%',
            },
            buttonText: {
                fontSize: 19,
                color: 'white'
            },
            ano: {
                fontWeight: '800',
                fontSize: 20
            },
            image: {
                width: '60%',
                height: '165%',
            }
        },
        "@media (max-device-width: 414) and (max-device-height: 823)": {
            textInput: {
                width: '90%',
                height: 38,
            },
            button: {
                width: '35%',
                height: '20%',
            },
            buttonText: {
                fontSize: 18,
                color: 'white'
            },
            ano: {
                fontWeight: '800',
                fontSize: 18
            }
        },
        "@media (max-device-width: 411) and (max-device-height: 736)": {
            textInput: {
                width: '90%',
                height: 38,
            },
            button: {
                width: '35%',
                height: '20%',
            },
            buttonText: {
                fontSize: 18,
                color: 'white'
            },
            ano: {
                fontWeight: '800',
                fontSize: 18
            }
        },
        "@media (max-device-width: 375) and (max-device-height: 812)": {
            textInput: {
                width: '90%',
                height: 38,
            },
            button: {
                width: '30%',
                height: '20%',
            },
            buttonText: {
                fontSize: 17,
                color: 'white'
            },
            ano: {
                fontWeight: '800',
                fontSize: 18
            }
        },
        "@media (max-device-width: 375) and (max-device-height: 667)": {
            textInput: {
                width: '90%',
                height: 38,
            },
            button: {
                width: '40%',
                height: '25%',
            },
            buttonText: {
                fontSize: 16,
                color: 'white'
            },
            ano: {
                fontWeight: '800',
                fontSize: 18
            }
        },
    }
);


//Screen

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <>
                <View style={styles.main}>
                    <View style={styles.login}>
                        <View style={styles.viewImage}>
                            <Image style={styles.image} source={require('../../assets/login.png')} />
                            <TextInput
                                autoCompleteType='username'
                                style={styles.textInput}
                                value={this.state.username}
                                onChangeText={username => this.setState({ username: username })}
                                placeholder='Username'
                                placeholderTextColor='gray'
                                underlineColorAndroid="transparent"
                            />
                            <TextInput
                                autoCompleteType='password'
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password: password })}
                                placeholder='password'
                                placeholderTextColor='gray'
                                secureTextEntry={true}
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    fetch('http://192.168.0.19/token/', {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(
                                            {
                                                username: this.state.username,
                                                password: this.state.password,
                                            }
                                        ),
                                    }).then(response => response.json())
                                        .then(async token => {
                                            this.setState({
                                                username: '',
                                                password: ''
                                            })
                                            try {
                                                await AsyncStorage.setItem('toke', token.token);
                                                await AsyncStorage.setItem('activo', 'true');
                                                await AsyncStorage.setItem('username', this.state.username);
                                                return this.props.navigation.push('Drawer')
                                            } catch (error) {
                                                // Error saving data
                                            }
                                        });
                                }}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Entrar</Text>
                            </TouchableOpacity>
                            <Text style={styles.ano}>2020</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}