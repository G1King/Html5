    //获取距离当前时间的时间差返回格式为（*天前*分钟前*周前*年前）
    function timeAgo(dateStr){   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
        var dateTimeStamp=new Date(Date.parse(dateStr.replace(/-/g,"/"))).getTime();



        var minute=1000*60;      //把分，时，天，周，半个月，一个月用毫秒表示
        var  hour=minute*60;
        var day=hour*24;
        var week=day*7;
        var halfamonth=day*15;
        var month=day*30;

        var  now=new Date().getTime();   //获取当前时间毫秒
        var diffValue=now-dateTimeStamp;//时间差

        var  minC=diffValue/minute;  //计算时间差的分，时，天，周，月
        var  hourC=diffValue/hour;
        var  dayC=diffValue/day;
        var  weekC=diffValue/week;
        var  monthC=diffValue/month;
        if(diffValue<0){
            result="刚刚";
        }
        else if(monthC>=1){
            result=" "+parseInt(monthC)+"月前"
        }

        else  if(weekC>=1){
            result=" "+parseInt(weekC)+"周前"
        }
        else    if(dayC>=1){
            result=" "+parseInt(dayC)+"天前"
        }
        else    if(hourC>=1){
            result=" "+parseInt(hourC)+"小时前"
        }
        else    if(minC>=1){
            result=" "+parseInt(minC)+"分钟前"
        }
        else{
            result="刚刚";
        }
        return result;
    }

    //获取url参数
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null){
            return  unescape(r[2]);
        }
        return null;
    }
