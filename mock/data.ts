import { Request, Response } from 'express';

const getNotices = (req: Request, res: Response) => {
    const result = {
        cmt_list:[
            {
                id: '000000001',
                name:'cmt_list',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
            {
                id: '000000001',
                name:'cmt_list',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
        ],
        theme:[
            {
                id: '000000001',
                name:'THEME1',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
            {
                id: '000000001',
                name:'THEME2',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
            {
                id: '000000001',
                name:'THEME3',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
            {
                id: '000000001',
                name:'THEME4',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
            {
                id: '000000001',
                name:'THEME5',
                content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
            },
        ],
        singer_home:[{
            id: '000000001',
            name:'singer_home',
            content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
        },],
        mvvip:[{
            id: '000000001',
            name:'THEME',
            content:'r\'https://i.y.qq.com/n2/m/theme/index.html?_scrollhide=1&_hidehd=1&type=1&cate=0'
        },],
        nactcenterreact:[]

    }
    res.json({
        data:result,
        success:true,
    });
    
    
};

export default {
  'GET /api/showdata': getNotices,
};
