import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MaintenancePage from "./pages/TakenDown";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={MaintenancePage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      {/* Fallback 404 Route */}
      <Route component={NotFound} />
    </Switch>
  );
}
