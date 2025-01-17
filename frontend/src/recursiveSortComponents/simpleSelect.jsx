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
	const [age, setAge] = React.useState("0");
	const [state] = React.useState({
		pos: props.pos,
	});
	const handleChange = (event) => {
		console.log(state.pos);
		setAge(event.target.value);
		props.onAlgoChanged(state.pos, event.target.value);
	};

	return (
		<div className='ml-2 mr-2'>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-simple-select-label'>Algorithm</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={age}
					onChange={handleChange}
				>
					<MenuItem value={0} style={{ selected: true }}>
						Merge Sort
					</MenuItem>
					<MenuItem value={1} style={{ selected: true }}>
						Heap Sort
					</MenuItem>
					<MenuItem value={2} style={{ selected: true }}>
						Quick Sort
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SimpleSelect;
