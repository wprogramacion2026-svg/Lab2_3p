// src/components/Formulario.tsx
import React from "react";

interface FormularioProps {
  x1: string; y1: string; x2: string; y2: string;
  setX1: (v: string) => void; setY1: (v: string) => void;
  setX2: (v: string) => void; setY2: (v: string) => void;
}

export const Formulario: React.FC<FormularioProps> = ({
  x1, y1, x2, y2, setX1, setY1, setX2, setY2
}) => {
  return (
    <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", marginBottom: "20px" }}>
      <h3 style={{ margin: "0 0 15px 0", color: "#1e293b" }}>Ingreso de Coordenadas</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        <div>
          <h4 style={{ margin: "0 0 8px 0", color: "#475569" }}>Punto A (x1, y1)</h4>
          <input type="number" placeholder="X1" value={x1} onChange={(e) => setX1(e.target.value)} style={inputStyle} />
          <input type="number" placeholder="Y1" value={y1} onChange={(e) => setY1(e.target.value)} style={inputStyle} />
        </div>
        <div>
          <h4 style={{ margin: "0 0 8px 0", color: "#475569" }}>Punto B (x2, y2)</h4>
          <input type="number" placeholder="X2" value={x2} onChange={(e) => setX2(e.target.value)} style={inputStyle} />
          <input type="number" placeholder="Y2" value={y2} onChange={(e) => setY2(e.target.value)} style={inputStyle} />
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "80%", padding: "10px", margin: "5px 0", borderRadius: "6px", border: "1px solid #cbd5e1", outline: "none", fontSize: "14px"
};