window.onload=function(){
var year=parseInt(prompt("请输入你的出生年份"));
if(isNaN(year)){
	alert("请输入正确的年份");
}
else{
	var month=parseInt(prompt("请输入你的出生月份"));
	var day=parseInt(prompt("请输入你的出生日期"));
	var sum=0;
	if(year%4==0&&year%100!=0||year%400==0)
	{
		switch(month){
		case 1: sum=sum+day;break;
		case 2: sum=31+day;break;
		case 3: sum=31+29+day;break;
		case 4: sum=31+29+31+day;break;
		case 5: sum=31+29+31+30+day;break;
		case 6: sum=31+29+31+30+31+day;break;
		case 7: sum=31+29+31+30+31+30+day;break;
		case 8: sum=31+29+31+30+31+30+31+day;break;
		case 9: sum=31+29+31+30+31+30+31+31+day;break;
		case 10: sum=31+29+31+30+31+30+31+31+30+day;break;
		case 11: sum=31+29+31+30+31+30+31+31+30+31+day;break;
		case 12: sum=31+29+31+30+31+30+31+31+30+31+30+day;break;
		default: alert("请输入正确的月份");
	}
	}
	else{
		switch(month)
		{
		case 1: sum=sum+day;break;
		case 2: sum=31+day;break;
		case 3: sum=31+28+day;break;
		case 4: sum=31+29+31+day;break;
		case 5: sum=31+29+31+30+day;break;
		case 6: sum=31+29+31+30+31+day;break;
		case 7: sum=31+29+31+30+31+30+day;break;
		case 8: sum=31+29+31+30+31+30+31+day;break;
		case 9: sum=31+29+31+30+31+30+31+31+day;break;
		case 10: sum=31+29+31+30+31+30+31+31+30+day;break;
		case 11: sum=31+29+31+30+31+30+31+31+30+31+day;break;
		case 12: sum=31+29+31+30+31+30+31+31+30+31+30+day;break;
		default: alert("请输入正确的月份");
		}
		}
		var say=document.getElementById("p");
		p.innerHTML="你的出生日期是"+year+"年第"+sum+"个日期";
		}
};
  
