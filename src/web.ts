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
    response.setContentType("text/html; charset=utf-8"); 
    const mdIt = new MarkdownIt(); 
    const result = mdIt.render(content);

    const html = `
       <html>
       <head>
          <meta charset="utf-8"/>
          <title>泡泡足迹</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/webapp/assets/css/index.css" />
       </head>
       <body>
           <div class="markdown-body">${result}</div>
           <footer class=""><a href='http://beian.miit.gov.cn' target='_blank'>粤ICP备19003644号</a></footer>
       </body>
       </html>
    `;


     
     return html;
  }


}