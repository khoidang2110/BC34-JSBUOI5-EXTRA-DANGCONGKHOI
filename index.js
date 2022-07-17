




//Bai tap 3:
document.getElementById("tax").onclick = function(){
  //input
var taxName = document.getElementById("taxName").value;
var totalIncome = document.getElementById("totalIncome").value*1;
var dependent = document.getElementById("dependent").value*1;

  //process
var taxable=totalIncome-(4e+6)-dependent*(1.6e+6);
var personal=0;
if(totalIncome<9000000){
  alert("Số tiền thu nhập phải lớn hơn 9tr");
}
if(totalIncome<=(60000000)){
personal+=taxable*5/100;
}else if(taxable<=120000000&&taxable>60000000){
  personal+=taxable*10/100;
  //(60e+6)*5/100+(taxable-(60e+6))*10/100;
}
else if(taxable<=210000000&&taxable>120000000){
  personal+=taxable*15/100;
}
else if(taxable<=384000000&&taxable>210000000)
{
  personal+=taxable*20/100;
}
else if(taxable<=624000000&&taxable>384000000){
  personal+=taxable*25/100;
}
else if(taxable<=960000000&&taxable>624000000){
  personal+=taxable*30/100;
}
else if(taxable>960000000){
  personal+=taxable*35/100;
}
  //output

  document.getElementById("showTax").innerHTML = "<p>Họ tên: " + taxName + " --- Tiền thuế TNCN: "+new Intl.NumberFormat("vn-VN").format(personal) +" vnd</p>";
 
}

//Bài tập 4
function myFunction() {
  var clientType = document.getElementById("clientType").value;
var inputTag = "<input id='connecting' type='number'class='mt-2 ms-2' placeholder='số kết nối'></input>"
  if(clientType==="business"){
    document.getElementById("showTab").innerHTML = inputTag;
  }else if(clientType==="personal"){
    document.getElementById("showTab").innerHTML = "";
  }
}
document.getElementById("cableBill").onclick = function(){
 //input
 var clientType =document.getElementById("clientType").value;
 var clientCode = document.getElementById("clientCode").value*1;
 var premiumChannel = document.getElementById("premiumChannel").value*1;
 var connecting = 0;
 
 //process
 var bill =0;
 if(clientType==""){
  alert("Hãy chọn loại khách hàng!!!");
}
 else if(clientType=="personal"){
  bill+=4.5+20.5+premiumChannel*7.5;
 }
 else if(clientType=="business"){
  connecting+=document.getElementById("connecting").value*1;
  if(connecting<=10){
    bill+=15+50*premiumChannel+75;
  }else {
    bill+=15+50*premiumChannel+75+(connecting-10)*5;
}
  }
 
 
 
 
 

// output
document.getElementById("showCableBill").innerHTML = "<p>Mã khách hàng: " +clientCode+ "Tiền cáp: " + new Intl.NumberFormat("vn-VN").format(bill) +" USD</p>";

}