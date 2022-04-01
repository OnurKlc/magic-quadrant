import styled from 'styled-components'

export const TableWrapper = styled.div`
  margin: 0 20px;
`

export const TableHeader = styled.div`
  display: flex;
  margin-top: 10px;

  & > div {
    width: 100px;
    text-align: center;
    background: ${props => props.theme.LIGHT_BLUE};
    color: ${props => props.theme.WHITE};
    margin: 0 2px;
    border-radius: 5px;
  }

  & > div:first-of-type {
    width: 200px;
    margin-left: 0;
  }

  & > div:last-of-type {
    margin-right: 0;
  }
`

export const TableRow = styled.div`
  display: flex;
  margin-top: 10px;

  & > * {
    width: 100px;
    text-align: center;
    margin: 0 2px;
    border-radius: 5px;
  }

  & > input:first-of-type {
    width: 200px;
    margin-left: 0;
  }

  button {
    margin-right: 0;
  }
`
