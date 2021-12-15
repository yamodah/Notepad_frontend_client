import React from 'react'

function Home() {
    return (
        <div className='Home'>
            <p>welcome to my virtual notepad !
                <br/> pls click on notes button above to view the notes I have taken.
                <br/> you will see a collection of notes with options to edit or delete a particular note
                <br/> it is not by accident there is no way to create a note. all notes on this site 
                are populated into a postgeSQL database from my local command line interface.</p>
        </div>
    )
}

export default Home
