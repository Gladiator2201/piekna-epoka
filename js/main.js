(function(){
var ov=document.getElementById('ov'),im=ov.querySelector('img'),cap=ov.querySelector('.ovcap'),hint=ov.querySelector('.ovhint');
function open(src,c,photo){im.src=src;cap.textContent=c||'';ov.classList.toggle('photo',!!photo);hint.textContent=photo?'Dotknij, by zamknąć':'Proszę skierować aparat telefonu · dotknij, by zamknąć';ov.hidden=false;document.body.style.overflow='hidden'}
function close(){ov.hidden=true;document.body.style.overflow=''}
document.querySelectorAll('.qr').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();open(b.dataset.qr,b.dataset.cap,false)})});
document.querySelectorAll('.zoom').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();open(b.dataset.img,b.dataset.cap,true)})});
ov.addEventListener('click',close);document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
var vids=[].slice.call(document.querySelectorAll('video.loop'));
function play(v){if(!v.src)v.src=v.dataset.src;var p=v.play();if(p&&p.then)p.then(function(){v.classList.add('on')}).catch(function(){})}
function stop(v){v.pause();v.classList.remove('on')}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?play(e.target):stop(e.target)})},{threshold:.5});vids.forEach(function(v){io.observe(v)})}
else vids.forEach(play);
})();
