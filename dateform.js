var dateform = {
	day: null,
	month: null,
	year: null,
	hour: null,
	minute: null,	

	init: function() {
		this.day = document.getElementById("day")
		this.month = document.getElementById("month")
		this.year = document.getElementById("year")
		this.hour = document.getElementById("hour")
		this.minute = document.getElementById("minute")	

		for (var i = 2018; i <= 2038; i++) this.push(this.year, i)
		for (var i = 0; i <= 23; i++) this.push(this.hour, i)
		for (var i = 0; i <= 59; i++) this.push(this.minute, i)
		for (var i = 1; i <= 31; i++) this.push(this.day, i)
	},

	push: function(node, key) {
		var option = document.createElement("option")
		option.setAttribute("value", key)
		option.innerText = key
		node.appendChild(option)		
	},

	pop: function(node) {
		var option = node.lastChild
		node.removeChild(option)		
	},

	refreshDays: function() {
		var year = this.year.value
		var month = this.month.value
		var day31 = ['1', '3', '5', '7', '8', '10', '12']
		var day30 = ['4', '6', '9', '11']
		var days = this.day.lastChild.value

		if (day31.indexOf(month) != -1) {
			var d = days - 31
		} else if (day30.indexOf(month) != -1) {
			var d = days - 30
		} else {
			if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
				var d = days - 29
			} else {
				var d = days - 28
			}
		}

		if (d > 0) {
			for (var i = 0; i < d; i++) {
				this.pop(this.day)
			}
		} else {
			for (var i = 0; i < -d; i++) {
				days++
				this.push(this.day, days)
			}
		}
	}
};
