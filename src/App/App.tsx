import React from 'react';
import { ContextProvider } from './Core/Context'
import { Graph, Table } from "./Components";
import { theme } from './Assets/Styles';
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <div id="app">
            <ThemeProvider theme={theme}>
                <ContextProvider>
                    <Graph />
                    <Table />
                </ContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
