const msg: string = "Hello World";

window.addEventListener("compile", (_event: Event): void => {
    console.log(msg);

    typescriptCompileService(
        { key: "compile", src: "/example/main.ts", innerHTML: null },
        (jsSource: string, linesCount: number) => {
            console.log(jsSource, linesCount);
        }
    );
});
