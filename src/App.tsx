import { BrowserRouter ,Route } from "react-router-dom";

import { Home } from "./pages/home";

export function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
    </BrowserRouter>
  );
}