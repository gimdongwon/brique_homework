# Q1

```js
 1번
 function solution(n){
   let result = 0;
   for(let i=1; i<n; i++){
     if(i%3===0||i%5===0){
       result += i
     }
   }return result
 }

 solution(20)
```

```js
 2번
 규칙을 찾아보면 짝수째의 숫자를 전부 더하면 값이 마지막 짝수번째 숫자의 다음수-1 = 전부 더한수 가 된다. 그러므로  terms번째 숫자를 구하는 것이 포인트
 const Fibonacchi = terms =>{
   let newArray = [1,2];
   for(let i=2; i<=terms; i++){
     newArray.push(newArray[i-2]+newArray[i-1])
   }
   console.log(newArray)
   return newArray.pop()-1
 }

 Fibonacchi(5)
```

```js
 3번

 function solution (n){
   let result = n;
   for(i=2; i<result; i++){
     while(result%i===0) result/=i;
     if(result==1) { result=i; break; }
   }
   return result
 }

 solution(600851475143)
```

```js
 4번
 function solution(){

     let arr = [];
     for(let i =100; i<1000; i++){
         for(let j = 100; j<1000; j++){
             let num = j*i;
             if(isPalin(num)){
                 arr.push(j * i);
             }
         }
     }
     return Math.max(...arr)
 }

 function isPalin(i){
     return i.toString() == i.toString().split("").reverse().join("");
 }

 solution()
```

```js
 5번
 1~20까지 나누었을 때 나머지가 0이면 return 그숫자
 인수가 이미 존재하는 수라면 굳이 곱하지 않아도 된다.
 무조건 곱해야 되는 것은 11, 13, 17, 19

 function solution(){
   let base = 20;
   current = base;
   let notFound = true;
   while(notFound){
    for(i=base; i>10; i--){
      if(current%i!=0){
        current += base;
        notFound = true;
        break;
      }
    else{
      notFound = false;
    }
   }
 }
 return current
 }
 solution()
```

```js
 6번
 (a+b)^2 = a^2 + b^2 + 2ab

 function solution (){
  let firstNum = 0;
  let secondNum = 0;
  for(let i=1; i<101; i++){
    firstNum += i*i
  }
 for(let i=1; i<101; i++){
   secondNum+=i
 }
 return secondNum**2-firstNum
 }
 solution()
```

```js
 7번
 10001번째 소수를 찾아라
 소수를 구하는 공식을 찾아서 10001번째를 찾아보자

function solution(n){
 if(n<=2){
  alert(n);
  return;
 }

 let cnt = 1;

 let prime = new Array();
 prime[0] = 2;
 let t = 3;
 while(cnt<n){
  let check = true;
  for(let i=0; i<cnt; i++){
   if(prime[i]>t/prime[i-1])
    break;
   else if(t%prime[i] == 0){
    check = false;
    break;
   }
  }
  if(check)
   prime[cnt++] = t;
  t += 2;
 }

 alert(prime[n-1]);
}

solution(10001)
```

```js
10번
function solution(){
  let sum = 0;
  let j;
    for ( let i = 1; i <= 2000000; i++) {
      for (j = 2; j <= i; j++) {
        if ((i % j) == 0) break;
}
        if (j == i)
          sum += j;
        }
  return sum
}

solution()
```
