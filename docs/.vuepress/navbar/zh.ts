export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
    },
    {
        text: 'JAVA',
        link: '/java/   ',
        children: [
            {
                text:'Tomcat',
                link:'/java/tomcat'
            }
        ]
    },
    //两层嵌套
    {
        text: '语言',
        children:
            [
                {
                    text: '编程',
                    children:
                        [
                            { text: 'C', link: 'https://code.iglooblog.top/c/1.html' },
                            { text: 'Js', link: '/js/' },
                            { text: 'Java', link: '/java/' }
                        ]
                },
                {
                    text: '标记',
                    children:
                        [
                            { text: 'HTML', link: 'https://code.iglooblog.top/html/1.html' },
                            { text: 'Markdown', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
                            { text: 'CSS', link: 'https://code.iglooblog.top/css/1.html' }
                        ]
                },
            ],
    },
    {
        text: '关于',
        link: '/about',
    },
    
    // 字符串 - 页面文件路径
    // '/Guide/README.md',
]
