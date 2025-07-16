import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { BarChat, AreaChat } from "../components";

const ChartsContainer = ({ data }) => {
  const [barChat, setBarChat] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type="button" onClick={() => setBarChat(!barChat)}>
        {barChat ? "Area Chart" : "Bar Chart"}
      </button>
      {barChat ? <BarChat data={data} /> : <AreaChat data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
