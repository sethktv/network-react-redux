const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Олег' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Маша' },
        { id: 4, name: 'Игорь' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Елена' }
    ],
    messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'хай' },
        { id: 4, message: 'Всем привет!' },
        { id: 5, message: 'Yo' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;