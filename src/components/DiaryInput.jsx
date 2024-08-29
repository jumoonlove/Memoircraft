import { Input, Button} from 'antd';
import { useState } from 'react';
import { Title } from "./CommonStyles"
import styled from 'styled-components'

const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit, api }) => {
    const [userInput, setUserInput] = useState("");

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleClick = () => {
        if (!userInput) {
            api.open({
                type: "error",
                content: "Write down what you have done !",
            });
            return;
        }
        api.open({
            type: "success",
            content: "Successful request !",
        })
        onSubmit(userInput);
        setUserInput("");
    }

    return (
        <div>
            <Title>Today's Diary</Title>
            <TextArea
                value={userInput}
                onChange={handleUserInput}
                placeholder='Please write down about what you have done today'
                style={{ height: '200px' }}
            />
            <ButtonContainer>
                <Button loading={isLoading}
                    onClick={handleClick}
                >SUBMIT</Button>
            </ButtonContainer>
        </div>
    )
}

export default DiaryInput

const ButtonContainer = styled.div`
margin: 20px;
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
`;