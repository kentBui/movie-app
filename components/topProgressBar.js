import Router from "next/router";
import NProgress, { start } from "nprogress";

let timer;
let state;
let activeRequest = 0;
let delay = 250;

function load() {
  if (state === "loading") {
    return;
  }

  state = "loading";

  timer = setTimeout(() => {
    NProgress.start();
  }, delay);
}

function stop() {
  if (activeRequest > 0) {
    return;
  }

  state = "stop";

  clearTimeout(timer);
  NProgress.done();
}

Router.events.on("routerChangeStart", load);
Router.events.on("routerChangeComplete", stop);
Router.events.on("routerChangeError", stop);

const originalFetch = window.fetch;

window.fetch = async function (...args) {
  if (activeRequest === 0) {
    load();
  }

  activeRequest++;

  try {
    const res = await originalFetch(...args);
    return res;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    activeRequest -= 1;
    if (activeRequest === 0) {
      stop();
    }
  }
};

export default function () {
  return null;
}
