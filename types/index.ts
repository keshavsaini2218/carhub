import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit" ;
}