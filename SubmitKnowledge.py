import json
import re
import requests
import hashlib
appId = "33FEC6B99B5AE0D7"
BASEURL="http://134.175.92.228:8080"

def ecd(src):
	m1 = hashlib.md5()
	m1.update(src.encode('utf-8'))
	pd = m1.hexdigest()
	return pd

if __name__ =="__main__":
	tmp = open("./Questions.txt","r",encoding="utf8").read()
	tmp = re.sub("\r","",tmp)
	List = tmp.split("\n")
	dataSum=[]
	cnt=0
	for item in List:
		items = item.split("\t")
		data={
			"id":items[0],
			"type":items[1],
			"problem":items[2],
			"answer":items[3],
			"selA":items[4],
			"selB":items[5],
			"selC":items[6],
			"selD":items[7],
		}
		cnt+=1
		dataSum.append(data)
		if(cnt==20):
			pack={
			"data":str(json.dumps(dataSum)),
			"ecd":appId
			}
			tmp = requests.get(BASEURL+"/ImportKnowledge",params=pack).text
			print(tmp)
			open("./tmp.txt","w",encoding="utf8").write(str(json.dumps(dataSum)))
			open("./tmp.html","w",encoding="utf8").write(tmp)
			dataSum=[]
			cnt=0
	if(cnt!=0):
		pack={
		"data":str(json.dumps(dataSum)),
		"ecd":appId
		}
		tmp = requests.get(BASEURL+"/ImportKnowledge",params=pack).text
		open("./tmp.txt","w",encoding="utf8").write(str(json.dumps(dataSum)))
		open("./tmp.html","w",encoding="utf8").write(tmp)
		print(tmp)
		dataSum=[]
		cnt=0