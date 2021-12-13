import React,{ useEffect, useState } from 'react'
import {useParams, Link, useHistory} from "react-router-dom"
import { readNote, changeNote } from '../utils/api'
function EditNote() {
    const [note, setNote] = useState({})
    const {noteId} =  useParams()
    const history = useHistory()

    useEffect(()=>{
        readNote(noteId).then((res)=>setNote(res.data.data))
    },[noteId]);

    const handleChange = ({ target }) => {
        setNote({
          ...note,
          [target.name]: target.value,
        });
      };
    const handleSubmission = () => {
        changeNote(note)
        history.push("/")
    }
    return (
        <div>
            <form>
                <label>
                    Title:
                    <input type="text"/>
                </label>
                <label>
                    Content:
                    <textarea/>
                </label>
            </form>
        </div>
    )
}

export default EditNote
