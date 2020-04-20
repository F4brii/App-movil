import * as React from 'react';
import { View } from 'react-native';

//components
import Header from '../components/Header';
import Table from '../components/Table2';

//Responsive
import { MediaQueryStyleSheet } from 'react-native-responsive';

const styles = MediaQueryStyleSheet.create(
    {
        main: {
            flex: 1,
            backgroundColor: 'gray',
        },
    }
);



export default class extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Header
                    navigation={this.props.navigation}
                    title='Estudiantes'
                />
                <Table/>
            </View>
        );
    }
}