export interface RawSoliData {
  angle: [AzimuthAngle, ElevationAngle]
  distance: number
  axialVelocity: number
}

type AzimuthAngle = number
type ElevationAngle = number
