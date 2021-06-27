import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12, src: 'https://i.imgur.com/gdbTXyL.jpg' },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: 'manana', likesCount: 12 },
                { id: 4, message: 'banana', likesCount: 11 },
                { id: 5, message: 'lalala', likesCount: 12 },
                { id: 6, message: 'nanana', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }
}

window.store = store;
export default store;