// src/components/Resultados.tsx
import React from "react";

interface ResultadosProps {
  distancia: string;
  puntoMedio: string;
  pendiente: string;
}

export const Resultados: React.FC<ResultadosProps> = ({ distancia, puntoMedio, pendiente }) => {
  return (
    <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
      <h3 style={{ margin: "0 0 15px 0", color: "#1e293b" }}>Resultados Calculados</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={itemStyle}>
          <strong>Distancia entre los puntos:</strong>
          <span style={valStyle}>{distancia}</span>
        </div>
        <div style={itemStyle}>
          <strong>Punto intermedio (Pm):</strong>
          <span style={valStyle}>{puntoMedio}</span>
        </div>
        <div style={itemStyle}>
          <strong>Pendiente de la recta (m):</strong>
          <span style={valStyle}>{pendiente}</span>
        </div>
      </div>
    </div>
  );
};

const itemStyle = { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9" };
const valStyle = { color: "#2563eb", fontWeight: "bold" };