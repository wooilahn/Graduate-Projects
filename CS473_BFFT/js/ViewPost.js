function go_chatting_room(obj){
   var post_key  = obj.parentElement.parentElement.children[0].children[2].innerHTML;

   console.log(post_key);
   localStorage.setItem("post_key", post_key);
   window.history.forward(1);
   location.replace("./ChatRoom.html");
}