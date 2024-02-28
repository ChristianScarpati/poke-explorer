import { FC, forwardRef } from "react";
import cn from "classnames";
import styles from "./Caption.module.scss";
import { TypographyProps } from "../../../utils/types/common";

type CaptionProps = JSX.IntrinsicElements["span"] & TypographyProps<HTMLSpanElement>;

const Caption: FC<CaptionProps> = forwardRef(
	({ children, className, style, small, color, ...props }, forwardedRef) => {
		return (
			<span
				style={{
					fontSize: small ? "1.2rem" : "1.6rem",
					color,
					...style,
				}}
				ref={forwardedRef}
				className={cn(styles["default"], className)}
				{...props}
			>
				{children}
			</span>
		);
	}
);

Caption.displayName = "Caption";

export default Caption;
