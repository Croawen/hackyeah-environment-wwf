import styled from 'styled-components'

const Toggle = styled.div`
  flex-shrink: 0;
  width: 46px;
  height: 27px;
  border-radius: 100px;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.value
      ? `
  background-color: rgba(129, 231, 200, 0.25);`
      : `
  background-color: var(--steelBlue-10);`}

  transition: all 200ms;

  &::after {
    position: absolute;
    content: ' ';
    width: 19px;
    height: 19px;
    border-radius: 50%;
    transition: all 200ms;

    ${props =>
      props.value
        ? `
    background-color: #81e7c8;
    left: calc(100% - 19px - 5px); `
        : `
    background-color: var(--steelBlue-30);
    left: 5px;`}
  }
`
export default Toggle
