import * as React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, AsyncStorage, BackHandler, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//Navigations
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

//screen 
import Index from '../screen/index';
import Profesores from '../screen/profesores';
import Estudiantes from '../screen/estudiantes';
import Cursos from '../screen/cursos'

//Componets

import Logo from '../components/Logo-Menu'

//Responsive
import { MediaQueryStyleSheet } from 'react-native-responsive';

const styles = MediaQueryStyleSheet.create(
  {
    text: {
      fontSize: 20,
      color: 'white',
      fontWeight: '500'
    }
  }
);


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
    this._retrieveData();
  }

  _retrieveData = async () => {

    try {
      const token = await AsyncStorage.getItem('token');
      const activo = await AsyncStorage.getItem('activo');
      if (token !== null && activo !== 'false') {
        // We have data!!
        this.setState({ token: token });
      }
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        initialRouteName="Index"
        drawerType='front'
        backBehavior='none'
        overlayColor="transparent"
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          borderWidth: 0.25,
          backgroundColor: '#2f353a',
        }}
      >
        <Drawer.Screen
          name="Index"
          component={Index}
          options={{
            drawerLabel: 'Inicio',
            drawerIcon: (() => <Ionicons name="md-home" size={32} color="white" />)
          }}
        />
        <Drawer.Screen
          name="Profesores"
          component={Profesores}
          options={{
            drawerLabel: 'Profesores',
            drawerIcon: (() => <Ionicons name="md-people" size={32} color="white" />)
          }}
        />
        <Drawer.Screen
          name="Estudiantes"
          component={Estudiantes}
          options={{
            drawerLabel: 'Estudiantes',
            drawerIcon: (() => <Ionicons name="md-contacts" size={32} color="white" />)
          }}
        />
        <Drawer.Screen
          name="Cursos"
          component={Cursos}
          options={{
            drawerLabel: 'Cursos',
            drawerIcon: (() => <Ionicons name="md-book" size={32} color="white" />)
          }}
        />
      </Drawer.Navigator>
    );
  }
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Logo />
      <DrawerItemList {...props} labelStyle={styles.text} itemStyle={{ backgroundColor: '#2f353a' }} />
      <Button title="Cerrar seccion" onPress={() => props.navigation.navigate('Login')}/>
    </DrawerContentScrollView>
  );
}