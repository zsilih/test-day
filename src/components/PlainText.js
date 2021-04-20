import { useAuth0 } from '@auth0/auth0-react';
import DeleteIcon from '@material-ui/icons/Delete';

const PlainText = (props) => {

    function handleClick() {
        props.onDelete(props.id);
    }

    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className ="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon/></button>
        </div>
        )
    )
}

export default PlainText
