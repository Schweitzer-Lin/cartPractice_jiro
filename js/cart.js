function addToCart() {

    var proName = document.getElementsByName("productname")[0].value;

    var colVal = document.getElementById("colorId");
    var colSel = colVal.options[colVal.selectedIndex].value;

    var sizeVal = document.getElementById("sizeId");
    var sizeSel = sizeVal.options[sizeVal.selectedIndex].value;

    var quantiVal = document.getElementById("quaId");
    var quaSel = quantiVal.options[quantiVal.selectedIndex].value;

    var sexVal = document.getElementsByName('sex');

    for (var i = 0, length = sexVal.length; i < length; i++) {
        if (sexVal[i].checked) {

            // do whatever you want with the checked radio
            var sexValGet = sexVal[i].value;

            // only one radio can be logically checked, don't check the rest
            break;

        }
    }

    console.log(" proName: " + proName + " colSel: " + colSel + " sizeSel: " + sizeSel + " quaSel: " + quaSel + " sexValGet: " + sexValGet);

}
