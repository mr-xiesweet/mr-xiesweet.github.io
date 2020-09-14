module.exports = {
    title: 'CodeRush',// 设置网站标题
    description: '项目接口文档',
    base: '/',   // 设置站点根路径
    dest: './dist',  // 设置输出目录
    port: 8899,
    head: [
        [ 'link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],
    plugins: [],
    themeConfig: {
        
        sidebarDepth: 2,
        nav: [
            { text: '主页', link: '/' },            
            { text: 'Java全栈学习', link: '/java-doc/'}
        ],
        sidebar: {
            '/java-doc/': [{
                title: 'java全栈学习',
                collapsable: false,
                children:[
                    
                    { title: 'Java基础', path:'/java-doc/javase'},
			  		{ title: 'JavaWeb', path:'/java-doc/javaweb'},
                    { title: 'SSM', path:'/java-doc/ssm'},
                ]
            }]
        }
            

    

            

        
        
          
        
    },
    markdown: {
        lineNumbers: true
    },
}