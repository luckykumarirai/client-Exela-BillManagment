import AddBill from '../src/components/addbill';
import AllBill from '../src/components/allbills';
import ViewBill from '../src/components/viewbill';
import EditBill from '../src/components/editbill';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
