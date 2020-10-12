// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

  _state: {
      profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: '25', dislike: '2'},
            {id: 2, message: 'It\'s my first post', like: '10', dislike: '4'},
            {id: 3, message: 'It\'s my first post', like: '10', dislike: '4'},
            {id: 4, message: 'It\'s my first post', like: '10', dislike: '4'},
            {id: 5, message: 'It\'s my first post', like: '10', dislike: '4'},
          ],
        newPostText: "it-kamasutra",
       
      },
      messagesPage: {
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'What is your matter?'},
            {id: 3, message: 'Fine, thank you, and you?'}
          ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andryi'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Lev'},
            {id: 5, name: 'Vika'},
          ],
        newMessageBody: "",
      },
      sidebar: {}
  },
  _callSubscriber() {
    console.log('State is changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this.state);
    
  }
}



export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body})




window.state = store;

export default store;