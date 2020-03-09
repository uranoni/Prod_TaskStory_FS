import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import UserType from '../../components/StoryComponent/UserType';
import UserActivity from '../../components/StoryComponent/UserActivity';
import UserStep from '../../components/StoryComponent/UserStep';
import UserTask from '../../components/StoryComponent/UserTask';
const CreateStory = () => {
	return (
		<Fragment>
			<Grid container>
				<Grid direction="column">
					<Grid direction="row">
						<UserType />
					</Grid>
					<UserActivity />
					<UserStep />
					<UserTask />
				</Grid>
				<Grid direction="column">
					<Grid direction="row">
						<UserType />
					</Grid>
					<UserActivity />
					<UserStep />
					<UserTask />
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default CreateStory;
