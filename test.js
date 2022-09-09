function calculateDayBetweenDate(begin,end){
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var day = (endDate.getTime() - beginDate.getTime()) / (24 * 3600 * 1000);
    return day;
}

