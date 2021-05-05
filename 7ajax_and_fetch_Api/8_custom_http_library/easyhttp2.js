function easyHTTP(){
    this.http = new XMLHttpRequest();

}
easyHTTP.prototype.get = function(url,callback){
    this.http.open('GET',url, true);
    
    // this.http.onload= function()  {
    //     if(this.http.status ===200){
    //         console.log(this.http.responseText);
    //     }
    // }

    // this.http.onload=() => {
    //     if(this.http.status ===200){
    //         console.log(this.http.responseText);
    //     }
    // }

    // let self = this;
    // this.http.onload=function(){
    //     if(self.http.status ===200){
    //         console.log(self.http.responseText);
    //     }
    // }

    let self = this;
    this.http.onload=function(){
        if(self.http.status ===200){
            callback(null, self.http.responseText);
        }else {
            callback("error: "+ self.http.status)
        }
    }

    this.http.send();

}

