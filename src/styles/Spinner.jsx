import React from "react";
import styled from "styled-components";

function Spinner({ load, ...props }) {
  if (!load) return <></>;
  return (
    <Wrapper {...props}>
      <Spin />
    </Wrapper>
  );
}

export default Spinner;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* z-index: 99; */
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  /* background-color: #007bff;
  mix-blend-mode: overlay; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
