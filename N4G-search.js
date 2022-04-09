var NavSection = document.querySelector('.nav-section');
var GramSearch =[
    { title:"第26か (んです/~のです)"　, address:"dai26ka" },
    { title:"1. んです/~のです"　, address:"ndesu" },
    { title:"2. んですが"　, address:"ndesuga" },
    { title:"3. ていただけませんか"　, address:"teitakemasenka" },
    { title:"4. たらいいですか"　, address:"taraiidesuka" },
    { title:"第27か (かのうけい)"　, address:"dai27ka" },
    { title:"1. N ができます。"　, address:"gadekimasu" },
    { title:"2. N~しか~ません/ない"　, address:"shika-masen" },
    { title:"3. は~が~は"　, address:"hagaha" },
    { title:"第28か (~ながら)"　, address:"dai28ka" },
    { title:"1. V（ますဖြုတ်）＋ ながら"　, address:"nagara" },
    { title:"2. V ています"　, address:"vteimasu" },
    { title:"3. も~し~も~し"　, address:"moshi~moshi" },
    { title:"N が/は  Vています"　, address:"Ngateimasen" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
    { title:""　, address:"" },
]

init = function(){
    for(var i=0; i< GramSearch.length; i++){
        NavSection.innerHTML+="<li  class=" + "nav-text" + ">" + 
        "<a href=" + "#" + GramSearch[i].address + " + >"+ GramSearch[i].title + "</a>" + 
         "</li>";
    }
}
init();


