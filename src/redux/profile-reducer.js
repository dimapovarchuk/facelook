import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: '25', dislike: '2'},
    {id: 2, message: 'It\'s my first post', like: '10', dislike: '4'},
    {id: 3, message: 'It\'s my first post', like: '10', dislike: '4'},
    {id: 4, message: 'It\'s my first post', like: '10', dislike: '4'},
    {id: 5, message: 'It\'s my first post', like: '10', dislike: '4'},
  ],
      
  newPostText: "it-kamasutra",
  profile: null,
  isFetching: true,
  status: "",
};

const profileReducer = (state = initialState, action) =>  {
    switch(action.type) {
      case ADD_POST: {
        let newPost = {
          // id: 5,
          message: state.newPostText,
          like: 0,
          dislike: 0
        };
        return {
          ...state,
          newPostText: '',
          posts: [...state.posts, newPost]
        };
      }
      case UPDATE_NEW_POST_TEXT:{
        return {
          ...state,
          newPostText: action.newText,
        };
      }
      case SET_STATUS:{
        return {
          ...state,
          status: action.status,
        };
      }
      case SET_USER_PROFILE: {
        return { 
          ...state, 
          profile: action.profile, 
        };
      }
      case TOGGLE_IS_FETCHING: {
        return { 
          ...state, 
          isFetching: action.isFetching 
        };
      }
      
      default: {
            return state;
      }
    }
} 

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
}); 
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(response => {
    // debugger;
    dispatch(setStatus(response.data));
}); 
} 

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then(response => {
    if (response.data.resultCode === 0) {
    dispatch(setStatus(response.data));
    }
}); 
} 


export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching})


export default profileReducer;