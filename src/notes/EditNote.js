import React,{ useEffect, useState } from 'react'
import { Button,Form, } from 'react-bootstrap'
import {useParams, useNavigate} from "react-router-dom"
import { readNote, changeNote } from '../utils/api'
function EditNote() {
    const [note, setNote] = useState({})
    const {noteId} =  useParams()
    const history = useNavigate()

    useEffect(()=>{
        readNote(noteId).then((res)=>setNote(res.data.data)).catch(console.error)
    },[noteId]);

    const handleChange = ({ target }) => {
        setNote({
          ...note,
          [target.name]: target.value,
        });
      };
    const handleSubmission = (e) => {
        e.preventDefault()
        changeNote(note)
        history("/notes")
    }
    const handleCancel = ()=>{
        history("/notes")
    }
    if(!note.title)return <h3>Loading...</h3>

    return     (
        <>
    <Form className="col-6 m-3">
        <Form.Group className="mb-3 col-6" controlId="note_title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={note.title} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3 col-9" controlId="note_content" >
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={4} name="content" value={note.content} onChange={handleChange}/>
        </Form.Group>
        <div className='buttonGroup'>
        <Button style={{marginRight:"3px"}}onClick={handleCancel} variant="danger">Cancel</Button>
        <Button type="submit" variant="success" onClick={handleSubmission}>Done</Button>
        </div>
      </Form>
      {/* <img src='https://media.threatpost.com/wp-content/uploads/sites/103/2019/05/31162215/notepad.png' alt="notePad"></img> */}
      </>
      )
}

export default EditNote
