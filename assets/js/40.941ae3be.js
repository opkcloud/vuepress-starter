(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{450:function(t,a,e){"use strict";e.r(a);var s=e(2),o=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"5679674","data-target-translation-type":"discussion"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body"},[a("p",{attrs:{dir:"auto"}},[t._v("Pika 有给存储结构取名代号的传统，譬如第一代取名 Nemo，第二代取名 Blackwidow， 当前版本我们决定取名 Floyd，没有什么特殊意义，一个代号而已。")]),a("p",{attrs:{dir:"auto"}},[t._v("目前 Pika 的数据层级架构是：DB -> Slot -> Blackwidow。下面文档中提到的 分片，就是 Slot。")]),a("p",{attrs:{dir:"auto"}},[t._v("当前，一个 DB 下只有一个 Slot，一个 Slot 下使用一个 Blackwidow。Blackwidow 支持的数据类型 String/List/Set/Zset/Hashtable，每种数据类型使用一个 RocksDB 实例，所以一个 Slot 下共有五个 Blackwidow。")]),a("h2",{attrs:{dir:"auto"}},[t._v("考虑点")]),a("table",{attrs:{role:"table"}},[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[t._v("Item")]),a("th",{attrs:{align:"left"}},[t._v("Proirity")]),a("th",{attrs:{align:"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[t._v("使用 protobuf V3 协议取代二进制")]),a("td",{attrs:{align:"left"}},[t._v("P0")]),a("td",{attrs:{align:"left"}},[t._v("基于以后扩展性考量，兼具性能")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("每个类型用一个 column family，统一放在一个 RocksDB 中")]),a("td",{attrs:{align:"left"}},[t._v("P0")]),a("td",{attrs:{align:"left"}},[t._v("Blackwidow 中每个数据类型使用一个 RocksDB，造成了不同数据类型可以取名相同的问题")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("多 RocksDB 实例")]),a("td",{attrs:{align:"left"}},[t._v("P0")]),a("td",{attrs:{align:"left"}},[t._v("上面一个 RocksDB 中可以通过 column family 实现不同数据类型的逻辑隔离，但是为了性能考虑，还会继续保持多 RocksDB 实例，目前考量是每个 slot 一个 RocksDB 实例。方便数据以 slot 粒度进行迁移。")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("复杂数据结构重构 hash zset")]),a("td",{attrs:{align:"left"}},[t._v("P0")]),a("td",{attrs:{align:"left"}},[t._v("如 Blackwidow 中的 hashtable 的读写性能不够好，特别是 hmset 和 hmget")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("出现慢查询的 key 执行 compact Range")]),a("td",{attrs:{align:"left"}},[t._v("P1")]),a("td",{attrs:{align:"left"}},[t._v("该技术点出自 "),a("a",{staticClass:"issue-link js-issue-link",attrs:{"data-error-text":"Failed to load title","data-id":"1912804314","data-permission-text":"Title is private","data-url":"https://github.com/OpenAtomFoundation/pika/issues/2040","data-hovercard-type":"issue","data-hovercard-url":"/OpenAtomFoundation/pika/issues/2040/hovercard",href:"https://github.com/OpenAtomFoundation/pika/issues/2040"}},[t._v("#2040")])])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("删除过时 sst 文件")]),a("td",{attrs:{align:"left"}},[t._v("P1")]),a("td",{attrs:{align:"left"}},[t._v("该技术点出自 "),a("a",{staticClass:"issue-link js-issue-link",attrs:{"data-error-text":"Failed to load title","data-id":"1916849497","data-permission-text":"Title is private","data-url":"https://github.com/OpenAtomFoundation/pika/issues/2053","data-hovercard-type":"issue","data-hovercard-url":"/OpenAtomFoundation/pika/issues/2053/hovercard",href:"https://github.com/OpenAtomFoundation/pika/issues/2053"}},[t._v("#2053")])])])])]),a("h2",{attrs:{dir:"auto"}},[t._v("2. 整体架构")]),a("p",{attrs:{dir:"auto"}},[t._v("新的存储架构中，Pika 实例存储引擎包括内存缓存和硬盘持久存储 RocksDB。每个 Pika 实例由一个内存缓存和多个 RocksDB 实例构成，每个数据分片对应一个 RocksDB 实例。同一个Pika实例的多个 RocksDB 实例共享同一个 compaction 和 flush 线程池。")]),a("p",{attrs:{dir:"auto"}},[t._v("每个数据分片对应一个 RocksDB 实例的好处是：")]),a("ol",{attrs:{dir:"auto"}},[a("li",[t._v("Pika serverless 架构中，计算节点扩缩容时，S3 上的存量数据不需要修改，新的计算节点从 S3 上拉取对应分片的元数据和 sst 文件即可。")]),a("li",[t._v("非 serverless 架构中，slot 迁移可以用类似主从复制的方式直接迁移 sst 文件，加快数据迁移速度。")]),a("li",[t._v("分片迁移完成之后，由于整个分片的数据存储在同一个 RocksDB 实例中，因此可以将整个 RocksDB 的数据直接删掉。不需要额外通过 RocksDB 的 compaction 来清理无效数据。")]),a("li",[t._v("key 长度减少，不再需要分片前缀。")])]),a("h2",{attrs:{dir:"auto"}},[t._v("3. 数据格式")]),a("p",{attrs:{dir:"auto"}},[t._v("为了方便后续的数据格式兼容问题，4.0 的数据存储时考虑使用 protobuf 序列化之后再存如 RocksDB 。但序列化之后存入 RocksDB ，需要考虑序列化/反序列化导致的 CPU 性能开销。待测试验证。")]),a("p",{attrs:{dir:"auto"}},[t._v("目前 blackwidow 中不同的数据类型存储在不同的 RocksDB 实例中，业务的实际使用场景中，可能会更集中在某一个数据类型中，因此相当于是单个 RocksDB 实例在承担Pika节点上所有的流量。因此考虑不再按照数据类型区分 RocksDB 实例。为了防止数据冲突，目前想到有两种解决方法：")]),a("ol",{attrs:{dir:"auto"}},[a("li",[t._v("不同的数据类型放在同一个 RocksDB 实例的不同column family中。")]),a("li",[t._v("数据类型通过增加前缀进行区分，如：'kv'：表示string类型。'li'：表示list类型，'se':表示set类型等等。")])]),a("p",{attrs:{dir:"auto"}},[t._v("为了兼容 Redis 协议，即为同一个数据类型的数据设置统一的过期时间值，复合数据类型中的meta信息还是需要保留，否则 ttl/expire 接口操作性能耗时增加。增加meta信息导导致的数据写入过程中产生的查询开销，计划通过增加内存 cache 的方式进行缓解，即读 meta 时也是优先读内存缓存 cache，读不到再查硬盘。")]),a("h2",{attrs:{dir:"auto"}},[t._v("4. 性能优化")]),a("h2",{attrs:{dir:"auto"}},[t._v("4.1 dealslowkey")]),a("p",{attrs:{dir:"auto"}},[t._v("参考新浪微博的经验，当Pika上层代码发现一个慢查询key时，发起一次manual compaction，compaction的范围即对应的key前缀对应的数据范围。性能待验证。")]),a("h2",{attrs:{dir:"auto"}},[t._v("4.2 新技术探索")]),a("p",{attrs:{dir:"auto"}},[t._v("主要是包括了 RocksDB 的异步IO，协程，remote compaction等新技术的测试和落地")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1 You must be logged in to vote")]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("h2",{attrs:{id:"replies-3-comments-·-7-replies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replies-3-comments-·-7-replies"}},[t._v("#")]),t._v(" Replies: 3 comments · 7 replies")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052?sort=old",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oldest"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052?sort=new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Newest"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052?sort=top",target:"_blank",rel:"noopener noreferrer"}},[t._v("Top"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("p",[t._v("edited")]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("p",[t._v("["),a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=64&v=4",alt:""}})]),t._v(" "),a("p",[t._v("AlexStocks")]),t._v(" "),a("p",[t._v("](https://github.com/AlexStocks)"),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133481",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133481","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body"},[a("p",{attrs:{dir:"auto"}},[t._v("Floyd 一定要保证 zscore 中字段的顺序。")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1 You must be logged in to vote")]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[t._v("2 replies")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("p",[t._v("edited")]),t._v(" "),a("h4",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7226585",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oct 9, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7226585","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("Answer1："),a("br"),t._v("【关于zset 兼容性】"),a("br"),t._v("protobuf 对 varint 采用 tag value。对 string 采用的是 tag length value 编码，有一个明确的长度参数，前缀相同，但是长度不一样，就没法字典序了，所以 floyd 对 zset 有一些严重依赖字典序。")]),a("p",{attrs:{dir:"auto"}},[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://private-user-images.githubusercontent.com/7959374/273497305-f8543e67-03a3-4260-8d1f-e9b8104b15a3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE0Mzc0OTcsIm5iZiI6MTcwMTQzNzE5NywicGF0aCI6Ii83OTU5Mzc0LzI3MzQ5NzMwNS1mODU0M2U2Ny0wM2EzLTQyNjAtOGQxZi1lOWI4MTA0YjE1YTMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIwMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMDFUMTMyNjM3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MGFhNWRmNDE3OTEyZWU5M2U5MTExZjA2YWQwYWJjNGY0NTUzZTU0Mjk4MDJhZGJjNTY4OTEzMDdhY2I3ZTAzZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.ibCIFPmnZ5QmPnlY9vTbxkaEQ2PKlBATcdAVIs-pkqo"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://private-user-images.githubusercontent.com/7959374/273497305-f8543e67-03a3-4260-8d1f-e9b8104b15a3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE0Mzc0OTcsIm5iZiI6MTcwMTQzNzE5NywicGF0aCI6Ii83OTU5Mzc0LzI3MzQ5NzMwNS1mODU0M2U2Ny0wM2EzLTQyNjAtOGQxZi1lOWI4MTA0YjE1YTMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIwMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMDFUMTMyNjM3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MGFhNWRmNDE3OTEyZWU5M2U5MTExZjA2YWQwYWJjNGY0NTUzZTU0Mjk4MDJhZGJjNTY4OTEzMDdhY2I3ZTAzZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.ibCIFPmnZ5QmPnlY9vTbxkaEQ2PKlBATcdAVIs-pkqo",alt:"image"}})])]),a("p",{attrs:{dir:"auto"}},[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://private-user-images.githubusercontent.com/7959374/273497315-3e45d0ee-b0df-48fe-a757-a05a5867f4f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE0Mzc0OTcsIm5iZiI6MTcwMTQzNzE5NywicGF0aCI6Ii83OTU5Mzc0LzI3MzQ5NzMxNS0zZTQ1ZDBlZS1iMGRmLTQ4ZmUtYTc1Ny1hMDVhNTg2N2Y0ZjkucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIwMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMDFUMTMyNjM3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NGEwMzU1ZDFmMDNiYjQ1NTJlZGU0OGYzNDUxMzc3NjQ5YTc1YzY1NDg5MjFkNDJjZTNmZTAyZTIyZTVjZDM1OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.NRzTx56_6mO_5ASDIck1n1WIcIqAeoKHDGpJamu572E"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://private-user-images.githubusercontent.com/7959374/273497315-3e45d0ee-b0df-48fe-a757-a05a5867f4f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE0Mzc0OTcsIm5iZiI6MTcwMTQzNzE5NywicGF0aCI6Ii83OTU5Mzc0LzI3MzQ5NzMxNS0zZTQ1ZDBlZS1iMGRmLTQ4ZmUtYTc1Ny1hMDVhNTg2N2Y0ZjkucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIwMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMDFUMTMyNjM3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NGEwMzU1ZDFmMDNiYjQ1NTJlZGU0OGYzNDUxMzc3NjQ5YTc1YzY1NDg5MjFkNDJjZTNmZTAyZTIyZTVjZDM1OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.NRzTx56_6mO_5ASDIck1n1WIcIqAeoKHDGpJamu572E",alt:"image"}})])]),a("p",{attrs:{dir:"auto"}},[t._v("即使用 pb 描述 zset 的 score --\x3e data ，因为 comparator 是我们自己定制的，这好像也没啥问题。")]),a("p",{attrs:{dir:"auto"}},[t._v("【关于性能】"),a("br"),t._v("pb 描述可扩展性没问题，但是读次数累计后，确实会有解析耗费 CPU 的问题。酱紫，明天我再跟你商量下，我们自己定制下一种二进制形式的 tlv 吧，给每个字段分配一个 id【可能我觉得一个字节就够了，使用 7 个 bit，就算不够，将来可以按照 varint 解释】。blackwidow 解析数据时也要耗费cpu，先看看 pb 确实有不能解决的问题没有再说。")]),a("p",{attrs:{dir:"auto"}},[t._v("我想其实如果 redis 缓存能把大部分数据兜住的话，pb数据解析耗费cpu这件事就不算什么大事了。因为，第一，只有穿透到磁盘读才会发生解析；第二，pb 把整型数据压缩后还会加速读，譬如没有了 key size，整型 varint 压缩，这个数据量也是很可观的。")]),a("p",{attrs:{dir:"auto"}},[t._v("我想其实如果 redis 缓存能把大部分数据兜住的话，pb数据解析耗费cpu这件事就不算什么大事了。因为，第一，只有穿透到磁盘读才会发生解析；第二，pb 把整型数据压缩后还会加速读，譬如没有了 key size，整型 varint 压缩，这个数据量也是很可观的。")]),a("p",{attrs:{dir:"auto"}},[t._v("【关于 RocksDB SST】"),a("br"),t._v("pb 对 string 的组织是 tag + length + string value，length 在前面会导致字典顺序乱序，破坏 RocksDB SST 文件 data block 对具有共同前缀的 string 的压缩性。")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h4",{attrs:{id:"-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7226615",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oct 9, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7226615","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("举个例子，abc 和 abcd，如果是原始 二进制编码，RocksDB SST 就会对 abcd 压缩")]),a("p",{attrs:{dir:"auto"}},[t._v("如果改成 二进制，abc 经过 pb 描述大概是 3abc，abcd pb 描述则是 4abcd，因为长度在前面")]),a("p",{attrs:{dir:"auto"}},[t._v("3abc 和 4abcd 这就没有共同前缀了，没法压缩。")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h3",{attrs:{id:"-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")])]),t._v(" "),a("p",[t._v("["),a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=64&v=4",alt:""}})]),t._v(" "),a("p",[t._v("AlexStocks")]),t._v(" "),a("p",[t._v("](https://github.com/AlexStocks)"),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133652",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133652","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body"},[a("p",{attrs:{dir:"auto"}},[t._v("张智清：数据类型通过增加前缀进行区分，如：'kv'：表示 string 类型。'li'：表示 list 类型，'se': 表示 set 类型等等，可能导致多种类型共用同一个 key 名称，这个在 Blackwidow 的问题在 Floyd 中依旧存在")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1 You must be logged in to vote")]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[t._v("3 replies")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h4",{attrs:{id:"-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133678",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133678","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("谦祥、一哥等表示该问题并不是很严重")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h4",{attrs:{id:"-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133700",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133700","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("智清：info expire 等命令针对同一个 key，那到底是那种类型起作用？")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h4",{attrs:{id:"-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-7"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133707",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133707","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("一哥：在 storage.cc 中，expire 对同名称 key 所有类型都起作用")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h3",{attrs:{id:"-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-8"}},[t._v("#")])]),t._v(" "),a("p",[t._v("["),a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=64&v=4",alt:""}})]),t._v(" "),a("p",[t._v("AlexStocks")]),t._v(" "),a("p",[t._v("](https://github.com/AlexStocks)"),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133892",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133892","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body"},[a("p",{attrs:{dir:"auto"}},[t._v("一哥：兼容 Redis 协议，只能在整个数据类型上设置过期时间，所以还是需要保留 meta value。RedRocks 把复合数据类型聚合成一个 value，可能导致热点 key。")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1 You must be logged in to vote")]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[t._v("2 replies")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("p",[t._v("edited")]),t._v(" "),a("h4",{attrs:{id:"-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-9"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7133903",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sep 28, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7133903","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("智清：能否通过 key value 分离，譬如 hashtable 的二级 key(field) 很少，可以一下子节省很多内存。当前的实现，对 hashtable field 超时设置很不友好【需要 hashtable key + field 共同拼写出一个 key 设置一个 ttl】。改进后方便 hgetall、hmget 等原语。")])])])])]),t._v(" "),a("p",[t._v("Beta Was this translation helpful? "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Give feedback."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All reactions")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/7959374?s=60&v=4",alt:"@AlexStocks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Comment options")]),t._v(" "),a("p",[t._v("Quote reply")]),t._v(" "),a("h4",{attrs:{id:"-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-10"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AlexStocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlexStocks"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052#discussioncomment-7226604",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oct 9, 2023"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Maintainer Author")]),t._v(" "),a("p",[t._v("-")]),t._v(" "),a("table",{staticClass:"d-block",attrs:{role:"presentation","data-paste-markdown-skip":""}},[a("tbody",{staticClass:"d-block js-translation-source",attrs:{"data-target-translation-id":"7226604","data-target-translation-type":"comment"}},[a("tr",{staticClass:"d-block"},[a("td",{staticClass:"d-block color-fg-default comment-body markdown-body js-comment-body px-3 pt-0 pb-2"},[a("p",{attrs:{dir:"auto"}},[t._v("改进：Floyd 对 string 使用一个 cf；list 占用 list-meta cf 和 list-data 两个 cf；hashtable 占用 hashtable-meta cf 和 hashtable-data 两个 cf；set 占用 set-meta cf 和 set-data 两个 cf；zset 占用 zset-meta cf 和 zset-data 与 score-data 三个 cf。")]),a("p",{attrs:{dir:"auto"}},[t._v("即一个 slot 使用一个 Floyd，共占用 10 个 cf。")])])])])])])}),[],!1,null,null,null);a.default=o.exports}}]);