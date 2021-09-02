import React, { useContext } from 'react'
import { View,StyleSheet,Text,FlatList, Button, TouchableOpacity } from 'react-native'

import {Context} from '../Context/BlogContext';
import {Feather} from "@expo/vector-icons"
 
const IndexScreen = ({navigation}) => {
    const {state , addBlogPost, deleteBlogPost} = useContext(Context);
        

    return (
        <View>
            <Button title = "Add a blog" onPress={addBlogPost}/>
            <FlatList
            data = {state}
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show',{ id : item.id})}>
                    <View style = {styles.row}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <TouchableOpacity>
                    <Feather style={styles.icon} name="trash" onPress={() => deleteBlogPost(item.id)}/>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row : {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingVertical : 20,
        paddingHorizontal : 10,
        borderTopWidth : 1,
        borderColor : 'grey'
    },
    title : {
        fontSize : 18
    },
    icon : {
        fontSize : 24
    },
    ButtonStyling : {
        backgroundColor: "red",
        fontSize : 30,
        color : "red"
    }
})

export default IndexScreen
