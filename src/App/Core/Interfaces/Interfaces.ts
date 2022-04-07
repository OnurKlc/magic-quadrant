import React from "react";

export interface DataModel {
    withCircle: boolean;
    label: string,
    x: number,
    y: number,
    id: string,
    checked: boolean
}

export interface IDispatch {
    type: string,
    item: DataModel
}

export interface IContext {
    data: DataModel[],
    dispatch?: React.Dispatch<IDispatch>
}

export interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
    text: string
}

export interface IPointProps {
    x: number,
    y: number,
    withCircle: boolean,
    checked: boolean
}