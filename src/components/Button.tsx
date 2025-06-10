import { HTMLProps, MouseEventHandler } from "react";

type ButtonProps={
    onClickHandler: MouseEventHandler<HTMLButtonElement>
} & HTMLProps<HTMLButtonElement>

function Button({ onClickHandler, className }: ButtonProps) {
    return <button onClick={onClickHandler} className={className}>Click</button>
}

export default Button;