import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

//{  JSON.stringify(user, null, 2) }

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Container>
                
                <Card style={{ width: '18rem', margin:'0 auto'}}>
                    <Card.Img className="profile-img" variant="top" src={user.picture} />
                    <Card.Body>
                        <Card.Title>{user.nickname}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated {user.updated_at}</small>
                    </Card.Footer>
                </Card>
            </Container>
        )
    )
}

export default Profile
