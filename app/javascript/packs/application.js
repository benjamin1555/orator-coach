// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("chartkick")
require("chart.js")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------
import "bootstrap";
import { executeChart } from "../plugins/init_chart";
import { videoRecording } from "../plugins/mediaStream";
import { dropDownVideos } from './dropDownVideos';
import { recordVideo } from "./showRecording";
import { displayVideo } from "./displayVideo";
import { initSweetalert } from '../plugins/init_sweet_alert';
import { initBadge } from '../plugins/init_badges';
import { initComment } from '../plugins/init_comments';

document.addEventListener('turbolinks:load', () => {
  executeChart();
  videoRecording();
  dropDownVideos();
  recordVideo();
  displayVideo();
  initSweetalert();
  initBadge();
  initComment();
});
