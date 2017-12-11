var myButton = document.getElementsByClassName("cbutton");
    var myDisplay = document.getElementById("display");
var myCal = '';
var myCom = false;
var mySwitch = false;

    console.log(myButton);
    for (i=0; i<myButton.length; i++){
        myButton[i].addEventListener("click",function(){
            myValue = this.innerHTML;
            
            if(myCom || myCal == "0"){
                myCom = false;
                myCal = "";
            }
            
            if(myValue=="=") {
                myCal = eval(myCal);
                myCom = true;
            }
            else if(myValue == "C") {
                myCal = 0;
                myCom = true;
            }
            else {
            myCal = myCal + myValue;
            }
            
            if (mySwitch) {
                mySwitch = false;
                myCal = eval(myCal)
            }

            
            myDisplay.innerHTML = myCal;
            
    });
    }