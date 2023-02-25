# TypeScript Compile Service

> This allows you to link TypeScript files directly in HTML. They are automatically compiled in the background with web workers. Use it for fast, seamless development. It should not be shipped.

## Usage

### Configure
Adjust the paths and settings in the <b>typescript-service-config.js</b> file.
```js
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
```

### Setup
In your HTML file, link the config script and the main script.
```html
<script type="text/javascript" src="/typescript-service/typescript-service-config.js"></script>
<script type="text/javascript" src="/typescript-service/typescript-service.js"></script>
```

### Typescript files
Just link any TypeScript file using the script tag, with <b>type="text/typescript"</b>.
```html
<script type="text/typescript" src="/example/main.ts"></script>
```

### Compile event
After each TypeScript file linked in the HTML is compiled, the <b>"compile"</b> event gets fired.
```ts
window.addEventListener("compile", (event: Event): void => {
    //...
});
```
> Depending on the use case, it may be necessary to execute code once this event has been triggered and all TypeScript files have been compiled.

### Manual compile
It is possible to give manual compilation instructions to the service.
```ts
typescriptCompileService(
    { key: "compile", src: "/example/main.ts", innerHTML: null },
    (jsSource: string, linesCount: number) => {
        //...
    }
);
```
> You can either pass a URL to a TypeScript file (<b>src</b>) or pass the TypeScript source code directly (<b>innerHTML</b>).
