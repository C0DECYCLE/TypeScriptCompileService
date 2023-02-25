"use strict";

const typescriptCompileServiceConfig = {
    /*tsconfig absolute path*/
    tsConfigUrl: `${document.location.origin}/tsconfig.json`,
    /*worker absolute path*/
    workerUrl: `${document.location.origin}/typescript-service/typescript-service-worker.js`,
    /*typescript absolute path*/
    typescriptTranspilerUrl: `${document.location.origin}/typescript-service/typescript.4.8.4.js`,
    /*worker count*/
    workerCount: 4,
    /*console log compile info*/
    logInfo: true,
};
