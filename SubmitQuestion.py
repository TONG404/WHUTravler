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
			"depA":items[1],
			"depB":items[2],
			"depC":items[3],
			"depD":items[4],
			"problem":items[5],
			"answer":items[6],
			"selA":items[7],
			"selB":items[8],
			"selC":items[9],
			"selD":items[10],
		}
		dataSum.append(data)
		cnt+=1
		dataSum.append(data)
		if(cnt==20):
			pack={
			"data":str(json.dumps(dataSum)),
			"ecd":appId
			}
			tmp = requests.get("%s/ImportQuestion"%BASEURL,params=pack).text
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
		tmp = requests.get("%s/ImportQuestion"%BASEURL,params=pack).text
		print(tmp)
		open("./tmp.txt","w",encoding="utf8").write(str(json.dumps(dataSum)))
		open("./tmp.html","w",encoding="utf8").write(tmp)
		dataSum=[]
		cnt=0