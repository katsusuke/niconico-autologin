// ==UserScript==
// @name           niconico autologin
// @namespace      niconico_autologin
// @description    ニコニコ動画に自動でログインします。
// @include        http://www.nicovideo.jp/watch/*
// @include        https://secure.nicovideo.jp/secure/login_form*
// ==/UserScript==
var email = "メールアドレス";
var pass = "パスワード";
if(document.getElementById("login") && ! document.getElementById("login").innerHTML.match("ログイン情報が間違っています")){
  document.getElementById("mail").value = email;
  document.getElementById("password").value = pass;
  document.getElementById("login").submit();
}
else{
  if(document.URL.match(/^https\:\/\/secure\.nicovideo\.jp\/secure\/login_form\?/)){
    document.getElementByID("mail").value = email;
    document.getElementByID("password").value = pass;
    document.getElementByID("login_submit").submit();
  }
  else{
    var as = document.getElementsByTagName("a");
    for(i=0;i<as.length;i++){
      if(as[i].href.match(/^https\:\/\/secure\.nicovideo\.jp\/secure\/login_form\?/)){
        location.href = as[i].href;
        break;
      }
    }
  }
}
