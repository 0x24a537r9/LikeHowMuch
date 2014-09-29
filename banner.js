var activeBannerIndex = 0;
var bannerMessages = [];
var isShowingBanner = false;


function showBannerMessage(message) {
  bannerMessages.push(message);
  if (!isShowingBanner) {
    rotateBanner();
  }
}


function rotateBanner() {
  var $banners = $('.banner');
  $banners.eq(activeBannerIndex).fadeOut();
  activeBannerIndex = 1 - activeBannerIndex;

  isShowingBanner = bannerMessages.length > 0;
  if (isShowingBanner) {
    var message = bannerMessages[0];
    bannerMessages = bannerMessages.slice(1);

    var $activeBanner = $banners.eq(activeBannerIndex);
    var $activeBannerText = $activeBanner.find('.banner-text');
    $activeBannerText.text(message);
    $activeBanner.fadeIn();
    // Allow a tiny bit of time for the banner to be barely visible.
    setTimeout(function() {
      textFit($activeBannerText, {
        alignVert: true,
        alignHoriz: true,
        multiLine: true,
        reProcess: true,
        maxFontSize: 120
      });
    }, 30);
    setTimeout(rotateBanner, 3000);
  }
}