(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{477:function(e,t,a){"use strict";a.r(t);var r=a(2),i=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"项目名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目名称"}},[e._v("#")]),e._v(" 项目名称：")]),e._v(" "),t("p",[e._v("pika_port")]),e._v(" "),t("h2",{attrs:{id:"项目作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目作者"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E9%A1%B9%E7%9B%AE%E4%BD%9C%E8%80%85",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("项目作者：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/alexstocks",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlexStocks"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"适用版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用版本"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E9%80%82%E7%94%A8%E7%89%88%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("适用版本：")]),e._v(" "),t("p",[e._v("3.1 和 2.x")]),e._v(" "),t("h2",{attrs:{id:"项目地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E9%A1%B9%E7%9B%AE%E5%9C%B0%E5%9D%80",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("项目地址：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ipixiu/pika-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ipixiu/pika-tools"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Axlgrep/pika-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Axlgrep/pika-tools 长期维护地址需自行编译"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"二进制包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制包"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8C%85",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("二进制包：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ipixiu/pika-port-bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ipixiu/pika-port-bin"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E5%8A%9F%E8%83%BD",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("功能：")]),e._v(" "),t("p",[e._v("将Pika中的数据在线迁移到Pika、Redis（支持全量、增量同步）")]),e._v(" "),t("h2",{attrs:{id:"开发背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发背景"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E5%BC%80%E5%8F%91%E8%83%8C%E6%99%AF",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("开发背景：")]),e._v(" "),t("p",[e._v("之前Pika项目官方提供的pika_to_redis工具仅支持离线将Pika的DB中的数据迁移到Pika、Redis, 且无法增量同步，该工具可以直接伪装为一个Pika的从库，将主库数据通过同步获取并转发给Pika、Redis，同时并支持增量同步")]),e._v(" "),t("h2",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("实现：")]),e._v(" "),t("h3",{attrs:{id:"trysync线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trysync线程"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#trysync%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("trysync线程")]),e._v(" "),t("ol",[t("li",[e._v("尝试与主库建立同步关系")]),e._v(" "),t("li",[e._v("如果需要全同步，则在接收到master的db之后，启动migrator和sender线程将db里面的数据发送给Pika、Redis")]),e._v(" "),t("li",[e._v("启动Slaveping线程定期给主库发送心跳，完成建立主从关系")])]),e._v(" "),t("h3",{attrs:{id:"binlog-receiver线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog-receiver线程"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#binlog_receiver%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("binlog_receiver线程")]),e._v(" "),t("ol",[t("li",[e._v("接收主库发送过来的binlog并且将其解析成redis命令")]),e._v(" "),t("li",[e._v("将redis命令转发给Pika、Redis")])]),e._v(" "),t("h3",{attrs:{id:"migrator线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrator线程"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#migrator%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("migrator线程")]),e._v(" "),t("ol",[t("li",[e._v("扫描不同数据类型的分库")]),e._v(" "),t("li",[e._v("将key进行解析成响应数据Pika、redis指令")]),e._v(" "),t("li",[e._v("将解析好的redis指令加载到sender的发送buf中")])]),e._v(" "),t("h3",{attrs:{id:"sender线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sender线程"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#sender%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("sender线程")]),e._v(" "),t("ol",[t("li",[e._v("从发送buf中读取数据，以非阻塞方式向Pika、redis发送数据")]),e._v(" "),t("li",[e._v("接收Pika、redis返回的结果并解析，如果出现错误则显示错误结果")])]),e._v(" "),t("h2",{attrs:{id:"使用帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用帮助"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika%e5%88%b0pika%e3%80%81redis%e8%bf%81%e7%a7%bb%e5%b7%a5%e5%85%b7#%E4%BD%BF%E7%94%A8%E5%B8%AE%E5%8A%A9",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("使用帮助：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Usage: \n       pika_port [-h] [-t local_ip -p local_port -i master_ip -o master_port\n                  -m forward_ip -n forward_port -x forward_thread_num -y forward_passwd]\n                  -f filenum -s offset -w password -r rsync_dump_path  -l log_path\n        -h     -- show this help\n        -t     -- local host ip(OPTIONAL default: 127.0.0.1)\n        -p     -- local port(OPTIONAL)\n        -i     -- master ip(OPTIONAL default: 127.0.0.1)\n        -o     -- master port(REQUIRED)\n        -m     -- forward ip(OPTIONAL default: 127.0.0.1)\n        -n     -- forward port(REQUIRED)\n        -x     -- forward thread num(OPTIONAL default: 1)\n        -y     -- forward password(OPTIONAL)\n        -f     -- binlog filenum(OPTIONAL default: local offset)\n        -s     -- binlog offset(OPTIONAL default: local offset)\n        -w     -- password for master(OPTIONAL)\n        -r     -- rsync dump data path(OPTIONAL default: ./rsync_dump)\n        -l     -- local log path(OPTIONAL default: ./log)\n        -b     -- max batch number when port rsync dump data (OPTIONAL default: 512)\n        -d     -- daemonize(OPTIONAL)\n  example: ./pika_port -t 127.0.0.1 -p 12345 -i 127.0.0.1 -o 9221 -m 127.0.0.1 -n 6379 -x 7 -f 0 -s 0 -w abc -l ./log\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);