import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    AsyncStorage, Text
} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';


const styles = StyleSheet.create({
    stage: {
        backgroundColor: 'gray',
        padding: 20
    },
});



export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profesores: [],
        };
    }

    async componentDidMount() {
        try {
            const token = await AsyncStorage.getItem('toke')
            if (token !== null) {
                // value previously stored
                fetch('http://192.168.0.19/courses/', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Token ' + token
                    },
                })
                    .then(res => res.json())
                    .then((profesores) => {
                        this.setState({
                            profesores: profesores
                        })
                    })
            }
        } catch (e) {
            // error reading value
        }
    }

    contador(con){
        return con++
    }
    render() {
        const con = 0
        const listItems = this.state.profesores.map((profesor, index) =>
             <Section header={`Curso #${index}`} key={profesor.id}>
                <Cell cellStyle="Basic" title="Id: " cellAccessoryView={<Text>{profesor.id}</Text>} />
                <Cell cellStyle="Basic" title="Name: "  cellAccessoryView={<Text>{profesor.name}</Text>}/>
                <Cell cellStyle="Basic" title="Maximo: " cellAccessoryView={<Text>{profesor.maxLength}</Text>} />
                <Cell cellStyle="Basic" title="Minimo: " cellAccessoryView={<Text>{profesor.minLength}</Text>} />
            </Section>
        );
        return (
            <ScrollView contentContainerStyle={styles.stage}>
                <TableView>
                    {listItems}
                </TableView>
            </ScrollView>
        );
    }
}
