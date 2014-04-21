
var util = require('util');
var fs = require('fs');
var cheerio = require('cheerio');
var request  = require('request');
var find = {};

setTimeout(function() {
	fs.readFile('./rslt.txt', function  (err, data1) {
		fs.readFile('./index.html', function  (err, data2) {
			var sData = data1.toString().split('\n');
			var html  = data2.toString();
			var $ = cheerio.load(html);
			var finder = {};
			for (var i = 0; i < sData.length; i++) {
				finder[sData[i].split('~')[1]] = sData[i].split('~')[2];
			}
			$('a.popup-gallery').each(function(i, j) {
				var find = $(j).attr('href');
				var replace = finder[find];
				$(j).children().first().attr('src', replace);
			});
			fs.writeFile('./index.html', $.html(), function(err) {
				if (err) {
					console.log(err);
				}
				else {
					console.log('write success');
				}
			});
		});
	});
}, 0);
