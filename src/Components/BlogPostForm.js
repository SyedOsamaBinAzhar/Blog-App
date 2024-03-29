import React, {useState} from "react";
import {View , Text ,StyleSheet,TextInput,Button} from "react-native";

const BlogPostForm = ({onSubmit,initialValues}) => {


    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);
    return (
        <View style={styles.marginTop}>
            <Text style = {styles.label}>Enter Title</Text>
            <TextInput  style = {styles.input} value={title} onChangeText={(title) => setTitle(title)}/>
            <Text style = {styles.label}>Enter Content</Text>
            <TextInput style = {styles.input} value={content} onChangeText={(content) => setContent(content)}/>
            <Button 
            onPress= {() => onSubmit(title,content)}
            title="SAVE BLOG"/>
        </View>
    )
}

BlogPostForm.defaultProps ={
    initialValues : {
        title : '',
        content : ''
    }
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
});

export default BlogPostForm;