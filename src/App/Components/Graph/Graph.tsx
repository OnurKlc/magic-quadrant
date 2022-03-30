import { XAxis, YAxis, GraphWrapper, AreaLabel, Point, Label, PointWrapper } from "./styles";

export default function Graph() {
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