// Remove all existing panels

for (i in panelIds) {
  panel = panelById(panelIds[i]);
  panel.remove();
}

//Create KOOMPI Panel

var koompi_panel = new Panel();

koompi_panel.location = "top";
koompi_panel.height = 32;

var space1 = koompi_panel.addWidget("org.kde.plasma.panelspacer");
space1.currentConfigGroup = ["General"];
space1.writeConfig("expanding", false);
space1.writeConfig("length", 7);

var menu = koompi_panel.addWidget("launchpadPlasmaMod");
menu.currentConfigGroup = ["General"];
menu.writeConfig("useCustomButtonImage", true);
menu.writeConfig(
  "customButtonImage",
  "file:///usr/share/icons/koompi/koompi-black.svg"
);
menu.writeConfig("useCustomSizeGrid", true);
menu.writeConfig("numberColumns", 9);
menu.writeConfig("numberRows", 5);
menu.writeConfig("iconSize", 96);
menu.writeConfig("spaceWidth", 42);
menu.writeConfig("spaceHeight", 32);

var space2 = koompi_panel.addWidget("org.kde.plasma.panelspacer");
space2.currentConfigGroup = ["General"];
space2.writeConfig("expanding", false);
space2.writeConfig("length", 3);

var apptitle = koompi_panel.addWidget("org.communia.apptitle");
apptitle.currentConfigGroup = ["General"];
apptitle.writeConfig("noWindowType", "text");
apptitle.writeConfig("noWindowText", "");
apptitle.writeConfig("textType", 1);
apptitle.writeConfig("bold", true);

var space3 = koompi_panel.addWidget("org.kde.plasma.panelspacer");
space3.currentConfigGroup = ["General"];
space3.writeConfig("expanding", false);
space3.writeConfig("length", 5);

koompi_panel.addWidget("org.kde.plasma.appmenu");

var space4 = koompi_panel.addWidget("org.kde.plasma.panelspacer");

// Add system tray
var systray = koompi_panel.addWidget("org.kde.plasma.systemtray");
var systrayContainmentId = systray.readConfig("SystrayContainmentId");
var systrayContainment = desktopById(systrayContainmentId);
systrayContainment.currentConfigGroup = ["General"];
systrayContainment.writeConfig(
  "extraItems",
  "org.kde.plasma.mediacontroller,org.kde.plasma.keyboardlayout,org.kde.plasma.volume,org.kde.plasma.bluetooth,org.kde.plasma.vault,org.kde.plasma.notifications,org.kde.plasma.keyboardindicator,org.kde.plasma.nightcolorcontrol,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.plasma.devicenotifier,org.kde.plasma.battery,org.kde.kscreen,touchpad,org.kde.plasma.diskquota,org.kde.plasma.katesessions,org.kde.plasma.weather"
);
systrayContainment.writeConfig(
  "hiddenItems",
  "org.kde.plasma.katesessions,org.kde.plasma.weather,org.kde.plasma.vault,org.kde.plasma.nightcolorcontrol,org.kde.plasma.diskquota,org.kde.plasma.clipboard,touchpad"
);
systrayContainment.writeConfig(
  "knownItems",
  "org.kde.plasma.mediacontroller,org.kde.plasma.keyboardlayout,org.kde.plasma.volume,org.kde.plasma.bluetooth,org.kde.plasma.vault,org.kde.plasma.notifications,org.kde.plasma.keyboardindicator,org.kde.plasma.nightcolorcontrol,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.plasma.devicenotifier,org.kde.plasma.battery"
);
systrayContainment.writeConfig(
  "shownItems",
  "org.kde.kscreen,org.kde.plasma.volume,org.kde.plasma.battery,org.kde.plasma.bluetooth,org.kde.plasma.networkmanagement,org.kde.plasma.notifications"
);

var space5 = koompi_panel.addWidget("org.kde.plasma.panelspacer");
space5.currentConfigGroup = ["General"];
space5.writeConfig("expanding", false);
space5.writeConfig("length", 5);

var dateviewer = koompi_panel.addWidget("org.kde.plasma.betterinlineclock");
dateviewer.currentConfigGroup = ["Appearance"];
dateviewer.writeConfig("customDateFormat", "ddd dd/MM/yy");
dateviewer.writeConfig("fixedFont", true);
dateviewer.writeConfig("fontSize", 14);

var space6 = koompi_panel.addWidget("org.kde.plasma.panelspacer");
space6.currentConfigGroup = ["General"];
space6.writeConfig("expanding", false);
space6.writeConfig("length", 10);

var power = koompi_panel.addWidget("org.kde.plasma.lock_logout");
power.currentConfigGroup = ["General"];
power.writeConfig("show_lockScreen", false);

var space7 = koompi_panel.addWidget("org.kde.plasma.panelspacer");
space7.currentConfigGroup = ["General"];
space7.writeConfig("expanding", false);
space7.writeConfig("length", 10);

var show_desktop = koompi_panel.addWidget("org.kde.plasma.win7showdesktop");
show_desktop.currentConfigGroup = ["General"];
show_desktop.writeConfig("size", 5);

var Desktops = desktops();
for (i = 0; i < Desktops.length; i++) {
  d = Desktops[i];
  d.wallpaperPlugin = "org.kde.image";
  d.currentConfigGroup = Array("Wallpaper", "org.kde.image", "General");
  d.writeConfig(
    "Image",
    "file:///usr/share/wallpapers/abstract-purple-pink-digital-art-uhdpaper.com-4K-4.299.jpg"
  );
}
