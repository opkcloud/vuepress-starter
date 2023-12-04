(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{462:function(t,a,e){"use strict";e.r(a);var i=e(2),n=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景 ：")]),t._v(" "),a("p",[t._v("从库Pika得到主库的全部DB结构，接下来以partition维度做Trysync，如果从库确认可以增量同步，从库将以partition为维度进行增量同步。默认使用pika port+2000的端口进行增量同步。")]),t._v(" "),a("h3",{attrs:{id:"binlog-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binlog-结构"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5#binlog-%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("Binlog 结构：")]),t._v(" "),a("p",[t._v("Pika的主从同步是使用Binlog来完成的，一主多从的结构master节点也可以给多个slave复用一个Binlog，只不过不同的slave在binglog中有自己的偏移量而已，master执行完一条写命令就将命令追加到Binlog中，pika的同步模块会读出对应的binlog发送到slave，而slave收到binlog后会执行并追加到自己的Binlog中，由于主从偏移量一样，所以一旦发生网络或节点故障需要重连主从时，slave仅需要将自己当前的Binlog偏移量发送给master，master找到后从该偏移量开始同步后续命令，理论上将命令不做处理一条一条追加到文件中，但是这样的记录格式容错很差，如果读文件中写错一个字节则导致整个文件不可用，所以pika采用了类似leveldb log的格式来进行存储，具体如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/9ccb67530c03cb86d5ee5107f271cea04adaf583062b523051f2ebf2e7352c55/687474703a2f2f7777322e73696e61696d672e636e2f6c617267652f633263643433303767773166366d373437313762336a3230726d30676a7767772e6a7067",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"交互过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互过程"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5#%E4%BA%A4%E4%BA%92%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("交互过程：")]),t._v(" "),a("p",[t._v("1，从库发送BinlogSyncRequest 报文，报文中需说明自己已经收到的BinlogOffset。")]),t._v(" "),a("p",[t._v("2，主库收到BinlogSyncRequest之后会从同步点开始发出一批BinlogSyncResponse。")]),t._v(" "),a("p",[t._v("3，从库在收到BinlogSyncResponse之后，会在写入本地binlog之后再进行1流程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/41ee12c8948a327b1495d3d56f472da06d8525afefc9645ad38e8ad766cd551d/68747470733a2f2f692e696d6775722e636f6d2f4a5666545632322e706e67",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"同步模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步模块"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5#%E5%90%8C%E6%AD%A5%E6%A8%A1%E5%9D%97",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("同步模块:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/afe7eaca60881767cdfb195fd96c90b965b1975181c190e1a35c1f83dd2505ba/68747470733a2f2f692e696d6775722e636f6d2f3542794b7073412e706e67",alt:"image"}})]),t._v(" "),a("p",[t._v("Pika的同步由ReplicaManager(RM)模块负责。RM中有两层结构，逻辑层负责同步逻辑，传输层负责链接的管理数据的解析和传输。")]),t._v(" "),a("p",[t._v("数据的同步的最小单位是Partition，每一个Pika实例会维护自己作为主的partition(MasterPartition)和自己是从的partition(SlavePartition)。对于MasterPartition，需要记录跟随自己的slave同步信息，逻辑层会根据该信息向slave同步信息。对于SlavePartition，则是需要需要记录master的信息，逻辑层会按照该信息按需向master发送同步请求。")]),t._v(" "),a("p",[t._v("逻辑层维护两个数据结构，一个是MasterPartitions，记录跟随自己的SlaveNode信息，主要包括slave的同步状态和当前的sessionId。另一个是SlavePartitions，记录主的信息。")]),t._v(" "),a("p",[t._v("传输层分为两个子模块，ReplicationClient负责发起链接的建立，ReplicationServer负责响应报文。每两个实例之间的所有partition复用一条链接。")]),t._v(" "),a("h2",{attrs:{id:"同步过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步过程"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5#%E5%90%8C%E6%AD%A5%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("同步过程:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/b71ccdcc0ec26e21aaff7599888a5da4c4219717be15ac02c63722fde357c5ad/68747470733a2f2f692e696d6775722e636f6d2f31513850626a462e706e67",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"masterpartition-同步事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#masterpartition-同步事件"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5#masterpartition-%E5%90%8C%E6%AD%A5%E4%BA%8B%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("MasterPartition 同步事件")]),t._v(" "),a("p",[t._v("逻辑层处理MasterPartition的同步事件，向其对应的从同步数据。")]),t._v(" "),a("p",[t._v("1，读取MasterPartition Binlog信息后，将BinlogOffsetInfo记录到SlaveNode自己的window中。")]),t._v(" "),a("p",[t._v("2，将Binlog暂存到临时的待发送队列中。")]),t._v(" "),a("p",[t._v("3，辅助线程(Auxiliary thread) 定时将临时待发送队列的数据通过RM的传输层发送给对应的slave节点。")]),t._v(" "),a("p",[t._v("4，收到slave的BinlogSyncResponse之后，得知slave收到的BinlogOffset信息，更新SlaveNode window，重复1流程继续同步")]),t._v(" "),a("p",[t._v("为了控制每个SlaveNode同步的速度，避免某几个SlaveNode占用过多资源，为每一个SlaveNode设置了window。如下图所示，Pika收到了BinlogOffset为100到200的ack response，从window中移除BinlogOffset位于100到200的元素，之后继续发送BinlogOffset为1100和1200的binlog，对应的BinlogOffset添加至window中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/5143e617ef85fd1fb80446212c8b655102b61d975a4369b208db3f9445671ab0/68747470733a2f2f692e696d6775722e636f6d2f3047744f686b342e706e67",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"slavepartition-同步事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slavepartition-同步事件"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5#slavepartition-%E5%90%8C%E6%AD%A5%E4%BA%8B%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("SlavePartition 同步事件")]),t._v(" "),a("p",[t._v("逻辑层处理SlavePartition的同步事件，收到master发送的同步数据，向master发相应的response信息。")]),t._v(" "),a("p",[t._v("1，按照解析出的Partition信息，被分配到对应的线程处理binlog写入任务。")]),t._v(" "),a("p",[t._v("2，线程写入binlog之后，调用传输层发送BinlogSyncResponse信息。")]),t._v(" "),a("p",[t._v("3，根据binlog的key分配给对应的线程处理写入db任务。")])])}),[],!1,null,null,null);a.default=n.exports}}]);