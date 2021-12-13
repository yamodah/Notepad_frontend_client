import React,{ useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
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
    return (
        <div>
            <form onSubmit={handleSubmission}>
                <label>
                    Title:
                    <input type="text" onChange={handleChange} value={note.title} name="title"/>
                </label>
                <label>
                    Content:
                    <textarea onChange={handleChange} value={note.content} name="content"/>
                </label>
                <Button onClick={handleCancel} variant="danger">Cancel</Button>
                <Button type="submit" variant="success">Done</Button>
            </form>
        </div>
    )
}

export default EditNote
