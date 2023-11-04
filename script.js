$(document).ready(function () {
    $(window).on('scroll', function () {
        $('.fade-in').each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // 要素の上端がウィンドウの下端を通過したときにフェードインを開始
            if (bottom_of_window > top_of_element) {
                $(this).css('opacity', '1');
            }
        });
    });
});


$(document).ready(function () {
    // 1秒待機
    setTimeout(function () {
        // ローディング画面をフェードアウト
        $('.loading-screen').fadeOut('slow', function () {
            // サイトコンテンツをフェードイン
            $('.site-content').css('opacity', '1');
        });
    }, 1000); // 1000ミリ秒＝1秒
});