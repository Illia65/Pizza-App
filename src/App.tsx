import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0); //типипзация состояния

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button  appearance="small" onClick={addCounter}>Кнопка </Button>
      <Button appearance="big" onClick={addCounter}>Кнопка </Button>
      <Input isValid={true} placeholder="Email"/>
   
    </>
  );
}

export default App;
