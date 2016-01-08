(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "/* Empty. Add your own CSS if you like */\n" +
"\n" +
".timePickerColon {\n" +
"  padding-top: 40px;\n" +
"  text-align: center;\n" +
"  font-weight: bold;\n" +
"}\n" +
"\n" +
".timePickerArrows {\n" +
"  width: 100%;\n" +
"}\n" +
"\n" +
".timePickerBoxText {\n" +
"  height: 40px;\n" +
"  text-align: center;\n" +
"  border: 1px solid #dddddd;\n" +
"  font-size: 16px;\n" +
"  padding-top: 5px;\n" +
"}\n" +
"\n" +
".overflowShow {\n" +
"  white-space: normal !important;\n" +
"}"));
