import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "../styles/Filtros.css";
import Logo from "../components/Logo";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function FiltroRegiao() {
  const position = [-15.7801, -47.9292];
  const [statusFiltro, setStatusFiltro] = useState<string[]>([]); 

  const handleCheckboxChange = (value: string) => {
    setStatusFiltro((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) 
        : [...prev, value] 
    );
  };

  const limparFiltros = () => {
    setStatusFiltro([]); 
  };

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={position}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>

      <Logo />
      <div className="filter-container">
        <IoIosClose className="close-icon" />
        <h1>ESCOLHA A REGIÃO</h1>

        <div className="checkbox-filter region">
          <label>
            <input
              type="checkbox"
              value="norte"
              checked={statusFiltro.includes("norte")}
              onChange={() => handleCheckboxChange("norte")}
            />
            Região Norte
          </label>

          <label>
            <input
              type="checkbox"
              value="sul"
              checked={statusFiltro.includes("sul")}
              onChange={() => handleCheckboxChange("sul")}
            />
            Região Sul
          </label>

          <label>
            <input
              type="checkbox"
              value="leste"
              checked={statusFiltro.includes("leste")}
              onChange={() => handleCheckboxChange("leste")}
            />
            Região Leste
          </label>

          <label>
            <input
              type="checkbox"
              value="oeste"
              checked={statusFiltro.includes("oeste")}
              onChange={() => handleCheckboxChange("oeste")}
            />
            Região Oeste
          </label>

          <label>
            <input
              type="checkbox"
              value="central"
              checked={statusFiltro.includes("central")}
              onChange={() => handleCheckboxChange("central")}
            />
            Região Central
          </label>
        </div>

        <div className="filter-btn">
          <button className="clean-btn" onClick={limparFiltros}>
            LIMPAR
          </button>
          <button className="check-btn">
            CONCLUIR
          </button>
        </div>
      </div>
    </div>
  );
}
