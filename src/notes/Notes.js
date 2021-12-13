import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { listNotes, deleteNote } from "../utils/api";
import { Button, Card } from "react-bootstrap";
export default function Notes(){
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        listNotes().then((res)=>setNotes(res.data.data)).catch(console.error)
    },[])

    const deleteHandler = async (id) =>{
        if(window.confirm("Would you like to delete this note ?")){
            if(window.confirm("Are you sure ?")){
                await deleteNote(id).catch(console.error)
                listNotes().then((res)=>setNotes(res.data.data))
            }
        }
    }
    const notesHTML = notes.map((note)=>(
            <Card className="col-4" key={note.id}bg="dark" border="warning" text="white" >
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>
                {note.content}
                </Card.Text>
                <Link to={`/notes/${note.id}`} className="btn btn-warning" style={{margin:"10px 5px 10px 5px"}}>Edit Note</Link>
                <Button variant="danger" size="sm" active onClick={()=>deleteHandler(note.id)} style={{margin:"10px 5px 10px 5px"}}>
                Delete Note
                </Button>
            </Card.Body>
            </Card>
    ))
    if(!notes.length)return<h2>Loading...</h2>
    return <div className="row">
        {notesHTML}
    </div>
}
//add onDeleteHandler
//add return statement
