import time
from flask import Flask, request

app = Flask(__name__)
months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
weekdays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

@app.route('/api/time')
def getCurrentTime():
	milliTime = time.time()
	gmTime = time.gmtime(milliTime)
	date = weekdays[gmTime.tm_wday] + ', ' + months[gmTime.tm_mon] + ' ' + str(gmTime.tm_mday) + ' ' + str(gmTime.tm_year)
	newHr = gmTime.tm_hour - 7
	
	hrTime = str(newHr) if newHr > 9 else '0' + str(newHr)
	minTime = str(gmTime.tm_min) if gmTime.tm_min > 9 else '0' + str(gmTime.tm_min)
	secTime = str(gmTime.tm_sec) if gmTime.tm_sec > 9 else '0' + str(gmTime.tm_sec)

	_time = hrTime + ':' + minTime + ':' + secTime

	return {'date': date, 'time': _time}