import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const SimpleSelect = (props) => {
	const classes = useStyles();
	const [selectedAlgo, setSelectedAlgo] = React.useState("0");  // Keep track of selected algorithm

	// Handle algorithm change
	const handleChange = (event) => {
		const value = event.target.value;
		setSelectedAlgo(value);
		props.onAlgoChanged(props.pos, value);  // Call the parent function to notify about the algorithm change
	};

	return (
		<div className='ml-2 mr-2'>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-simple-select-label'>Algorithm</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selectedAlgo}
					onChange={handleChange}  // Properly trigger algorithm change
				>
					<MenuItem value={"0"}>Inorder</MenuItem>
					<MenuItem value={"1"}>Preorder</MenuItem>
					<MenuItem value={"2"}>Postorder</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SimpleSelect;
