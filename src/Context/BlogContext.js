import React from 'react'
import CreateDataContext from './CreateDataContext';


var blogReducer = (state,action) => {
    switch(action.type){
      case 'edit_blogpost' :
        return state.map((blogPost) => {
          return blogPost.id === action.payload.id
          ? action.payload
          : blogPost
        })
        case 'add_blogpost' :
            return [...state, 
                { 
                id : Math.floor(Math.random()* 9999) , 
                title : action.payload.title , 
                content : action.payload.content
            }
        ]
        case 'delete_blogpost' :
            return state.filter((blogPost) => blogPost.id !== action.payload)
    default : return state
    }
}

const addBlogPost = (dispatch) => {
  return (title,content,callback) => {
    dispatch({type : 'add_blogpost' , payload : {title , content} });
    callback();
  }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
      dispatch({type : 'delete_blogpost', payload : id})
    }
  }
const editBlogPost = (dispatch) => {
    return (id,title,content,callback) => {
      dispatch({type : 'edit_blogpost', payload : {id,title,content}})
      callback()
    }
  }

export const {Context,Provider} = CreateDataContext(blogReducer, {addBlogPost,deleteBlogPost,editBlogPost} , 
    [{title : "TEST POST" , content : "TEST CONTENT", id : '1'}])