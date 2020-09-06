var sum=0;
for(var i=1;i<=100;i++){
sum+=i;
}
console.log(sum);
class Student
{
	constructor(name,age){
	this.name=name;
	this.age=age;
	this.intr=function(){
	console.log(`我是${name},我今年${age}岁了`);
	}
	}
}