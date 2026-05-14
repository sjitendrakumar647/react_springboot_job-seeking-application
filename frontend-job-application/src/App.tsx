import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/j" element={<h1>hello</h1>} />
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
