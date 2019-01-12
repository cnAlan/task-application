import styled from 'styled-components'

export const SearchInput = styled.input`
    height: 30px;
    border: none;
    background: #eee;
    border-radius: 50px;
    width: 0;
    transition: all .5s ease;
    visibility: hidden;

    &.show {
        width: 200px;
        visibility: visible;
    }
    &.slide-enter {
        transition: width .5s ease;
        visibility: visible;
    }
    &.slide-enter-active {
        width: 200px;
    }
    &.slide-exit {
        transition: width .5s ease;
    }
    &.slide-exit-active {
        width: 0;
    }
`