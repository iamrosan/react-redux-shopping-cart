// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({  //createSlice takes a object
//     name:'cart',                //name,initialstate,reducer--> pure functions
//     initialState:[],
//     reducers:{ //doest change outside data and changes the state
//         add(state,action){
//             //redux --> return [...state, action.payload]
//                 state.push(action.payload);
//         },
//         remove(){
//                 return state.filter((item)=>item.id!== action.payload);
//         },
//     },
// })

// export const {add, remove} = cartSlice.actions;

// export default cartSlice.reducer;

// const { createSlice } = require('@reduxjs/toolkit');

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         add(state, action) {
//             state.push(action.payload);
//         },
//         remove(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;



// useState
// const [data, setData]=useState(initialState)
// const reducer = (state, action)=>{

// }
// const [state,dispatch]=useReducer(reducer, initialData)




const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;


