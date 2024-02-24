import { CSSProperties, ForwardedRef, ReactNode } from "react";

export type ComponentProps<T> = {
	children?: ReactNode;
	className?: string;
	style?: Partial<CSSProperties>;
	ref?: ForwardedRef<T>;
};
