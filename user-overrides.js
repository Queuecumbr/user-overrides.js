user_pref("_user.js.parrot", "Parrot: QOL Overrides");

// Alternative to RFP, since some sites I use break too much
user_pref("privacy.resistFingerprinting", false); //breaks zoom if true!
user_pref("dom.maxHardwareConcurrency", 16);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_performance", false);
user_pref("device.sensors.enabled", false);
user_pref("browser.zoom.siteSpecific", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("media.ondevicechange.enabled", false);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("dom.w3c_pointer_events.enabled", false);

// [SETUP-PERF] Overrides
user_pref("network.http.altsvc.enabled", true);
user_pref("network.http.altsvc.oe", true);
user_pref("browser.cache.disk.enable", true);
user_pref("javascript.options.asmjs", true);

// [SETUP-WEB] Overrides
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // TESTING
user_pref("webgl.disabled", false);
user_pref("webgl.enable-webgl2", true);

// QOL Overrides
user_pref("browser.display.use_document_fonts", 1); // pdf.js breaks when the document uses custom fonts when this is set to 0
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.cpd.history", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("keyword.enabled", true);
user_pref("ui.use_standins_for_native_colors", false); // TESTING


// Personal privacy settings
user_pref("_user.js.parrot", "Parrot: Personal Privacy");
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
user_pref("media.peerconnection.ice.no_host", true); // TESTING


// Personal QOL Tweaks
user_pref("_user.js.parrot", "Parrot: Personal QOL");
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.backspace_action", 2);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("gfx.vsync.collect-scroll-transforms", true);
user_pref("media.mediasource.experimental.enabled", true);
user_pref("network.cookie.sameSite.laxByDefault", false); // This helps prevent some cookies for being rejected if they don't have SameSite defined

// Enable hardware acceleration
user_pref("_user.js.parrot", "Parrot: Hardware Acceleration");
user_pref("gfx.direct2d.disabled", false); // [WINDOWS]
user_pref("layers.acceleration.disabled", false);
user_pref("gfx.webrender.all", true)

// Video chat fix
user_pref("media.peerconnection.enabled", true); // 2001
user_pref("webgl.min_capability_mode", false); // 2012 [required for Zoom]
user_pref("javascript.options.wasm", true); // 2422 optional [Zoom may need this for audio to work]
user_pref("dom.webaudio.enabled", true); // 2510

// 2022: enable screensharing
user_pref("media.getusermedia.screensharing.enabled", true);
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", true);

// QOL Font Rendering for Windows
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);

// Prevent University website breakage [Seriously. Get with the program when it comes to security.]
user_pref("security.ssl.require_safe_negotiation", false);

// Experimental
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("dom.paintWorklet.enabled", true);

user_pref("_user.js.parrot", "Parrot: Completed User Overrides Successfully");
