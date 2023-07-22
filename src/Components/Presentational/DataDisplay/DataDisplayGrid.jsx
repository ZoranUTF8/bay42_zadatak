import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types"; // Importujemo PropTypes iz prop-types biblioteke
import { AgGridReact } from "ag-grid-react"; // Komponenta AG Grid za React
import {
  columnDefs,
  paginationNumberFormatter,
} from "../../../Helpers/Helpers"; // Importujemo pomocne funkcije  iz Helpers.js
import { DarkModeSwitch } from "react-toggle-dark-mode"; // Komponenta DarkModeSwitch za React

// Komponenta za prikaz tabele sa podacima
const DataDisplayGrid = ({ apiData, handlePageSizeChange, pageSize }) => {
  const [theme, setTheme] = useState(true);
  const [rowData, setRowData] = useState([]);

  // Funkcija za promenu teme
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    setRowData(apiData || []);
  }, [apiData]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  // Dinamički generišemo kolone na osnovu ključeva podataka prvog elementa iz apiData pomocu funkcije columnDefs iz helpers.js
  const dynamicColumnDefs = useMemo(() => columnDefs(apiData), [apiData]);

  return (
    <div className="table-presentation">
      <div
        className={theme ? "ag-theme-alpine-dark" : "ag-theme-alpine"}
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          rowData={rowData} // Podaci za redove tabele
          columnDefs={dynamicColumnDefs} // Definicije kolona tabele
          defaultColDef={defaultColDef} // Podrazumevane osobine kolona
          animateRows={true} // Opciono - postavljeno na 'true' omogućava animaciju redova pri sortiranju
          rowSelection="multiple" // Opcije - omogućava klik za izbor redova
          pagination={true}
          paginationPageSize={pageSize}
          paginationNumberFormatter={paginationNumberFormatter}
        />
      </div>
      <div className="table-presentation_menu">
        <h3>Made by Zoran for Bay42</h3>
        <DarkModeSwitch
          checked={theme} // Konvertujemo true u "dark" i false u "light"
          onChange={toggleTheme}
          size={60}
        />

      </div>
    </div>
  );
};

// Definišemo očekivane PropTypes za komponentu DataDisplayGrid
DataDisplayGrid.propTypes = {
  apiData: PropTypes.array.isRequired, // Očekujemo niz za prop 'apiData', a .isRequired znači da je prop obavezan
  onPageSizeChange: PropTypes.func.isRequired,
};

export default DataDisplayGrid;
