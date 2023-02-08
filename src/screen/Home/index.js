import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = (props) => {
    const nav = props.navigation;
    const route = props.route;
    const name = route.params?.name||'Phạm Trường Giang';
    const old = route.params?.old||18;
    const address = route.params?.address||'Việt Nam';
    const phoneNumber = route.params?.phoneNumber||'0123456789';
    const email = route.params?.email||'Giang@gmail.com';

    return (
        <View style={styles.container}>
            <Button title='Profile'
                onPress={()=>nav.navigate('Profile',
                {name:name,
                old:old,
                phoneNumber:phoneNumber,
                address:address,
                email:email
            })}
            ></Button>
        </View>
    
);}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});