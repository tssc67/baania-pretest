var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */ x = document.getElementsByClassName("custom-select");
l = x.length;
for(i = 0; i < l; i++){
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */ a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */ b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for(j = 1; j < ll; j++){
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */ c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
        and the selected item: */ var y, i1, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for(i1 = 0; i1 < sl; i1++)if (s.options[i1].innerHTML == this.innerHTML) {
                s.selectedIndex = i1;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for(k = 0; k < yl; k++)y[k].removeAttribute("class");
                this.setAttribute("class", "same-as-selected");
                break;
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */ e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
  except the current select box: */ var x1, y, i2, xl, yl, arrNo = [];
    x1 = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x1.length;
    yl = y.length;
    for(i2 = 0; i2 < yl; i2++)if (elmnt == y[i2]) arrNo.push(i2);
    else y[i2].classList.remove("select-arrow-active");
    for(i2 = 0; i2 < xl; i2++)if (arrNo.indexOf(i2)) x1[i2].classList.add("select-hide");
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */ document.addEventListener("click", closeAllSelect);

//# sourceMappingURL=index.01ff3171.js.map
