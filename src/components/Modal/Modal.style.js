import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .content {  background-color: #fefefe;
    margin: 20% auto;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
  }
  .closeButton {
    float: right;
    cursor: pointer;
    font-size: 24px;
  } 
`;
