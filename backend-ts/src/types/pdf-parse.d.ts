declare module "pdf-parse" {
  interface PdfParseResult {
    text: string;
    numpages: number;
    info: unknown;
  }
  function pdfParse(buffer: Buffer, options?: unknown): Promise<PdfParseResult>;
  export default pdfParse;
}
