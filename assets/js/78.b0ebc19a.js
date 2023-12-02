(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{484:function(t,a,e){"use strict";e.r(a);var r=e(2),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[t._v("pika新版binlog有时间戳，开发binlog_sender工具，根据输入的时间段回放对应数据到某个pika实例")]),t._v(" "),a("h2",{attrs:{id:"工具目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具目录"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%A0%B9%E6%8D%AE%E6%97%B6%E9%97%B4%E6%88%B3%E6%81%A2%E5%A4%8D%E6%95%B0%E6%8D%AE%E5%B7%A5%E5%85%B7#%E5%B7%A5%E5%85%B7%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("工具目录：")]),t._v(" "),a("p",[t._v("pika/tools/binlog_tools/binlog_sender")]),t._v(" "),a("h2",{attrs:{id:"使用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用参数"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%A0%B9%E6%8D%AE%E6%97%B6%E9%97%B4%E6%88%B3%E6%81%A2%E5%A4%8D%E6%95%B0%E6%8D%AE%E5%B7%A5%E5%85%B7#%E4%BD%BF%E7%94%A8%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("使用参数：")]),t._v(" "),a("p",[t._v("-h -- 显示帮助 -t -- l 显示日志类型，old 或new -i -- pika实例的ip -p -- pika实例的port -n -- 输入的binlog的路径 -f -- 要转换的binlog号 -s -- 规定的起始时间点, 默认: '2001-00-00 00:59:01' -e -- 规定的结束时间点, 默认: '2100-01-30 24:00:01'")]),t._v(" "),a("h2",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%A0%B9%E6%8D%AE%E6%97%B6%E9%97%B4%E6%88%B3%E6%81%A2%E5%A4%8D%E6%95%B0%E6%8D%AE%E5%B7%A5%E5%85%B7#%E6%A0%B7%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("样例:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./binlog_sender -n /data2/wangwenduo/newlog/ -t new -i 127.0.0.1 -p 10221 -s '2001-10-11 11:11:11' -e '2020-12-11 11:11:11' -f 526,527\n")])])]),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%A0%B9%E6%8D%AE%E6%97%B6%E9%97%B4%E6%88%B3%E6%81%A2%E5%A4%8D%E6%95%B0%E6%8D%AE%E5%B7%A5%E5%85%B7#%E6%B3%A8%E6%84%8F",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("注意：")]),t._v(" "),a("p",[t._v("因为依次发送binlog，过程中可能会丢部分请求。因此当使用binlog_sender回放后，不要删掉对应的文件以防丢数据")]),t._v(" "),a("h2",{attrs:{id:"性能指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能指标"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/%E6%A0%B9%E6%8D%AE%E6%97%B6%E9%97%B4%E6%88%B3%E6%81%A2%E5%A4%8D%E6%95%B0%E6%8D%AE%E5%B7%A5%E5%85%B7#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("性能指标：")]),t._v(" "),a("p",[t._v("经测算，新binlog到pika实例 ，100m文件转换时间为分钟级，和机器及网络有关")])])}),[],!1,null,null,null);a.default=n.exports}}]);