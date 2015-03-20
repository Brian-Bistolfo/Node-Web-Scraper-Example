var request = require('request');
var cheerio = require('cheerio');

// crossfit schedule url in list form
var url = 'https://vaultcrossfit.sites.zenplanner.com/calendar.cfm?CFID=7fe8f293-0808-4dbb-912f-901e30bbc5a7&CFTOKEN=0&jsessionid=0E6327392A26A96FFB08CAAEC92C08BA&VIEW=list&DATE=2015-03-19&frame=true';

request (url, function (err, resp, body) {
  if (err) { throw err; }

  $ = cheerio.load(body);

  $('#idPage').each(function() {
    var allText = $(this).text().trim().toString();

    // (fragile if page is substantially changed)
    console.log(allText.substring(410, 3460));
  });

});
