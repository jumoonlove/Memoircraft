import { CallGPT } from "./api/gpt";
import { useState } from "react";
import DiaryInput from "./components/DiaryInput";
import styled from "styled-components";
import logo from "./assets/Memoircraft-logo.png"
import DiaryDisplay from "./components/DiaryDisplay";
import { message } from "antd";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = message.useMessage();

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const data = await CallGPT({ prompt: userInput }); // Receive the JSON object directly
      if (data) {
        setData(data); // Update state with the new data
      }
    } catch (error) {
      api.open({
        type: "error",
        content: error?.message,
      });
      return;
    } finally {
      setIsLoading(false);
    }
  };


  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  }

  return (
    <AppContainer>
      {contextHolder}
      <AppTitle>
        Psychologist GPT, AI Memoir <img width={"35px"} src={logo}></img>
      </AppTitle>
      <DiaryInput api={api} isLoading={isLoading} onSubmit={handleSubmit} />
      <DiaryDisplay isLoading={isLoading} data={data} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
max-width: 720px;
width: 100%;
margin: 0 auto;
`;

const AppTitle = styled.div`
width: 100%;
margin-bottom: 20px;
font-weight: 400;
font-size: 35px;
text-align: center;
font-family: "Noto serif";
`;