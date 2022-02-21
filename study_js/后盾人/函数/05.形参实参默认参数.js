
// 形参与实参
	// function 函数名(形参1,形参2...){
		//函数定义时，传入的函数。形参是拷贝实参的，类似一个变量
		// }
		// 函数名(实参1,实参2...);//函数调用时，传入的函数

    function formalaramete(a,b=0) {  //形参2
      return a+b
   }
    console.log(formalaramete(8))//实参
   
   //  默认参数
   function avg(total,year=12) {
     // year = year||12
      return Math.round(total/year)
   }
   console.log(avg(2000))
   
   // 排序默认
   function sortArr(array,type='asc') {
      return array.sort((a,b)=>type=="asc"?a-b:b-a)
   }
   console.log(sortArr([3,4,2,6,7]))
   
   // 打折计算
   function sum(total,discount = 1,dis = 1) { 
     return total*(discount)*(dis)
    }
   
    console.log(sum(1000,0.9,0.8))