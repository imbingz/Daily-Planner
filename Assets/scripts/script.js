$(document).ready(function() {
	/* ADD CURRENT DATE --------------------------------------------------------------------------------------------*/

	// Use moment.js format and attach/display the date to the header
	function headerDate() {
		let m = moment();
		$('#currentDay').text(m.format('dddd, LL'));
	}

	headerDate();

	// create an object for each time-block and put them into an array variable to loop through

	let workDay = [
		{
			id: '0',
			hour: '09',
			time: '9',
			meridiem: 'AM',
			plan: ''
		},
		{
			id: '1',
			hour: '10',
			time: '10',
			meridiem: 'AM',
			plan: ''
		},
		{
			id: '2',
			hour: '11',
			time: '11',
			meridiem: 'AM',
			plan: ''
		},
		{
			id: '3',
			hour: '12',
			time: '12',
			meridiem: 'PM',
			plan: ''
		},
		{
			id: '4',
			hour: '01',
			time: '13',
			meridiem: 'PM',
			plan: ''
		},
		{
			id: '5',
			hour: '02',
			time: '14',
			meridiem: 'PM',
			plan: ''
		},
		{
			id: '6',
			hour: '03',
			time: '15',
			meridiem: 'PM',
			plan: ''
		},
		{
			id: '7',
			hour: '04',
			time: '16',
			meridiem: 'PM',
			plan: ''
		},
		{
			id: '8',
			hour: '05',
			time: '17',
			meridiem: 'PM',
			plan: ''
		}
	];

	/* SET, GET AND DISPLAY ANY EXISTING DATA IN LOCALSTORAGE --------------------------------------------------------------------------------------------*/

	function initialize() {
		//Check if any data existing in localStorage
		let storedDay = JSON.parse(localStorage.getItem('workDay'));

		if (storedDay) {
			workDay = storedDay;
		}
		//Store existing data to localStorage
		savePlans();

		//Display existing localStorage data
		displayPlans();
	}

	/* PLANNER  --------------------------------------------------------------------------------------------*/

	$.each(workDay, function(index, workHour) {
		console.log(index, workHour);
		console.log(workHour.id);
		console.log(workHour.hour);
		console.log(workHour.time);
		console.log(workHour.meridiem);
		console.log(workHour.plan);

		/* MAIN BODY LAYOUT  --------------------------------------------------------------------------------------------*/

		//For each workHour, create a newRow
		let newRow = $('<form>').addClass('row time-block');
		//Append the newRow to .container <div>
		$('.container').append(newRow);

		//Create .hour <div>
		let hourEl = $('<div>').attr({
			class: 'hour col-2 col-lg-1',
			'data-hour': workHour.time
		});

		// Add hourText to hourEl
		let hourText = hourEl.text(`${workHour.hour}:00 ${workHour.meridiem} `);

		//Create texarea
		let textEl = $('<textarea>').attr({
			class: 'col-8 col-lg-10 description',
			id: workHour.id
		});

		//Get textarea input
		workHour.plan = textEl.val().trim();
		console.log(textEl.val());

		// Create save buttons
		let buttonEl = $('<button>').addClass('saveBtn col-2 col-lg-1');

		// Create save icons
		let iconEl = $('<i>').addClass('fa fa-save fa-lg');

		//Append icons
		buttonEl.append(iconEl);

		//Append all three children to newRow
		newRow.append(hourEl, textEl, buttonEl);

		/* HOUR CHECK AND COLOR CHANGE --------------------------------------------------------------------------------------------*/

		// check current hour and add .past .present .future classes accordingly to each <textarea>

		let currentHour = parseInt(moment().format('H'));
		console.log(currentHour);

		plannerHour = parseInt(workHour.time);

		if (plannerHour < currentHour) {
			console.log(plannerHour);
			textEl.addClass('past');
			// Disable input to past hours
			// textEl.attr('disabled', true);
		} else if (plannerHour === currentHour) {
			textEl.addClass('present');
		} else {
			textEl.addClass('future');
		}
	});

	//Call the initialize func after planner loaded
	initialize();

	/* SAVE PLAN INPUTS --------------------------------------------------------------------------------------------*/

	// Save plans in localStorage
	function savePlans() {
		localStorage.setItem('workDay', JSON.stringify(workDay));
	}

	//Display plans
	function displayPlans() {
		$.each(workDay, function(index, workHour) {
			$(`#${workHour.id}`).val(`${workHour.plan} `);
		});
	}

	//Add event listener to buttons
	$('.saveBtn').on('click', function(event) {
		console.log('button clicked');

		//Prevent form submission and page reload
		event.preventDefault();
            
            savePlans();
		displayPlans();
	});

	// get the textarea input value and save to localStorage

	// set and get data to n from localStorage

	// add saveBtn 'click' event -->
	//Save data to the local storage;
	// Set data in localStorage
	// Display any data in localStorage, if any
});
