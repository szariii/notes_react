import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const ShowNote = ({ notes, setNotes }) => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);

  return (
    <NoteStyled>
      <h1>Note</h1>
      {notes
        .filter((note) => note.id === id)
        .map((note) => (
          <NoteContainerStyled key={note.id}>
            <h2>{note.title}</h2>
            <NoteMessageStyled>{note.note}</NoteMessageStyled>
            <Link to={`/edit/${id}`}>
              <button>Edit Note</button>
            </Link>
          </NoteContainerStyled>
        ))}
    </NoteStyled>
  );
};

const NoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoteContainerStyled = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoteMessageStyled = styled.h3`
  margin: 2rem;
`;

export default ShowNote;
