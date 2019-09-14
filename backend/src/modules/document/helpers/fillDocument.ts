import * as Docxtemplater from "docxtemplater";
import * as JSZip from "jszip";
import * as fs from "fs";
import * as path from "path";
export class FillDocument {
  //
  static async readFile(
    data: Object, // Data from exact type of contract
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
    return buffer;
  }
}
