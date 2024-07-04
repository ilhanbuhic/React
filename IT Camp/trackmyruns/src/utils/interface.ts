export interface SidebarFormProp {
  classNameInputExtender: string
  labelName: string
  inputPlaceholder: string
  value: string | number
  isInputFocus?: boolean
}

export interface WorkoutSummaryProp {
  workoutClassNameExtender: string
  dataID: number
  workoutTitle: string
  workoutDetails: WorkoutDetails[]
}

export interface WorkoutDetails {
  workoutIcon: string
  workoutValue: number
  workoutUnit: string
}

export interface CoordsProp {
  lat: number
  lng: number
}

export interface MarkerContextProp {
  markers: number[]
  setMarkers: React.Dispatch<React.SetStateAction<any[]>>
}
