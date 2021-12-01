import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/modules/counter/actions";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const CounterButton = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const finalNumber = useSelector((state) => state.number);

  const addClicker = () => {
    dispatch(increment(number));
  };
  const subClicker = () => {
    if (finalNumber > 0) {
      dispatch(decrement(number));
    }
  };

  return (
    <div>
      <h2>{finalNumber}</h2>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={subClicker}>-</Button>
        <Button onClick={addClicker}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default CounterButton;
