import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CreateNote = ({ notes, setNotes, clipboard, setClipboard }) => {
  //Ref
  const inputTitleRef = useRef(null);
  const textareaNoteRef = useRef(null);
  //Handlers
  const TakeNotesHandler = () => {
    const date = new Date();
    const timestamp = Date.now();
    setNotes([
      ...notes,
      {
        id: timestamp,
        title: inputTitleRef.current.value,
        note: textareaNoteRef.current.value,
        date: `${date.getHours()}:${date.getMinutes()}, ${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`,
      },
    ]);
    setClipboard({
      title: "",
      note: "",
    });
  };

  const CopyToClipboardHandler = () => {
    setClipboard({
      title: inputTitleRef.current.value,
      note: textareaNoteRef.current.value,
    });
  };

  return (
    <CreateNoteStyled>
      <h1>Create Note</h1>
      <InputStyled
        value={clipboard.title}
        onChange={CopyToClipboardHandler}
        type="text"
        placeholder="title"
        ref={inputTitleRef}
      />
      <TextareaStyled
        value={clipboard.note}
        onChange={CopyToClipboardHandler}
        ref={textareaNoteRef}
        placeholder="note"
      ></TextareaStyled>
      <Link to="/">
        <button onClick={TakeNotesHandler}>Create Note</button>
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

export default CreateNote;
