import { Body, Controller, Get, Inject, Param, Post, Res } from "@nestjs/common";
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";

import * as path from "path";
import { Response } from "express";
import { DocumentHelper } from "../../document/helpers/document.helper";
@ApiUseTags("files")
@Controller("files")
export class FilesController {
  @Get(":id")
  @ApiOperation({ title: "Get docx by id." })
  @ApiOkResponse({ type: String })
  @ApiNotFoundResponse({ description: "Document with provided id was not found." })
  async getById(@Param("id") docxId: string, @Res() res: Response): Promise<any> {
    res.set({
      "Content-Type": "application/msword",
    });
    const stream = await DocumentHelper.getBufferFromFile(docxId);
    return stream.pipe(res);
  }
}
