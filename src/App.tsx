import { Header } from "./components/Header";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <div className="min-h-screen bg-pf-petrol-1 dark:bg-pf-petrol-11 flex flex-col font-grostek" style={{ backgroundColor: "#eef6f6" }}>
      {/* Header */}
      <Header />

      {/* Spacer below header */}
      <div className="h-12 bg-pf-petrol-1 dark:bg-pf-petrol-11 shrink-0" style={{ backgroundColor: "#eef6f6" }} />

      {/* Main content area */}
      <div className="flex-grow bg-pf-petrol-1 dark:bg-pf-petrol-11 px-2 sm:px-5 pt-5 pb-32" style={{ backgroundColor: "#eef6f6" }}>
        <main className="flex flex-col flex-1">
          <LoginPage />
        </main>
      </div>
    </div>
  );
}

export default App;
