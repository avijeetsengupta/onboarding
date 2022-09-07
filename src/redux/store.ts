import {configureStore } from '@reduxjs/toolkit'
import appReducer from '../component/app.slice'


export const store = configureStore( {
    reducer : {
        app: appReducer,
    }
})

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;