// localhost:3000/api/preview?secret=my-secret&slug=/

const MyPage = ({ isPreviewMode }) => {
	return (
		`isPreviewMode: ${isPreviewMode}`
	);
};

export const getStaticPaths = async () => {
	return {
		paths: [{
			params: {
				all: [], // base route
			},
		}, {
			params: {
				all: ['route-1'], // base route
			},
		}],
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params, preview=false }) => {
	return {
		props: {
			isPreviewMode: preview,
		},
	};
};

export default MyPage;