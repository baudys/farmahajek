import { create } from 'zustand'

interface ServiceStore {
  drubezarna: boolean
  handleDrubezarna: () => void

  vejce: boolean
  handleVejce: () => void
}

export const useService = create<ServiceStore>(set => ({
  drubezarna: false,
  handleDrubezarna: () => set(state => ({ drubezarna: !state.drubezarna })),

  vejce: false,
  handleVejce: () => set(state => ({ vejce: !state.vejce })),
}))
