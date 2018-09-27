module.exports = function check(str, bracketsConfig) {
  let balanceTrue = 0;                                                         
  for(let i=0;i<bracketsConfig.length;i++){
    let arr=bracketsConfig[i];                                  //pair array  
    if(str.split(arr[0]).length === str.split(arr[1]).length){  //is brackets balanced
      balanceTrue+=1;
    }
  }
  let leng = str.length;                                          //length of string
  for (let j = 0; j < leng*bracketsConfig.length; j++){           //parsing of string on pairs
    for (let k = 0; k < bracketsConfig.length; k++){
      let arr2=bracketsConfig[k];
      str=str.replace(arr2[0]+arr2[1],'');                        //string will empty if brackets not cross   
    }
  }
  if(balanceTrue===bracketsConfig.length&&str.length===0){       //is brackets balanced and not cross
        return true;
    }
    else{
        return false;
        }
  
}
