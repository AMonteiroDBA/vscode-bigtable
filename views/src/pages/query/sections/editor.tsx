import React, { useRef } from "react";
import styled from "@emotion/styled";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import { Spacer } from "../../../components/spacer";
import { Padding } from "../../../styling";

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  background-color: #373737;
  color: white;
  border-width: 0;
  box-sizing: border-box;
  padding: ${Padding.medium}px;
`;

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${Padding.medium}px 0;
`;

type Props = {
  onExecute: (prefix: string) => void;
};
export function Editor(props: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Container>
      <TextArea ref={textAreaRef} autoFocus placeholder="Enter rowKey" />
      <ActionContainer>
        <VSCodeButton>Cancel</VSCodeButton>
        <Spacer width={8} />
        <VSCodeButton
          onClick={() => props.onExecute(textAreaRef.current?.value ?? "")}
        >
          Execute
        </VSCodeButton>
      </ActionContainer>
    </Container>
  );
}