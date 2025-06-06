import { HTMLProps, MouseEventHandler } from "react";

// interface ButtonProps extends {
//     onClickHandler: MouseEventHandler<HTMLButtonElement>
// }

type ButtonProps={
    onClickHandler: MouseEventHandler<HTMLButtonElement>
} & HTMLProps<HTMLButtonElement>

function Button({ onClickHandler, className }: ButtonProps) {
    return <button onClick={onClickHandler} className={className}>Click</button>
}

export default Button;