import React from "react";
import useFetchData from "../../../Hooks/useFetchData";
import DataDisplayGrid from "../../Presentational/DataDisplay/DataDisplayGrid";
import SyncLoader from "react-spinners/SyncLoader";
import { API_URL } from "../../../Constants/Constants";
import ErrorComponent from "../../Presentational/Error/ErrorComponent";

// Kontejner komponenta za prikazivanje podataka ili greške u zavisnosti od stanja
const DataDisplayContainer = () => {
  const { data, loading, error } = useFetchData(API_URL);

  // Ako se podaci još uvek učitavaju, prikazujemo indikator učitavanja
  if (loading) {
    return (
      <div className="loading-container">
        <SyncLoader color="#36d7b7" size={20} speedMultiplier={0.8} />
      </div>
    );
  }

  // Ako je došlo do greške pri preuzimanju podataka, prikazujemo komponentu za prikaz greške
  if (error) {
    return (
      <div className="error-container">
        <ErrorComponent error={error.message} />
      </div>
    );
  }

  // U suprotnom, prikazujemo tabelu sa preuzetim podacima
  return (
    <div className="container">
      <DataDisplayGrid apiData={data} />
    </div>
  );
};

export default DataDisplayContainer;
