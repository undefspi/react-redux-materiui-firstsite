function todaydate(){
    var today_date= new Date()
    var myyear=today_date.getYear()
    var mymonth=today_date.getMonth()+1
    var mytoday=today_date.getDate()
    console.log(myyear+"/"+mymonth+"/"+mytoday)
}