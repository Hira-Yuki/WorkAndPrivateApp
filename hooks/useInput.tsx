import { useState } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = (text: string) => {
    setValue(text);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    reset,
  }
}
