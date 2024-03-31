import { styled } from "styled-components";
import { listIds } from "../../redux/constants/boardConstants";

export const TaskListWrapper = styled.div`
 display: flex; 
 min-height: 100vh;
 width: 33%;
 flex-grow: 1;
 .column {
    flex-grow: 1;
    padding-right: 10px;
 }
.header {
  padding: 20px 20px 10px 20px; 
  background: ${({ theme, id }) => id === listIds.toDo ? theme.colors.primary : listIds.inProgress === id ? theme.colors.secondary : theme.colors.tertiary};
  display: flex;
  font-size: 26px;
  font-weight: 600;
  .title {
    flex-grow: 1;
    text-align: center;
    color: #fff;
    h3 {
        margin: 0;
    }
  }
}
.list {
    background: ${({ theme, id }) => id === listIds.toDo ? theme.colors.primaryLight : listIds.inProgress === id ? theme.colors.secondaryLight : theme.colors.tertiaryLight};
    margin-top: 10px;
    min-height: 80vh;
    padding-top: 20px;
    text-align: center;
}
.button {
    color: #fff;
    background: inherit;
    border: 0;
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
}
.task {
    background: ${({ theme, id }) => id === listIds.toDo ? theme.colors.primaryMediumLight : listIds.inProgress === id ? theme.colors.secondaryMediumLight : theme.colors.tertiaryMediumLight};
    max-width: 60%;
    color: #fff;
    display: inline-flex;
    justify-content: space-between;
    min-height: 200px;
    text-align: center;
    padding: 20px;
    font-size: 28px;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    min-width: 60%;
    cursor: grab;
    button {
        position: absolute;
        right: 20px;
        top: 20px;
        background: inherit;
        color: #fff;
        border: 0;
        cursor: pointer;
        font-size: 20px;
        display: none;
    }
    &:hover button {
        display: block;
      }
}
.input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .submitButton {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`