$(document).ready(function() {
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

	/* ADD CURRENT DATE --------------------------------------------------------------------------------------------*/

	// Use moment.js format and attach/display the date to the header
	function headerDate() {
		let m = moment();
		$('#currentDay').text(m.format('dddd, LL'));
	}

	headerDate();

	/* PLANNER VISUAL 	--------------------------------------------------------------------------------------------*/

	$.each(workDay, function(index, workHour) {
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

		//Display data from localStorage to textarea
		textEl.val(localStorage.getItem(workHour.id) || '');

		// Create save buttons
		let buttonEl = $('<button>').attr({
			class: 'saveBtn col-2 col-lg-1',
			id: workHour.id
		});

		buttonEl.on('click', function() {
			localStorage.setItem(workHour.id, textEl.val());
		});

		// Create save icons
		let iconEl = $('<i>').addClass('fa fa-save fa-lg');

		//Append icons
		buttonEl.append(iconEl);

		//Append all three children to newRow
		newRow.append(hourEl, textEl, buttonEl);

		/* HOUR CHECK AND COLOR CHANGE --------------------------------------------------------------------------------------------*/

		// check current hour and add .past .present .future classes accordingly to each <textarea>

		let currentHour = parseInt(moment().format('H'));

		plannerHour = parseInt(workHour.time);

		if (plannerHour < currentHour) {
			textEl.addClass('past');
			// Disable input to past hours
			// textEl.attr('disabled', true);
		} else if (plannerHour === currentHour) {
			textEl.addClass('present');
		} else {
			textEl.addClass('future');
		}
	});
});
