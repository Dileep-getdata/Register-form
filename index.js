class Register{
    constructor(name){
        this.name=name;
        this.joindate=new Date();
    }
    membershipactivetilldate(){
        this.joindate.setDate(this.joindate.getDate()+30);
        console.log(this.joindate);
        
    }
    renewmeMebership(period){
        let a=0;
        if(period==='standard'){
             a=30;
        }
        else if(period==='yearly'){
             a=365;
        }
        this.joindate.setDate(this.joindate.getDate()+a);
        console.log(this.joindate);
        
    }
}
let per=new Register('dilip');
per.membershipactivetilldate()
per.renewmeMebership('yearly');