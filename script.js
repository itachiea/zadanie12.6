$(function(){

    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');
    var countryName = "";

    function getQuote() {
        $.getJSON(url + countryName, showCountryList);
    }

    function searchCountries() {
        countryName = $('#country-name').val();
        if (!countryName.length) 
            countryName = 'Poland';
                getQuote();
                //$.ajax({
              //      url: url + countryName,
            //        method: 'GET',
           //         succes: showCountryList()
            //    });
        }

    function showCountryList(resp) {
        countriesList.empty();
        console.log(resp);
            resp.forEach(function(item){
                $('<li>').text(item.name + ' capital is: ' + item.capital).appendTo(countriesList);
            });
    }



    $('#search').click(function() {
        searchCountries();
    });

});