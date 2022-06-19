import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button, Table } from 'react-bootstrap'


  const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    console.log(list);
  
    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
  }
  
  const Todo = () => {
    var today = new Date();
  var date = today.toLocaleString("en-US", { weekday: "short", day: '2-digit', month: "long", });
  
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
  
    const AddTodo = () => {
      if (!inputData) {
        alert('plzz fill data');
      } else if (inputData && !toggleSubmit) {
        setItems(
          items.map((elem) => {
            if (elem.id === isEditItem) {
              return { ...elem, name: inputData }
            }
            return elem;
          })
        )
        setToggleSubmit(true);
  
        setInputData('');
  
        setIsEditItem(null);
      } else {
        const allInputData = { id: new Date().getTime().toString(), name: inputData }
        setItems([...items, allInputData]);
        setInputData('')
      }
    }

  // delete the items
  const deleteTodo = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  }

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);

  }


  // remove all 
  const removeAll = () => {
    setItems([]);
  }

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
  }, [items]);

  return (
    <div>
    <Container>
        <Row>
        <Col sm={12} md={6} lg={12}>
        <Table striped bordered hover size="lg" className='toDoTable' >
            
            <tr>
              <th style={{textAlign:"left"}}>ToDo List </th>
              <th style={{textAlign:"left"}} >Delete</th>
              <th style={{textAlign:"left"}} >Update</th>
            </tr>
        
            {
              items.map((tod) => (
                <tr>
                  <td>{tod.name}</td>
                  <td><Button onClick={() => deleteTodo(tod.id)} className="btn btn-danger"> <i className="fa fa-remove fa-remove"/></Button></td>
                  <td><Button onClick={() => editItem(tod.id)} className="btn btn-info "> <i className="fa fa-edit fa-edit"/></Button></td>
                </tr>
              ))
            }
      </Table>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>
       <strong>Today:</strong>
      {date}</Form.Label>
    <Form.Control as="textarea" rows={5} placeholder="Enter task"  value={inputData} onChange={(e) => setInputData(e.target.value)}/>
    {
              toggleSubmit ? <i className="fa add-btn" title="Add Item" onClick={AddTodo}></i> :
                <i className="far fa-edit add-btn" title="Update Item" onClick={AddTodo}></i>
            }
  </Form.Group>
  <Button variant="danger" type="submit" className='addButton' onClick={AddTodo}>
  <i className="fa fa-plus fa-plus"></i>
  </Button>
</Form>
        </Col>
        </Row>
    </Container>
    </div>
  )
}
export default Todo