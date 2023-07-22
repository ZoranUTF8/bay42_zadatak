import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState(null); // Stanje za skladištenje podataka
  const [loading, setLoading] = useState(true); // Stanje za praćenje učitavanja podataka
  const [error, setError] = useState(null); // Stanje za praćenje grešaka

  useEffect(() => {
    /* Pošto ne planiramo ponovo koristiti funkciju fetchData u drugim hook-ovima,
     ili komponentama i koristi se samo unutar određenog efekta, definisanje iste unutar useEffect
    hook-a je razuman izbor kako bi se kod održao sadržajnijim i samodovoljnim. */
    const fetchData = async () => {
      try {
        setLoading(true); // Postavljamo loading na true pre nego što započnemo preuzimanje podataka
        const response = await axios.get(url); // Preuzimamo podatke pomoću axios biblioteke
        setData(response.data); // Postavljamo preuzete podatke u stanje data
        setError(null); // Čistimo prethodne greške ako je preuzimanje bilo uspešno
      } catch (error) {
        setError(error); // Čuvamo celokupni objekat greške kako bismo imali više informacija o grešci
      } finally {
        setLoading(false); // Bez obzira da li je preuzimanje bilo uspešno ili ne, postavljamo loading na false
      }
    };
    fetchData(); // Pokrećemo funkciju za preuzimanje podataka pri montiranju komponente
  }, [url]); // useEffect će ponovo pokrenuti fetchData kada se promeni vrednost url parametra tako da možemo da koristimo ovaj hook za preuzimanje podataka sa različitih URL-ova

  return { data, loading, error }; // Vraćamo podatke o stanju kako bi ih komponenta mogla koristiti
};

export default useFetchData;
