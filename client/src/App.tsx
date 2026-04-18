import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Safety from "@/pages/Safety";
import Eligibility from "@/pages/Eligibility";
import Contact from "@/pages/Contact";
import FAQPage from "@/pages/FAQPage";
import HowItWorksPage from "@/pages/HowItWorksPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/safety" component={Safety} />
      <Route path="/eligibility" component={Eligibility} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
