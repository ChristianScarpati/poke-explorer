import { CSSProperties, ForwardedRef, ReactNode } from "react";

export type ComponentProps<T> = {
	children?: ReactNode;
	className?: string;
	style?: Partial<CSSProperties>;
	ref?: ForwardedRef<T>;
};

export type TypographyProps<T> = {
	children?: ReactNode;
	className?: string;
	id?: string;
	small?: boolean;
	large?: boolean;
	style?: Partial<CSSProperties>;
	ref?: ForwardedRef<T>;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	color?: CSSProperties["color"];
};
