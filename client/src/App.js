import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
      <MantineProvider theme={theme}>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/auth" element={<AuthPage/>} />
              {/* <Route path="*" element={<Page404/>} /> */}
          </Routes>
        </BrowserRouter>
      </MantineProvider>
  );
}

export default App;
