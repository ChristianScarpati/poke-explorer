import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

type InputProps = JSX.IntrinsicElements["input"] &
	InputHTMLAttributes<HTMLInputElement> & {
		className?: string;
		onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
		required?: boolean;
		disabled?: boolean;
	};

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, onChange, id, required = false, disabled = false, ...rest }: InputProps, ref) => {
		const classes = cn(styles.container, className);

		const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(e);
			}

			return null;
		};

		return (
			<div className={classes}>
				<input
					autoComplete='off'
					autoCorrect='off'
					id={id}
					onChange={onInputChange}
					required={required}
					disabled={disabled}
					spellCheck='false'
					ref={ref}
					{...rest}
				/>
			</div>
		);
	}
);

export default Input;
