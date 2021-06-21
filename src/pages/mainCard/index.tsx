import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Cards } from 'src/data/cards';
import { ICardItem } from 'src/types/card';

interface IStyleProps {
	backgroundColor: string;
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
	orientation: {
		'@media only screen and (orientation: portrait)': {
			maxHeight: '100%',
			width: '100%',
		},
		'@media only screen and (orientation: landscape)': {
			maxWidth: '100%',
			height: '100%',
		}
	},
}));

interface IProps {
	selectedCardKey: string;
}

const MainCard = ({ selectedCardKey }: IProps): JSX.Element => {
	const foundCard = Cards.find((card) => card.key === selectedCardKey) as ICardItem;
	const classes = useStyles({
		backgroundColor: foundCard.backgroundColor,
	});

	return (
		<div className={classes.root}>
			<img src={foundCard.imagePath} alt="" className={classes.orientation} />
		</div>
	);
};

export default MainCard;
