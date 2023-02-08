import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const EditProfile = (props) => {
    const nav = props.navigation;
    const route = props.route;

    const ten = route.params.name;   
    const tuoi = route.params.old;   
    const diachi = route.params.address;   
    const sdt = route.params.phoneNumber;   
    const mail = route.params.email;   

    const [name, setName] = useState(ten);
    const [old, setOld] = useState(tuoi);
    const [address, setAddress] = useState(diachi);
    const [phoneNumber, setPhoneNumber] = useState(sdt);
    const [email, setEmail] = useState(mail);
    

    return (    
        <View style={style.container}>
            <TextInput style={style.input} 
            placeholder='Name'
            value = {name}
            onChangeText={(text) => setName(text)}></TextInput>

            <TextInput
                style={style.input}
                placeholder="Old"
                keyboardType="numeric"
                value={old.toString()}
                onChangeText={(text) => setOld(text)}
            ></TextInput>
            
            <TextInput style={style.input}
            placeholder='Address' 
            value = {address}
            onChangeText={(text) => setAddress(text)}></TextInput>
            
            <TextInput style={style.input} 
            placeholder='Phone number'
            value = {phoneNumber}
            keyboardType = 'numeric'
            onChangeText={(text) => setPhoneNumber(text)}></TextInput>
            
            <TextInput style={style.input} 
            placeholder='Email'
            value = {email}
            onChangeText={(text) => setEmail(text)}></TextInput>

            <View style={style.footer}>
                <Button title='Hủy'
                onPress={()=> nav.navigate('Profile',
                {name:ten,
                old:tuoi,
                phoneNumber:sdt,
                address:diachi,
                email:mail}
                )}
                />
                <Button title='Lưu'
                onPress={()=> nav.navigate('Home',{
                    name:name,
                    old:old,
                    phoneNumber:phoneNumber,
                    address:address,
                    email:email
                })}
                />
            </View>
            
        </View>
    );
}

export default EditProfile;

const style = StyleSheet.create({
    container:{
        margin: 20,
        flex: 0,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth:1,
        borderRadius: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    footer:{
        justifyContent: 'flex-end',  
        flexDirection:'row',
        padding: 10,
    },
    
});