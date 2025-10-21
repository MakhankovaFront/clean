import ReactDOM from "react-dom/client";
import InteractiveDemo from "./components/InteractiveDemo";

// Монтируем React компоненты в определенные места
const demoContainer = document.getElementById("react-demo");
if (demoContainer) {
  const root = ReactDOM.createRoot(demoContainer);
  root.render(<InteractiveDemo />);
}
