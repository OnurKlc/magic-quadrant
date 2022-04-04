import React, { createContext, useReducer, Dispatch } from 'react'
import { DataModel } from "../Interfaces";

if (!sessionStorage.getItem('data')) {
    sessionStorage.setItem('data', JSON.stringify([{
        label: 'New',
        x: 0,
        y: 0,
        withCircle: false,
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

export const ACTION_TYPES = {
    ADD_TO_LIST: 'addToList',
    REMOVE_FROM_LIST: 'removeFromList',
    ADD_BORDER_TO_POINT: 'addBorder',
    REMOVE_BORDER_FROM_POINT: 'removeBorder',
    CHANGE_ITEM: 'changePosition'
}

function reducer(state: DataModel[], action: { type: string; payload: any }) {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_LIST:
            sessionStorage.setItem('data', JSON.stringify([...state, action.payload.item]))
            return [...state, action.payload.item]
        case ACTION_TYPES.REMOVE_FROM_LIST: {
            const index = state.findIndex((el) => el.id === action.payload)
            if (index > -1) state.splice(index, 1)
            sessionStorage.setItem('data', JSON.stringify(state))
            return [...state]
        }
        case ACTION_TYPES.ADD_BORDER_TO_POINT: {
            const item = state.find((el) => el.id === action.payload)!
            item.withCircle = true
            sessionStorage.setItem('data', JSON.stringify([...state]))
            return [...state]
        }
        case ACTION_TYPES.REMOVE_BORDER_FROM_POINT: {
            const item = state.find((el) => el.id === action.payload)!
            item.withCircle = false
            sessionStorage.setItem('data', JSON.stringify([...state]))
            return [...state]
        }
        case ACTION_TYPES.CHANGE_ITEM: {
            const item = state.find((el) => el.id === action.payload.id)!
            Object.assign(item, action.payload)
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