import { useEffect, useRef, useState } from "react"
import midi from "./midi/Slamdunk.mid"
import { useMidiPlayer } from "./hooks/useMidiPlayer"

function App() {
  const [, setState] = useState({})
  const player = useMidiPlayer()

  useEffect(() => {
    async function loadMidi(midi) {
      const midiBuffer = await fetch(midi).then((response) =>
        response.arrayBuffer()
      )
      player.loadArrayBuffer(midiBuffer)
    }
    loadMidi(midi)
  })

  return (
    <div className="App">
      hello app
      <button
        onClick={() => {
          setState({})
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          player.play()
        }}
      >
        play
      </button>
      <button onClick={() => {}}>pause</button>
      <button onClick={() => {}}>stop</button>
    </div>
  )
}

export default App
