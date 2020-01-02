import {Get, HttpResult, HttpResponse, Param} from '@oneline/core';
import  * as MarkdownIt from 'markdown-it';
import * as fs from 'fs';
import * as path from 'path';


class BlogIndex {


  @Get("/index.html", "首页")
  public index(response: HttpResponse) {
    response.redirect("/md/index");
  }

  @Get("/", "首页")
  public root(response: HttpResponse) {
    response.redirect("/md/index");
  }


  @Get("/md/:md", "文档地址")
  public doc(@Param("md") md: string, response: HttpResponse) : string {

    const content = fs.readFileSync(path.resolve("./blog",  md + ".md")).toString("utf-8"); 
    response.setContentType("text/html"); 
    const mdIt = new MarkdownIt(); 
    const result = mdIt.render(content);

    const html = `
       <html>
       <head>
          <link rel="stylesheet" href="/webapp/assets/css/index.css"
       </head>
       <body><div class="markdown-body">${result}</div></body>
       </html>
    `;


     
     return html;
  }


}