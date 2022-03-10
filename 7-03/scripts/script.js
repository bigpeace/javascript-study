'use strict';

{
    $('#zip-search').on('click', function(event) {
        event.preventDefault();

        $('#address1').val('');
        $('#address2').val('');

        const zip = $('#zipcode').val();
        $.ajax({
            url: 'https://map.yahooapis.jp/search/zip/V1/zipCodeSearch',
            dataType: 'jsonp',
            data: {
                //appid: 'コピーしておいたクライアントID',
                appid: 'dj00aiZpPTIwbm5vWFBhRW91byZzPWNvbnN1bWVyc2VjcmV0Jng9NGY-',
                query: encodeURIComponent(zip),
                output: 'json'
            }
        })
        .done(function(data) {
            console.log(data);

            if(data.ResultInfo.Count === 1) {
                const address = data.Feature[0].Property.Address;
                $('#address1').val(address);
            } else {
                alert('住所げ特定できませんでした。');
            }
        })
        .fail(function(error){
            console.log('エラー発生' + error.statusText);
        });
    });
}    