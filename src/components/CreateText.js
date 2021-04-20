import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useAuth0 } from '@auth0/auth0-react';

const CreateText = (props) => {

    const { isAuthenticated } = useAuth0();

    const [note, setNote] = useState({
        title: "",
        content:""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(e) {
        props.onAdd(note);
        setNote({
            title: "",
            content:""
        })
        e.preventDefault();
    }

    return (
        isAuthenticated && (
            <div>
            <form className="create-note">
                <input onChange={handleChange} name="title" value={note.title} placeholder="title"/>
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="Write some text.." rows="3"></textarea>
                <Fab onClick={submitNote}><AddIcon/></Fab>
            </form>
        </div>
        )
    )
}

export default CreateText
