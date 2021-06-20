import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Cards } from 'src/data/cards';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
	image: {
		width: 48,
		height: 'auto',
		marginRight: 8,
	},
	selected: {
		background: '#e5f6ff',
		'&:hover': {
			background: '#e5f6ff',
		},
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: 4,
			height: '100%',
			background: '#3ebeff'
		}
	}
});

interface IProps {
	isOpen: boolean;
	selectedCardKey: string;
	handleOnClose: () => void;
	handleSelectCard: ({ key }: { key: string }) => void;
}

const SideMenu = ({
	isOpen, selectedCardKey, handleOnClose, handleSelectCard
}: IProps): JSX.Element =>  {
  const classes = useStyles();

  return (
		<Drawer anchor={'right'} open={isOpen} onClose={handleOnClose}>
			<div className={classes.list}>
				<List>
					{Cards.map(({
						key, imagePath, text
					}: {
						key: string;
						imagePath: string;
						text: string;
					}) => {
						const isSelected = key === selectedCardKey;
						return (
							<ListItem
								button
								key={key}
								className={clsx(isSelected && classes.selected)}
								onClick={() => handleSelectCard({ key })}
							>
								<img src={imagePath} alt="" className={classes.image} />
								<ListItemText primary={text} />
							</ListItem>
						);
					})}
				</List>
			</div>
		</Drawer>
  );
}

export default SideMenu;
