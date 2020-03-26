// user_pref("", );

user_pref("_user.js.parrot", "Parrot: Resist Fingerprinting");

// Resist Fingerprinting has been breaking necessary things for me. Using alternitive to resist fingerprinting.
user_pref("privacy.resistFingerprinting", false);
/*** [SECTION 4600]: RFP ALTERNATIVES
   * non-RFP users:
       Enable the whole section (see the SETUP tag below)
   * RFP users:
       Make sure these are reset in about:config. They are redundant. In fact, some
       even cause RFP to not behave as you would expect and alter your fingerprint
   * ESR RFP users:
       Reset those *up to and including* your version. Add those *after* your version
       as active prefs in your overrides. This is assuming that the patch wasn't also
       backported to Firefox ESR. Backporting RFP patches to ESR is rare.
***/

// [SETUP-non-RFP] Non-RFP users replace the * with a slash on this line to enable these
// FF55+
// 4601: [2514] spoof (or limit?) number of CPU cores [FF48+]
   // [NOTE] *may* affect core chrome/Firefox performance, will affect content.
   // [1] https://bugzilla.mozilla.org/1008453
   // [2] https://trac.torproject.org/projects/tor/ticket/21675
   // [3] https://trac.torproject.org/projects/tor/ticket/22127
   // [4] https://html.spec.whatwg.org/multipage/workers.html#navigator.hardwareconcurrency
   // user_pref("dom.maxHardwareConcurrency", 2);
// * * * /
// FF56+
// 4602: [2411] disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// 4603: [2412] disable timing attacks
   // [1] https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_performance", false);
// 4604: [2512] disable device sensor API
   // Optional protection depending on your device
   // [1] https://trac.torproject.org/projects/tor/ticket/15758
   // [2] https://blog.lukaszolejnik.com/stealing-sensitive-browser-data-with-the-w3c-ambient-light-sensor-api/
   // [3] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1357733,1292751
   // user_pref("device.sensors.enabled", false);
// 4605: [2515] disable site specific zoom
   // Zoom levels affect screen res and are highly fingerprintable. This does not stop you using
   // zoom, it will just not use/remember any site specific settings. Zoom levels on new tabs
   // and new windows are reset to default and only the current tab retains the current zoom
user_pref("browser.zoom.siteSpecific", false);
// 4606: [2501] disable gamepad API - USB device ID enumeration
   // Optional protection depending on your connected devices
   // [1] https://trac.torproject.org/projects/tor/ticket/13023
   // user_pref("dom.gamepad.enabled", false);
// 4607: [2503] disable giving away network info [FF31+]
   // e.g. bluetooth, cellular, ethernet, wifi, wimax, other, mixed, unknown, none
   // [1] https://developer.mozilla.org/docs/Web/API/Network_Information_API
   // [2] https://wicg.github.io/netinfo/
   // [3] https://bugzilla.mozilla.org/960426
user_pref("dom.netinfo.enabled", false); // [DEFAULT: true on Android]
// 4608: [2021] disable the SpeechSynthesis (Text-to-Speech) part of the Web Speech API
   // [1] https://developer.mozilla.org/docs/Web/API/Web_Speech_API
   // [2] https://developer.mozilla.org/docs/Web/API/SpeechSynthesis
   // [3] https://wiki.mozilla.org/HTML5_Speech_API
user_pref("media.webspeech.synth.enabled", false);
// * * * /
// FF57+
// 4610: [2506] disable video statistics - JS performance fingerprinting [FF25+]
   // [1] https://trac.torproject.org/projects/tor/ticket/15757
   // [2] https://bugzilla.mozilla.org/654550
user_pref("media.video_stats.enabled", false);
// 4611: [2509] disable touch events
   // fingerprinting attack vector - leaks screen res & actual screen coordinates
   // 0=disabled, 1=enabled, 2=autodetect
   // Optional protection depending on your device
   // [1] https://developer.mozilla.org/docs/Web/API/Touch_events
   // [2] https://trac.torproject.org/projects/tor/ticket/10286
   // user_pref("dom.w3c_touch_events.enabled", 0);
// * * * /
// FF59+
// 4612: [2511] disable MediaDevices change detection [FF51+]
   // [1] https://developer.mozilla.org/docs/Web/Events/devicechange
   // [2] https://developer.mozilla.org/docs/Web/API/MediaDevices/ondevicechange
user_pref("media.ondevicechange.enabled", false);
// * * * /
// FF60+
// 4613: [2011] disable WebGL debug info being available to websites
   // [1] https://bugzilla.mozilla.org/1171228
   // [2] https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info
user_pref("webgl.enable-debug-renderer-info", false);
// * * * /
// FF65+
// 4614: [2516] disable PointerEvents
   // [1] https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
user_pref("dom.w3c_pointer_events.enabled", false);
// * * * /
// FF67+
// 4615: [2618] disable exposure of system colors to CSS or canvas [FF44+]
  // [NOTE] See second listed bug: may cause black on black for elements with undefined colors
  // [SETUP-CHROME] Might affect CSS in themes and extensions
  // [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=232227,1330876
user_pref("ui.use_standins_for_native_colors", true);
// 4616: enforce prefers-color-scheme as light [FF67+]
  // 0=light, 1=dark : This overrides your OS value
user_pref("ui.systemUsesDarkTheme", 0); // [HIDDEN PREF]
// * * * /
// ***/

user_pref("_user.js.parrot", "Parrot: QOL Overrides");
// QOL Overrides
user_pref("browser.display.use_document_fonts", 1); // pdf.js breaks when the document uses custom fonts when this is set to 0
user_pref("app.update.auto", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.cpd.history", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("security.ssl.require_safe_negotiation", false);
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("app.update.auto", true);
user_pref("browser.shell.shortcutFavicons", true);
user_pref("security.ssl.enable_ocsp_stapling", false);
user_pref("privacy.firstparty.isolate", false);
user_pref("security.OCSP.require", false);

user_pref("_user.js.parrot", "Parrot: WebGL");
// Enable WebGl
user_pref("webgl.disabled", false);
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.min_capability_mode", false);
user_pref("webgl.disable-extensions", false);

user_pref("_user.js.parrot", "Parrot: Cache");
// Enable cache
user_pref("browser.cache.disk.enable", true);

user_pref("_user.js.parrot", "Parrot: URL Bar");
// Search with urlbar when not inputing a web address
user_pref("keyword.enabled", true);

user_pref("_user.js.parrot", "Parrot: SafeBrowsing");
// Disable safebrowsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

user_pref("_user.js.parrot", "Parrot: Personal Privacy");
// Personal privacy settings
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("signon.rememberSignons", false);
user_pref("media.autoplay.default", 5);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("dom.battery.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("browser.download.folderList", 2);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("network.security.esni.enabled", true);
user_pref("network.cookie.lifetimePolicy", 2);

user_pref("_user.js.parrot", "Parrot: Personal QOL");
// Personal QOL Tweaks
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.backspace_action", 2);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.urlbar.update1", false);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("gfx.vsync.collect-scroll-transforms", true);

user_pref("_user.js.parrot", "Parrot: Hardware Acceleration");
// Disable hardware acceleration
user_pref("gfx.direct2d.disabled", true); // [WINDOWS]
user_pref("layers.acceleration.disabled", true);

user_pref("_user.js.parrot", "Parrot: Completed Successfully");
