import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

const Profile = (props) => {
    const nav = props.navigation;
    const route = props.route;
    const name = route.params.name;
    const old = route.params.old;
    const address = route.params.address;
    const phoneNumber = route.params.phoneNumber;
    const email = route.params.email;
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.imager} source={{uri:'https://picsum.photos/100'}}/>
                </View>
                
                <View>
                    <Text>Name                : {name}</Text>
                    <Text>Old                     : {old}</Text>
                    <Text>Address            : {address}</Text>
                    <Text>Phone number : {phoneNumber}</Text>
                    <Text>Email                 : {email}</Text>
                </View> 
                
            </View>
            <View style={styles.footer}>
                <Button title='Edit' 
                onPress={()=>nav.navigate('Edit Profile',
                {name:name,
                old:old,
                phoneNumber:phoneNumber,
                address:address,
                email:email}
                )}
                ></Button>
            </View>
        </View>
    );
}

export default Profile;
const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 0,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth:1,
        borderRadius: 20,
    },
    imager:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor: 'black',
        borderRadius:50,
    },
    
    header:{
        alignItems: 'center',
        marginBottom:20,
    },

    footer:{
        justifyContent: "center",
        padding: 16
    }

});