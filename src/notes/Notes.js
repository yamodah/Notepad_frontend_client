import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { listNotes, deleteNote } from "../utils/api";
import { Button, Card } from "react-bootstrap";
export default function Notes(){
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        listNotes().then((response)=>setNotes(response.data))
    },[notes])

    const deleteHandler = async (id) =>{
        if(window.confirm("Would you like to delete this note ?")){
            if(window.confirm("Are you sure ?")){
                await deleteNote(id).catch(console.error)
                listNotes().then((response)=>setNotes(response.data))
            }
        }
    }
    const notesHTML = notes.map((note)=>(
        <Card style={{ width: '75%' }}>
  <Card.Body>
    <Card.Title>{note.title}</Card.Title>
    <Card.Text>
      {note.content}
    </Card.Text>
    <Link to={`notes/${note.id}`} type="button" className="btn btn-warning">Edit Note</Link>
    <Button variant="danger" size="lg" active onClick={()=>deleteHandler(note.id)}>
    Delete Note
    </Button>
  </Card.Body>
</Card>
    ))
    return <div>
        {notesHTML}
    </div>
}
//add onDeleteHandler
//add return statement
