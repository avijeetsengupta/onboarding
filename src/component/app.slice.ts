import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    colorTwo: false,
    colorThree: false,
    colorFour: false,
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
        setData : (state, action: PayloadAction<any>) => {
              state.data = action.payload  
        },
        setColorTwo: (state, action: PayloadAction<any>) => {
            state.colorTwo = action.payload
        },
        setColorThree: (state, action: PayloadAction<any>) => {
            state.colorThree = action.payload;
        },
        setColorFour: (state, action: PayloadAction<any>) => {
            state.colorFour = action.payload;
        }
    }
})
export const {
    setData,
    setColorTwo,
    setColorThree,
    setColorFour,
} = appSlice.actions;
export default appSlice.reducer;
