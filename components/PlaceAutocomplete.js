import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

function PlaceAutocomplete({ onPlaceSelected }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (ref) => {
    setAutocomplete(ref);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    }
  };

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        placeholder="Search for a place"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          left: "50%",
          marginLeft: "-120px"
        }}
      />
    </Autocomplete>
  );
}

export default PlaceAutocomplete;
