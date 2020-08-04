import Router from "next/router";
import moment from "jalali-moment";

export const toPersian = function (val) {
  if (val) {
    const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return val.toString().replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  } else {
    return val;
  }
};

export const moneyFormat = function (n, x) {
  try {
    const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  } catch (e) {
    return "";
  }
};

export const underLine = function () {
  this.replace("/s/g", "_");
};

export const toEnglish = function (val) {
  const find = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  var replace = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var replaceString = val;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

export const remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

export function trunc(s, n) {
  if (s) {
    return s.length > n ? s.substr(0, n - 1) + "..." : s;
  } else {
    return "";
  }
}

export const setIfNumber = (e, setFieldValue, max) => {
  if (!isNaN(Number(toEnglish(e.target.value)))) {
    if (!max) {
      setFieldValue(e.target.name, toEnglish(e.target.value));
    } else {
      if (e.target.value.length <= max) {
        setFieldValue(e.target.name, toEnglish(e.target.value));
      }
    }
  }
};

export const setCookie = (cName, cValue, seconds) => {
  let d = new Date();
  let sec = seconds * 1000;
  d.setTime(d.getTime() + sec);
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cName}=${cValue}; ${expires};path=/`;
};

export const getCookie = (cName) => {
  let name = `${cName}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const checkProtected = async (ctx, callback) => {
  const { store, res } = ctx;
  const { auth } = store.getState();

  switch (auth.role) {
    case "user":
      if (callback) await callback();
      break;

    default:
      if (res) {
        res.writeHead(302, { Location: "/login" });
        res.end();
        res.finished = true;
      } else {
        Router.push("/login");
      }
      break;
  }
};

export function daysRemaining(time) {
  var eventdate = moment(time);
  var todaysdate = moment();
  return eventdate.diff(todaysdate, "days");
}

export const checkPremiumDate = async (ctx, callback) => {
  const { store, res } = ctx;
  const { user } = store.getState();
  const { premium_date } = user.item;

  // const testDate = "2020-08-17T07:59:48.365000";

  const redirect = () => {
    if (res) {
      res.writeHead(302, { Location: "/packages" });
      res.end();
      res.finished = true;
    } else {
      Router.push("/packages");
    }
  };

  if (premium_date) {
    if (daysRemaining(premium_date) < 0) {
      redirect();
    } else {
      if (callback) await callback();
    }
  } else {
    redirect();
  }
};

export const daysLeft = (date) => {
  var now = moment();
  return now.diff(date, "days");
};

export function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function uniq_id() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
