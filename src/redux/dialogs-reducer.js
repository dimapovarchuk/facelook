const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'What is your matter?'},
        {id: 3, message: 'Fine, thank you, and you?'},
        {id: 4, message: 'It\'s friday I very happy!'},
        {id: 5, message: 'I am going to eat!'}
        ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andryi'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Lev'},
        {id: 5, name: 'Vika'},
        ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { message: body}]
            };
        }
        default:
            return state;
        }
}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body})

export default dialogsReducer;