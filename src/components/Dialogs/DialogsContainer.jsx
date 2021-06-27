import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;
//   // let newMessageBody = state.newMessageBody;
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator())
//   };
//   let onNewMessageChange = (body) => {
//     // let body = e.target.value; 
//     props.store.dispatch(updateNewMessageBodyCreator(body))
//   }
//   return <Dialogs 
//     updateNewMessageBody={onNewMessageChange}
//     sendMessage={onSendMessageClick} 
//     dialogsPage={state}
//   />
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;