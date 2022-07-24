import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const AddBill =()=>{

    const [billDate, setBillDate] = useState('');
    const [paidDate,setPaidDate] = useState('');
    const [unitConsumed, setUnitConsumed] = useState('');
    const [amount, setAmount] = useState('');

    const handlesubmit=()=>{

        axios.post(process.env.REACT_APP_SERVER_URL,{
            billDate: billDate,
            paidDate:paidDate,
            unitConsumed: unitConsumed,
            amount: amount,
        })
        .then(function (response) {
            alert("added succesfull!");
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
        console.log(billDate,paidDate,unitConsumed,amount)
    }

    return(
        <>
        <div className="container" style={{padding:"2%",marginTop:"5%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <h3 style={{justifyContent:"center",textAlign:"center"}}>Add Bill Deatils</h3>
            <Form.Group className="mb-3" controlId="formbillDate">
                <Form.Label>Select Bill Date</Form.Label>
                <Form.Control onChange={(e)=>setBillDate(e.target.value)} type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formpaidDate">
                <Form.Label>Select Paid Date</Form.Label>
                <Form.Control onChange={(e)=>setPaidDate(e.target.value)} type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formunitConsumed">
                <Form.Label>Unit consumed</Form.Label>
                <Form.Control onChange={(e)=>{setUnitConsumed(e.target.value)}} type="text" placeholder="Enterthe unit consumed" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formamount">
                <Form.Label>Amount</Form.Label>
                <Form.Control onChange={(e)=>setAmount(e.target.value)} type="text" placeholder="Enter the amount" />
            </Form.Group>
            <Button onClick={()=>handlesubmit()} className="mb-3" style={{width:"100%"}} variant="primary" type="submit">
                AddBill
            </Button>
        </div>
        </>
    )
}

export default AddBill;
