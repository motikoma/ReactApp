import React, { useRef } from 'react';

const TextInput: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick: () => void = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <input type="button" value="focus" onClick={handleClick} />
    </>
  );
};

export default TextInput;
