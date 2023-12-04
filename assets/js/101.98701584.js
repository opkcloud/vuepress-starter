(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{508:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pika 端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9221")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pika是多线程的, 该参数能够配置pika的线程数量, 不建议配置值超过部署服务器的CPU核心数量 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thread-num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 处理命令用户请求命令线程池的大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thread-pool-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sync 主从同步时候从库执行主库传递过来命令的线程数量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sync-thread-num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sync 处理线程的任务队列大小, 不建议修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sync-buffer-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika日志目录, 用于存放INFO, WARNING, ERROR日志以及用于同步的binlog(write2fine)文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./log/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika数据目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./db/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika 底层单个rocksdb单个memtable的大小, 设置越大写入性能越好但会在buffer刷盘时带来更大的IO负载, 请依据使用场景合理配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RocksDb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Tuning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Guide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("(https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/facebook/rocksdb/wiki/RocksDB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Tuning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Guide)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("write-buffer-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("268435456")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在内存中为 db 中的一个列族建立的写入缓冲区 memtables 的最大数量,默认和最小数量为 2 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果这个配置超过3，写入的性能会变慢")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-write-buffer-num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika 的连接超时时间配置, 单位为秒, 当连接无请求时(进入sleep状态)开始从配置时间倒计时, 当倒计时为0时pika将强行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断开该连接, 可以通过合理配置该参数避免可能出现的pika连接数用尽问题, 该参数默认值为60")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密码管理员密码, 默认为空, 如果该参数与下方的userpass参数相同(包括同时为空), 则userpass参数将自动失效, 所有用户均为")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理员身份不受userblacklist参数的限制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requirepass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步验证密码, 用于slave(从库)连接master(主库)请求同步时进行验证, 该参数需要与master(主库)的requirepass一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("masterauth")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户密码, 默认为空, 如果该参数与上方的userpass参数相同(包括同时为空), 则本参数将自动失效, 所有用户均为管理员身份不")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 受userblacklist参数的限制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userpass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" userpass\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 指令黑名单, 能够限制通过userpass登录的用户, 这些用户将不能使用黑名单中的指令, 指令之间使用","隔开, 默认为空')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建议将高风险命令配置在该参数中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userblacklist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FLUSHALL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SHUTDOWN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" KEYS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CONFIG\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分为经典模式和分片模式，[classic | sharding]，经典模式中支持多db的配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance-mode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classic\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 经典模式下下指定db的数量，使用方式和redis一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("databases")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分片模式下每一个table中默认的slot数量")]),t._v("\ndefault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("num：16\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义一个副本组又多少个从副本，目前支持的配置选项范围[0, 1, 2, 3, 4], 0代表不开启此功能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replication-num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义在返回客户端之前主副本收到多少个从副本的ACK反馈信息。目前可以配置的选项范围[0, ...replicaiton-num]，0代表不开启此功能。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consensus-level")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika的dump文件名称前缀, bgsave后生成的文件将以该前缀命名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dump-prefix")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" backup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 守护进程模式  [yes | no]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("daemonize")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yes\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# slotmigrate  [yes | no], pika3.0.0暂不支持该参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#slotmigrate : no")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika dump目录设置, bgsave后生成的文件将存放在该目录中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dump-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data1/pika9001/dump/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dump目录过期时间, 单位为天, 默认为0即永不过期")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dump-expire")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pidfile Path pid文件目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pidfile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data1/pika9001/pid/9001.pid\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pika最大连接数配置参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxclients")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rocks-db的sst文件体积, sst文件是层级的, 文件越小, 速度越快, 合并代价越低, 但文件数量就会超多, 而文件越大, 速度相对变慢, 合并代价大, 但文件数量会很少, 默认是 20M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target-file-size-base")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20971520")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# binlog(write2file)文件保留时间, 7天, 最小为1, 超过7天的文件会被自动清理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expire-logs-days")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# binlog(write2file)文件最大数量, 200个, 最小为10, 超过200个就开始自动清理, 始终保留200个")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expire-logs-nums")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# root用户连接保证数量：2个, 即时Max Connection用完, 该参数也能确保本地（127.0.0.1）有2个连接可以同来登陆pika")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("root-connection-num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 慢日志记录时间, 单位为微秒, pika的慢日志记录在pika-ERROR.log中, pika没有类似redis slow log的慢日志提取api")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slowlog-log-slower-than")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# slave是否是只读状态(yes/no, 1/0)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# slave-read-only : 0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pika db 同步路径配置参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db-sync-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./dbsync/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该参数能够控制全量同步时的传输速度, 合理配置该参数能够避免网卡被用尽, 该参数范围为1~1024, 意为:1MB/s~1024MB/s，当该参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 被配置为小于0或大于1024时, 该参数会被自动配置为1024")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db-sync-speed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1 (1024MB/s)\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定网卡")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# network-interface : eth1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步参数配置, 适用于从库节点(slave), 该参数格式为ip:port, 例如192.168.1.2:6666, 启动后该示例会自动向192.168.1.2的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6666端口发送同步请求")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# slaveof : master-ip:master-port")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置双主或Hub需要的server id, 不使用双主或Hub请忽略该参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server-id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 双主配置, 不使用双主请忽略以下配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("double-master-ip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t双主对端Ip\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("double-master-port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t双主对端Port\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("double-master-server-id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t双主对端server id\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动全量compact, 通过配置的参数每天定时触发一次自动全量compact, 特别适合存在多数据结构大量过期、删除、key名称复用的场景")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 参数格式为:"启动时间(小时)-结束时间(小时)/磁盘空余空间百分比", 例如你需要配置一个每天在凌晨3点~4点之间自动compact的任务')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同时该任务仅仅在磁盘空余空间不低于30%的时候执行, 那么应配置为:03-04/30, 该参数默认为空")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compact-cron")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动全量compact, 该参与与compact-cron的区别为, compact-cron每天仅在指定时间段执行, 而compact-interval则以配置时间为周期")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环执行, 例如你需要配置一个每4小时执行一次的自动compact任务, 同时该任务仅仅在磁盘空余空间不低于30%的时候执行, 那么该参")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数应配置为:4/30, 该参数默认为空")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compact-interval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从库实例权重设置, 仅配合哨兵使用,无其它功能, 权重低的slave会优先选举为主库, 该参数默认为0(不参与选举)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave-priority")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该参数仅适用于pika跨版本同步时不同版本的binlog能够兼容并成功解析, 该参数可配置为[new | old]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当该参数被配置为new时, 该实例仅能作为3.0.0及以上版本pika的从库, 与pika2.3.3~2.3.5不兼容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当该参数被配置为old时, 该时候仅能作为2.3.3~2.3.5版本pika的从库, 与pika3.0.0及以上版本不兼容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该参数默认值为new, 该参数可在没有配置同步关系的时候通过config set动态调整, 一旦配置了同步关系则不可动态修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要先执行slaveof no one关闭同步配置, 之后即可通过config set动态修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("identify-binlog-type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" new\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主从同步流量控制的的窗口，主从高延迟情形下可以通过提高该参数提高同步性能。默认值9000最大值90000。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sync-window-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 处理客户端连接请求的最大缓存大小，可配置的数值为67108864(64MB) 或 268435456(256MB) 或 536870912(512MB)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认是268435456(256MB)，需要注意的是主从的配置需要一致。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单条命令超过此buffer大小，服务端会自动关闭与客户端的连接。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-conn-rbuf-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("268435456")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Critical Settings#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    危险参数      #")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# write2file文件体积, 默认为100MB, 一旦启动不可修改,  limited in [1K, 2G]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("binlog-file-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("104857600")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩方式[snappy, zlib, lz4, zstd]默认为snappy, 一旦启动不可修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 官方发布的二进制提供默认的snaapy的静态连接。如果需要其他压缩方式请自行下载相应静态库并进行编译。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compression")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" snappy\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定后台flush线程数量, 默认为1, 范围为[1, 4]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-background-flushes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定后台压缩线程数量, 默认为1, 范围为[1, 4]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-background-compactions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DB可以使用的打开文件的数量, 默认为5000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-cache-files")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pika实例所拥有的rocksdb实例使用的memtable大小上限，如果rocksdb实际使用超过这个数值，下一次写入会造成刷盘")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Rocksdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Basic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Tuning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("(https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/facebook/rocksdb/wiki/Setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("and"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Basic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Tuning)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-write-buffer-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10737418240")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 限制命令返回数据的大小，应对类似于keys *等命令，返回值过大将内存耗尽。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-client-response-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741824")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pika引擎中层级因子, 用于控制每个层级与上一层级总容量的倍数关系, 默认为10(倍), 允许调整为5(倍) ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-bytes-for-level-multiplier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计对于key的操作次数，对于操作频繁的一部分key做小规模compaction")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max-cache-statistic-keys 为受监控key的数量，配置为0代表关闭此功能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-cache-statistic-keys")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果开启小规模compaction，如果对于key操作次数超过small-compaction-threshold上限，那么对该key进行compaction")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("small-compaction-threshold")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LRU 缓存，多个 RocksDB 可以共享，也可以单独拥有。这个由 share-block-cache 参数决定")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参考文档：http://alexstocks.github.io/html/rocksdb.html")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("block-cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8388608")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 块缓存是否在 RocksDB 实例之间共享，默认是每个独享")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("share-block-cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# arena内存分配中一个内存块的大小；如果为0则自动计算出合适的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arena-block-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33554432")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);