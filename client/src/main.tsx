import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAnalytics } from "./lib/analytics";

// Initialize analytics (GA4, Umami) if environment variables are configured
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
