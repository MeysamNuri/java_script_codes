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

        var itemBball=parseInt(document.getElementById("txt-q-bball").value,10)||0,
        itemjersy=parseInt(document.getElementById("txt-q-jersey").value,10)||0,
        itemPower=parseInt(document.getElementById("txt-q-power").value,10)||0,
        shippingState=state.value,
        shippingmethod=document.querySelector('[name=r_method]:checked').value

        console.log(itemBball,itemjersy,itemPower,shippingmethod,shippingState);

        let totalQTY=itemBball + itemjersy+ itemPower,
        shippingCostper,
        shippingCost,
        estimate,
        totalprice,
        taxFactor=1
alert(totalQTY)
        if(shippingState==="CA"){
            taxFactor="1.075"
        }

        switch (shippingmethod) {
            case "usps":
                shippingCostper=2
                break;
                case "ups":
                    shippingCostper=3
                    break;

        
            default:
                shippingCostper=0
                break;
        }
        shippingCost=(shippingCostper * totalQTY)
        totalprice=(itemBball * 90) +(itemjersy * 25) + (itemPower * 30)
        estimate="$"+((totalprice * taxFactor) + shippingCost).toFixed(2)
    
        document.getElementById("txt-estimate").value=estimate
        
        var results = document.getElementById('results');
        results.innerHTML = 'Totlal items : ' + totalQTY + '<br>';
        results.innerHTML+='Total Shipping: $'+shippingCost.toFixed(2) +'<br>';
        results.innerHTML+='Tax: '+((taxFactor - 1) * 100).toFixed(2) + '% ('+shippingState+')'; 

    }

	
})();
