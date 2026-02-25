import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Layout & Pages
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Behandelmethoden from "@/pages/behandelmethoden";
import About from "@/pages/about";
import Tarieven from "@/pages/tarieven";
import Contact from "@/pages/contact";
import LaunchChecklist from "@/pages/launch-checklist";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/methoden" component={Behandelmethoden} />
          <Route path="/about" component={About} />
          <Route path="/tarieven" component={Tarieven} />
          <Route path="/contact" component={Contact} />
          <Route path="/checklist" component={LaunchChecklist} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
