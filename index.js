
function utilMethods(){
  String.prototype.reverse=function(){let r="";for(let c of this)r=c+r;return r;};
  String.prototype.camelCase=function(){let r="",s=false;for(let c of this){if(s){r+=c.toUpperCase();s=false;}else{if(c==" "){s=true;continue;}r+=c;}}return r;};
  String.prototype.isPalindrome=function(){return this+''==this.reverse();};
  String.prototype.stripSymbol=function(){return(this+'').replace(/[^a-zA-Z0-9]/g,'');};
  String.prototype.generateRandomString=function(l){const c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let r='';for(let i=0;i<l;i++){r+=c.charAt(Math.floor(Math.random()*c.length));}return r;};  
  console.log('Util methods ready');
}

module.exports = utilMethods;