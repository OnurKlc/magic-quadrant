import React from "react";
import { TableWrapper, TableHeader, TableRow } from "./styles";
import Button from "../Button";

export default function Table() {

    const checkInputRange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (Number((e.target as HTMLInputElement).value) > 100
            && e.key !== 'Delete'
            && e.key !== 'Backspace'
        ) {
            e.preventDefault();
            (e.target as HTMLInputElement).value = String(100);
        }
        else if (Number((e.target as HTMLInputElement).value) < -100
            && e.key !== 'Delete'
            && e.key !== 'Backspace'
        ) {
            e.preventDefault();
            (e.target as HTMLInputElement).value = String(-100);
        }
    }

    return (
        <TableWrapper>
            <Button text={'Add'} />
            <TableHeader>
                <div>Label</div>
                <div>Vision</div>
                <div>Ability</div>
                <div>Delete</div>
            </TableHeader>
            <TableRow>
                <input type="text" />
                <input type="number" max={100} min={-100} step={1} onKeyUp={checkInputRange} />
                <input type="number" max={100} min={-100} step={1} onKeyUp={checkInputRange} />
                <Button text={'Delete'} />
            </TableRow>
        </TableWrapper>
    )
}