import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'

const Dialogs = (props) => {
    
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} key={d.id} />;
    } );


    let messagesElements = state.messages.map( m => {
            return <Message message={m.message} id={m.id} key={m.id} />;
        } )
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    
  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                
                <div>{dialogsElements}</div>

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                
            </div>
                <div>
                    <div><textarea  onChange={onNewMessageChange} value={newMessageBody} placeholder={'Enter message!'}></textarea> </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>   
        </div>
    )
}

export default Dialogs;