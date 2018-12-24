import axios from 'axios';
import http from './ajax';

//const host = 'http://x.yiduread.cn/taskcenter';
const host = '/taskcenter';
export default {
    tasklist: (params) => http(`${host}/tasktemplate/tasklist`, params),
    taskDetail: (params) => http(`${host}/tasktemplatecontent/task`, params),
}
