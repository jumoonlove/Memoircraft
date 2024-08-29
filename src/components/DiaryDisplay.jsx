import {
    DiaryContainer,
    ResultTitle,
    Divider,
    CardContainer,
    CardTitle,
    CardContent,
    ActionListItem
} from "./CommonStyles";

import {
    CheckCircleTwoTone,
    HeartTwoTone,
    MessageTwoTone,
    SmileTwoTone,
    SoundTwoTone
} from "@ant-design/icons";

const DiaryDisplay = ({ data, isLoading }) => {
    return (
        <DiaryContainer>
            {isLoading ? (
                <>
                    Loading..
                </>
            ) : (
                <>
                    <ResultTitle>{data.title}</ResultTitle>

                    <Divider />

                    <CardContainer>
                        <CardTitle>
                            <CheckCircleTwoTone
                                twoToneColor={"#FF9AA2"}
                                style={{ marginRight: "6px" }}
                            />
                            Summary
                        </CardTitle>
                        <CardContent>{data.summary}</CardContent>
                    </CardContainer>

                    <Divider />

                    <CardContainer>
                        <CardTitle>
                            <HeartTwoTone
                                twoToneColor={"#FFB7B2"}
                                style={{ marginRight: "6px" }}
                            />
                            Diary
                        </CardTitle>
                        <CardContent>{data.emotional_content}</CardContent>
                    </CardContainer>

                    <Divider />

                    <CardContainer>
                        <CardTitle>
                            <SmileTwoTone
                                twoToneColor={"#FFDAC1"}
                                style={{ marginRight: "6px" }}
                            />
                            How I feel
                        </CardTitle>
                        <CardContent>{data.emotional_result}</CardContent>
                    </CardContainer>

                    <Divider />

                    <CardContainer>
                        <CardTitle>
                            <MessageTwoTone
                                twoToneColor={"#B5EAD7"}
                                style={{ marginRight: "6px" }}
                            />
                            Psychological Analysis
                        </CardTitle>
                        <CardContent>{data.analysis}</CardContent>
                    </CardContainer>

                    <Divider />

                    <CardContainer>
                        <CardTitle>
                            <SoundTwoTone
                                twoToneColor={"#C7CEEA"}
                                style={{ marginRight: "6px" }}
                            />
                            Advice
                        </CardTitle>
                        <CardContent>
                            {data.action_list && data.action_list.length > 0 ? (
                                data.action_list.map((action, index) => (
                                    <ActionListItem key={index}>{action}</ActionListItem>
                                ))
                            ) : (
                                <p>No action items available.</p>
                            )}
                        </CardContent>
                    </CardContainer>
                </>
            )}
        </DiaryContainer>
    );
}

export default DiaryDisplay;
