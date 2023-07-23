# Dokumentacija za DataDisplayGrid komponentu
## Opis
### DataDisplayGrid je komponenta koja prikazuje tablu sa podacima u stilizovanom okruženju koristeći Ag-Grid biblioteku. Ova komponenta omogućava sortiranje, filtriranje i paginaciju podataka.

## Props
### apiData (obavezno)
### Tip: array
### Opis: Podaci koji se prikazuju u tabeli. Očekuje se niz objekata gde svaki objekat predstavlja jedan red u tabeli.

#### DataDisplayContainer komponenta služi kao kontejner za prikazivanje tabele sa podacima. Koristi DataDisplayGrid komponentu za prikazivanje podataka, a DataDisplayGrid koristi Ag-Grid biblioteku za stilizovanje i rukovanje tabelom. DataDisplayContainer koristi useState i useEffect hook-ove za upravljanje stanjem učitavanja, greške i podataka. Ova komponenta može se prilagoditi zahtevima naseg projekta tako što će se implementirati logika za preuzimanje podataka iz API-ja na osnovu promenjenog broja rezultata po stranici. Takođe, DataDisplayGrid komponenta omogućava definisanje definicija kolona i formatiranje vrednosti za određene kolone pomoću funkcije formatDate iz Helpers.js fajla.


# Dokumentacija za DataDisplayContainer komponentu


### DataDisplayContainer je kontejner komponenta koja upravlja prikazivanjem podataka u zavisnosti od njihovog stanja. Ova komponenta koristi useFetchData hook za preuzimanje podataka iz API-ja i prikazuje tablu sa podacima koristeći DataDisplayGrid komponentu iz Presentational foldera. Takođe, može prikazati indikator učitavanja ili komponentu za prikaz greške ukoliko dođe do problema pri preuzimanju podataka.

#### DataDisplayContainer komponenta koristi useFetchData hook kako bi preuzela podatke iz API-ja. Ovaj hook vraća data, loading i error vrednosti koje koristimo za upravljanje stanjem učitavanja i greške pri preuzimanju podataka. Ako su podaci još uvek u procesu učitavanja (loading), prikazuje se indikator učitavanja u obliku custom SyncLoader komponente. Ako dođe do greške pri preuzimanju podataka (error), prikazuje se komponenta za prikaz greške ErrorComponent sa prikazanim tekstom greške. U suprotnom, kada su podaci preuzeti uspešno, prikazuje se DataDisplayGrid komponenta koja koristi apiData prop da prikaže tablu sa podacima. Ova komponenta može se koristiti za prikazivanje raznih podataka u vašem projektu i lako se može prilagoditi dodavanjem dodatne logike za rukovanje podacima.

# Dokumentacija za App komponentu

### App je glavna komponenta naše React aplikacije. Ova komponenta je odgovorna za renderovanje i prikazivanje ostalih komponenti u vašoj aplikaciji. U ovom slučaju, App komponenta prikazuje DataDisplayContainer komponentu koja upravlja prikazivanjem podataka u zavisnosti od njihovog stanja.

#### App komponenta prikazuje DataDisplayContainer komponentu koja je zadužena za prikazivanje podataka u vašoj aplikaciji. Ovde možemo dodavati i kombinovati različite komponente kako biste izgradili kompleksne aplikacije sa više funkcionalnosti. Ova komponenta takođe uvozi CSS fajl "App.css" koji se koristi za stilizovanje komponente. Možete prilagoditi stilove u "App.css" fajlu kako bi naša aplikacija imala željeni izgled. App komponenta je ključna tačka vaše aplikacije i predstavlja glavni "ulaz" u naš React projekat.

# Dokumentacija za API_URL konstantu
###  API_URL je konstanta koja sadrži URL adresu za pristupanje Binance API-ju i preuzimanje podataka o trgovini (ticker) za poslednjih 24 sata. Ova URL adresa se koristi za izvršavanje HTTP zahteva kako bi se dobili podaci o trgovini za različite finansijske instrumente.

#### API_URL konstanta sadrži URL adresu ka Binance API-ju koji pruža podatke o trgovini (ticker) za različite finansijske instrumente. Ova URL adresa se koristi u useFetchData kuku (hook) ili bilo kojoj drugoj komponenti koja treba da pristupi i preuzme podatke o trgovini sa Binance berze. Na primer, u useFetchData kuku, API_URL se koristi kao osnova za izvršavanje HTTP zahteva ka Binance API-ju kako bi se dobili traženi podaci.


# Dokumentacija za ErrorComponent komponentu
### ErrorComponent je React komponenta koja se koristi za prikazivanje poruke o grešci u slučaju problema sa preuzimanjem podataka. Ova komponenta prima jedan prop error, koji sadrži poruku o grešci koja treba da bude prikazana.

#### ErrorComponent se koristi za prikazivanje poruke o grešci u komponentama koje se bave preuzimanjem podataka. Kada dođe do greške u procesu preuzimanja podataka, komponenta će prikazati poruku o grešci koja je prosleđena putem prop-a error. Očekuje se da će prop error biti string koji sadrži poruku o grešci koja će biti prikazana korisniku.

# Dokumentacija za Helper funkcije
### formatDate je funkcija koja se koristi za formatiranje datuma u formatu "dd/mm/gggg". Funkcija prima jedan argument dateStr, koji je string reprezentacija datuma koji želimo da formatiramo. Funkcija će pretvoriti ovaj string u numerički tajmstemp, a zatim generisati formatirani datum.

### columnDefs je funkcija koja se koristi za generisanje definicija kolona za Ag Grid tabelu na osnovu podataka iz apiData. Funkcija prima jedan argument apiData, koji je niz objekata sa podacima koji će biti prikazani u tabeli. Funkcija će na osnovu prvog elementa iz apiData generisati definicije kolona za Ag Grid tabelu.

### paginationNumberFormatter je funkcija koja se koristi za formatiranje teksta prikaza broja stranice u paginaciji u tabeli. Funkcija prima jedan argument params, koji je objekat sa informacijama o paginaciji. Funkcija će formatirati vrednost broja stranice i vratiti formatirani tekst.

# Dokumentacija za useFetchData hook
### useFetchData je custom React hook koji se koristi za preuzimanje podataka sa zadatog URL-a pomoću  AXIOS HTTP biblioteku za slanje HTTP GET zahteva. Hook vraća stanje podataka, stanje učitavanja i stanje greške kako bi ih komponente mogle koristiti za prikazivanje podataka, indikatora učitavanja ili prikazivanje grešaka u zavisnosti od stanja.

#### Parametri
#### url (string): URL adresa sa koje želite preuzeti podatke.

#### Povratne vrednosti
#### data (any): Podaci koji su preuzeti sa zadatog URL-a. Ova vrednost će biti null dok traje preuzimanje podataka, a nakon završetka će sadržati preuzete podatke.
#### loading (boolean): Vrednost koja označava da li trenutno traje preuzimanje podataka. Biće true dok traje preuzimanje, a nakon završetka će biti postavljena na false.
#### error (Error | null): Objekat greške koji sadrži detalje o grešci koja se može desiti tokom preuzimanja podataka. Biće null ako preuzimanje bude uspešno.




