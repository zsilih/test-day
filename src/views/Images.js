import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const Images = () => {
    const { isAuthenticated } = useAuth0();
    let content = null;

    const url = "https://jsonplaceholder.typicode.com/photos";
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
            <img src={image.url}/>       
        )
    }

        return (
            isAuthenticated && (
                <div>
                    <h1>Images</h1>
                    {content}
                </div>
            )
        )

}

export default Images
