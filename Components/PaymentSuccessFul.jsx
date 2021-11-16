import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const PaymentSuccessFull = ({navigation}) => {

    const goBack = ()=> {
        navigation.goBack()
    }

    return (
        <SafeAreaView style= {styles.container}>

            <View style = {styles.headingView}>
                <Text style = {styles.headingText}>PAYMENT SUCCESSFUL</Text>
            </View>

            <View style = {styles.loremView}>
                <Text style = {styles.loremText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laudantium obcaecati reiciendis minima pariatur perspiciatis 
                ducimus, earum est cupiditate adipisci hic eveniet 
                consequuntur incidunt tempora quisquam aut. 
                Quod iste distinctio deleniti.
                </Text>
            </View>

            <View style = {styles.ImgBtnView}>
                    <Image style = {styles.HeroImg} source = {require("../assets/3.png")}/>

                    <TouchableOpacity style = {styles.TouchableOpacity}>
                        <Text style = {styles.btnText}>Next</Text>
                    </TouchableOpacity>

            </View>

            <View style = {styles.PaginationView}>
                <View >
                <Text onPress= {goBack} style = {styles.Previous}>Previous</Text>
                </View>
               
                <View style = {styles.Paginators}>
                    <View style = {styles.PaginatorStart}></View>
                    <View style = {styles.PaginatorMiddle}></View>
                    <View style = {styles.PaginatorEnd}></View>
                </View>
                <View>
                <Text style= {styles.Next}></Text>
                </View>
                
            </View>
        </SafeAreaView>
    );
}

export default PaymentSuccessFull;

const styles = StyleSheet.create({

    container: {
        flex: 100,
       
       
    },
    container: {
        flex: 100,
       
       
    },
    container: {
        flex: 100,
       
       
    },
    headingView: {
        flex: 10,
      
   
        
    
    },
    loremView: {
        flex: 30,
     
 
    },

    ImgBtnView: {
        flex: 50,
        justifyContent: "center",
        alignItems: "center",
    
      
    },

    PaginationView: {
        flex: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    
       
    },



    headingText: {
        color:"black",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 10
      
    },

    
    loremText: {
        fontSize: 20,
        color: "grey"
    },

    

    HeroImg: {
        width: 200,
        height:200
    },


    TouchableOpacity: {
       backgroundColor: "#6C63FF",
       borderRadius: 100,
       marginVertical:50
    }
    ,

    btnText: {
        alignSelf: "center",
        paddingVertical: 20,
        paddingHorizontal:70,
        color:"white",
        fontWeight: "bold",
        fontSize: 20,

       
    },
 


    Previous: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 18
    },
    Paginators: {
        flexDirection: "row",
        paddingRight: 35
    },
    PaginatorStart: {
        backgroundColor: "#B7B5DE",
        height: 10,
        width: 10,
        borderRadius:100
       
    },
    PaginatorMiddle: {
        backgroundColor: "#B7B5DE",
        height: 10,
        width: 20,
        borderRadius:100,
        marginHorizontal: 3
   
    },
    PaginatorEnd: {
       
        backgroundColor: "#6C63FF",
        height: 10,
        width: 10,
        borderRadius:100
      
       
    },


    Next: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 18
    },
});