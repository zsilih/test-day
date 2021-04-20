import { useAuth0 } from '@auth0/auth0-react';

const ProfileHeader = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <>
                Signed in as: <a href="/">{user.name}</a>
            </>
        )
    )
}

export default ProfileHeader
