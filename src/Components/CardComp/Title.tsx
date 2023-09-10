import Text from '../UI/Text';
type ClubTitleProp = {
	title: string;
	style: string;
};

export default function Title(props: ClubTitleProp) {
	const { title, style } = props;
	return <Text data={title} styles={style} />;
}
