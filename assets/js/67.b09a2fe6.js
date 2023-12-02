(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{476:function(t,e,_){"use strict";_.r(e);var v=_(2),r=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" Performance：")]),t._v(" "),e("h3",{attrs:{id:"_0-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-env"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#0-env",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("0. Env")]),t._v(" "),e("p",[t._v("Disk: 2T NVME")]),t._v(" "),e("p",[t._v("CPU: Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz * 40")]),t._v(" "),e("p",[t._v("Memory: 256G")]),t._v(" "),e("p",[t._v("Network Card: 10-Gigabit")]),t._v(" "),e("p",[t._v("OS： CentOS Linux release 7.4")]),t._v(" "),e("h3",{attrs:{id:"_1-single-db"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-single-db"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#1-single-db",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("1. Single Db")]),t._v(" "),e("h4",{attrs:{id:"_1-1-write-binlog-with-one-slave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-write-binlog-with-one-slave"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#11-write-binlog-with-one-slave",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("1.1 Write binlog with one slave")]),t._v(" "),e("p",[t._v("data size: 64bytes")]),t._v(" "),e("p",[t._v("key num: 1,000,000")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("TEST")]),t._v(" "),e("th",[t._v("QPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("set")]),t._v(" "),e("td",[t._v("124347")])]),t._v(" "),e("tr",[e("td",[t._v("get")]),t._v(" "),e("td",[t._v("283849")])])])]),t._v(" "),e("h4",{attrs:{id:"_1-2-no-binlog-no-slave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-no-binlog-no-slave"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#12-no-binlog-no-slave",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("1.2 No binlog No slave")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/4a0f5dc5b16a973168fb673c9b4fadef462fbdb6d91f63609c6fa3296a72cc8e/68747470733a2f2f77686f69616d692e6769746875622e696f2f7075626c69632f696d616765732f696d616765732f73696e676c6544622e706e67",alt:"singleDb"}})]),t._v(" "),e("h4",{attrs:{id:"_1-3-benchmark-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-benchmark-result"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#13-benchmark-result",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("1.3 Benchmark Result")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("WithBinlog&Slave QPS")]),t._v(" "),e("th",[t._v("NoBinlog&Slave QPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("PING_INLINE")]),t._v(" "),e("td",[t._v("262329")]),t._v(" "),e("td",[t._v("272479")])]),t._v(" "),e("tr",[e("td",[t._v("PING_BULK")]),t._v(" "),e("td",[t._v("262467")]),t._v(" "),e("td",[t._v("270562")])]),t._v(" "),e("tr",[e("td",[t._v("SET")]),t._v(" "),e("td",[t._v("124953")]),t._v(" "),e("td",[t._v("211327")])]),t._v(" "),e("tr",[e("td",[t._v("GET")]),t._v(" "),e("td",[t._v("284900")]),t._v(" "),e("td",[t._v("292568")])]),t._v(" "),e("tr",[e("td",[t._v("INCR")]),t._v(" "),e("td",[t._v("120004")]),t._v(" "),e("td",[t._v("213766")])]),t._v(" "),e("tr",[e("td",[t._v("MSET (10 keys)")]),t._v(" "),e("td",[t._v("64863")]),t._v(" "),e("td",[t._v("111578")])]),t._v(" "),e("tr",[e("td",[t._v("MGET (10 keys)")]),t._v(" "),e("td",[t._v("224416")]),t._v(" "),e("td",[t._v("223513")])]),t._v(" "),e("tr",[e("td",[t._v("MGET (100 keys)")]),t._v(" "),e("td",[t._v("29935")]),t._v(" "),e("td",[t._v("29550")])]),t._v(" "),e("tr",[e("td",[t._v("MGET (200 keys)")]),t._v(" "),e("td",[t._v("15128")]),t._v(" "),e("td",[t._v("14912")])]),t._v(" "),e("tr",[e("td",[t._v("LPUSH")]),t._v(" "),e("td",[t._v("117799")]),t._v(" "),e("td",[t._v("205380")])]),t._v(" "),e("tr",[e("td",[t._v("RPUSH")]),t._v(" "),e("td",[t._v("117481")]),t._v(" "),e("td",[t._v("205212")])]),t._v(" "),e("tr",[e("td",[t._v("LPOP")]),t._v(" "),e("td",[t._v("112120")]),t._v(" "),e("td",[t._v("200320")])]),t._v(" "),e("tr",[e("td",[t._v("RPOP")]),t._v(" "),e("td",[t._v("119932")]),t._v(" "),e("td",[t._v("207986")])]),t._v(" "),e("tr",[e("td",[t._v("LRANGE_10 (first 10 elements)")]),t._v(" "),e("td",[t._v("277932")]),t._v(" "),e("td",[t._v("284414")])]),t._v(" "),e("tr",[e("td",[t._v("LRANGE_100 (first 100 elements)")]),t._v(" "),e("td",[t._v("165118")]),t._v(" "),e("td",[t._v("164355")])]),t._v(" "),e("tr",[e("td",[t._v("LRANGE_300 (first 300 elements)")]),t._v(" "),e("td",[t._v("54907")]),t._v(" "),e("td",[t._v("55096")])]),t._v(" "),e("tr",[e("td",[t._v("LRANGE_450 (first 450 elements)")]),t._v(" "),e("td",[t._v("36656")]),t._v(" "),e("td",[t._v("36630")])]),t._v(" "),e("tr",[e("td",[t._v("LRANGE_600 (first 600 elements)")]),t._v(" "),e("td",[t._v("27540")]),t._v(" "),e("td",[t._v("27510")])]),t._v(" "),e("tr",[e("td",[t._v("SADD")]),t._v(" "),e("td",[t._v("126230")]),t._v(" "),e("td",[t._v("208768")])]),t._v(" "),e("tr",[e("td",[t._v("SPOP")]),t._v(" "),e("td",[t._v("103135")]),t._v(" "),e("td",[t._v("166555")])]),t._v(" "),e("tr",[e("td",[t._v("HSET")]),t._v(" "),e("td",[t._v("122443")]),t._v(" "),e("td",[t._v("214362")])]),t._v(" "),e("tr",[e("td",[t._v("HINCRBY")]),t._v(" "),e("td",[t._v("114757")]),t._v(" "),e("td",[t._v("208942")])]),t._v(" "),e("tr",[e("td",[t._v("HINCRBYFLOAT")]),t._v(" "),e("td",[t._v("114377")]),t._v(" "),e("td",[t._v("208550")])]),t._v(" "),e("tr",[e("td",[t._v("HGET")]),t._v(" "),e("td",[t._v("284900")]),t._v(" "),e("td",[t._v("290951")])]),t._v(" "),e("tr",[e("td",[t._v("HMSET (10 fields)")]),t._v(" "),e("td",[t._v("58937")]),t._v(" "),e("td",[t._v("111445")])]),t._v(" "),e("tr",[e("td",[t._v("HMGET (10 fields)")]),t._v(" "),e("td",[t._v("203624")]),t._v(" "),e("td",[t._v("205592")])]),t._v(" "),e("tr",[e("td",[t._v("HGETALL")]),t._v(" "),e("td",[t._v("166861")]),t._v(" "),e("td",[t._v("160797")])]),t._v(" "),e("tr",[e("td",[t._v("ZADD")]),t._v(" "),e("td",[t._v("106780")]),t._v(" "),e("td",[t._v("189178")])]),t._v(" "),e("tr",[e("td",[t._v("ZREM")]),t._v(" "),e("td",[t._v("112866")]),t._v(" "),e("td",[t._v("201938")])]),t._v(" "),e("tr",[e("td",[t._v("PFADD")]),t._v(" "),e("td",[t._v("4708")]),t._v(" "),e("td",[t._v("4692")])]),t._v(" "),e("tr",[e("td",[t._v("PFCOUNT")]),t._v(" "),e("td",[t._v("27412")]),t._v(" "),e("td",[t._v("27345")])]),t._v(" "),e("tr",[e("td",[t._v("PFMERGE")]),t._v(" "),e("td",[t._v("478")]),t._v(" "),e("td",[t._v("494")])])])]),t._v(" "),e("h4",{attrs:{id:"_1-4-compare-wiht-redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-compare-wiht-redis"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#14-compare-wiht-redis",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("1.4 Compare Wiht Redis")]),t._v(" "),e("p",[t._v("With Redis AOF configuration "),e("code",[t._v("appendfsync everysec")]),t._v(", redis basically write data into memeory. However, pika uses rocksdb, which writes WAL on ssd druing every write batch. That comparation becomes multiple threads sequential write into ssd and one thread write into memory.")]),t._v(" "),e("p",[t._v("Put the fairness or unfairness aside. Here is the performance.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/f050920395601ad7887638ae9770f1f97ab035e78c62612399a4efa97fe334dc/68747470733a2f2f77686f69616d692e6769746875622e696f2f7075626c69632f696d616765732f696d616765732f436f6d706172655769746852656469732e706e67",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2-cluster-codis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-cluster-codis"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#2-cluster-codis",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("2. Cluster (Codis)")]),t._v(" "),e("h4",{attrs:{id:"_2-1-topology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-topology"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#21-topology",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("2.1 Topology:")]),t._v(" "),e("p",[t._v("WithBInlog&Slave")]),t._v(" "),e("p",[t._v("4 machine * 2 pika instance (Master)")]),t._v(" "),e("p",[t._v("4 machine * 2 pika instance (Slave)")]),t._v(" "),e("p",[t._v("NoBinlog&Slave")]),t._v(" "),e("p",[t._v("4 machine * 2 pika instance (Master)")]),t._v(" "),e("p",[t._v("Slots Distribution:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/4f22e261718c9a1861f26620c8e84f3b2a871498988e5d3acb5fd5319c6140e5/68747470733a2f2f77686f69616d692e6769746875622e696f2f7075626c69632f696d616765732f696d616765732f6e65775f746f706f2e706e67",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_2-2-withbinlog-slave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-withbinlog-slave"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#22-withbinlogslave",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("2.2 WithBinlog&Slave")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/0fe531620d48b500713062c73e5cce2f6b839e310db11af7ba01e8b0f4a1576b/68747470733a2f2f77686f69616d692e6769746875622e696f2f7075626c69632f696d616765732f696d616765732f6e65775f7769746862696e6c6f67736c6176652e706e67",alt:"Set"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Command")]),t._v(" "),e("th",[t._v("QPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Set")]),t._v(" "),e("td",[t._v("1,400,000+")])])])]),t._v(" "),e("h4",{attrs:{id:"_2-3-nobinlog-slave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-nobinlog-slave"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#23-nobinlogslave",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("2.3 NoBinlog&Slave")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/4d295f359f3ae8ad022647336e268a97eb096c0a8659f3835c7705017a9f6b64/68747470733a2f2f77686f69616d692e6769746875622e696f2f7075626c69632f696d616765732f696d616765732f6e65775f6e6f62696e6c6f672e706e67",alt:""}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Command")]),t._v(" "),e("th",[t._v("QPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Set")]),t._v(" "),e("td",[t._v("1,600,000+")])])])]),t._v(" "),e("h4",{attrs:{id:"_2-4-get-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-get-command"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/OpenAtomFoundation/pika/wiki/3.2.x-Performance#24-get-command",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),t._v("2.4 Get Command")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/b7cd9f9be074300121a562efde4382858ac25d24e632b53a7cb9a8c8c3e7c9ec/68747470733a2f2f77686f69616d692e6769746875622e696f2f7075626c69632f696d616765732f696d616765732f6e65775f6765742e706e67",alt:""}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Command")]),t._v(" "),e("th",[t._v("QPS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Get")]),t._v(" "),e("td",[t._v("2,300,000+")])])])]),t._v(" "),e("p",[t._v("With or without binlog, for Get command, QPS is approximately the same.")])])}),[],!1,null,null,null);e.default=r.exports}}]);