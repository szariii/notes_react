import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import CreateNote from "./components/CreateNote";
import ShowNotes from "./components/ShowNotes";
import Nav from "./components/Nav";
import ShowNote from "./components/ShowNote";
import GlobalStyles from "./components/GlobalStyles";
import EditNote from "./components/EditNote";

function App() {
  //State
  const [clipboard, setClipboard] = useState({
    title: "",
    note: "",
    date: "",
    id: "",
  });
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<ShowNotes notes={notes} setNotes={setNotes} />}
        />
        <Route
          path="/create"
          element={
            <CreateNote
              notes={notes}
              setNotes={setNotes}
              clipboard={clipboard}
              setClipboard={setClipboard}
            />
          }
        />
        <Route
          path="/note/:id"
          element={<ShowNote notes={notes} setNotes={setNotes} />}
        />

        <Route path="/edit/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
      </Routes>
    </div>
  );
}

export default App;
