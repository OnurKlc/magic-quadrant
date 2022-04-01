import styled from 'styled-components'
import { IPointProps } from "../../Core/Interfaces";

interface AreaLabelProps {
    order: number;
}

export const GraphWrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid ${props => props.theme.DARK_GREY};
  position: relative;
`

export const XAxis = styled.div`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.LIGHT_GREY};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const YAxis = styled.div`
  width: 2px;
  height: 100%;
  background: ${props => props.theme.LIGHT_GREY};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const AreaLabel = styled.div<AreaLabelProps>`
  position: absolute;
  left: ${({ order }) => (order === 1 || order === 3 ? '25%' : '75%')};
  transform: translateX(-50%);
  bottom: ${({ order }) => ((order === 3 || order === 4) && '10px')};
  top: ${({ order }) => ((order === 1 || order === 2) && '10px')};
  background: ${props => props.theme.DARK_BLUE};
  color: ${props => props.theme.WHITE};
  padding: 2px 10px;
  border-radius: 5px;
`

export const PointWrapper = styled.div.attrs<IPointProps>((props) => ({
    style: {
        left: `${(50 + (props.x / 2))}%`,
        bottom: `${(50 + (props.y / 2))}%`,
        border: props.withCircle && '2px solid black',
        borderRadius: props.withCircle && '50%'
    }
}))<IPointProps>`
  position: absolute;
  box-sizing: content-box;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: translate(-50%, 50%);
  cursor: move;
  padding: 5px;
`

export const Point = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${props => props.theme.DARK_BLUE};
`

export const Label = styled.div`
  font-size: 13px;
  color: ${props => props.theme.DARK_BLUE};
  position: absolute;
  right: -8px;
  bottom: -8px;
  max-width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
