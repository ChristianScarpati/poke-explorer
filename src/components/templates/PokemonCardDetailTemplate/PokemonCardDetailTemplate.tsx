import { Title } from "../../UI/atoms/Title";
import { Container } from "../../UI/atoms/Container";

type PokemonCardDetailTemplateProps = {
	children?: React.ReactNode;
};

function PokemonCardDetailTemplate({ children }: PokemonCardDetailTemplateProps) {
	return (
		<div>
			<Title h1 relative style={{ padding: "2rem" }}>
				POKEMON
			</Title>

			<Container marginCenter style={{ marginTop: "8rem" }}>
				{children}
			</Container>
		</div>
	);
}

export default PokemonCardDetailTemplate;
