import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { ArrowDown, Eye ,ArrowUp} from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import  {Link} from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const AllBill=() =>{
    const [data,setData] =useState('');
    const [sorting_order,setSortingOrder] = useState('ASC');
    const [page, setPage] = useState(1);
    const [pagesperpage,setPagesperpage] = useState(1);

    useEffect(()=>{
        axios.get('http://localhost:5000/')
        .then(function (response) {
            console.log(response.data.length);
            setData(response.data);
            setPagesperpage(Math.ceil(response.data.length/9));
        })
        .catch(function (error) {
            console.log(error);
        })
    },[]);

    const sorting = (col)=>{
        if(sorting_order==='ASC'){
          const sorted=([...data].sort((a,b)=>
          a[col].toLowerCase()>b[col].toLowerCase() ?1:-1));
          setData(sorted);
          setSortingOrder('DES');
        }
        if(sorting_order==='DES'){
          const sorted=([...data].sort((a,b)=>
          a[col].toLowerCase()<b[col].toLowerCase() ?1:-1));
          setData(sorted);
          setSortingOrder('ASC');
        }
    }
    
    return(
        <>
        <div className="container" style={{marginTop:"5%"}}>
            <h1>All Bill</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th style={{cursor: 'pointer'}} onClick={()=>sorting("billDate")}><ArrowDown /><ArrowUp />Bill Date</th>
                <th style={{cursor: 'pointer'}} onClick={()=>sorting("billDate")}><ArrowDown /><ArrowUp />Paid Date</th>
                <th style={{cursor: 'pointer'}} onClick={()=>sorting("billDate")}><ArrowDown /><ArrowUp />Unit Consumed</th>
                <th style={{cursor: 'pointer'}} onClick={()=>sorting("billDate")}><ArrowDown /><ArrowUp />Amount</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && 
                data.map((item,ind) =>{
                    if((ind+1)>(9*(page-1)) && (ind+1)<=(9*page))
                    return(
                        <>
                            <tr key={ind}>
                            <td>{item.billDate}</td>
                            <td>{item.paidDate}</td>
                            <td>{item.unitConsumed}</td>
                            <td>{item.amount}</td>
                            <td> <Button as={Link} to={"/bill/"+item._id}className="btn btn-success"><Eye /></Button></td>
                            </tr>
                        </>
                    )
                    else{
                        return null;
                    }
                }
                )}
            </tbody>
            </Table>
            <div align="center">
                <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    {pagesperpage && 
                    [...Array(pagesperpage)].map((e, i) => (
                        <Button onClick={()=>setPage(i+1)}>{i+1}</Button>
                    ))
                    }
                </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
        </>
    )
}
export default AllBill;