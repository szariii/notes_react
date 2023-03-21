import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const EditNote = ({ notes, setNotes }) => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const editNote = notes.filter((note) => note.id === id);

  //States
  const [changedNote, setChangedNote] = useState({
    title: editNote[0].title,
    note: editNote[0].note,
  });

  //Ref
  const inputTitleRef = useRef(null);
  const textareaNoteRef = useRef(null);

  //Handlers
  const ChangeNoteHandler = () => {
    setChangedNote({
      title: inputTitleRef.current.value,
      note: textareaNoteRef.current.value,
    });
    console.log(changedNote);
  };

  const ChangeNote = () => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, title: changedNote.title, note: changedNote.note };
        }
      })
    );
  };

  return (
    <CreateNoteStyled>
      <h1>Edit Note</h1>
      <InputStyled
        type="text"
        placeholder="title"
        value={changedNote.title}
        ref={inputTitleRef}
        onChange={ChangeNoteHandler}
      />
      <TextareaStyled
        placeholder="note"
        value={changedNote.note}
        ref={textareaNoteRef}
        onChange={ChangeNoteHandler}
      ></TextareaStyled>
      <Link to="/">
        <button onClick={ChangeNote}>Edit Note</button>
      </Link>
    </CreateNoteStyled>
  );
};

const InputStyled = styled.input`
  width: 60%;
  margin: 2rem;
`;

const CreateNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TextareaStyled = styled.textarea`
  margin-bottom: 2rem;
  width: 60%;
  height: 6rem;
`;

const LinkStyled = styled(Link)`
  margin-top: 2rem;
`;

export default EditNote;
