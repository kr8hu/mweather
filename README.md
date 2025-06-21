# mweather

Webfejlesztési próbafeladat megoldása.

Ez az alkalmazás valós idejű időjárási adatokat jelenít meg egy kiválasztott városra.  
Főbb funkciók:

- Aktuális időjárás megjelenítése
- 7 napos előrejelzés, csapadékvalószínűséggel, minimum- és maximum-hőmérséklettel
- Napi maximum hőmérsékletek vizuális megjelenítése diagramon
- Az időjárási viszonyokhoz igazodó, dinamikusan változó UI

## Telepítési útmutató

1. **Csomagok telepítése**:

```
npm install
```

## Használati útmutató

**Teszteléshez, fejlesztéshez**:

```
npm run dev
```

**Build**:

```
npm run build

```

## Felhasznált technológiák

A projektben az alábbi külső könyvtárakat és erőforrásokat használtam:

- [Onsen UI](https://onsen.io/) – Mobilbarát UI komponensek
- [Weather Icons](https://erikflowers.github.io/weather-icons/) – Időjárás ikonok
- [React Chart.js 2](https://react-chartjs-2.js.org/) – Adatvizualizáció Chart.js alapokon

## Képernyőképek

A következő képernyőképek bemutatják az alkalmazás működését:

![Főképernyő](etc/screencaptures/screencapture1.png)
*Főoldal megjelenése*

![Prompt](etc/screencaptures/screenshot2.png)
*Helyszín megadása beviteli mezővel*

![Select](etc/screencaptures/screenshot3.png)
*Helyszín kiválasztása több találat esetén*

![Téma](etc/screencaptures/screenshot4.png)
*Dinamikusan változó téma az időjárási adatok szerint*

![Reszponzív-1](etc/screencaptures/screenshot5.png)
*Mobilos nézet*

![Reszponzív-2](etc/screencaptures/screenshot6.png)
*Mobilos nézet*

![Reszponzív-3](etc/screencaptures/screenshot7.png)
*Mobilos nézet*