// https://github.com/habibullah49/Javascript

//convert kilometer to meter

function kilometerToMeter(kilometer){
  if(kilometer>-1){
    var convertToMeter=kilometer*1000;  
    return convertToMeter;  
  }
  else{
    return "invalid input";
  }
}


//budget Calculator

function budgetCalculator(watch,phone,laptop){
  if(watch<0 || phone<0 || laptop<0){
    return "invalid input";
  }
  else{
     watch=50*watch;
     phone=100*phone;
     laptop=500*laptop;
     totalcost=watch + phone +laptop;

    return totalcost;
  }
}



//Hotel cost

function hotelCost(day){
  var totalcost;
  if(day<0){
    return"invalid input";
  }
  
  else if(day<=10){  
    totalcost=(day*100);
  }
  else if(day>10 && day<=20){  
    totalcost=(10*100) + ((day-10)*80) ;        
  }
  else if(day>20){
    totalcost=(10*100)+(10*80)+((day-20)*50);       
  }
 
  return totalcost;  
}




//mega Friend

function megaFriend(friends)
{
    var maxFriend=0,ans=0;
    for(var i=0;i<friends.length;i++)
    {
        if(friends[i].length>maxFriend)
        {
          maxFriend=friends[i].length;
            ans=i;
        }
    } 
    return friends[ans];
}







