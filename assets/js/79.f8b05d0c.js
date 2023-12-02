(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{487:function(t,e,a){"use strict";a.r(e);var r=a(2),i=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("关于sharding mode，pika底层提供slot 的概念。Pika将key进行哈希取模之后散列到各个slot当中处理。sharding mode 根据线上的具体情况可以应用于单个pika，也可以应用到多个pika组成的pika cluster。这个tutorial主要介绍开启sharding mode 需要了解的一些概念，以及需要调整的一些配置参数。")]),t._v(" "),e("h4",{attrs:{id:"_0-模式的选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-模式的选择"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Sharding-Tutorials#0-%E6%A8%A1%E5%BC%8F%E7%9A%84%E9%80%89%E6%8B%A9",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("0. 模式的选择")]),t._v(" "),e("p",[t._v("目前pika 分为两种模式，两种模式不可兼容，所以请一定先根据业务确定使用哪一种模式。")]),t._v(" "),e("p",[t._v("一种是经典模式(classic)，经典模式下可以支持绝大多数的业务压力，同时支持8个db(db0-db7)的并发读写。建议一般的业务线可以先压测这个模式。")]),t._v(" "),e("p",[t._v("如果经典模式不能满足线上巨大的压力，可以尝试另一种模式，集群模式(sharding)，相对于经典模式，集群模式会提供更高的QPS，同时也会占用更多的硬件资源。以Codis下配置pika为其后端存储为例，codis 默认是集群slots总数为1024，每个slots 都提供五种数据结构的读写。对应每一种数据结构，pika都会起rocksdb实例。这样，集群需要起1024*5个rocksdb实例，集群模式的意义当然是把这些5120个pika实例分布在各个机器的pika实例上。所以我们推荐集群需要一定规模的物理机，这个样每个物理机上承载的rocksdb实例不会太多。当然我们的设计之初当然是使用人员自行决定需要多少物理机来分布5120个rocksdb实例。为什么不能布置在一台物理机上呢？原因如下：")]),t._v(" "),e("p",[t._v("1，过多的rocksdb 实例同时compaction的概率变高，对磁盘的压力过大。")]),t._v(" "),e("p",[t._v("2， 每个rocksdb会占用一定数量的文件描述符和内存，这个数字乘以5120很容易将系统资源耗尽。")]),t._v(" "),e("p",[t._v("总之，一定是更多的硬件资源提供更多的性能，建议新接触pika的同学可以用我们的经典模式，如果完全满足不了目前的需求，可以考虑用更多的物理资源，使用集群模式。")]),t._v(" "),e("p",[t._v("具体的性能测试可以参考 "),e("a",{attrs:{href:"https://github.com/Qihoo360/pika/wiki/3.2.x-Performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.2.x Performance"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h4",{attrs:{id:"_1-所需要版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-所需要版本"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Sharding-Tutorials#1-%E6%89%80%E9%9C%80%E8%A6%81%E7%89%88%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("1. 所需要版本")]),t._v(" "),e("p",[t._v("Pika 从3.2.0版本之后支持sharding mode，建议用最新release。")]),t._v(" "),e("h4",{attrs:{id:"_2-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本操作"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Sharding-Tutorials#2-%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("2. 基本操作")]),t._v(" "),e("p",[t._v("关于slots的基本操作详见 "),e("a",{attrs:{href:"https://github.com/Qihoo360/pika/wiki/Pika%E5%88%86%E7%89%87%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot commands"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"_3-配置文件说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置文件说明"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Sharding-Tutorials#3-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("3. 配置文件说明")]),t._v(" "),e("p",[t._v("相关的配置文件调参")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# default slot number each table in sharding mode\n  default-slot-num : 1024\n\n# if this option is set to 'classic', that means pika support multiple DB, in\n# this mode, option databases enable\n# if this option is set to 'sharding', that means pika support multiple Table, you\n# can specify slot num for each table, in this mode, option default-slot-num enable\n# Pika instance mode [classic | sharding]\n  instance-mode : sharding\n\n# Pika write-buffer-size\nwrite-buffer-size : 67108864\n\n# If the total size of all live memtables of all the DBs exceeds\n# the limit, a flush will be triggered in the next DB to which the next write\n# is issued.\nmax-write-buffer-size : 10737418240\n\n# maximum value of Rocksdb cached open file descriptors\nmax-cache-files : 100\n")])])]),e("p",[t._v("配置文件的说明可以在"),e("a",{attrs:{href:"https://github.com/Qihoo360/pika/wiki/pika-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置说明"),e("OutboundLink")],1),t._v("中找到。 特别说明的是write-buffer-size 代表的是每一个rockdb实例的每一个memtable的大小，所有的rocksdb的所有的memtable大小上限由 max-write-buffer-size控制。如果达到max-write-buffer-size数值，每个rocksdb 实例都会尝试flush当前的memtable以减少内存使用。")]),t._v(" "),e("h4",{attrs:{id:"_4-兼容codis-twemproxy方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-兼容codis-twemproxy方案"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Sharding-Tutorials#4-%E5%85%BC%E5%AE%B9codistwemproxy%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("4. 兼容codis，twemproxy方案")]),t._v(" "),e("p",[t._v("目前的分布式框架依赖于开源项目，目前pika兼容codis，twemproxy。")]),t._v(" "),e("p",[t._v("具体的兼容方案详见"),e("a",{attrs:{href:"https://github.com/Qihoo360/pika/wiki/Support-Cluster-Slots",target:"_blank",rel:"noopener noreferrer"}},[t._v("Support Cluster Slots"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=i.exports}}]);