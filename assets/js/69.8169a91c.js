(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{478:function(t,e,n){"use strict";n.r(e);var i=n(2),o=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("pika新版binlog标记时间戳，因此开发了新旧binlog转换及新binlog转换到可读binlog的转换工具")]),t._v(" "),e("h2",{attrs:{id:"工具目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具目录"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%96%B0%EF%BC%8C%E6%97%A7%EF%BC%8C%E5%8F%AF%E8%AF%BB-%E4%B8%89%E7%B1%BBbinlog%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7#%E5%B7%A5%E5%85%B7%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("工具目录：")]),t._v(" "),e("p",[t._v("pika/tools/binlog_tools/binlog_parser")]),t._v(" "),e("h2",{attrs:{id:"使用参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用参数"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%96%B0%EF%BC%8C%E6%97%A7%EF%BC%8C%E5%8F%AF%E8%AF%BB-%E4%B8%89%E7%B1%BBbinlog%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7#%E4%BD%BF%E7%94%A8%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("使用参数：")]),t._v(" "),e("ul",[e("li",[t._v("-h -- 显示帮助")]),t._v(" "),e("li",[t._v("-c --转换方式：new2old old2new new2read")]),t._v(" "),e("li",[t._v("-i -- 输入的binlog 默认: ./old_log/write2file0")]),t._v(" "),e("li",[t._v("-o -- 输出binlog的路径，默认 : ./new_log/")])]),t._v(" "),e("h2",{attrs:{id:"样例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%96%B0%EF%BC%8C%E6%97%A7%EF%BC%8C%E5%8F%AF%E8%AF%BB-%E4%B8%89%E7%B1%BBbinlog%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7#%E6%A0%B7%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("样例:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(". /binlog_parser -c old2new -i ./old_log/write2file0,write2file1，write2file2 -o ./new_log/\n\n")])])]),e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%96%B0%EF%BC%8C%E6%97%A7%EF%BC%8C%E5%8F%AF%E8%AF%BB-%E4%B8%89%E7%B1%BBbinlog%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7#%E6%B3%A8%E6%84%8F",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("注意：")]),t._v(" "),e("ol",[e("li",[t._v("程序检查输入的binlog是否是连续的，因此请输入连续的binlog名")]),t._v(" "),e("li",[t._v("程序检测binlog名字是否是write2file开头的，路径后是否跟随write2file等，否则都会打印相应错误")]),t._v(" "),e("li",[t._v("由于manifest文件更新不一定及时，相应offset未更新入manifest的binlog数据在转换工程中会丢失")])]),t._v(" "),e("h2",{attrs:{id:"性能指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能指标"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%96%B0%EF%BC%8C%E6%97%A7%EF%BC%8C%E5%8F%AF%E8%AF%BB-%E4%B8%89%E7%B1%BBbinlog%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("性能指标：")]),t._v(" "),e("p",[t._v("经测算，新旧binlog转换时间，100m文件转换时间为秒级，1到10秒不等。新binlog到可读binlog的转换到10秒到20秒不等")])])}),[],!1,null,null,null);e.default=o.exports}}]);