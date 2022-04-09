const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const Icon = document.querySelector(".icon");

 let suggestions =[
    "んです/~のです"　          , "ndesu" ,
    "ていただけませんか"　      , "teitakemasenka" ,
    "たらいいですか"　          , "taraiidesuka" ,
    "かのうけい"　              , "kanoukei" ,
    "N ができます"　            , "gadekimasu" ,
    "N~しか~ません/ない"　       , "shika-masen" ,
    "は~が~は"　                , "ga" ,
]

//if user press any key and release

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
 
  if(userData){
      
      emptyArray = suggestions.filter((data) => {
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
  
    //  console.log(emptyArray);
    emptyArray = emptyArray.map((data) =>{

      for (var i = 0; i < GramSearch.length; i++){

        if(data == GramSearch[i].address){

        return data = '<li>' + "<a href=" + "#" + GramSearch[i].address+ " + >"
        + "(" + (i+1) + ") " +GramSearch[i].title + "</a>" + '</li>';
      }
        if(data == GramSearch[i].title){

        return data = '<li>' + "<a href=" + "#" + GramSearch[i].address+ " + >"
        + "(" + (i+1) + ") " + GramSearch[i].title + "</a>" + '</li>';
        }

    }
    });
   // console.log(emptyArray);

    searchWrapper.classList.add('active');

    showSuggestions(emptyArray);

    let allList = suggBox.querySelectorAll('li');
    for (let i = 0; i < allList.length; i++){
       // adding onclick attribute in all li tag 
       allList[i].setAttribute("onclick","select(this)");
    }
      
  }else{
    searchWrapper.classList.remove('active');
  
  }
}


function select(element){
  let selectUserData = element.textContent;
  // console.log(selectUserData);
  inputBox.value = selectUserData; // passing the user selected list item data in text 
  searchWrapper.classList.remove('active');
}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = '<li>' + userValue + '</li>';
  }else{
      listData = list.join('');
  }
 suggBox.innerHTML = listData;

}

// -------cancel cross sign ကို စာရေး မှ ပေါ်လာအောင် -----------


document.body.addEventListener('keypress',KeyPress);  // စာရိုက်မှ cross ပေါ်ဖို့ 

function KeyPress(){

if( inputBox.value!== " " ){    // " " မှသာ click တစ်ချက်တည်းနဲ့ ပေါ် နိုင်  //"" ဆို ၂ချက်နှိုပ် မှ ပေါ် 
  Icon.classList.add('active');
}else{
  Icon.classList.remove('active');
}
}

Icon.onclick =()=>{
  Icon.classList.remove('active');
  inputBox.value="";
  searchWrapper.classList.remove('active');  // 'x' icon ကို ဖျက်တာနဲ့ list တွေအကုန်ပျောက်အောင် 
}

const SidebarHide =  document.querySelector('.nav-section');
/*const Address =  document.querySelector('.address');

Icon.addEventListener('click',SearchAddress);

function SearchAddress(){
  
  if(inputBox.value !== ""){
      Address.classList.add('active');
      SidebarHide.classList.add('hide');
  }else{
      Address.classList.remove('active');
      SidebarHide.classList.remove('hide');
  }
 
  for (var i = 0; i < GramSearch.length; i++){
      if(inputBox.value.toLocaleLowerCase() == GramSearch[i].address ){
      Address.innerHTML="<a href=" + "#" + GramSearch[i].address+ " + >"+ GramSearch[i].title + "</a>";
      }
      if(inputBox.value.toLocaleLowerCase() == GramSearch[i].title ){
      Address.innerHTML="<a href=" + "#" + GramSearch[i].address+ " + >"+ GramSearch[i].title + "</a>";
      } 
  }
  inputBox.value="";
}*/