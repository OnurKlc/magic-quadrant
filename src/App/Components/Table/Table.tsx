import React, { useContext } from "react";
import { TableHeader, TableRow } from "./styles";
import { ADD_TO_LIST, Context, REMOVE_FROM_LIST } from "../../Context";
import Button from "../Button";
import { DataModel } from "../../Interfaces";

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
        const newItem: DataModel = {
            label: '',
            x: 0,
            y: 0,
            id: Math.random().toString(16).slice(2)
        }
        dispatch({ type: ADD_TO_LIST, item: newItem })
    }

    const onDeleteClick = (item: DataModel) => {
        dispatch({ type: REMOVE_FROM_LIST, item })
    }

    const onInputChange = (value: string | number, key: string, id: string) => {
        if (key === "x" || key === "y") {
            if (value > 100) {
                value = 100
            } else if (value < -100) {
                value = -100
            }
        }
        const changingItem: any = data.find((item: DataModel) => item.id === id)!
        changingItem[key] = value
        dispatch({ type: ADD_TO_LIST, item: changingItem })
    }

    return (
        <div>
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
                    <Button text={'Delete'} onClick={() => onDeleteClick(item)} />
                </TableRow>
            ))}
        </div>
    )
}