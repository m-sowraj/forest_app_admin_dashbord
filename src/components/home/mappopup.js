import React, { useState, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';

const mapContainerStyle = {
  height: "100%",
  width: "90%"
};

const center = {
  lat: 11.416667,
  lng: 76.683334
};

const Marker = ({ lat, lng }) => <div style={{ color: 'red' }}>📍</div>;

const MyMapComponent = ({ isOpen, onClose, onSubmit }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const onMapClick = useCallback(({ lat, lng }) => {
    setSelectedPosition({ lat, lng });
  }, []);

  const handleSubmit = () => {
    onSubmit(selectedPosition);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} style={{ content: { overflow: 'hidden', inset: '50px', height: '90%', width: '90%', position: 'relative' }}}>
      <div style={{ height: 'calc(100% - 60px)', position: 'relative' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBBTDH8tbMMaQlJJWN9eLxdOkQI_6rAGZg' }}
          defaultCenter={center}
          defaultZoom={10}
          onClick={onMapClick}
        >
          {selectedPosition && (
            <Marker
              lat={selectedPosition.lat}
              lng={selectedPosition.lng}
            />
          )}
        </GoogleMapReact>
        {selectedPosition && (
          <div style={{ position: 'absolute', top: '420px', left: '50%', transform: 'translateX(-50%)' }}>
            <p>Latitude: {selectedPosition.lat}</p>
            <p>Longitude: {selectedPosition.lng}</p>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={handleSubmit} style={{ marginRight: '10px' , background:'grey' }}>Submit</button>
        <button onClick={onClose}  style={{ marginRight: '10px' , background:'grey' }}>Close</button>
      </div>
    </Modal>
  );
}

export default MyMapComponent;
