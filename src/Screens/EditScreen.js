import React, {useState,useContext} from 'react'
import { View,StyleSheet,Text, Button, TouchableOpacity,TextInput } from 'react-native'
import { Context } from '../Context/BlogContext'

import BlogPostForm from '../Components/BlogPostForm'

const EditScreen = ({navigation}) => {
    const id =navigation.getParam('id');
    const {state,editBlogPost} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
    <BlogPostForm
    initialValues = { {
        title : blogPost.title,
        content : blogPost.content
    }}
    onSubmit = {(title,content) => {
        editBlogPost(id,title,content, () => navigation.pop( ))
    }}
    />
    )
}

const styles = StyleSheet.create({
    input : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : "black",
        marginBottom : 15,
        padding : 5,
        margin : 5
    },
    label : {
        fontSize : 20,
        marginBottom : 10
    },
    marginTop : {
        marginTop : 200
    }
})

export default EditScreen
