export interface SolutionPhase {
  id: number
  title: string
  description: string
  gif: string
}

export const solutionPhases: SolutionPhase[] = [
  {
    id: 1,
    title: "Diagnóstico Estratégico",
    description: "Analizamos tu estructura actual y identificamos oportunidades de optimización fiscal y legal.",
    gif: "/gifs/timer.webp"
  },
  {
    id: 2,
    title: "Arquitectura Unificada",
    description: "Diseñamos una estructura legal y fiscal integrada que escale con tu crecimiento.",
    gif: "/gifs/fingerprint.webp"
  },
  {
    id: 3,
    title: "Implementación y Monitoreo",
    description: "Ejecutamos la estrategia y mantenemos un seguimiento continuo para garantizar el cumplimiento.",
    gif: "/gifs/partner.webp"
  }
]
