import { Dispatch } from "@reduxjs/toolkit"
import { setColorTwo, setData } from "./app.slice"

export const getData = (data:string) => {
    return (dispatch : Dispatch) => {
        dispatch(setData(data))
    }
}
export const getColor = (data: boolean) =>{
    return (dispatch : Dispatch) => {
        dispatch(setColorTwo(data))
    }
}