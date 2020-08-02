function doShuffle(){
	var ul = document.getElementById('ul-container');
	for (var i = ul.children.length; i >= 0; i--) {
	    ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}


function doSort(){
	var ul = document.getElementById('ul-container');
    var new_ul = ul.cloneNode(false);

    var lis = [];
    for(var i = ul.childNodes.length; i--;){
        if(ul.childNodes[i].nodeName === 'LI')
            lis.push(ul.childNodes[i]);
    }

    lis.sort(function(a, b){
       return parseInt(a.childNodes[0].data , 10) - 
              parseInt(b.childNodes[0].data , 10);
    });

    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}