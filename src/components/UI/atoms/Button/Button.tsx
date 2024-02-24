import { forwardRef } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import { ComponentProps } from "../../../utils/types";

type ButtonProps = JSX.IntrinsicElements["button"] &
	ComponentProps<HTMLButtonElement> & {
		className?: string;
		onClick?: (...args: unknown[]) => unknown;
		disabled?: boolean;
		color?: "primary" | "secondary";
	};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, onClick, disabled = false, color, ...rest }: ButtonProps, ref) => {
		const classes = cn(
			styles.container,
			{
				[styles["container--primary"]]: color === "primary",
				[styles["container--secondary"]]: color === "secondary",
			},
			className
		);

		return (
			<button
				tabIndex={0}
				onClick={onClick}
				disabled={disabled}
				ref={ref}
				className={classes}
				{...rest}
			/>
		);
	}
);

export default Button;
