import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home.jsx"
const root = createRoot(document.getElementById('app'))
root.render(<Home />)