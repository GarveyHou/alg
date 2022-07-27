#!/bin/bash
echo "please input:"
read num

while [$num -gt 0]
do
  i = $num

  while [$i -gt 0]
  do
    echo -n "$i"
    let i = "$i + 1"
  done
  echo -e#空格
  let num = $num -1


done







#！/bin/bash
ips = "cat run.log | awk "{print $1}"|sort -u"

for ip in ${ips}
do
  count = `cat run.log|grep ${ip}`|wc -l
  echo -e ${ip} ${count}
done


30 8 *** /root/con1.sh
30 23 *** /root/con2.sh
30 8-23/1 *** /root/con3.sh 
50 23 *** /root/con4.sh

1

!#/bin/bash
service vsftpd status 
if [$? -eq 0];then
  service vsftpd stop
  if [$? -ne 0 ];then 
    pid = ps -ef|grep vstfpd|grep -v "grep vsftpd"|awk -F ' ' {print $2}
    kill -p $pid



man ls>out.txt
vi out.txt
:set nu
99G
l10
gg
/1024
n
:50,100 s/o/O/g
u
65G
:65
9yy
G
p
:21,42 d
:w out.txt.bak
28G
3dw
gg
0
I am a student and
:wq










