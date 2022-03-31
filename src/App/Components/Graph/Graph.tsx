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
    const { data } = useContext(Context)

    return (
        <GraphWrapper>
            {labels.map(label => <AreaLabel key={label.order} order={label.order}>{label.text}</AreaLabel>)}
            <XAxis />
            <YAxis />
            {data.map(point => (
                <PointWrapper key={point.id} x={point.x} y={point.y}>
                    <Point />
                    <Label>{point.label}</Label>
                </PointWrapper>
            ))}
        </GraphWrapper>
    )
}