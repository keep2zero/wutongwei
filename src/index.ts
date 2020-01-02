import {start} from '@oneline/core';
import {resolve} from 'path';
import "./web";

const staticPath = resolve("./",  "webapp");
start(5000, {static: {prefix: "/webapp", path: staticPath}});

console.log(staticPath);