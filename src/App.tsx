// src/App.tsx
import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Resultados } from "./components/Resultados";
import { calcularDistancia, calcularPuntoMedio, calcularPendiente } from "./utils/helperMath";
import type { Punto as PuntoTipo } from "./utils/helperMath";

function App() {
  // Estados para capturar las entradas de texto
  const [x1, setX1] = useState<string>("");
  const [y1, setY1] = useState<string>("");
  const [x2, setX2] = useState<string>("");
  const [y2, setY2] = useState<string>("");

  // Validar si todos los campos tienen números válidos
  const camposListos = x1 !== "" && y1 !== "" && x2 !== "" && y2 !== "";

  let resDistancia = "Ingrese datos...";
  let resPuntoMedio = "Ingrese datos...";
  let resPendiente = "Ingrese datos...";

  if (camposListos) {
    const p1: PuntoTipo = { x: parseFloat(x1), y: parseFloat(y1) };
    const p2: PuntoTipo = { x: parseFloat(x2), y: parseFloat(y2) };

    const dist = calcularDistancia(p1, p2);
    const pm = calcularPuntoMedio(p1, p2);
    const m = calcularPendiente(p1, p2);

    resDistancia = `${dist.toFixed(4)} u`;
    resPuntoMedio = `(${pm.x.toFixed(2)}, ${pm.y.toFixed(2)})`;
    resPendiente = typeof m === "number" ? m.toFixed(4) : m;
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "50px auto", padding: "0 20px" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ color: "#0f172a", margin: "0 0 5px 0" }}>Calculadora Geométrica</h2>
        <p style={{ color: "#64748b", margin: 0 }}>Operaciones en el Plano Cartesiano</p>
      </header>

      <Formulario 
        x1={x1} y1={y1} x2={x2} y2={y2}
        setX1={setX1} setY1={setY1} setX2={setX2} setY2={setY2}
      />

      <Resultados 
        distancia={resDistancia}
        puntoMedio={resPuntoMedio}
        pendiente={resPendiente}
      />
    </div>
  );
}

export default App;