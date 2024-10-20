if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((err) => {
        console.log("Service Worker registration failed:", err);
      });
  });
} else {
  console.log("Service Workers are not supported in this browser.");
}
function getTime() {
  const getTwoDigits = (value) => (value < 10 ? `0${value}` : value);
  const formatTime = (date) => {
    const hours = getTwoDigits(date.getHours());
    const mins = getTwoDigits(date.getMinutes());
    return `${hours}:${mins}`;
  };
  const date = new Date();
  document.getElementById("From").value = formatTime(date);
}
function Generate() {
  if (document.getElementById("store").value == "0") {
    document.getElementById("store").focus();
    return false;
  } else if (document.getElementById("Reason").value == "0") {
    document.getElementById("Reason").focus();
    return false;
  } else if (document.getElementById("From").value == "") {
    document.getElementById("From").focus();
    return false;
  } else if (document.getElementById("store").value == "1") {
    var Name = "شرق النيل - سوهاج";
    var Code = "WT03BA170122";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "2") {
    var Name = "نادي التجديف - سوهاج ";
    var Code = "WT01BA170122";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "3") {
    var Name = "ش الجمهوريه - بيت الرحمه";
    var Code = "wT01Be010921";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "4") {
    var Name = "ميدان الشهيد - برج الأطباء";
    var Code = "wT01Bi010921";
    var Partner = "Telecom UE";
    Send();
  } else if (document.getElementById("store").value == "5") {
    var Name = "اخميم - البحري";
    var Code = "wT03Bc010921";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "6") {
    var Name = "ش سعد زغلول - المنشأه";
    var Code = "WT01BD170122";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "7") {
    var Name = "جرجا - شارع المحطة";
    var Code = "wT09Bz010921";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "8") {
    var Name = "سوهاج - جرجا 2";
    var Code = "WT09BA081121";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "9") {
    var Name = "سوهاج-البلينا";
    var Code = "wT05Bc010921";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "10") {
    var Name = "سوهاج البلينا";
    var Code = "WT05BA240122";
    var Partner = "Telecom UE";
    Send();
  } else if (document.getElementById("store").value == "11") {
    var Name = "دار السلام - سوهاج";
    var Code = "wT08Bd010921";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "12") {
    var Name = "ش بورسعيد - طهطا";
    var Code = "wT13Bc010921";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "13") {
    var Name = "سوهاج - طهطا 2";
    var Code = "WT13BA110821";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "14") {
    var Name = "المراغة - سوهاج";
    var Code = "WT06BA170122";
    var Partner = "El Masrya GR";
    Send();
  } else if (document.getElementById("store").value == "15") {
    var Name = "المراغة 2 - سوهاج";
    var Code = "WT06BA040421";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "16") {
    var Name = "طما -  ش أسيوط سوهاج";
    var Code = "WT12BB040122";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "17") {
    var Name = "سوهاج - طما 2";
    var Code = "WT12BB191221";
    var Partner = "Deltawia coverage FRA";
    Send();
  } else if (document.getElementById("store").value == "18") {
    var Name = "مجمع المحاكم - سوهاج";
    var Code = "wT02Bc010921";
    var Partner = "Telecom UE";
    Send();
  } else if (document.getElementById("store").value == "19") {
    var Name = "سوهاج - شارع 15";
    var Code = "WT01BB040122";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "20") {
    var Name = "المخبز الالي سوهاج";
    var Code = "WT01BA040421";
    var Partner = "Future IT";
    Send();
  } else if (document.getElementById("store").value == "21") {
    var Name = "سوهاج - جهينة";
    var Code = "WT10BA100322";
    var Partner = "Deltawia coverage FRA";
    Send();
  } else if (document.getElementById("store").value == "22") {
    var Name = "برديس";
    var Code = "WT09BB291023";
    var Partner = "El Masrya GR";
    Send();
  }
  function Send() {
    var Region = "MUE";
    var Governorate = "Sohag";
    var District = "Sohag";
    var Reason = document.getElementById("Reason").value;
    var From = document.getElementById("From").value;
    const timeString = From;
    const timeString12hr = new Date(
      "1970-01-01T" + timeString + "Z"
    ).toLocaleTimeString("en-EG", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    var subject = "Store down " + "due to " + Reason + " || " + Name;
    window.open(
      "mailto:MiddleUpperEgyptTeamindirect@te.eg;Franchising.sales@te.eg;franchise.support@te.eg;DP-Updates@te.eg;kmpupdates-sales@te.eg;knowledge.management@te.eg;Homesales-PP@te.eg?cc=ahmed.g.abdelwahed@te.eg;eslam.a.gomaa@te.eg&subject=" +
        subject +
        "&body=Dears,%0d%0a%0d%0aKindly be informed that the below store is down due to " +
        Reason +
        " since " +
        timeString12hr +
        ", and we will keep you updated." +
        "%0d%0a%0d%0a" +
        "Code: " +
        Code +
        "%0d%0a" +
        "Name: " +
        Name +
        "%0d%0a" +
        "Partner : " +
        Partner +
        "%0d%0a" +
        "Region: " +
        Region +
        "%0d%0a" +
        "Governorate: " +
        Governorate +
        "%0d%0a" +
        "District: " +
        District +
        "%0d%0a%0d%0a" +
        "%0d%0aThanks."
    );
  }
}
