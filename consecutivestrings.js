// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
    if(k == 0 || k > strarr.length){
      return console.log(`The value of k=${k} is larger than the array length or equal to zero`)
    } else {
      let arrtotal = []
      let lengtharr = []
          for(i=0; i<=strarr.length-1; i++){
              let arr1 = []
              arr1.push(strarr[i])
              let j = 1
              while(j<=k-1){
                  if(strarr[i+j] != undefined){
                      arr1.push(strarr[i+j])
                  } else {
                      break
                  }
                  j++
              }
              let newstr = arr1.toString().split(',').join('')
              // console.log(newstr)
              arrtotal.push([newstr,newstr.length])
              lengtharr.push(newstr.length)
            }
        // console.log(lengtharr)
        lengtharr.sort(function(a, b){return b-a})
        // console.log(lengtharr)
        // console.log(arrtotal)
        let longest = lengtharr[0]
        // console.log(longest)
  
        for(i=0; i<=arrtotal.length-1; i++){
          // console.log(arrtotal[i][1], longest)
          if(arrtotal[i][1] == longest){
            // console.log(arrtotal[i][0])
            console.log(`The longest string is ${arrtotal[i][0]} with a length of ${longest}`)
            break
          }
        }
    }
  }
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2)
  console.log('========')
  longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
  console.log('========')
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
  console.log('========')
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)
  console.log('========')
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)
  console.log('========')
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)