import React, { useContext, useRef } from "react";
import { Context, ACTION_TYPES } from "../../Core/Context";
import { GraphWrapper, AreaLabel, XAxis, YAxis, VisionText, ExecuteText, Point, Label, PointWrapper } from "./styles";

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

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
        dispatch({type: ACTION_TYPES.ADD_BORDER_TO_POINT, payload: id})
        e.stopPropagation()
        let pic = new Image()
        pic.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" //transparent gif, resolves issue with Safari that otherwise does not allow dragging
        pic.style.visibility = 'hidden'
        e.dataTransfer.setDragImage(pic, 0, 0)
    }

    const onDrag = (event: React.DragEvent<HTMLDivElement>, id: string) => {
        if (event.clientX === 0 || event.clientY === 0) {
            dispatch({type: ACTION_TYPES.REMOVE_BORDER_FROM_POINT, payload: id })
            return
        }

        let leftOffset = 0
        if (graph.current) {
            leftOffset = graph.current.offsetLeft
        }
        let newXPosition = Math.floor((((event.clientX - leftOffset) / 2) - 100))
        let newYPosition = Math.ceil(-(((event.clientY - 120) / 2) - 100))
        let x = newXPosition > 100 ? 100 : newXPosition < -100 ? -100 : newXPosition
        let y = newYPosition > 100 ? 100 : newYPosition < -100 ? -100 : newYPosition
        dispatch({type: ACTION_TYPES.CHANGE_ITEM, payload: {id, x, y} })
    }

    const onDragEnd = (id: string) => {
        dispatch({type: ACTION_TYPES.REMOVE_BORDER_FROM_POINT, payload: id })
    }

    return (
        <GraphWrapper
            ref={graph}
            onDragOver={(e) => e.preventDefault()}
        >
            <XAxis />
            <YAxis />
            <VisionText>Completeness of vision &rarr;</VisionText>
            <ExecuteText>Ability to execute &rarr;</ExecuteText>
            {labels.map(label => <AreaLabel key={label.order} order={label.order}>{label.text}</AreaLabel>)}
            {data.map(point => (
                <PointWrapper
                    key={point.id}
                    x={point.x}
                    y={point.y}
                    withCircle={point.withCircle}
                    checked={point.checked}
                    draggable
                    onDragStart={(e) => onDragStart(e, point.id)}
                    onDrag={(event) => onDrag(event, point.id)}
                    onDragEnd={() => onDragEnd(point.id)}
                >
                    <Point />
                    <Label>{point.label}</Label>
                </PointWrapper>
            ))}
        </GraphWrapper>
    )
}