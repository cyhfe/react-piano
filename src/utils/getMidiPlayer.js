import MidiPlayer from "midi-player-js"

export function getMidiPlayer() {
  const player = new MidiPlayer.Player((e) => console.log(e))
  return player
}
