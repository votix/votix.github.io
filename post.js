!function(a){a.fn.readtime=function(i){return i=a.extend({format:"#",wrapper:"time"},i),this.each(function(){var e=(this.textContent||this.innerText||"").replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(" ").length/i.wpm*60;i.images&&(e+=a(this).find("img").length*i.images),e=Math.round(e/60),e=i.format.replace(/#/,e);var t;document.createElement(i.wrapper);if(0==e)e=1;title=(cases=[2,0,1,1,1,2],["минута","минуты","минут"][4<(t=e)%100&&t%100<20?2:cases[t%10<5?t%10:5]]),a(".time_read").html(e+" "+title)})}}(jQuery),$(".post-article").readtime({images:3,wpm:300});
$.each($("a[name]"),function(a,n){var i=$(n).parent().find("#postviews"),l=new Firebase("https://votixru.firebaseio.com/pages/id/"+$(n).attr("name"));l.once("value",function(a){var e=a.val(),t=!1;null==e&&((e={value:0}).url=window.location.href,e.id=$(n).attr("name"),t=!0),i.text(e.value),e.value++,"/"!=window.location.pathname&&(t?l.set(e):l.child("value").set(e.value))})});
