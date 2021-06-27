const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Eldan', src: "https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic.png" },
        { id: 2, name: 'Anna', src: "https://i.pinimg.com/originals/6a/73/3e/6a733e5c3452f37699348c4999ce3bab.png" },
        { id: 3, name: 'Dametken', src: "https://qph.fs.quoracdn.net/main-qimg-ae25e9a5de029195078aca0cb83b57b9" },
        { id: 4, name: 'Saltush', src: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png' },
        { id: 5, name: 'Assylzhan', src: '' },
        { id: 6, name: 'Bakhytzhan', src: "https://image.flaticon.com/icons/png/128/4542/4542961.png" }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'Anna, how are you?' },
        { id: 3, message: 'Dametken is at home' },
        { id: 4, message: 'love you' },
        { id: 5, message: 'miss you' },
        { id: 6, message: 'are you sleepping now?' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
        return { 
            ... state,
            newMessageBody: action.body
        };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return { 
                ... state,
                newMessageBody: '',
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;