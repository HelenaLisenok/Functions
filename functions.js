function checkResult1() {
    let value1 = Number(document.getElementById("t1").value);
    let value2 = Number(document.getElementById("t2").value);
    let res = square(value1);
    let res1 = square(value2);
    let result = document.getElementById("r1");
    result.innerHTML = res+res1;
    }
  
    function square(num) {
    return Math.sqrt(num);
    }

 function checkResult2() {
    let value1 = Number(document.getElementById("t3").value);
    let value2 = Number(document.getElementById("t4").value);
    let value3 = Number(document.getElementById("t5").value);
    let res = round(sum(sqrt(value1),sqrt(value2),sqrt(value3)));
    let result = document.getElementById("r2");
    result.innerHTML = res;
    }
  function sqrt(num) {
    return Math.sqrt(num);
    }
                
  function sum(num1, num2, num3) {
    return num1 + num2 + num3;
    }
  function round(num) {
    return num.toFixed(3);
    }
  
  function checkResult3() {
    let value4 = Number(document.getElementById("t6").value);
    let Numberofiter = division2(value4);
    let result = document.getElementById("r3");
    result.innerHTML = Numberofiter;
    }
  function division2(num){
     {
	let res = num/2;
	let i = 1;
	
	while (true) { // бесконечный цикл
		  if (res < 10) {
      return i; }// цикл крутится пока не выйдет тут
      i++;
      res = res/2;
		
  }
}
}

function checkResult4() {
    let arr = [2,4,6,6,7,-10];
    let flag = twoel(arr);
    let result = document.getElementById("r4");
    if (flag == true) 
    result.innerHTML = "Есть одинаковые элементы в массиве";
    else result.innerHTML = "Нет одинаковых элементов в массиве";
    
    }
function twoel(mas)
{
for (let i = 0; i<mas.length-1; i++) {
		if (mas[i] == mas[i+1]) {
			return true;
		}
	}
	return false;
}
function checkResult5() {
    let arr = [2,4,6,6,7,-10];
    let sum = GetSum(arr);
    let result = document.getElementById("r5");
    result.innerHTML = sum;
        }
function GetSum(mas)
{
  let sum1 = 0;
  for (let i=0; i<mas.length; i++)
  {
    sum1 = sum1+mas[i];
  }
  return sum1;
}
function checkResult6() {
    let value6 = Number(document.getElementById("t7").value);
    let res_mas = getdivmas(value6);
    let result = document.getElementById("r6");
    result.innerHTML = res_mas;
    }
  function getdivmas(num) {
    let arr = [];
    for (let i=1; i<num; i++)
    if (num%i ==0)
        arr.push(i);
    return arr;
}
  function checkResult7() {
  let value7 = document.getElementById("t8").value;
  let res_mas1 = getmas(value7);
  let result = document.getElementById("r7");
  result.innerHTML = res_mas1;
}
    
function getmas(str)
{
  let arr1 = [];
  for (let i = 0; i < str.length; i++)
    arr1.push(str[i]);
  return arr1;
}
function checkResult8() {
  let value8 = document.getElementById("t9").value;
  let res_str = getconvertedString(value8);
  let result = document.getElementById("r8");
  result.innerHTML = res_str;
}
    
function getconvertedString(str)
{
  let arr2 = [];
  let str2 = "";
  for (let i = str.length-1; i >=0; i--)
    arr2.push(str[i]);
  //выводится строка???
  str2 = arr2.toString();
  return str2;
}

function checkResult9() {
  let value9 = document.getElementById("t10").value;
  let res_str1 = getcapital(value9);
  let result = document.getElementById("r9");
  result.innerHTML = res_str1;
}
function getcapital(str1) {
  let capitalstr = str1.charAt(0).toUpperCase() + str1.slice(1);
  return capitalstr;
}

function checkResult10() {
  let value10 = document.getElementById("t11").value;
  let res_str2 = getcapitalWords(value10);
  let result = document.getElementById("r10");
  result.innerHTML = res_str2;
}

function getcapitalWords(str3) {  
  let str4 = '';
  for (let v of str3.split(' ')) 
  {
str4 = str4 + String(v.replace(v[0], v[0].toUpperCase())) + " "
}
return str4;
}
function checkResult11() {
  let value11 = document.getElementById("t12").value;
  let res_mas2 = fillmas(value11);
  let result = document.getElementById("r11");
  result.innerHTML = res_mas2;
}

function fillmas(num) {
  let arr3 = [];
  for (let i = 1; i <= num; i++)
    arr3.push(i);
  return arr3;
}
  
function checkResult12() {
  let value12 = document.getElementById("t13").value;
  let random_el = get_random_el(value12);
  let result = document.getElementById("r12");
  result.innerHTML = random_el;
}

function get_random_el(str) {
  
var rand = Math.floor(Math.random() * str.length);
    return str[rand];
}

function checkResult13() {
  let value13 = document.getElementById("t14").value;
  let simple = check_simple_number(value13);
  let result = document.getElementById("r13");
  if (simple === true) {
  result.innerHTML = "Число составное";
    } else {
  result.innerHTML = "Число простое";
    }
 }
function check_simple_number(num) 
  {
  let num1 = Number(num);
  let flag = false;
  for (let i=2;i<=num1;i++){
    if(num1 % i == 0 || num1 ==2) flag = true ;
    break;
  }
  return flag;
   }
 function checkResult14() {
  let value14 = document.getElementById("t15").value;
   let value15 = document.getElementById("t16").value;
  let flag = check_friendly_numbers(value14, value15);
  let result = document.getElementById("r14");
  if (flag === true) {
  result.innerHTML = "Число дружественное";
    } else {
  result.innerHTML = "Число не дружественное";
    }
 }

function check_friendly_numbers(num1, num2) {
  let num3 = Number(num1);
  let num4 = Number(num2);
  let sum1 = check_fr(num3);
  let sum2 = check_fr(num4);
  if (sum1 == num4 && sum2 == num3) return true;
  else return false;
    
}

 function check_fr(n) {
  let sum = 0;
for (let i=2;i<n;i++){
  
  if (n == 2)
    sum = sum + n;
  else if (n % i == 0)
  sum = sum + n;
    }
  return sum;
   }

