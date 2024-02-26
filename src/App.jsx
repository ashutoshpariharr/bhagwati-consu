import "./App.css";
import AnimationNav from "./components/navbar/AnimationNav";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import Section from "./components/Section";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AnimationNav />
        <Hero />
        <Section />
      </ErrorBoundary>
    </>
  );
}

export default App;
