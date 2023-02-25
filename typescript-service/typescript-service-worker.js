"use strict";

let tsconfig;

function load(sourceUrl) {
    const xhr = XMLHttpRequest
        ? new XMLHttpRequest()
        : ActiveXObject
        ? new ActiveXObject("Microsoft.XMLHTTP")
        : null;

    if (!xhr) return "";

    xhr.open("GET", sourceUrl, false);
    xhr.overrideMimeType && xhr.overrideMimeType("text/plain");
    xhr.send(null);

    return xhr.status == 200 ? xhr.responseText : "";
}

function init(data) {
    importScripts(data.compilerURL);
    tsconfig = data.tsconfig;

    postMessage({ key: "init" });
}

function compile(data) {
    const raw = data.innerHTML ? data.innerHTML : load(data.src);

    postMessage({
        key: "compile",
        transpiled: ts.transpile(raw, tsconfig.compilerOptions),
        linesCount: raw.split("\n").length,
    });
}

onmessage = ({ data }) => {
    switch (data.key) {
        case "init":
            init(data);
            break;
        case "compile":
            compile(data);
            break;
    }
};
