
import AppRoute from "./page/AppRoute";
import { ThemeProvider } from "./context/ThemeContext";
import EmployeeForm from "./component/form/EmployeeForm";

export default function App() {


  return (
    <ThemeProvider>
    <div style={{ width: 400, margin: "20px auto" }}>
     <AppRoute/>
     <EmployeeForm/>
      
    </div>
    </ThemeProvider>

  );
}
