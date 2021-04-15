export const AppReducer =  (state, action) => {
    console.log(state,action)
    switch(action.type) {
        case 'GET_TRANSACTION':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter((transaction) => transaction._id !== action.payload)
        }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            // eslint-disable-next-line
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default AppReducer