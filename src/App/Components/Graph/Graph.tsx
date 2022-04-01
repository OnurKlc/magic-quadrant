import React, { useContext, useRef } from "react";
import { ADD_TO_LIST, Context } from "../../Context";
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
    const { data, dispatch } = useContext(Context)
    const graph = useRef<HTMLDivElement>(null)

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, id: string) => {
        event.dataTransfer.dropEffect = "move"
        event.dataTransfer.setData("text/plain", id);
    }

    const onDragEnd = (event: React.DragEvent<HTMLDivElement>, id: string) => {
        let leftOffset = 0
        if (graph.current) {
            leftOffset = graph.current.offsetLeft
        }
        let item = data.find(item => item.id === id)!
        const newXPosition = Math.floor((((event.clientX - leftOffset) / 2) - 100))
        const newYPosition = Math.ceil(-(((event.clientY - 120) / 2) - 100))
        item.x = newXPosition > 100 ? 100 : newXPosition < -100 ? -100 : newXPosition
        item.y = newYPosition > 100 ? 100 : newYPosition < -100 ? -100 : newYPosition
        dispatch({type: ADD_TO_LIST, item })
    }

    return (
        <GraphWrapper
            ref={graph}
            onDragOver={(e) => e.preventDefault()}
        >
            {labels.map(label => <AreaLabel key={label.order} order={label.order}>{label.text}</AreaLabel>)}
            <XAxis />
            <YAxis />
            {data.map(point => (
                <PointWrapper
                    key={point.id}
                    x={point.x}
                    y={point.y}
                    draggable
                    onDragEnter={(event) => onDragStart(event, point.id)}
                    onDragEnd={(event) => onDragEnd(event, point.id)}
                >
                    <Point />
                    <Label>{point.label}</Label>
                </PointWrapper>
            ))}
        </GraphWrapper>
    )
}