
import AppRoute from "./page/AppRoute";
import Count from './component/Count/Count';
import Table from './component/table/Table';
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {


  return (
    <ThemeProvider>
    <div style={{ width: 400, margin: "20px auto" }}>
     <AppRoute/>
      <Count/>
      <Table/>
      
    </div>
    </ThemeProvider>

  );
}
