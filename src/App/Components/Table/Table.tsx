import React, { useContext } from "react";
import { TableWrapper, TableHeader, TableRow } from "./styles";
import { Context, ACTION_TYPES } from "../../Core/Context";
import Button from "../Button";
import { DataModel } from "../../Core/Interfaces";

export default function Table() {
    const { data, dispatch } = useContext(Context)

    const checkInputRange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (Number((e.target as HTMLInputElement).value) > 100
            && e.key !== 'Delete'
            && e.key !== 'Backspace'
        ) {
            e.preventDefault();
            (e.target as HTMLInputElement).value = String(100);
        } else if (Number((e.target as HTMLInputElement).value) < -100
            && e.key !== 'Delete'
            && e.key !== 'Backspace'
        ) {
            e.preventDefault();
            (e.target as HTMLInputElement).value = String(-100);
        }
    }

    const checkInteger = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'e' || e.key === '.' || e.key === ',') {
            e.preventDefault()
            return
        }
    }

    const onAddClick = () => {
        const item: DataModel = {
            label: 'New',
            x: 0,
            y: 0,
            withCircle: false,
            id: Math.random().toString(16).slice(2)
        }
        dispatch({ type: ACTION_TYPES.ADD_TO_LIST, payload: item })
    }

    const onDeleteClick = (id: string) => {
        dispatch({ type: ACTION_TYPES.REMOVE_FROM_LIST, payload: id })
    }

    const onInputChange = (value: string | number, key: string, id: string) => {
        if (key === "x" || key === "y") {
            if (value > 100) {
                value = 100
            } else if (value < -100) {
                value = -100
            }
        }
        dispatch({ type: ACTION_TYPES.CHANGE_ITEM, payload: {id, [key]: value} })
    }

    return (
        <TableWrapper>
            <Button text={'Add'} onClick={onAddClick} />
            <TableHeader>
                <div>Label</div>
                <div>Vision</div>
                <div>Ability</div>
                <div>Delete</div>
            </TableHeader>
            {data.map((item: DataModel) => (
                <TableRow key={item.id}>
                    <input
                        type="text"
                        value={item.label}
                        onChange={(e) => onInputChange(e.target.value, "label", item.id)}
                    />
                    <input
                        type="number"
                        max={100}
                        min={-100}
                        step={1}
                        onKeyUp={checkInputRange}
                        onKeyDown={checkInteger}
                        value={item.x}
                        onChange={(e) => onInputChange(e.target.value, "x", item.id)}
                    />
                    <input
                        type="number"
                        max={100}
                        min={-100}
                        step={1}
                        onKeyUp={checkInputRange}
                        onKeyDown={checkInteger}
                        value={item.y}
                        onChange={(e) => onInputChange(e.target.value, "y", item.id)}
                    />
                    <Button text={'Delete'} onClick={() => onDeleteClick(item.id)} />
                </TableRow>
            ))}
        </TableWrapper>
    )
}