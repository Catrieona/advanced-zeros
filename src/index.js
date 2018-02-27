module.exports = function getZerosCount(number, base) {
 
  function factor(n) {
    if (isNaN(n) || !isFinite(n) || n%1!=0 || n==0) return ''+n;
    if (n<0) return '-'+factor(-n);
    var minFactor = leastFactor(n);
    if (n==minFactor) return ''+n;
    return minFactor+'*'+factor(n/minFactor);
   }
   
   // find the least factor in n by trial division
   function leastFactor(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n==0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;  
    if (n%3==0) return 3;  
    if (n%5==0) return 5;  
    var m = Math.sqrt(n);
    for (var i=7;i<=m;i+=30) {
     if (n%i==0)      return i;
     if (n%(i+4)==0)  return i+4;
     if (n%(i+6)==0)  return i+6;
     if (n%(i+10)==0) return i+10;
     if (n%(i+12)==0) return i+12;
     if (n%(i+16)==0) return i+16;
     if (n%(i+22)==0) return i+22;
     if (n%(i+24)==0) return i+24;
    }
    return n;
   }

  var all_primes = factor(base).match(/\d+/gi)
  var powers = all_primes.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  var temp = []

  for(prop in powers){
    var value = 0;
    var divisor = Number(prop);
    while(divisor <= number){      
      value += Math.trunc(number / divisor)
      divisor *= Number(prop)      
    }
    temp.push(Math.trunc(value / powers[prop]))
  }
  
  return Math.min(...temp)

  
  
  
	
}