import {useState, useEffect} from 'react';

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = useState()
  const downHandler = ({key}) => {
    if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key)
        callback(key)
    }
  }
  const upHandler = () => {
    setKeyPressed(null)
  }
  useEffect(() => {
    document.addEventListener('keydown', downHandler);
    document.addEventListener('keyup', upHandler);
    return () => {
      document.removeEventListener('keydown', downHandler);
      document.removeEventListener('keyup', upHandler);
    }
  })
  // return keyPressed
};
export default useKeyPress;
