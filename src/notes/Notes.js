import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { listNotes } from "../utils/api";
import { Button, Card } from "react-bootstrap";
export default function Notes(){
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        listNotes().then((response)=>setNotes(response.data))
    },[notes])
    const notesHTML = notes.map((note)=>(
        <Card style={{ width: '75%' }}>
  <Card.Body>
    <Card.Title>{note.title}</Card.Title>
    <Card.Text>
      {note.content}
    </Card.Text>
    <Link to={`notes/${note.id}`} type="button" className="btn btn-warning">Edit Note</Link>
    <Button variant="danger" size="lg" active>
    Delete Note
    </Button>
  </Card.Body>
</Card>
    ))
}