/** TypeScript Compile Service:
 *  It is possible to give manual compilation instructions to the service.
 *  You can either pass a URL to a TypeScript file (src) or pass the TypeScript source code directly (innerHTML).
 */
declare function typescriptCompileService(
    instructions: {
        key: string;
        src: string | null;
        innerHTML: string | null;
    },
    callback: (jsSource: string, linesCount: number) => void
): void;
