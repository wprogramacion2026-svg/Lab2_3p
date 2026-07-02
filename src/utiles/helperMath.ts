// src/utils/helperMath.ts

export interface Punto {
  x: number;
  y: number;
}

// 1. Distancia entre dos puntos: d = sqrt((x2-x1)^2 + (y2-y1)^2)
export const calcularDistancia = (p1: Punto, p2: Punto): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

// 2. Punto intermedio: Pm = ((x1+x2)/2 , (y1+y2)/2)
export const calcularPuntoMedio = (p1: Punto, p2: Punto): Punto => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
};

// 3. Pendiente de la recta: m = (y2-y1) / (x2-x1)
export const calcularPendiente = (p1: Punto, p2: Punto): number | string => {
  if (p2.x - p1.x === 0) {
    return "Indefinida (Línea vertical)";
  }
  return (p2.y - p1.y) / (p2.x - p1.x);
};