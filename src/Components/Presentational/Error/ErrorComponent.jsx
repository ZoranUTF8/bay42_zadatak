import React from "react";
import PropTypes from "prop-types"; // Importujemo PropTypes iz prop-types biblioteke

// Komponenta za prikazivanje greške u slučaju problema sa preuzimanjem podataka
const ErrorComponent = ({ error }) => {
  return (
    <div className="error-container-text">
      <p>Došlo je do greške prilikom preuzimanja podataka:</p>
      <p>{error}</p>
      <p>Molimo pokušajte ponovo kasnije...</p>
    </div>
  );
};

// Definišemo očekivane PropTypes za komponentu ErrorComponent
ErrorComponent.propTypes = {
  error: PropTypes.string.isRequired, // Očekujemo string za prop 'error', a .isRequired znači da je prop obavezan
};

export default ErrorComponent;
