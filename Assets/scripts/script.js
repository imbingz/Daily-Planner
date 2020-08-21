$(document).ready(function() {
	/* ADD CURRENT DATE --------------------------------------------------------------------------------------------*/

	// Use moment.js format and attach/display the date to the header
	function headerDate() {
		let m = moment();
		$('#currentDay').text(m.format('dddd, LL'));
		console.log(typeof m.format('H'));
	}

	headerDate();

	/* PLANNER MAIN BODY --------------------------------------------------------------------------------------------*/

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

	// create planner body

	$.each(workDay, function(index, workHour) {
		console.log(index, workHour);
		console.log(workHour.id);
		console.log(workHour.hour);
		console.log(workHour.time);
		console.log(workHour.meridiem);
		console.log(workHour.plan);

		//For each workHour, create a newRow
		let newRow = $('<form>').addClass('row time-block');
		//Append the newRow to .container <div>
		$('.container').append(newRow);

		//Create .hour <div>
		let hourEl = $('<div>').attr({
			class: 'hour col-2 col-lg-1',
			'data-hour': workHour.hour
		});

		// Add hourText to hourEl
		let hourText = hourEl.text(`${workHour.hour}:00 ${workHour.meridiem} `);

		//Append hourEl to newRow
		newRow.append(hourEl);

		//Create texarea
		let textEl = $('<textarea>').attr({
			class: 'col-8 col-lg-10 description past',
			id: workHour.id
		});

		workHour.plan = $('textarea').val();

		//Append textareas
            newRow.append(textEl);
            
            
	});

	// .time-block .row  <form>, append .container div
	// .hour .col-2 .col-lg-1 <div>
	//.hour-text <span> 9:00AM
	// append <span> to <div>
	// Day plans - .description .col-8 .col-lg-10 id = " " <textarea>
	// append <textarea> to <form>
	// Create .saveBtn .col-2 .col-lg-1 <button> (saveButton)
	// .fa .fa-save .fa-lg <i> (saveIcon)
	//append <i> to <button>
	// append <button> to <form>
	// OR append all new tags to the form at once
	// form. append(all above three )
	// check current hour (conditional statement) and add .past .present .future classes accordingly to each <textarea>
	// set and get data to n from localStorage
	// get the textarea input value and save to localStorage
	// add saveBtn 'click' event -->
	//Save data to the local storage;
	// Set data in localStorage
	// Display any data in localStorage, if any
});
