
import AppRoute from "./page/AppRoute";
import Count from './component/Count/Count';
import Table from './component/table/Table';

export default function App() {


  return (
    <div style={{ width: 400, margin: "20px auto" }}>
     <AppRoute/>
      <Count/>
      <Table/>
    </div>

  );
}
