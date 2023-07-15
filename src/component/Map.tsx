import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

type props = {
    lng: number, lat: number, zoom: number
}

export default function Map({lng, lat, zoom}:props) {
    return (
        <div className="map">
            <LoadScript googleMapsApiKey = "AIzaSyDiXa0HnOKSMYBJmHfDQBFwvkuvcKWCXk8">
                <GoogleMap
                    mapContainerStyle={{width: '350px', height: '250px'}}
                    center={{lng, lat}}
                    zoom={zoom}
                />
            </LoadScript>
        </div>

    );
}