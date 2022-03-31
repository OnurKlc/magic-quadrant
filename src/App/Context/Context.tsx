import React, { createContext, useReducer, Dispatch } from 'react'
import { DataModel } from "../Interfaces";

if (!sessionStorage.getItem('data')) {
    sessionStorage.setItem('data', JSON.stringify([{
        label: '',
        x: 0,
        y: 0,
        id: Math.random().toString(16).slice(2)
    }]))
}
const initialState = JSON.parse(sessionStorage.getItem('data')!)

export const Context = createContext<{
    data: DataModel[];
    dispatch: Dispatch<any>
}>({
    data: initialState,
    dispatch: () => null
})

export const ADD_TO_LIST = 'addToList'
export const REMOVE_FROM_LIST = 'removeFromList'

function reducer(state: DataModel[], action: { type: string; item: DataModel }) {
    switch (action.type) {
        case ADD_TO_LIST:
            const index = state.findIndex((el) => el.id === action.item.id)
            if (index < 0) {
                sessionStorage.setItem('data', JSON.stringify([...state, action.item]))
                return [...state, action.item]
            } else {
                sessionStorage.setItem('data', JSON.stringify([...state]))
                return [...state]
            }
        case REMOVE_FROM_LIST: {
            const index = state.findIndex((el) => el.id === action.item.id)
            if (index > -1) state.splice(index, 1)
            sessionStorage.setItem('data', JSON.stringify(state))
            return [...state]
        }
        default:
            return state
    }
}

export const ContextProvider: React.FC<{}> = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider
            value={{
                data,
                dispatch
            }}>
            {children}
        </Context.Provider>
    )
}