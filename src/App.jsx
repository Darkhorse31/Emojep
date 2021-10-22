import "./styles.css";
import React from "react";
import Entery from "./Entery";
import Emojiepedia from "./emojie";
// id: 1,
//     emojie: "😀",
//     name: "Grinning Face",
//     meaning:
//       "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor."

function crateEntry(emojieT) {
  return (
    <Entery
      key={emojieT.id}
      emojie={emojieT.emojie}
      name={emojieT.name}
      detail={emojieT.meaning}
    />
  );
}
function App() {
  return <div className="App">{Emojiepedia.map(crateEntry)};</div>;
}
export default App;
