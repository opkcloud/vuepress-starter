(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{505:function(i,s,e){"use strict";e.r(s);var a=e(2),t=Object(a.a)({},(function(){var i=this,s=i._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[s("p",[i._v("现居珠海，先后担任专职 Oracle 和 MySQL DBA，现在主要负责 MySQL、mongoDB 和 Redis 维护工作。")]),i._v(" "),s("p",[i._v("本文来源：原创投稿")]),i._v(" "),s("p",[i._v("*爱可生开源社区出品，原创内容未经授权不得随意使用，转载请联系小编并注明来源。")]),i._v(" "),s("hr"),i._v(" "),s("h2",{attrs:{id:"_1、背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、背景"}},[i._v("#")]),i._v(" 1、背景")]),i._v(" "),s("p",[i._v("某业务写多读少，上线前预估TPS最高可达4w且可能会随时增长，去年上线时采用了mongo 4分片集群架构。")]),i._v(" "),s("p",[i._v("现在业务趋于稳定，日常TPS只有最高值的1/10不到，项目组出于成本考虑想要将其迁移到内存KV数据库，但是 redis纯内存模式机器成本有点高，经过调研后决定尝试360开源的pika。")]),i._v(" "),s("p",[i._v("我们采用的是3.3.6版本，机器A配置为8c8G200G，压测出现大量超时ERROR: redis: connection pool timeout，qps只有3k左右，且磁盘的%util 一直接近100，处于“饱和”状态。")]),i._v(" "),s("p",[i._v("同样版本的pika，在机器B上测试，qps能达到40K且没有1个超时错误，这台机器配置24c48G1.5T。 从多家云厂商那里获悉相同型号的云主机，硬盘容量越大IO吞吐会越高，因此一开始怀疑是硬件问题。")]),i._v(" "),s("p",[i._v("针对两台云主机进行FIO测试，配置更高的机器读写吞吐是会高一些(大概提升20%左右)，但并没有pika qps指标相 差10倍这么夸张。")]),i._v(" "),s("p",[i._v("将机器B的pika配置文件复制到机器A上，重启pika再测进行压测，这次机器A的qps也能达到40K，说明pika配置 参数导致的性能差异。")]),i._v(" "),s("h2",{attrs:{id:"_2、诊断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、诊断"}},[i._v("#")]),i._v(" 2、诊断")]),i._v(" "),s("p",[i._v("两个配置文件参数相差的有点多，只能逐个修改并压测。")]),i._v(" "),s("p",[i._v("测试过程略过，最后确认是max-write-buffer-size设置不合理导致的，该参数默认值14045392(13M)，调大为 4294967296(4G)后pika qps就从3k提升到了40K。")]),i._v(" "),s("p",[s("img",{attrs:{src:"https://action-weikai.oss-cn-shanghai.aliyuncs.com/renkun0518-1.png",alt:""}})]),i._v(" "),s("p",[i._v("以下是对应测试案例的iostat截图")]),i._v(" "),s("p",[i._v("— max-write-buffer-size 14045392(13M)")]),i._v(" "),s("p",[s("img",{attrs:{src:"https://action-weikai.oss-cn-shanghai.aliyuncs.com/renkun0518-2.png",alt:""}})]),i._v(" "),s("p",[i._v("— max-write-buffer-size 4294967296")]),i._v(" "),s("p",[s("img",{attrs:{src:"https://action-weikai.oss-cn-shanghai.aliyuncs.com/renkun0518-3.png",alt:""}})]),i._v(" "),s("p",[i._v("两者最大的差异是w/s和avgrq-sz，其中avgrq-sz描述的是IO请求的平均大小，以扇区（512字节）为单位。")]),i._v(" "),s("p",[i._v("图1每秒磁盘写请求4700，每个请求平均大小为55 * 0.5 ~= 27.5K，出现了大量的小块写。")]),i._v(" "),s("p",[i._v("图2每秒磁盘写请求200左右，每个请求平均大小为800 * 0.5 ~= 400K，明显采用了批量落盘的策略。")]),i._v(" "),s("p",[i._v("再看%util 指标，这个不是我们通常理解的磁盘饱和度，而是磁盘使用率，其计算时只关注io请求数量，不理会每 个io请求的大小，即便达到了100，并不意味着磁盘吞吐已达上限。")]),i._v(" "),s("p",[i._v("假设某路段有1w辆私家车(每车只有1个人，avgrq-sz=1)同时通行，即便平均每秒放行10辆车(w/s=10)，总体运 力也只有10人/s，若是改成50座大巴车(avgrq-sz=50)，即便每秒只放行1辆车(w/s=1)，总体运力也会提高到50 人/s。")]),i._v(" "),s("p",[i._v("在这个案例中，%util 记录的只是平均每秒通行的机动车数量，不关心每辆车坐了多少人，如果私家车的%util 是 100，那大巴车的%util只有10并且吞吐更高，跟上述截图描述的场景十分吻合。")]),i._v(" "),s("p",[i._v("关于max-write-buffer-size参数，pika官档原文如下：https://github.com/OpenAtomFoundation/pika/wiki/pika- %E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E")]),i._v(" "),s("p",[i._v("# Pika 底层单个rocksdb单个memtable的大小, 设置越大写入性能越好但会在buffer刷盘时带来更大的IO负载, 请 依据使用场景合理配置\n[RocksDb‐Tuning‐Guide](https://github.com/facebook/rocksdb/wiki/RocksDB‐Tuning‐Guide)\nwrite‐buffer‐size : 268435456")]),i._v(" "),s("h1",{attrs:{id:"pika实例所拥有的rocksdb实例使用的memtable大小上限-如果rocksdb实际使用超过这个数值-下一次写入会造成-刷盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pika实例所拥有的rocksdb实例使用的memtable大小上限-如果rocksdb实际使用超过这个数值-下一次写入会造成-刷盘"}},[i._v("#")]),i._v(" pika实例所拥有的rocksdb实例使用的memtable大小上限，如果rocksdb实际使用超过这个数值，下一次写入会造成 刷盘")]),i._v(" "),s("p",[i._v("[Rocksdb‐Basic‐Tuning](https://github.com/facebook/rocksdb/wiki/Setup‐Options‐and‐Basic‐Tuning)\nmax‐write‐buffer‐size : 10737418240")]),i._v(" "),s("ol",[s("li",[s("p",[i._v("# Pika 底层单个rocksdb单个memtable的大小, 设置越大写入性能越好但会在buffer刷盘时带来更大的IO负载, 请 依据使用场景合理配置")])]),i._v(" "),s("li",[s("p",[i._v("[RocksDb‐Tuning‐Guide](https://github.com/facebook/rocksdb/wiki/RocksDB‐Tuning‐Guide)")])]),i._v(" "),s("li",[s("p",[i._v("write‐buffer‐size : 268435456")])]),i._v(" "),s("li",[s("p",[i._v("# pika实例所拥有的rocksdb实例使用的memtable大小上限，如果rocksdb实际使用超过这个数值，下一次写入会造成 刷盘")])]),i._v(" "),s("li",[s("p",[i._v("[Rocksdb‐Basic‐Tuning](https://github.com/facebook/rocksdb/wiki/Setup‐Options‐and‐Basic‐Tuning)")])]),i._v(" "),s("li",[s("p",[i._v("max‐write‐buffer‐size : 10737418240")])])]),i._v(" "),s("p",[i._v("# Pika 底层单个rocksdb单个memtable的大小, 设置越大写入性能越好但会在buffer刷盘时带来更大的IO负载, 请 依据使用场景合理配置\n[RocksDb‐Tuning‐Guide](https://github.com/facebook/rocksdb/wiki/RocksDB‐Tuning‐Guide)\nwrite‐buffer‐size : 268435456")]),i._v(" "),s("h1",{attrs:{id:"pika实例所拥有的rocksdb实例使用的memtable大小上限-如果rocksdb实际使用超过这个数值-下一次写入会造成-刷盘-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pika实例所拥有的rocksdb实例使用的memtable大小上限-如果rocksdb实际使用超过这个数值-下一次写入会造成-刷盘-2"}},[i._v("#")]),i._v(" pika实例所拥有的rocksdb实例使用的memtable大小上限，如果rocksdb实际使用超过这个数值，下一次写入会造成 刷盘")]),i._v(" "),s("p",[i._v("[Rocksdb‐Basic‐Tuning](https://github.com/facebook/rocksdb/wiki/Setup‐Options‐and‐Basic‐Tuning)\nmax‐write‐buffer‐size : 10737418240")]),i._v(" "),s("p",[i._v("RocksDB采用WAL + LSM架构，memtable可以看作是用户数据落盘的基本单位，memtable越大则落盘时越倾 向于批量写，更能有效利用磁盘IO吞吐。")]),i._v(" "),s("p",[s("img",{attrs:{src:"https://action-weikai.oss-cn-shanghai.aliyuncs.com/renkun0518-4.png",alt:""}})]),i._v(" "),s("p",[i._v("最初的参数文件没有设置max-write-buffer-size，只有write-buffer-size，奇怪的是调大write-buffer-size并不会 将前者自动增大，两者不具备联动关系。")]),i._v(" "),s("p",[s("img",{attrs:{src:"https://action-weikai.oss-cn-shanghai.aliyuncs.com/renkun0518-5.png",alt:""}})]),i._v(" "),s("p",[i._v("我在压测时尝试调大write-buffer-size到1G(max-write-buffer-size保持默认值)，性能依然上不去，看来是max- write-buffer-size起到了决定性作用。")]),i._v(" "),s("p",[i._v("经过多次压测，最终我们的主要参数设置如下：")]),i._v(" "),s("p",[i._v("thread‐num : 8 #和cpu核数相同\nthread‐pool‐size : 8\nwrite‐buffer‐size : 268435456\nmax‐write‐buffer‐size : 4294967296\ncompression : snappy\nmax‐background‐flushes : 2\nmax‐background‐compactions : 2")]),i._v(" "),s("ol",[s("li",[i._v("thread‐num : 8 #和cpu核数相同")]),i._v(" "),s("li",[i._v("thread‐pool‐size : 8")]),i._v(" "),s("li",[i._v("write‐buffer‐size : 268435456")]),i._v(" "),s("li",[i._v("max‐write‐buffer‐size : 4294967296")]),i._v(" "),s("li",[i._v("compression : snappy")]),i._v(" "),s("li",[i._v("max‐background‐flushes : 2")]),i._v(" "),s("li",[i._v("max‐background‐compactions : 2")])]),i._v(" "),s("p",[i._v("thread‐num : 8 #和cpu核数相同\nthread‐pool‐size : 8\nwrite‐buffer‐size : 268435456\nmax‐write‐buffer‐size : 4294967296\ncompression : snappy\nmax‐background‐flushes : 2\nmax‐background‐compactions : 2")]),i._v(" "),s("h2",{attrs:{id:"_3、结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、结论"}},[i._v("#")]),i._v(" 3、结论")]),i._v(" "),s("p",[i._v("通过这个案例对iostat的输出指标有了更深一步的了解，以后再遇到%util达到100时先不要轻易作出磁盘IO已饱和 的结论，很可能是大量小IO请求导致的，可通过w/s和avgrq-sz进行辨别比较。")]),i._v(" "),s("p",[i._v("使用pika时，一定要设置max-write-buffer-size值，虽然和write-buffer-size参数名字很像，但两者没有联动关系 且max-write-buffer-size起到了决定性作用。")]),i._v(" "),s("p",[i._v("最后，我们的应用成功迁移到pika，相比之前的mongo集群节省了不少的机器资源开销，可见没有最好的DB，只有最适合的。")])])}),[],!1,null,null,null);s.default=t.exports}}]);