import { useContext } from "react";
import { Context } from "../../Context";
import { XAxis, YAxis, GraphWrapper, AreaLabel, Point, Label, PointWrapper } from "./styles";

const labels = [
    {
        order: 1,
        text: 'Challengers'
    },
    {
        order: 2,
        text: 'Leaders'
    },
    {
        order: 3,
        text: 'Niche Players'
    },
    {
        order: 4,
        text: 'Visionaries'
    }
]

export default function Graph() {
    return (
        <GraphWrapper>
            {labels.map(label => <AreaLabel key={label.order} order={label.order}>{label.text}</AreaLabel>)}
            <XAxis/>
            <YAxis/>
            <PointWrapper>
                <Point/>
                <Label>3</Label>
            </PointWrapper>
        </GraphWrapper>
    )
}