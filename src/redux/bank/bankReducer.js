import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    transactions: [],
    balance: 0,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const userSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.user = action.payload;
        },
        depositAmount: (state, action) => {
            state.balance = Number(state.balance) + Number(action.payload);
            const transaction = {
                amount: action.payload,
                balance: state.balance,
                type: "DEBIT",
                details: "Deposited",
                created_at: new Date().toDateString(),
            }
            state.transactions = [...state.transactions, transaction]
        },
        withdrawAmount: (state, action) => {


            state.balance = Number(state.balance) - Number(action.payload);
            const transaction = {
                amount: action.payload,
                balance: state.balance,
                type: "Credit",
                details: "Creadited",
                created_at: new Date().toDateString(),
            }
            state.transactions = [...state.transactions, transaction]

        },
        transferMoney: (state, action) => {

            state.balance = Number(state.balance) - Number(action.payload.amount);
            const transaction = {
                amount: action.payload.amount,
                balance: state.balance,
                type: "Credit",
                details: `Transfered to ${action.payload.email}`,
                created_at: new Date().toDateString(),
            }
            state.transactions = [...state.transactions, transaction]

        },
        userLogout: (state, action) => {

            state.balance = 0;
            state.user = {};
            state.transactions = [];
        },
    }

})

export const { registerUser, depositAmount, withdrawAmount, transferMoney ,userLogout} = userSlice.actions;
export default userSlice.reducer;