(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{480:function(t,r,e){"use strict";e.r(r);var a=e(2),i=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"名称"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#名称"}},[t._v("#")]),t._v(" 名称：")]),t._v(" "),r("p",[t._v("redis-copy")]),t._v(" "),r("h2",{attrs:{id:"位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Redis%E8%AF%B7%E6%B1%82%E5%AE%9E%E6%97%B6copy%E5%88%B0pika%E5%B7%A5%E5%85%B7#%E4%BD%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1),t._v("位置：")]),t._v(" "),r("p",[t._v("pika bin目录下")]),t._v(" "),r("h2",{attrs:{id:"说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Redis%E8%AF%B7%E6%B1%82%E5%AE%9E%E6%97%B6copy%E5%88%B0pika%E5%B7%A5%E5%85%B7#%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1),t._v("说明：")]),t._v(" "),r("p",[t._v("实时将redis上的所有请求同步发送给pika，可以非常方便的检查你当前基于Redis的业务是否能够完美迁移至pika")]),t._v(" "),r("h2",{attrs:{id:"目的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Redis%E8%AF%B7%E6%B1%82%E5%AE%9E%E6%97%B6copy%E5%88%B0pika%E5%B7%A5%E5%85%B7#%E7%9B%AE%E7%9A%84",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1),t._v("目的：")]),t._v(" "),r("ol",[r("li",[t._v("方便比较redis及pika")]),t._v(" "),r("li",[t._v("降低pika的试用门槛")])]),t._v(" "),r("h2",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Redis%E8%AF%B7%E6%B1%82%E5%AE%9E%E6%97%B6copy%E5%88%B0pika%E5%B7%A5%E5%85%B7#%E7%89%B9%E7%82%B9",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1),t._v("特点：")]),t._v(" "),r("ol",[r("li",[t._v("实时转发")]),t._v(" "),r("li",[t._v("二进制安全")]),t._v(" "),r("li",[t._v("不兼容请求输出")])]),t._v(" "),r("h2",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Redis%E8%AF%B7%E6%B1%82%E5%AE%9E%E6%97%B6copy%E5%88%B0pika%E5%B7%A5%E5%85%B7#%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1),t._v("实现：")]),t._v(" "),r("ol",[r("li",[t._v("利用redis客户端的“Monitor”命令获得实时执行的命令")]),t._v(" "),r("li",[t._v("解析获得的字符串命令，以二进制安全的方式解析并拼装")]),t._v(" "),r("li",[t._v("使用hiredis与redis及pika进行交互")])]),t._v(" "),r("h2",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Redis%E8%AF%B7%E6%B1%82%E5%AE%9E%E6%97%B6copy%E5%88%B0pika%E5%B7%A5%E5%85%B7#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1),t._v("使用：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("DESCRIPTION:\n- Redis monitor copy tool: monitor redis server indicated by src_host, src_port, src_auth and send to des server\nParameters:\n-s: source server\n-d: destination server\n-v: show more information\n-h: help\nExample:\n- ./redis-copy -s abc@127.0.0.1:6379 -d cba@xxx.xxx.xxx.xxx:6379 -v\n")])])])])}),[],!1,null,null,null);r.default=i.exports}}]);