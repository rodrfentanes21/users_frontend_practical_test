'use client';

import { JSX, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { IGeo } from '@/types/user';

const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface UserLocationMapProps {
    geo: IGeo;
    userName: string;
}

export function UserLocationMap({ geo, userName }: UserLocationMapProps): JSX.Element {
    useEffect(() => {
        L.Marker.prototype.options.icon = defaultIcon;
    }, []);

    const position: [number, number] = [parseFloat(geo.lat), parseFloat(geo.lng)];

    return (
        <div className="h-[200px] w-full rounded-lg overflow-hidden border-2 border-indigo-500/20">
            <MapContainer
                center={position}
                zoom={4}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={defaultIcon}>
                    <Popup>
                        <span className="font-semibold">{userName}</span>
                        <br />
                        Lat: {geo.lat}, Lng: {geo.lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
