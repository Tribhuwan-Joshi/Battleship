/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\r\\n.container {\\n  width: 100%;\\n}\\r\\n@media (min-width: 640px) {\\n\\n  .container {\\n    max-width: 640px;\\n  }\\n}\\r\\n@media (min-width: 768px) {\\n\\n  .container {\\n    max-width: 768px;\\n  }\\n}\\r\\n@media (min-width: 1024px) {\\n\\n  .container {\\n    max-width: 1024px;\\n  }\\n}\\r\\n@media (min-width: 1280px) {\\n\\n  .container {\\n    max-width: 1280px;\\n  }\\n}\\r\\n@media (min-width: 1536px) {\\n\\n  .container {\\n    max-width: 1536px;\\n  }\\n}\\r\\n.visible {\\n  visibility: visible;\\n}\\r\\n.static {\\n  position: static;\\n}\\r\\n.fixed {\\n  position: fixed;\\n}\\r\\n.absolute {\\n  position: absolute;\\n}\\r\\n.relative {\\n  position: relative;\\n}\\r\\n.sticky {\\n  position: sticky;\\n}\\r\\n.isolate {\\n  isolation: isolate;\\n}\\r\\n.col-span-5 {\\n  grid-column: span 5 / span 5;\\n}\\r\\n.col-span-4 {\\n  grid-column: span 4 / span 4;\\n}\\r\\n.col-span-3 {\\n  grid-column: span 3 / span 3;\\n}\\r\\n.col-span-2 {\\n  grid-column: span 2 / span 2;\\n}\\r\\n.col-start-4 {\\n  grid-column-start: 4;\\n}\\r\\n.col-start-3 {\\n  grid-column-start: 3;\\n}\\r\\n.col-start-5 {\\n  grid-column-start: 5;\\n}\\r\\n.col-start-1 {\\n  grid-column-start: 1;\\n}\\r\\n.col-start-8 {\\n  grid-column-start: 8;\\n}\\r\\n.col-start-7 {\\n  grid-column-start: 7;\\n}\\r\\n.col-start-2 {\\n  grid-column-start: 2;\\n}\\r\\n.col-start-6 {\\n  grid-column-start: 6;\\n}\\r\\n.row-span-2 {\\n  grid-row: span 2 / span 2;\\n}\\r\\n.row-span-1 {\\n  grid-row: span 1 / span 1;\\n}\\r\\n.row-span-3 {\\n  grid-row: span 3 / span 3;\\n}\\r\\n.row-span-4 {\\n  grid-row: span 4 / span 4;\\n}\\r\\n.row-start-3 {\\n  grid-row-start: 3;\\n}\\r\\n.row-start-2 {\\n  grid-row-start: 2;\\n}\\r\\n.row-start-4 {\\n  grid-row-start: 4;\\n}\\r\\n.row-start-6 {\\n  grid-row-start: 6;\\n}\\r\\n.row-start-1 {\\n  grid-row-start: 1;\\n}\\r\\n.row-start-5 {\\n  grid-row-start: 5;\\n}\\r\\n.row-start-7 {\\n  grid-row-start: 7;\\n}\\r\\n.block {\\n  display: block;\\n}\\r\\n.inline-block {\\n  display: inline-block;\\n}\\r\\n.inline {\\n  display: inline;\\n}\\r\\n.flex {\\n  display: flex;\\n}\\r\\n.inline-flex {\\n  display: inline-flex;\\n}\\r\\n.table {\\n  display: table;\\n}\\r\\n.flow-root {\\n  display: flow-root;\\n}\\r\\n.grid {\\n  display: grid;\\n}\\r\\n.inline-grid {\\n  display: inline-grid;\\n}\\r\\n.contents {\\n  display: contents;\\n}\\r\\n.hidden {\\n  display: none;\\n}\\r\\n.h-full {\\n  height: 100%;\\n}\\r\\n.h-\\\\[70\\\\%\\\\] {\\n  height: 70%;\\n}\\r\\n.h-\\\\[80\\\\%\\\\] {\\n  height: 80%;\\n}\\r\\n.w-14 {\\n  width: 3.5rem;\\n}\\r\\n.w-12 {\\n  width: 3rem;\\n}\\r\\n.w-8 {\\n  width: 2rem;\\n}\\r\\n.w-\\\\[99\\\\%\\\\] {\\n  width: 99%;\\n}\\r\\n.flex-1 {\\n  flex: 1 1 0%;\\n}\\r\\n.flex-shrink {\\n  flex-shrink: 1;\\n}\\r\\n.flex-grow {\\n  flex-grow: 1;\\n}\\r\\n.border-collapse {\\n  border-collapse: collapse;\\n}\\r\\n.transform {\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\r\\n.cursor-pointer {\\n  cursor: pointer;\\n}\\r\\n.resize {\\n  resize: both;\\n}\\r\\n.grid-cols-10 {\\n  grid-template-columns: repeat(10, minmax(0, 1fr));\\n}\\r\\n.grid-cols-4 {\\n  grid-template-columns: repeat(4, minmax(0, 1fr));\\n}\\r\\n.grid-cols-6 {\\n  grid-template-columns: repeat(6, minmax(0, 1fr));\\n}\\r\\n.grid-cols-8 {\\n  grid-template-columns: repeat(8, minmax(0, 1fr));\\n}\\r\\n.grid-cols-\\\\[repeat\\\\(10\\\\2c minmax\\\\(70px\\\\2c 1fr\\\\)\\\\)\\\\] {\\n  grid-template-columns: repeat(10,minmax(70px,1fr));\\n}\\r\\n.grid-rows-4 {\\n  grid-template-rows: repeat(4, minmax(0, 1fr));\\n}\\r\\n.grid-rows-6 {\\n  grid-template-rows: repeat(6, minmax(0, 1fr));\\n}\\r\\n.grid-rows-\\\\[repeat\\\\(10\\\\2c minmax\\\\(0\\\\2c 1fr\\\\)\\\\)\\\\] {\\n  grid-template-rows: repeat(10,minmax(0,1fr));\\n}\\r\\n.flex-col {\\n  flex-direction: column;\\n}\\r\\n.flex-wrap {\\n  flex-wrap: wrap;\\n}\\r\\n.items-center {\\n  align-items: center;\\n}\\r\\n.justify-center {\\n  justify-content: center;\\n}\\r\\n.gap-8 {\\n  gap: 2rem;\\n}\\r\\n.gap-12 {\\n  gap: 3rem;\\n}\\r\\n.gap-3 {\\n  gap: 0.75rem;\\n}\\r\\n.gap-2 {\\n  gap: 0.5rem;\\n}\\r\\n.gap-4 {\\n  gap: 1rem;\\n}\\r\\n.self-start {\\n  align-self: flex-start;\\n}\\r\\n.self-end {\\n  align-self: flex-end;\\n}\\r\\n.self-center {\\n  align-self: center;\\n}\\r\\n.whitespace-nowrap {\\n  white-space: nowrap;\\n}\\r\\n.rounded {\\n  border-radius: 0.25rem;\\n}\\r\\n.rounded-sm {\\n  border-radius: 0.125rem;\\n}\\r\\n.rounded-md {\\n  border-radius: 0.375rem;\\n}\\r\\n.rounded-\\\\[100\\\\%\\\\] {\\n  border-radius: 100%;\\n}\\r\\n.border {\\n  border-width: 1px;\\n}\\r\\n.border-black {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\\n}\\r\\n.bg-gray-200 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\\n}\\r\\n.bg-gray-100 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\\n}\\r\\n.bg-purple-300 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(216 180 254 / var(--tw-bg-opacity));\\n}\\r\\n.bg-red-50 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity));\\n}\\r\\n.bg-green-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\\n}\\r\\n.bg-green-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\\n}\\r\\n.bg-blue-700 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\\n}\\r\\n.bg-amber-700 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(180 83 9 / var(--tw-bg-opacity));\\n}\\r\\n.bg-gray-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\\n}\\r\\n.bg-pink-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(236 72 153 / var(--tw-bg-opacity));\\n}\\r\\n.bg-yellow-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\\n}\\r\\n.bg-orange-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\\n}\\r\\n.bg-black {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\\n}\\r\\n.bg-blue-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\\n}\\r\\n.bg-red-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\\n}\\r\\n.bg-green-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\\n}\\r\\n.bg-emerald-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\\n}\\r\\n.bg-emerald-200 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(167 243 208 / var(--tw-bg-opacity));\\n}\\r\\n.bg-pink-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(244 114 182 / var(--tw-bg-opacity));\\n}\\r\\n.bg-red-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\\n}\\r\\n.bg-red-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\\n}\\r\\n.bg-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n}\\r\\n.bg-slate-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\\n}\\r\\n.bg-blue-300 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(147 197 253 / var(--tw-bg-opacity));\\n}\\r\\n.bg-orange-300 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(253 186 116 / var(--tw-bg-opacity));\\n}\\r\\n.bg-orange-200 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(254 215 170 / var(--tw-bg-opacity));\\n}\\r\\n.bg-rose-300 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(253 164 175 / var(--tw-bg-opacity));\\n}\\r\\n.bg-rose-100 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(255 228 230 / var(--tw-bg-opacity));\\n}\\r\\n.bg-green-700 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity));\\n}\\r\\n.bg-purple-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(192 132 252 / var(--tw-bg-opacity));\\n}\\r\\n.bg-purple-200 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(233 213 255 / var(--tw-bg-opacity));\\n}\\r\\n.bg-pink-300 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\\n}\\r\\n.bg-pink-200 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(251 207 232 / var(--tw-bg-opacity));\\n}\\r\\n.bg-yellow-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(202 138 4 / var(--tw-bg-opacity));\\n}\\r\\n.bg-gradient-to-tr {\\n  background-image: linear-gradient(to top right, var(--tw-gradient-stops));\\n}\\r\\n.from-pink-300 {\\n  --tw-gradient-from: #f9a8d4;\\n  --tw-gradient-to: rgb(249 168 212 / 0);\\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\\n}\\r\\n.to-purple-300 {\\n  --tw-gradient-to: #d8b4fe;\\n}\\r\\n.to-green-200 {\\n  --tw-gradient-to: #bbf7d0;\\n}\\r\\n.p-4 {\\n  padding: 1rem;\\n}\\r\\n.p-2 {\\n  padding: 0.5rem;\\n}\\r\\n.p-1 {\\n  padding: 0.25rem;\\n}\\r\\n.px-1 {\\n  padding-left: 0.25rem;\\n  padding-right: 0.25rem;\\n}\\r\\n.text-justify {\\n  text-align: justify;\\n}\\r\\n.font-sans {\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n}\\r\\n.font-mono {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n}\\r\\n.text-5xl {\\n  font-size: 3rem;\\n  line-height: 1;\\n}\\r\\n.text-4xl {\\n  font-size: 2.25rem;\\n  line-height: 2.5rem;\\n}\\r\\n.text-xl {\\n  font-size: 1.25rem;\\n  line-height: 1.75rem;\\n}\\r\\n.text-3xl {\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\r\\n.text-sm {\\n  font-size: 0.875rem;\\n  line-height: 1.25rem;\\n}\\r\\n.font-thin {\\n  font-weight: 100;\\n}\\r\\n.capitalize {\\n  text-transform: capitalize;\\n}\\r\\n.tracking-widest {\\n  letter-spacing: 0.1em;\\n}\\r\\n.tracking-wider {\\n  letter-spacing: 0.05em;\\n}\\r\\n.tracking-wide {\\n  letter-spacing: 0.025em;\\n}\\r\\n.text-black {\\n  --tw-text-opacity: 1;\\n  color: rgb(0 0 0 / var(--tw-text-opacity));\\n}\\r\\n.text-red-600 {\\n  --tw-text-opacity: 1;\\n  color: rgb(220 38 38 / var(--tw-text-opacity));\\n}\\r\\n.text-white {\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\r\\n.text-red-700 {\\n  --tw-text-opacity: 1;\\n  color: rgb(185 28 28 / var(--tw-text-opacity));\\n}\\r\\n.underline {\\n  text-decoration-line: underline;\\n}\\r\\n.overline {\\n  text-decoration-line: overline;\\n}\\r\\n.line-through {\\n  text-decoration-line: line-through;\\n}\\r\\n.shadow-sm {\\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n.shadow-md {\\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n.outline {\\n  outline-style: solid;\\n}\\r\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\r\\n.\\\\!filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\\n}\\r\\n.backdrop-filter {\\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n}\\r\\n.transition {\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n}\\r\\n.drag-over{\\r\\n    background-color: rgb(164, 164, 164);\\r\\n}\\r\\n.hover\\\\:cursor-pointer:hover {\\n  cursor: pointer;\\n}\\r\\n.hover\\\\:bg-blue-600:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\\n}\\r\\n.hover\\\\:bg-red-500:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\\n}\\r\\n.hover\\\\:text-white:hover {\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\r\\n.hover\\\\:no-underline:hover {\\n  text-decoration-line: none;\\n}\\r\\n.hover\\\\:shadow-sm:hover {\\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n.active\\\\:bg-blue-800:active {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\\n}\\r\\n.active\\\\:bg-red-700:active {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_dragdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dragdrop */ \"./src/modules/dragdrop.js\");\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _assets_iconShip_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/iconShip.png */ \"./src/assets/iconShip.png\");\n/* harmony import */ var _assets_war_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/war.png */ \"./src/assets/war.png\");\n/* harmony import */ var _assets_miyamoto_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/miyamoto.jpg */ \"./src/assets/miyamoto.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction init() {  // initialize overhead rendering\r\n\r\n  const icon = document.querySelector(\"link[rel=icon]\");\r\n  icon.href = _assets_iconShip_png__WEBPACK_IMPORTED_MODULE_3__;\r\n  const pfp = document.querySelector(\"img.pfp\");\r\n  pfp.src = _assets_miyamoto_jpg__WEBPACK_IMPORTED_MODULE_5__;\r\n  const war = document.querySelectorAll(\"img.warIcon\");\r\n  war.forEach((e) => (e.src = _assets_war_png__WEBPACK_IMPORTED_MODULE_4__));\r\n  // game board\r\n  const gameBoard = document.querySelector(\".gameBoard\");\r\n  let n = 0;\r\n  while (n!=100) {\r\n    const pixel = document.createElement(\"div\");\r\n    pixel.classList.add(\"border\", \"border-black\",\"pixel\",\"flex\",\"items-center\");\r\n    gameBoard.appendChild(pixel);\r\n    pixel.setAttribute(\"data-id\", n);\r\n    n++;\r\n  }\r\n}\r\n\r\ninit();\r\nlet intialBoard = (0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_dragdrop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intialBoard);\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/dragdrop.js":
/*!*********************************!*\
  !*** ./src/modules/dragdrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./src/modules/helper.js\");\n\r\n\r\n\r\nconst dragDrop = () => {\r\n  const ships = document.querySelectorAll(\".ships\");\r\n  ships.forEach((s) => s.addEventListener(\"dragstart\", dragStart));\r\n  ships.forEach((s) => s.addEventListener(\"dragend\", dragEnd));\r\n\r\n  const pixels = document.querySelectorAll(\".gameBoard .pixel\");\r\n  pixels.forEach((p) => {\r\n    p.addEventListener(\"dragenter\", dragEnter);\r\n    p.addEventListener(\"dragover\", dragOver);\r\n    p.addEventListener(\"dragleave\", dragLeave);\r\n    p.addEventListener(\"drop\", drop);\r\n  });\r\n\r\n  function dragEnd(e) {\r\n    e.target.classList.remove(\"hidden\");\r\n  }\r\n  function dragOver(e) {\r\n    e.preventDefault();\r\n    e.target.classList.add(\"drag-over\");\r\n  }\r\n  function dragEnter(e) {\r\n    e.preventDefault();\r\n    e.target.classList.add(\"drag-over\");\r\n  }\r\n  function dragLeave(e) {\r\n    e.target.classList.remove(\"drag-over\");\r\n  }\r\n\r\n  function drop(e) {\r\n    const id = e.dataTransfer.getData(\"text/plain\");\r\n    const draggable = document.getElementById(id);\r\n    if (e.target.classList.contains(\"pixel\")) {\r\n      const size = draggable.getAttribute(\"data-size\");\r\n      const dataID = e.target.getAttribute(\"data-id\");\r\n\r\n      const col = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.getCol)(dataID);\r\n        const row = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.getRow)(dataID);\r\n        // console.log(intialBoard.isValidpos(size, col));\r\n      if (\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isClearPos(size, row, col) &&\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidpos(size, col)\r\n      ) {\r\n          e.target.append(draggable);\r\n          draggable.classList.remove(\"hidden\");\r\n          for (let i = 1; i < size; i++) {\r\n            let ele =document.querySelector(`[data-id='${+(+dataID + i)}']`)\r\n           console.log(document.querySelector(`[data-id='${+(+dataID + i)}']`));\r\n            ele.append(draggable.cloneNode(\r\n                true\r\n            ));\r\n              ele.classList.remove(\"drag-over\");\r\n              draggable.classList.remove(\"hidden\");\r\n            \r\n        }\r\n\r\n        \r\n        }\r\n        \r\n      }\r\n      e.target.classList.remove(\"drag-over\");\r\n  }\r\n  function dragStart(e) {\r\n    e.dataTransfer.setData(\"text/plain\", e.target.id);\r\n    setTimeout(() => e.target.classList.add(\"hidden\"), 0);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragDrop);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/dragdrop.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\r\n// const Ship = require(\"./ship.js\");\r\n\r\nconst GameBoard = () => {\r\n  let arr = new Array(10).fill().map(() => new Array(10).fill(0));\r\n  function placeShip(size, row, col) {\r\n    if (isValidpos(size, col) && isClearPos(size, row, col)) {\r\n      for (let i = 0; i < size; i++) {\r\n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size);\r\n        arr[row][col + i] = ship;\r\n      }\r\n    }\r\n  }\r\n  function isValidpos(size, col) {\r\n    for (let i = 0; i < size; i++) {\r\n      if (col + i > 9) return false;\r\n    }\r\n    return true;\r\n  }\r\n    function isClearPos(size, row, col) {\r\n      \r\n    for (let i = 0; i < size; i++) {\r\n      if (getArr()[row][col + i]) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n  function getArr() {\r\n    return arr;\r\n  }\r\n  function receiveAttack(x, y) {\r\n    if (arr[x][y]) {\r\n      if (!arr[x][y].isSunk()) {\r\n        arr[x][y].hit();\r\n      }\r\n    } else {\r\n      arr[x][y] = -1;\r\n    }\r\n  }\r\n  return { placeShip, receiveAttack, isValidpos, isClearPos, getArr };\r\n};\r\n\r\n\r\n\r\n// module.exports = GameBoard;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameBoard.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCol\": () => (/* binding */ getCol),\n/* harmony export */   \"getRow\": () => (/* binding */ getRow)\n/* harmony export */ });\nfunction getRow(n) {\r\n    return Math.floor(n / 10);\r\n}\r\n\r\nfunction getCol(n) {\r\n    return n % 10;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (s) => {\r\n  let hitCount = 0;\r\n  const length = s;\r\n    const hit = () => hitCount++;\r\n   \r\n  const isSunk = () => {\r\n    return hitCount == length;\r\n  };\r\n  return { length, hit, isSunk, get hits(){return hitCount} };\r\n};\r\n\r\n// module.exports = Ship\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/assets/iconShip.png":
/*!*********************************!*\
  !*** ./src/assets/iconShip.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"iconShip.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/iconShip.png?");

/***/ }),

/***/ "./src/assets/miyamoto.jpg":
/*!*********************************!*\
  !*** ./src/assets/miyamoto.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"miyamoto.jpg\";\n\n//# sourceURL=webpack://battleship/./src/assets/miyamoto.jpg?");

/***/ }),

/***/ "./src/assets/war.png":
/*!****************************!*\
  !*** ./src/assets/war.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"war.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/war.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;