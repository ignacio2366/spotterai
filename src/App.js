import "./App.css";
import {
  Table,
  TableHead,
  TableHeader,
} from "./components/Tables.js";
import mockLocation from "./constant/locationData.js";
import TableRowData from "./components/TableData.js";

function App() {
  
  return (
    <div className="App">
      <Table>
        <TableHeader>
          <tr>
            <TableHead>Age</TableHead>
            <TableHead>Pick Up</TableHead>
            <TableHead>DH-P</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Drop Off</TableHead>
            <TableHead>Distance</TableHead>
            <TableHead>Trailer</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Broker</TableHead>
            <TableHead>DTP/CS</TableHead>
            <TableHead>Market Average</TableHead>
            <TableHead>Price</TableHead>
          </tr>
        </TableHeader>
        <TableRowData data={mockLocation}/>
      </Table>
      
    </div>
  );
}

export default App;
