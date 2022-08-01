import { GenericSoliEventBuilder } from "../GenericSoliEventBuilder"

export type SwipeGesture = GenericSoliEventBuilder<'swipe', {
  
}>

export enum SwipeDirection {
  EAST = 1,
  WEST = 5,
  NORTH = 7,
  SOUTH = 3
}
