// Funkcija za formatiranje datuma u formatu "dd/mm/gggg" kao sto je trazeno
const formatDate = (dateStr) => {
  const timestamp = parseInt(dateStr.value, 10); // Pretvaramo string u numerički tajmstemp
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Funkcija za generisanje definicija kolona za Ag Grid tabelu
export const columnDefs = (apiData) => {
  if (!apiData || apiData.length === 0) return [];
  const firstItem = apiData[0];
  return Object.keys(firstItem).map((key) => {
    const headerName = key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      .replace(/_/g, " ")
      .toUpperCase();

    // Postavljamo funkciju za formatiranje vrednosti za kolone "openTime" i "closeTime"
    const valueFormatter =
      key === "openTime" || key === "closeTime" ? formatDate : undefined;

    return {
      headerName,
      field: key,
      filter: true,
      floatingFilter: true,
      valueFormatter,
    };
  });
};

// Funkcija za formatiranje teksta prikaza broja stranice u paginaciji u tabeli
export const paginationNumberFormatter = (params) => {
  return `Strana ${params.value}`;
};
