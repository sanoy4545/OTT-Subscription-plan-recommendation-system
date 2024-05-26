from flask import Flask, request,jsonify
from flask_cors import CORS
import t
import t1
import pandas as pd
import joblib as jk

app = Flask(__name__)
CORS(app)

@app.route('/',methods=['GET','POST'])
def hello():
    if request.method=='POST':
        d=request.get_json()
        id=t.fetchid()
        pas=d['password']
        userid=d['userId']
        platform=d['platform']
        price=d['price']
        plan=d['plan']
        e=t.giverent(id,pas,userid,platform,price,plan)
        return jsonify({"hi":1})
    else:
        return "HI"
@app.route('/takerent',methods=['GET','POST'])
def takerent():
    if request.method=='POST':
        d=request.get_json()
        id=t.fetchid()
        a=d['platform']
        e=t.search(a,id)
        return jsonify(e)
    else:
        return "BYE"
@app.route('/paymenttable',methods=['GET','POST'])
def selection():
    if request.method=='POST':
        d=request.get_json()
        p=d['totalPrice']
        pas=d['password']
        id=d['userid']
        a=d['platform']
        h=d['hours']
        e=t.paymentadd(p,pas,id,a,h)
        return jsonify({"hi":1})
    else:
        return "BYE"
    
@app.route('/price',methods=['GET'])
def price():
    e=t.getprice()
    return jsonify(e)

@app.route('/pay',methods=['GET','POST']) #validate Payment
def pay():
    if request.method=='POST':
        d=request.get_json()
        print(d)
        p=d['cardNumber']
        pas=d['month']
        id=d['year']
        a=d['cvv']
        e=t.pay(p,pas,id,a)
        if e=='failed':
            return jsonify({"hi":e})
        else:
            return jsonify({"hi":e})
    else:
        return "Hi"
@app.route('/final',methods=['GET'])
def status():
    e=t.final()
    return jsonify(e)

@app.route('/watch',methods=['GET','POST']) #validate Payment
def watch():
    if request.method=='POST':
        e=t.drop() 
        t1.watchnow(e)
        return "WATCHNOW"
    else:
        return "WATCHNOW"
@app.route('/recomm',methods=['GET','POST'])         
def recommend():
    if request.method=='POST':
        d=request.get_json()
        l=[]
        l.append(str(d['language']))
        l.append(str(d['genre']))
        if l[0]==[]:
            l[0]=["['ENGLISH','HINDI','MALAYALAM','TAMIL']"]
        if l[1]==[]:
            l[1]=["['HORROR','COMEDY','ROMANCE','SCI-FI','THRILLER','ACTION','KIDS/FAMILY']"]
        f={"budget":d['budget'],"language":l[0],"genre":l[1]}
        df = pd.DataFrame(f,index=[0])

        df['Max_price'] = df["budget"].apply(lambda x:int(x[6::]))
        df['Language_ENGLISH'] = df['language'].apply(lambda x:1 if 'ENGLISH' in x else 0)
        df['Language_HINDI'] = df['language'].apply(lambda x:1 if 'HINDI' in x else 0)
        df['Language_MALAYALAM'] = df['language'].apply(lambda x:1 if 'MALAYALAM' in x else 0)
        df['Language_TAMIL'] = df['language'].apply(lambda x:1 if 'TAMIL' in x else 0)

        df['Genre_HORROR'] = df['genre'].apply(lambda x: 1 if 'HORROR' in x else 0)
        df['Genre_COMEDY'] = df['genre'].apply(lambda x: 1 if 'COMEDY' in x else 0)
        df['Genre_ROMANCE'] = df['genre'].apply(lambda x: 1 if 'ROMANCE' in x else 0)
        df['Genre_SCI-FI'] = df['genre'].apply(lambda x: 1 if 'SCI-FI' in x else 0)
        df['Genre_THRILLER'] = df['genre'].apply(lambda x: 1 if 'THRILLER' in x else 0)
        df['Genre_ACTION'] = df['genre'].apply(lambda x: 1 if 'ACTION' in x else 0)
        df['Genre_KIDS/FAMILY'] = df['genre'].apply(lambda x: 1 if 'KIDS/FAMILY' in x else 0)

        m=df[['Max_price', 'Language_ENGLISH', 'Language_HINDI', 'Language_MALAYALAM', 'Language_TAMIL', 'Genre_HORROR', 'Genre_COMEDY', 'Genre_ROMANCE', 'Genre_SCI-FI', 'Genre_THRILLER', 'Genre_ACTION', 'Genre_KIDS/FAMILY']]
        model=jk.load("model.pkl")

        k=list(model.predict(m))
        
        e=t.describe(int(k[0]),int(df['Max_price'][0]))
        return jsonify(e)
    else:
        return "recommend"

@app.route('/clear',methods=['GET','POST'])         
def cleartab():
    if request.method=='POST':
        t.clear()
        return jsonify({"clear":"clear"})
    else:
        return "clear"
        
@app.route('/addpartner',methods=['GET','POST'])         
def partneradd():
    if request.method=='POST':
        d=request.get_json()
        mail=d["email"]
        plan=d['selectedPlan']
        platform=d['selectedOTT']
        id=t.fetchid()
        t.partneradd(mail,plan,platform,id)
        return "partneradd"
    else:
        return "partneradd"

@app.route('/searchpartner',methods=['GET','POST'])         
def searchpartner():
    if request.method=='POST':
        d=request.get_json()
        plan=d['price']
        platform=d['platform']
        id=t.fetchid()
        result=t.split(plan,platform,id)
        return jsonify(result)
    else:
        return "findpart"
 
@app.route('/authenticate',methods=['GET','POST'])  
def login():
    if request.method=='POST':
        d=request.get_json()
        email=d['email']
        pas=d['password']
        e=t.authenticat(email,pas)
        if e==0:
            return jsonify({"log":"fail"})
        else:
            return jsonify({"log":"success"})
    else:
        return "login"
    
      
if __name__ == '__main__':
    app.run(debug=True)