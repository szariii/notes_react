import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";

const ShowNotes = ({ notes, setNotes }) => {
  //Handlers
  const deleteNoteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <ShowNotesStyled>
      <h2>Notes</h2>
      <NotesContainer>
        {notes.map((note) => (
          <NoteStyled key={note.id}>
            <CheckNote>
              <Link to={`/note/${note.id}`}>
                <p>
                  <b>{note.title}</b>
                </p>
                <DateContainerStyled>
                  <p>{note.date}</p>
                </DateContainerStyled>
              </Link>
            </CheckNote>
            <DeleteNoteDiv>
              <IconContainer onClick={() => deleteNoteHandler(note.id)}>
                <IconContext.Provider value={{ color: "red", size: "2rem" }}>
                  <MdDelete />
                </IconContext.Provider>
              </IconContainer>
            </DeleteNoteDiv>
          </NoteStyled>
        ))}
      </NotesContainer>
    </ShowNotesStyled>
  );
};

const CheckNote = styled.div`
  background-color: lightgreen;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const DeleteNoteDiv = styled.div`
  padding-top: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const ShowNotesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem));
  column-gap: 1rem;
`;

const NoteStyled = styled.div`
  border: 2px solid black;
  padding: 2rem;
  margin: 2rem;
  background-color: #b5c9eb;
`;

const DateContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ShowNotes;
