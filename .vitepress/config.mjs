import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/notepad/",
  head: [["link", { rel: "icon", href: "https://llllm.oss-cn-beijing.aliyuncs.com/llllm-image/Document-Write-icon.png" }]],
  title: "LLLLM",
  description: "全栈编程知识体系",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换"
          },
        },
      },
    },
    footer: {
      copyright: "Copyright@ 2024 LLLLM",
    },

    nav: [
      {
        text: '工具', items: [
          { text: '首页', link: '/' },
          { text: '中文技术文档的写作规范', link: '/tool/docs/marks' }
        ]
      },
      { text: '实例', link: '/markdown-examples' }
    ],

    sidebar: [

      {

        text: '中文技术文档的写作规范',

        items: [
          { text: '标点符号', link: '/tool/docs/marks' },

          { text: '数值', link: '/tool/docs/number' },

          { text: '段落', link: '/tool/docs/paragraph' },

          { text: '标题', link: '/tool/docs/title' },

          { text: '文档体系', link: '/tool/docs/structure' },

          { text: '参考链接', link: '/tool/docs/reference' },

          { text: '文本', link: '/tool/docs/text' },
        ]

      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LLLLM01' }
    ],
  },
}
)