import React from 'react';

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type CharacterList = {
  school: string;
  characters: Character[];
};

const CharacterList: React.FC<CharacterList> = (props) => {
  const { school, characters } = props;

  return (
    <>
      <h3>{school}</h3>
      {characters.map((character) => (
        <ul>
          <li>{character.name}</li>
          <li>{character.grade}</li>
          <li>{character.height}</li>
          <li>{character.id}</li>
        </ul>
      ))}
    </>
  );
};

export default CharacterList;
