type ClubImageProps = {
	url: string;
	imageStyle: string;
	imageContaier: string;
};

export default function Image(props: ClubImageProps) {
	const { url, imageStyle, imageContaier } = props;

	return (
		<div className={imageContaier}>
			<img
				src={'http://localhost:8080/' + url}
				className={imageStyle}
				alt='User Iamge'
			/>
			;
		</div>
	);
}
