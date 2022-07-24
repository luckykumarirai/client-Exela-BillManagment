import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { Trash,Pencil } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import  {Link,useParams} from "react-router-dom";
import { useNavigate} from 'react-router-dom';

const ViewBill=() =>{

    const {id} = useParams(); 
    const [data,setData] =useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/bill/'+id)
        .then(function (response) {
            console.log(response.data[0]);
            setData(response.data[0]);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[id])

    const deletebill=(id) =>{
        console.log(id);
        axios.get('http://localhost:5000/delete/'+id)
        .then(function (response) {
            alert("succesfull delete!");
            navigate("/");
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    return(
        <>
        <div className="container" style={{marginTop:"5%"}}>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Bill Date</th>
                <th>Paid Date</th>
                <th>Unit Consumed</th>
                <th>Amount</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{data.billDate}</td>
                <td>{data.paidDate}</td>
                <td>{data.unitConsumed}</td>
                <td>{data.amount}</td>
                <td><Button as={Link} to={"/"+data._id+"/edit"}className="btn btn-primary"><Pencil /></Button> <Button onClick={()=>deletebill(data._id)}className="btn btn-danger"><Trash /></Button></td>
                </tr>     
            </tbody>
        </Table>
        </div>
        </>
    )
}
export default ViewBill;