// tagcloud
(function(){
[].forEach.call( document.querySelectorAll('[tagcloud]'), function(cloud){
    cloud.innerHTML = '<span class="clouditem">' + cloud.innerHTML.split(/\n/).join('</span> <span class="clouditem">') + '</span>';
    [].forEach.call( cloud.querySelectorAll('span'), function(elem){
        var prctnge = Math.random() * 150 + 50;
        elem.style.fontSize = prctnge + '%';
        elem.style.color = 'hsl('+ Math.random()*360 +', 40%, 50%)'
        elem.classList.add('clouditem')
    });
});

[].forEach.call( document.querySelectorAll('[tagcloud-bw]'), function(cloud){
    cloud.innerHTML = '<span class="clouditem">' + cloud.innerHTML.split(/\n/).join('</span> <span class="clouditem">') + '</span>';
    [].forEach.call( cloud.querySelectorAll('span'), function(elem){
        var prctnge = Math.random() * 150 + 50;
        elem.style.fontSize = prctnge + '%';
        var col = Math.round(Math.random() * 155 + 100);
        elem.style.color = 'rgb('+ col  +',' + col + ',' + col + ')'
        elem.classList.add('clouditem')
    });
});
}
)();