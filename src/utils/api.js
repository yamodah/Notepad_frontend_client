import axios from "axios"
const URL = process.env.REACT_APP_BASE_API_URL

export async function listNotes(){
    const data =  await axios.get(`${URL}`).catch(console.error)
    //console.log(data)
    return data
}
export async function readNote(noteId){
    const data =  await axios.get(`${URL}/${noteId}`).catch(console.error)
    return data
}
export async function changeNote(updatedNote){
    const data =  await axios.put(`${URL}/${updatedNote.id}`,updatedNote).catch(console.error)
    return data 
}
export async function deleteNote(noteId){
    await axios.delete(`${URL}/${noteId}`).catch(console.error)
}