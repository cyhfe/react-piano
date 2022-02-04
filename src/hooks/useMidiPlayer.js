import MidiPlayer from "midi-player-js"
import { useRef } from "react"

export function useMidiPlayer() {
  const playerRef = useRef(null)
  if (!playerRef.current) {
    playerRef.current = new MidiPlayer.Player((e) => {
      console.log(e)
    })
  }
  return playerRef.current
}
