export interface GenericSoliEventBuilder<EventType = string, EventData = {}> {
  type: EventType
  data: EventData
}
