(function() {
"use strict";
    // var selectedIndex = document.getElementById('s-state').selectedIndex;
    // var selectedValue = document.getElementById('s-state').option[selectedIndex].value;
    document.getElementById("cart-hplus").addEventListener("submit",caltotal)
    var state=document.getElementById("s-state")
    var btn=document.getElementById("btn-estimate")
    btn.disabled=true
    state.addEventListener("change",function(){
        if(state.value===""){
            btn.disabled=true
        }else{
            btn.disabled=false
        }
    })
    function caltotal(e){
        e.preventDefault()
        var state=document.getElementById("s-state")


        if(state.value===''){
            alert("please select a value")
            state.focus()
          
        }
    }
	
})();
