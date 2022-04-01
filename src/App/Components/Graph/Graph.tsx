import React, { useContext, useRef, useState } from "react";
import { ADD_TO_LIST, Context } from "../../Core/Context";
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
    const [dragging, setDragging] = useState(false)

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        setDragging(true)
        e.stopPropagation()
        let pic = new Image()
        pic.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" //transparent gif, resolves issue with Safari that otherwise does not allow dragging
        pic.style.visibility = 'hidden'
        e.dataTransfer.setDragImage(pic, 0, 0)
    }

    const onDrag = (event: React.DragEvent<HTMLDivElement>, id: string) => {
        if (event.clientX === 0 || event.clientY === 0) {
            setDragging(false)
            return
        }

        let leftOffset = 0
        if (graph.current) {
            leftOffset = graph.current.offsetLeft
        }
        let item = data.find(item => item.id === id)!
        let newXPosition = Math.floor((((event.clientX - leftOffset) / 2) - 100))
        let newYPosition = Math.ceil(-(((event.clientY - 120) / 2) - 100))
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
                    withCircle={dragging}
                    draggable
                    onDragStart={onDragStart}
                    onDrag={(event) => onDrag(event, point.id)}
                    onDragEnd={() => setDragging(false)}
                >
                    <Point />
                    <Label>{point.label}</Label>
                </PointWrapper>
            ))}
        </GraphWrapper>
    )
}