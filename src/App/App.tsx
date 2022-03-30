import React from 'react';
import { Graph, Table } from "./Components";
import { theme } from './Styles';
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <div id="app">
            <ThemeProvider theme={theme}>
                <Graph/>
                <Table/>
            </ThemeProvider>
        </div>
    );
}

export default App;
