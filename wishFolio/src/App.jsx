import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.widthWrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
