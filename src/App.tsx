import React, { useState } from 'react';
import MainCard from './pages/mainCard';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideMenu from './components/sideMenu';
import { Cards } from './data/cards';

const defaultCards = Cards[0];

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'pink',
		minHeight: '100vh',
		height: '100%',
		position: 'relative'
  },
	appBar: {
		position: 'absolute',
		left: 0,
		width: '100vw',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	iconButton: {
		margin: '4px 16px',
		color: '#5c5c5c8a',
	}
}));

const App = (): JSX.Element => {
	const classes = useStyles();
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [selectedCardKey, setSelectedCardKey] = useState(defaultCards.key);

	const handleSelectCard = ({ key }: { key: string }) => {
		setSelectedCardKey(key);
		setIsOpenMenu(false);
	}

  return (
		<>
			<div className={classes.root}>
				<div className={classes.appBar}>
					<IconButton
						aria-label="menu"
						className={classes.iconButton} size="medium"
						onClick={() => setIsOpenMenu(true)}
					>
						<MenuIcon />
					</IconButton>
				</div>
				<MainCard selectedCardKey={selectedCardKey} />
			</div>
			<SideMenu
				isOpen={isOpenMenu}
				selectedCardKey={selectedCardKey}
				handleOnClose={() => setIsOpenMenu(false)}
				handleSelectCard={handleSelectCard}
			/>
		</>
  );
}

export default App;
