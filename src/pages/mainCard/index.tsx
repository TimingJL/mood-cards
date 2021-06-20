import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Cards } from 'src/data/cards';
import { ICardItem } from 'src/types/card';

interface IStyleProps {
	backgroundColor: string;
	isHorizontal: boolean;
}

const useStyles = makeStyles(() => ({
	root: (props: IStyleProps) => ({
		background: props.backgroundColor,
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}),
	image: ({ isHorizontal }: IStyleProps) => {
		if (isHorizontal) {
			return ({
				maxWidth: '100%',
				height: '100%',
			});
		}
		return ({
			maxHeight: '100%',
			width: '100%',
		});
	}
}));

interface IProps {
	selectedCardKey: string;
}

const MainCard = ({ selectedCardKey }: IProps): JSX.Element => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	const isHorizontal = windowSize.width > windowSize.height;
	const foundCard = Cards.find((card) => card.key === selectedCardKey) as ICardItem;
	const classes = useStyles({
		isHorizontal,
		backgroundColor: foundCard.backgroundColor,
	});

	const handleOnResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}

	useEffect(() => {
		handleOnResize();
		window.addEventListener('resize', handleOnResize);
		return () => {
			window.removeEventListener('resize', handleOnResize);
		}
	}, []);

	return (
		<div className={classes.root}>
			<img src={foundCard.imagePath} alt="" className={classes.image} />
		</div>
	);
};

export default MainCard;
