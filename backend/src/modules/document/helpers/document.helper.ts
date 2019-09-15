import * as Docxtemplater from "docxtemplater";
import * as JSZip from "jszip";
import * as fs from "fs-extra";
import * as path from "path";
import { resolve } from "path";
import { ReadStream } from "fs";

export class DocumentHelper {
  //
  static async readFile(
    data: Object,
    name: any, // Data from exact type of contract
  ): Promise<Buffer> {
    // Reading file
    const content = fs.readFileSync(path.resolve("assets/documents/template.docx"), "binary");
    const zip = new JSZip(content);
    const doc = new Docxtemplater();
    doc.loadZip(zip);

    // Setting data for the document - specified in exact type of contract : types directory
    doc.setData(data);

    try {
      doc.render();
    } catch (error) {
      throw error;
    }
    let buffer = doc.getZip().generate({ type: "nodebuffer" });

    const fname = resolve("static", name);
    await fs.outputFile(`${fname}.docx`, buffer);

    return buffer;
  }

  static async getBufferFromFile(name: any): Promise<ReadStream> {
    const fname = resolve("static", name);
    let docx = fs.createReadStream(`${fname}.docx`);

    return docx;
  }

  static async removeFiles(fname: any): Promise<Boolean> {
    try {
      await fs.remove(`${fname}.docx`);
      return true;
    } catch (err) {
      return false;
    }
  }
}
