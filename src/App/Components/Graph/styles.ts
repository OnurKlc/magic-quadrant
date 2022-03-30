import styled from 'styled-components'

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

export const PointWrapper = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  z-index: 2;
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
  right: 0;
  bottom: 0;
`
