interface Record {
  s3: {
    object: {
      key: string,
      size: number
    }
  }
}

interface Event {
  Records: Record[]
}

interface HandlerCallback {
  (err: Error | null, response: object) : void
}

export function snapshot(event : Event, context: any, callback: HandlerCallback) : void {
  console.log(event)
  callback(null, { message: 'done' })
}
