import { Map, List} from 'immutable';
let Helper =  {
  recordsToSum: function(records)  {
    let rtn = records.reduce(function(pre, cur) {
      let sum = 0;
      sum  = sum3Darts(cur);
      pre += sum;
      return pre;
    }, 0);
    return rtn;

    function sum3Darts(list) {
      return symbolToNum(list.get(0)) + symbolToNum(list.get(1)) + symbolToNum(list.get(2));
       function symbolToNum(symbol)  {
         if (typeof symbol === 'number') { return symbol }
         var firstLetter = symbol[0];
         var num = +symbol.slice(1);
         switch (firstLetter) {
           case 's':
             return num;
           case 'd':
             return num * 2;
           case 't':
             return num * 3;
           default:
             break;
         }
       }
    }
  },

  symbolToNum: function(symbol)  {
    if (typeof symbol === 'number') { return symbol }
    var firstLetter = symbol[0];
    var num = +symbol.slice(1);
    switch (firstLetter) {
      case 's':
        return num;
      case 'd':
        return num * 2;
      case 't':
        return num * 3;
      default:
        // statements_def
        break;
    }
  },

  greaterThan15: function()  {

  },

  symbolToCount: function()  {

  },

  symbolToString: function(symbol) {
    if (typeof symbol === 'number') { return symbol }
    var firstLetter = symbol[0];
    var num = +symbol.slice(1);
    if(num === 0) { return 'Miss' }
    switch (firstLetter) {
      case 's':
        return 'Single ' + num;
      case 'd':
        return 'Double ' + num;
      case 't':
        return 'Triple ' + num;
      default:
        // statements_def
        break;
      }
  },
  symboToCounts: function(symbol) {
    if (typeof symbol === 'number') { return symbol }
    var firstLetter = symbol[0];
    var num = +symbol.slice(1);
    if (num < 15) { return '-' };
    switch (firstLetter) {
      case 's':
        return '1';
      case 'd':
        return '2';
      case 't':
        return '3';
      default:
        // statements_def
        break;
      }
  },
  recordsToCounts: function(records) {
    const result = records.reduce((pre, cur) => {
      cur.forEach((dart) => {
        if(typeof dart === 'number'){ return }
        const num = +dart.slice(1);
        if(num < 15) { return }
        if(num === 25) {
          pre[6].count = pre[6].count + +this.symboToCounts.bind(this)(dart);
          return;
        }
        pre[num - 15].count = pre[num - 15].count + +this.symboToCounts.bind(this)(dart);
      })
      return pre;
    }, [
      {count:0, name:"15"},
      {count:0, name:"16"},
      {count:0, name:"17"},
      {count:0, name:"18"},
      {count:0, name:"19"},
      {count:0, name:"20"},
      {count:0, name:"bull"}
    ]);
    return List(result);
  },

  sum3Darts: function(list) {
   return symbolToNum(list.get(0)) + symbolToNum(list.get(1)) + symbolToNum(list.get(2));
   function symbolToNum(symbol)  {
     if (typeof symbol === 'number') { return symbol }
     var firstLetter = symbol[0];
     var num = symbol.slice(1);
     switch (firstLetter) {
       case 's':
         return num;
       case 'd':
         return num * 2;
       case 't':
         return num * 3;
       default:
         break;
     }
   }
  }
};

export default Helper;

