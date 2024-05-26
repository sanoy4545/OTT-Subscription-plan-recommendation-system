import mysql.connector


cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
cursor = cnx.cursor()
def giverent(id,pas,userid,platform,price,plan):
    sql = "INSERT INTO giverent VALUES (%s,%s,%s,%s,%s,%s,0)"
    val = (id,pas,userid,platform,price,plan)
    cursor.execute(sql,val)
    cnx.commit()
    cursor.close()
    cnx.close()
    return 1

def search(a,id):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    if(a=="All"):
        qry="SELECT username,userid,password,price,platform FROM GiveRent where username<> %s and status=0"
        val=(id,)
        cursor.execute(qry,val)
    else:
        qry="SELECT username,userid,password,price,platform FROM GiveRent WHERE platform=(%s) and username<> %s and status=0"
        val=(a,id)
        cursor.execute(qry,val)
    result = cursor.fetchall()
    l=[]
    for row in result:
        d={}
        d['username']=row[0]
        d["Platform"]=row[4]
        d["Price"]=row[3]
        d["Pass"]=row[2]
        d["userid"]=row[1]
        l.append(d)
    cnx.close()
    return l
def paymentadd(a,b,c,d, e):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    sql = "INSERT INTO Payment VALUES (%s,%s,%s,%s,%s)"
    val = (a, b, c, d, e)
    cursor.execute(sql,val)
    cnx.commit()
    cnx.close()
    return 1
def getprice():
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    cursor.execute("SELECT Price FROM Payment")
    result = cursor.fetchall()
    l=[]
    for row in result:
        d={}
        d['Amount']=row[0]
        l.append(d)
    cnx.close()
    return l
def pay(a,b,c,d):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    sql="SELECT * FROM Card WHERE cardno=(%s) and cvv=(%s) and month=(%s) and year=(%s)"
    val = (a, d, b, c)
    cursor.execute(sql,val)
    result = cursor.fetchall()
    if len(result)==0:
        cursor.execute("INSERT INTO paymentstatus values('failed',1)")
        cnx.commit()
        cnx.close()
        return "failed"
    else:
        cursor.execute("INSERT INTO paymentstatus values('success',1)")
        cnx.commit()
        cursor.execute("Select userid,platform from payment")
        result = cursor.fetchall()
        result=result[0]
        cursor.execute("Update giverent set status=1 where userid=%s and platform=%s",result)
        cnx.commit()
        cnx.close()
        return "success"

def final():
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    cursor.execute("SELECT * from paymentstatus")
    result = cursor.fetchall()
    cursor.execute("Delete from paymentstatus")
    l=[]
    for row in result:
        d={}
        d['status']=row[0]
        l.append(d)
    cnx.close()
    return l

def drop():
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    cursor.execute("SELECT userid,platform,password,hours from payment")
    result = cursor.fetchall()
    val=(result[0][0],result[0][1])
    cursor.execute("DELETE FROM payment")
    cnx.commit()
    cursor.execute("DELETE FROM paymentstatus")
    cnx.commit()
    cursor.execute("Update giverent set status=0 where userid=%s and platform=%s",val)
    cnx.commit()
    cnx.close()
    return result[0]

def partneradd(mail,plan,platform,id):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    sql = "INSERT INTO partner VALUES (%s,%s,%s,%s)"
    val = (mail, plan, platform,id)
    cursor.execute(sql,val)
    cnx.commit()
    cnx.close()
    
def split(plan,platform,id):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    sql = "select email,platform,plan,plan/2 as half from partner where platform=%s and plan<2* %s and id<> %s"
    val = (platform, plan,id)
    cursor.execute(sql,val)
    result = cursor.fetchall()
    l=[]
    for row in result:
        d={}
        d["email"]=row[0]
        d["platform"]=row[1]
        d["plan"]=row[2]
        d["split"]=row[3]
        l.append(d)
    cnx.close()
    return l
def fetchid():
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    cursor.execute("Select * from activeuser")
    result = cursor.fetchall()
    cnx.close()
    return result[0][0]

def authenticat(mail,pas):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    sql = "select * from login where id=(%s) and pass=(%s)"
    val =(mail, pas)
    cursor.execute(sql,val)
    result = cursor.fetchall()
    if(len(result)==0):
        return 0
    else:
        sql = "INSERT INTO activeuser VALUES(%s)"
        val=(mail,)
        cursor.execute(sql,val)
        cnx.commit()
        cnx.close()
        return 1
def describe(a,price):
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    sql = "select price,plan,platform,screens,english+hindi+malayalam+tamil as e from plans where plan_index=%s"
    val =(a, )
    cursor.execute(sql,val)
    result = cursor.fetchall()
    l=result[0]
    if l[0]>price:
        sql = "select price,plan,platform,screens,english+hindi+malayalam+tamil as e from plans where price<= %s"
        val =(price, )
        cursor.execute(sql,val)
        result = cursor.fetchall()
        max=0
        for row in result:
            if row[4]>max:
                max=row[4]
                l=row
    d={}
    d['price']=l[0]
    d['plan']=l[1]
    d['platform']=l[2]
    d['screens']=l[3]
    d['movies']=l[4]
    cnx.close()
    return d


def clear():
    cnx = mysql.connector.connect(host='localhost',user='root',password='password',database='project')       
    cursor = cnx.cursor()
    cursor.execute("delete from payment")
    cnx.commit()
    cursor.execute("delete from paymentstatus")
    cnx.commit()
    cnx.close()
    
    
         
            
    
        
        
    
    
    
    