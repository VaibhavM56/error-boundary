import logo from "./logo.svg";
import "./App.css";
import PersonList from "./components/PersonList";
import PersonDetail from "./components/PersonDetail";
import ErrorBoundary from "./error-boundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PersonDetail />
        <PersonList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
