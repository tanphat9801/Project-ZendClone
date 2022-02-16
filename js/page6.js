$(document).ready(function () {

    var key = 'AIzaSyDTr18kbwOaBOkSG5PZatBkYK1Wbn1L1yw';
    var playlistId = [
        'PLv6GftO355AsZFXlWLKob6tMsWZa4VCY1',
        'PLv6GftO355AsWv1PaUHRAAf1NB0usIhVD',
        'PLv6GftO355Au9RuClBKMEDNlxsh8IzDTI',
        'PLv6GftO355AsVd5ESbQhIMpP74y-tsduc',
        'PLv6GftO355AvAl13CUVcVvWu0hOZnpfW8',
        'PLv6GftO355AuLqfA6_EGjitcDQ5lg5leq',
        'PLv6GftO355AsQtYp_YrsqEihOCiNlZkCb',
        'PLv6GftO355Au593vQVXUMCdCFWwQQz4ga',
        'PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf',
        'PLv6GftO355AtasIvXXJNXIs_H6v9KSUXC',
        'PLv6GftO355Au7i_xN_0OsVZUO54rp9tR6',
        'PLv6GftO355AvWAQv4or-RE2RAFFXaI3Jz',
        'PLv6GftO355AsMUZXqKY_IFsNahY1txNXS'
      ];
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var sel = document.getElementById('sel_status').selectedIndex;
    var i = sel;
    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        playlistId: playlistId[i]
    }
    
    loadVids( options );

    $('main').on('click', 'aside', function () {
        var id = $(this).attr('data-key');
       mainVid(id);
    });

    function loadVids ( options ) {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    $('#sel_status').change(function() {
        var playlistIndex = $(this).prop('selectedIndex');
        options.playlistId = playlistId[playlistIndex];
        $('main').html('');
        loadVids( options );
    });

    function mainVid(id) {
        $('#video').html(`
					<iframe width="800" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 80);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<aside class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4 id="idtext">${title}</h4>
									<p>${desc}</p>
								</div>

							</aside>
						`);
        });
    }

});