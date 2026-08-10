// Minimal type shim for mupdf (ESM WASM package, CJS moduleResolution).
declare module "mupdf" {
  export class ColorSpace {
    static readonly DeviceRGB: ColorSpace;
  }
  export type Matrix = [number, number, number, number, number, number];
  export const Matrix: {
    identity: Matrix;
    scale(sx: number, sy: number): Matrix;
  };
  export class Document {
    static openDocument(from: Buffer | Uint8Array | string, magic?: string): Document;
    countPages(): number;
    loadPage(index: number): Page;
    destroy(): void;
  }
  export class Page {
    toStructuredText(options?: string): StructuredText;
    toPixmap(matrix: Matrix, colorspace: ColorSpace, alpha?: boolean): Pixmap;
  }
  export class StructuredText {
    asText(): string;
  }
  export class Pixmap {
    asPNG(): Uint8Array;
    destroy(): void;
  }
}