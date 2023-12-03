import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { debounce } from "throttle-debounce";

export const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ onChange, ...props }) => {

    const _onChange = debounce(1000, (e) => {
        onChange && onChange(e)
    });

    return (
      <SearchInputInput {...props} onChange={_onChange} />
    )
}

const SearchInputInput = styled.input`
    border: 2px solid #C0C0C0;
    width: 100%;
    height: 70px;
    outline: none;
    border-radius: 20px;
    padding: 20px;
    font-size: 20px;
    box-sizing: border-box;
`