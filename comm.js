function slugify(e){return e.toString().toLowerCase().trim().replace(/&/g,"-and-").replace(/[\s\W-]+/g,"-").replace(/[^a-zA-Z0-9-_]+/g,"")}$(function(){var e=new Firebase("https://comments-votixru.firebaseio.com/").child(slugify(window.location.pathname));e.on("child_added",function(e){var a=e.val();$(".comments").append('<div class="comment"><h4>'+a.name+'</h4><div class="profile-image"><img src="https://www.gravatar.com/avatar/'+a.md5Email+'?s=100&d=retro"/></div> <span class="date">'+moment(a.postedAt).fromNow()+"</span><p>"+a.message+"</p></div>")}),$("#comment").submit(function(){return e.push().set({name:$("#name").val(),message:$("#message").val(),md5Email:md5($("#email").val()),postedAt:Firebase.ServerValue.TIMESTAMP}),$("input[type=text], textarea").val(""),!1})});