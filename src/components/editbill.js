import {useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  axios from 'axios';
import  {useParams} from "react-router-dom";
import { useNavigate} from 'react-router-dom';

const EditBill =()=>{

    const {id} = useParams(); 

    const [billDate, setBillDate] = useState('');
    const [paidDate,setPaidDate] = useState('');
    const [unitConsumed, setUnitConsumed] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/bill/'+id)
        .then(function (response) {
            //console.log(response.data[0]);
            setBillDate(response.data[0].billDate);
            setPaidDate(response.data[0].paidDate);
            setUnitConsumed(response.data[0].unitConsumed);
            setAmount(response.data[0].amount);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[id])

    const editbill=()=>{

        axios.put('http://localhost:5000/'+id+"/edit",{
            billDate: billDate,
            paidDate:paidDate,
            unitConsumed: unitConsumed,
            amount: amount,
        })
        .then(function (response) {
            alert("Edited succesfull!");
            navigate("/");
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
        <h3 style={{justifyContent:"center",textAlign:"center"}}>Edit Bill Deatils</h3>
            <Form.Group className="mb-3" controlId="formbillDate">
                <Form.Label>Select Bill Date</Form.Label>
                <Form.Control value={billDate} onChange={(e)=>setBillDate(e.target.value)} type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formpaidDate">
                <Form.Label>Select Paid Date</Form.Label>
                <Form.Control value ={paidDate} onChange={(e)=>setPaidDate(e.target.value)} type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formunitConsumed">
                <Form.Label>Unit consumed</Form.Label>
                <Form.Control value={unitConsumed} onChange={(e)=>{setUnitConsumed(e.target.value)}} type="text" placeholder="Enterthe unit consumed" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formamount">
                <Form.Label>Amount</Form.Label>
                <Form.Control value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" placeholder="Enter the amount" />
            </Form.Group>
            <Button style={{width:"100%"}} onClick={()=>editbill()} className="mb-3" variant="primary" type="submit">
                EditBill
            </Button>
        </div>
        </>
    )
}

export default EditBill;
