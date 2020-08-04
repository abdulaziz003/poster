jQuery(function ($) {
    $('#load_works').click(function (e) {
        e.preventDefault();
        Notiflix.Block.Circle('#works', 'Please wait...');
        var offset_items = $('#data_posts .item').length;
        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: my_ajax_object.ajax_url,
            data: {offset_items: offset_items, action: 'load_works'},
            success: function (msg) {
                if (msg.success == true) {
                    var data_posts = msg.data;
                    $.each(data_posts, function (key, value) {
                        var post_data = value;
                        if (post_data) {
                            $('#data_posts').append('<div class="col-md-3 col-sm-3 col-xs-6 wow fadeInUp item" data-wow-duration="1s" data-wow-delay=".6s">\n' +
                                '                <div class="work-box">\n' +
                                '                    <a href="' + post_data.img + '" data-fancybox="images" data-caption="' + post_data.post_title + '">\n' +
                                '                        <img src="' + post_data.img + '" alt="' + post_data.post_title + '"/>\n' +
                                '                    </a>\n' +
                                '                </div>\n' +
                                '            </div>');


                        }
                     });
                }else {
                    Notiflix.Notify.Failure('عفوا لا يوجد المزيد من الاعمال !');
                }
                Notiflix.Block.Remove('#works', 600);

            }
        });
     });
});
