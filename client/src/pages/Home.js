import React from 'react';
import Navbar from '../components/Navbar';
import DrawerLeft from '../components/DrawerLeft';
import { Switch, Route } from 'react-router-dom';

import DrawContext from '../context/DrawContext';

import History from '../pages/History';
import CreateStory from './CreateStory/CreateStory';

const Home = () => {
	const [
		{ drawstatus },
		setDrawState
	] = React.useState({ drawstatus: false });

	const toggleDrawer = () => {
		setDrawState({
			drawstatus: !drawstatus
		});
	};
	const contextValue = {
		drawstatus,
		toggleDrawer
	};

	return (
		<div>
			<DrawContext.Provider value={contextValue}>
				<DrawerLeft />
				<Navbar />
			</DrawContext.Provider>
			<Switch>
				<Route path="/history" exact component={History} />
				<Route path="/createstory" exact component={CreateStory} />
			</Switch>
		</div>
	);
};

export default Home;
