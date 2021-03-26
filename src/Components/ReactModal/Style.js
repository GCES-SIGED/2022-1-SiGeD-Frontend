import styled from 'styled-components';

export const ModalContent = styled.div`
  margin: 5% 3%;
`;

export const Title = styled.h1`
  font-size: 150%;

  @media(max-width: 750px) {
    font-size: 120%;
  }
`;

export const P = styled.p`
  display: inline-block;
  margin: 2% 1%;

  @media(max-width: 750px) {
    font-size: 80%;
  }
`;

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;

  @media(max-width: 750px) {
    width: 80%;
    height: 50%;
  }
`;

export const TextArea = styled.textarea`
  font-family: Montserrat;
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;
  width: 90%;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10%;
`;

export const DivColor = styled.div`
  margin-right: 10%;
  @media(max-width: 750px) {
    margin-top: 5%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1%;
  width: 80%;

  @media(max-width: 750px) {
    flex-direction: column;
    float: right;
  }
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 750px) {
    flex-direction: column;
  }
`;

export const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, )',
  },
  content: {
    position: 'absolute',
    top: '30%',
    left: '10vw',
    right: '10vw',
    height: 'max-content',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '20px',
    boxSizing: 'border-box',
    boxShadow: '5px 5px 5px black',
    outline: 'none',
    padding: '0',
  },
};