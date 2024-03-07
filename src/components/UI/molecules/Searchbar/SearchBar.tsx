import Flex from "../../atoms/Flex/Flex";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import styles from "./SearchBar.module.scss";

export type SearchBarProps = {
	searchText: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setShowSearchResults: React.Dispatch<React.SetStateAction<boolean>>;
};

function SearchBar({ searchText, onChange, setShowSearchResults }: SearchBarProps) {
	return (
		<Flex
			direction='column'
			align='center'
			onClick={() => setShowSearchResults(true)}
			onKeyDown={() => setShowSearchResults(true)}
			tabIndex={0}
			className={styles.SearchBarContainer}
		>
			<div>
				<Input
					id='search'
					type='text'
					value={searchText}
					onChange={onChange}
					placeholder='Search for a pokemon'
				/>
				<img src='/images/svgs/searchIcon.svg' alt='Search icon' width={24} height={24} />
				<Button style={{ alignSelf: "end" }} color='primary'>
					Search
				</Button>
			</div>
		</Flex>
	);
}

export default SearchBar;
