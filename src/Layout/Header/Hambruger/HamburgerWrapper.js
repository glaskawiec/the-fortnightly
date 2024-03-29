import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  z-index: 1;
    padding: 0;
    margin-top: 5px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter, -webkit-filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    overflow: visible;
`;

export default HamburgerWrapper;
