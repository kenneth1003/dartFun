import { Map, List} from 'immutable';

let Helper =  {

  sum3Darts: function(list) {
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
  },

  recordsToSum: function(records)  {
    let _this = this;
    return records.reduce(function(pre, cur) {
      let sum = 0;
      sum  = _this.sum3Darts.bind(_this)(cur);
      pre += sum;
      return pre;
    }, 0);
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
        break;
    }
  },

  symbolToString: function(symbol) {
    if (typeof symbol === 'number') { return symbol }
    var firstLetter = symbol[0];
    var num = +symbol.slice(1);
    if(symbol === '-'  ){ return symbol }
    if(symbol === 'bull'  ){ return 'Bull' }
    if(num === 0) { return 'Miss' }
    switch (firstLetter) {
      case 's':
        return 'Single ' + num;
      case 'd':
        return 'Double ' + num;
      case 't':
        return 'Triple ' + num;
      default:
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

  nextPlayer(sum, player) {
    if(player + 1 >= sum) {
      return 0;
    } else {
      return player + 1; 
    }
  },

  getHintMaster: function(score) {
    if(!this.closeMapMaster[score]) { return ['-', '-', '-'] }
    return this.closeMapMaster[score];
  },
  closeMapMaster: {
    "180": ['t20', 't20', 't20'],
    "177": ['t20', 't20', 't19'],
    "174": ['t20', 't19', 't19'],
    "171": ['t19', 't19', 't19'],
    "170": ['t20', 't20', 'bull'],
    "168": ['t19', 't19', 't19'],
    "167": ['t20', 't19', 'bull'],
    "165": ['t20', 't20', 't15'],
    "164": ['t20', 't18', 'bull'],
    "162": ['t20', 't20', 't14'],
    "161": ['t20', 't17', 'bull'],
    "160": ['t20', 'bull', 'bull'],
    "158": ['t20', 't16', 'bull'],
    "157": ['t19', 'bull', 'bull'],
    "155": ['t20', 't15', 'bull'],
    "154": ['t18', 'bull', 'bull'],
    "153": ['t17', 't17', 't17'],
    "152": ['t20', 't14', 'bull'],
    "151": ['t17', 'bull', 'bull'],
    "150": ['bull', 'bull', 'bull'],
    "149": ['t20', 't13', 'bull'],
    "148": ['t16', 'bull', 'bull'],
    "147": ['t19', 'd20', 'bull'],
    "146": ['d13', 't20', 't20'],
    "145": ['t15', 'bull', 'bull'],
    "144": ['t19', 't19', 'd15'],
    "143": ['t11', 't20', 'bull'],
    "142": ['t14', 'bull', 'bull'],
    "141": ['t17', 'd20', 'bull'],
    "140": ['t20', 's20', 'bull'],
    "139": ['t20', 's19', 't20'],
    "138": ['t20', 's18', 't20'],
    "137": ['t20', 's17', 't20'],
    "136": ['t20', 's16', 't20'],
    "135": ['t20', 's15', 't20'],
    "134": ['t20', 's14', 't20'],
    "133": ['t20', 's13', 't20'],
    "132": ['t20', 's12', 't20'],
    "131": ['t20', 's11', 't20'],
    "130": ['t20', 's20', 'bull'],
    "129": ['t20', 's19', 'bull'],
    "128": ['t20', 's18', 'bull'],
    "127": ['t20', 's17', 'bull'],
    "126": ['t20', 's16', 'bull'],
    "125": ['t20', 's15', 'bull'],
    "124": ['t20', 's14', 'bull'],
    "123": ['t20', 's14', 'bull'],
    "122": ['t20', 's13', 'bull'],
    "121": ['t20', 's11', 'bull'],
    "120": ['s20', 'bull', 'bull'],
    "119": ['s19', 'bull', 'bull'],
    "118": ['s18', 'bull', 'bull'],
    "116": ['s16', 'bull', 'bull'],
    "117": ['s17', 'bull', 'bull'],
    "115": ['s15', 'bull', 'bull'],
    "114": ['s14', 'bull', 'bull'],
    "113": ['s13', 'bull', 'bull'],
    "112": ['s12', 'bull', 'bull'],
    "111": ['s11', 'bull', 'bull'],
    "110": ['s10', 'bull', 'bull'],
    "109": ['s9', 'bull', 'bull'],
    "108": ['s8', 'bull', 'bull'],
    "107": ['s7', 'bull', 'bull'],
    "106": ['s6', 'bull', 'bull'],
    "105": ['s5', 'bull', 'bull'],
    "104": ['s4', 'bull', 'bull'],
    "103": ['s3', 'bull', 'bull'],
    "102": ['s2', 'bull', 'bull'],
    "101": ['s1', 'bull', 'bull'],
    "100": ['bull', 'bull', '-'],
      "99": ['s19', 'd15', 'bull'],
    "98": ['s18', 'd15', 'bull'],
    "97": ['s17', 'd15', 'bull'],
    "96": ['s16', 'd15', 'bull'],
    "95": ['s15', 'd15', 'bull'],
    "94": ['s14', 'd15', 'bull'],
    "93": ['s13', 'd15', 'bull'],
    "92": ['s12', 'd15', 'bull'],
    "91": ['s11', 'd15', 'bull'],
    "90": ['d20', 'bull', '-'],

    "89": ['s19', 's20', 'bull'],
    "88": ['s18', 's20', 'bull'],
    "87": ['s17', 's20', 'bull'],
    "86": ['s16', 's20', 'bull'],
    "85": ['s15', 's20', 'bull'],
    "84": ['s14', 's20', 'bull'],
    "83": ['s13', 's20', 'bull'],
    "82": ['bull', 'd16', '-'],
    "81": ['s11', 's20', 'bull'],
    "80": ['d15', 'bull', '-'],

    "79": ['s19', 't20', '-'],
    "78": ['d19', 'd20', '-'],
    "77": ['s7', 's20', 'bull'],
    "76": ['s16', 't20', '-'],
    "75": ['s5', 's20', 'bull'],
    "74": ['s14', 't20', '-'],
    "73": ['s13', 's20', '-'],
    "72": ['s12', 's20', '-'],
    "71": ['s11', 's20', '-'],
    "70": ['s20', 'bull', '-'],

    "69": ['s19', 'bull', '-'],
    "68": ['s18', 'bull', '-'],
    "67": ['s17', 'bull', '-'],
    "66": ['s16', 'bull', '-'],
    "65": ['s15', 'bull', '-'],
    "64": ['s14', 'bull', '-'],
    "63": ['s13', 'bull', '-'],
    "62": ['s12', 'bull', '-'],
    "61": ['s11', 'bull', '-'],

    "60": ['t20', '-', '-'],
    "59": ['s9', 'bull', '-'],
    "58": ['s8', 'bull', '-'],
    "57": ['t19', '-', '-'],
    "56": ['s6', 'bull', '-'],
    "55": ['s5', 'bull', '-'],
    "54": ['t18', '-', '-'],
    "53": ['s3', 'bull', '-'],
    "52": ['s2', 'bull', '-'],
    "51": ['t17', '-', '-'],
    "50": ['bull', '-', '-'],

    "49": ['s17', 'd16', '-'],
    "48": ['s16', 'd16', '-'],
    "47": ['s15', 'd16', '-'],
    "46": ['s14', 'd16', '-'],
    "45": ['t15', '-', '-'],
    "44": ['s12', 'd16', '-'],
    "43": ['s11', 'd16', '-'],
    "42": ['t14', '-', '-'],
    "41": ['s9', 'd16', '-'],

    "40": ['d20', '-', '-'],
    "39": ['s7', 'd16', '-'],
    "38": ['d19', '-', '-'],
    "37": ['s5', 'd16', '-'],
    "36": ['d18', '-', '-'],
    "35": ['s3', 'd16', '-'],
    "34": ['d17', '-', '-'],
    "33": ['t33', '-', '-'],
    "32": ['d16', '-', '-'],
    "31": ['s1', 'd15', '-'],

    "30": ['d15', '-', '-'],
    "29": ['s9', 'd10', '-'],
    "28": ['d14', '-', '-'],
    "27": ['t9', '-', '-'],
    "26": ['d13', '-', '-'],
    "25": ['s5', 'd10', '-'],
    "24": ['d12', '-', '-'],
    "23": ['s3', 'd10', '-'],
    "22": ['d11', '-', '-'],
    "21": ['t21', '-', '-'],
    "20": ['d10', '-', '-'],

    "19": ['s3', 'd8', '-'],
    "18": ['d9', '-', '-'],
    "17": ['s1', 'd8', '-'],
    "16": ['d8', '-', '-'],
    "15": ['t5', '-', '-'],
    "14": ['d7', '-', '-'],
    "13": ['s1', 'd6', '-'],
    "12": ['d6', '-', '-'],
    "11": ['s1', 'd5', '-'],
    "10": ['d5', '-', '-'],

    "9": ['t3', '-', '-'],
    "8": ['d4', '-', '-'],
    "7": ['s1', 'd3', '-'],
    "6": ['d3', '-', '-'],
    "5": ['s1', 'd2', '-'],
    "4": ['d2', '-', '-'],
    "3": ['t1', '-', '-'],
    "2": ['d1', '-', '-'],
    "1": ['-', '-', '-']
  }

};

export default Helper;

