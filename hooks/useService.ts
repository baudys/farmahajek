import { create } from 'zustand'

interface ServiceStore {
  drubezarna: boolean
  handleDrubezarna: () => void

  vejce: boolean
  handleVejce: () => void

  brambory: boolean
  handleBrambory: () => void

  zahradnictvi: boolean
  handleZahradnictvi: () => void

  zemniprace: boolean
  handleZemniprace: () => void

  zemedelstvi: boolean
  handleZemedelstvi: () => void
}

export const useService = create<ServiceStore>(set => ({
  drubezarna: false,
  handleDrubezarna: () => set(state => ({ drubezarna: !state.drubezarna })),

  vejce: false,
  handleVejce: () => set(state => ({ vejce: !state.vejce })),

  brambory: false,
  handleBrambory: () => set(state => ({ brambory: !state.brambory })),

  zahradnictvi: false,
  handleZahradnictvi: () =>
    set(state => ({ zahradnictvi: !state.zahradnictvi })),

  zemniprace: false,
  handleZemniprace: () => set(state => ({ zemniprace: !state.zemniprace })),

  zemedelstvi: false,
  handleZemedelstvi: () => set(state => ({ zemedelstvi: !state.zemedelstvi })),
}))
