import AddBill from '../src/components/addbill';
import AllBill from '../src/components/allbills';
import ViewBill from '../src/components/viewbill';
import EditBill from '../src/components/editbill';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <div align="center" style={{display: "flex"}}>
          <Button style={{width:"100%"}} as={Link} to="/" variant="success">View Bills</Button>
          <Button style={{width:"100%"}} as={Link} to="/addbill" variant="warning">Add Bills</Button>
        </div>
        <Routes>
          <Route path="/" exact element={<AllBill />} />
          <Route path="/addbill" exact element={<AddBill />} />
          <Route path="/bill/:id" exact element={<ViewBill />} />
          <Route path="/:id/edit" exact element={<EditBill />} />
        </Routes>
    </Router>
  );
}

export default App;
