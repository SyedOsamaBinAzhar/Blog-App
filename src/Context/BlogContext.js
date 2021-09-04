import React from 'react'
import jsonServer from '../api/jsonServer';
import CreateDataContext from './CreateDataContext';


var blogReducer = (state,action) => {
    switch(action.type){
      case 'get_blogpost' :
        return action.payload
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

const getBlogPosts = (dispatch) => {
  return async() => {
      const response =await jsonServer.get('/blogposts');
      dispatch({type : "get_blogpost" ,payload : response.data})
  }
}

const addBlogPost = (dispatch) => {
  return async (title,content,callback) => {
    await jsonServer.post("/blogposts", {title,content})

    callback(); 
  }
}
const deleteBlogPost = (dispatch) => {
    return async(id) => {
      await jsonServer.delete(`/blogposts/${id}`)
      dispatch({type : 'delete_blogpost', payload : id})
    }
  }
const editBlogPost = (dispatch) => {
    return (id,title,content,callback) => {
      dispatch({type : 'edit_blogpost', payload : {id,title,content}})
      callback()
    }
  }

export const {Context,Provider} = CreateDataContext(blogReducer, {addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts} , 
    []
    )