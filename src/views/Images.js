import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container'
const Images = () => {
    const { isAuthenticated } = useAuth0();
    let content = null;
    const url = `https://api.unsplash.com/collections/3847388/photos/?client_id=4HjY6rr6nyoFDfe_lozswjvNoJikuJP3JOzrtRhiRHM&orientation=landscape`;
    const [images, setImages] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setImages(response.data)
        })
    }, [url])

    if(images) 
    {
        content = 
        images.map((image, key) => 
            <img key={key} src={image.urls.regular} alt={image.alt_description} width={'200px'} style={{margin:'5px'}}/>       
        )
    }

        return (
            isAuthenticated && (
                <Container>
                    <div>
                        <h1>Unsplash Photos</h1>
                        <h2>Photos of Barcelona by <a href="https://unsplash.com/@n8kolenberg">@n8kolenberg</a></h2>
                        {content}
                    </div>
                </Container>
            )
        )

}

export default Images
