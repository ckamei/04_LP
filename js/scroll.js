jQuery(function() {
    var showFlag = false;
    var topBtn = jQuery('#pagetop');    
    topBtn.css('bottom', '-200px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '-10px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


/************
$(document).ready(function(){
	//戻るボタン
    var topBtn = $('.pagetop');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	$('.pagetop a').click(function(){
		$('body,html').animate({
			scrollTop: 0
		},500);
		return false;
	});

  // スクロールのオフセット値
  var offsetY = -10;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^=#]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });

});


************/