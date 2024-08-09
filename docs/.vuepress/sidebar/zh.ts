export const zhSidebar = {
    '/js/': [
        {
            text: '目录',
            //可折叠侧边栏
            collapsible: true,
            children: [
                {
                    text:'变量',
                    link:'var'
                },
                {
                    text:'运算符',
                    link:'operator'
                },
                {
                    text:'数据类型',
                    link:'dataType'
                },
                {
                    text:'数组',
                    link:'array'
                },
                {
                    text:'表达式与语句',
                    link:'sentence'
                },
                ],
        }
    ],
    '/java/': [
            {
                text: '目录',
                children: [
                    {
                        text:'从java服务的角度来看一次请求发生了什么？',
                        link:'howRequestRun'
                    },
                    {
                        text:'深入理解tomcat参数配置',
                        link:'tomcatConfig'
                    }
                    ],
            }
        ],
}
