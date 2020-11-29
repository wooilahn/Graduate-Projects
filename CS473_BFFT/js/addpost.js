// 해당 객체의 key 값이 자동으로 생성된다.
var postRef, postkey, title, restaurant, Location, keyval, participantRef = "";
var numpeople = 0;
var object = {};
$("#submit").click(function() {
    comment = $('#messagebox').val();


    // 해당 객체의 key 값이 자동으로 생성된다.

    title = $('#post_title').val();
    restaurant = $('#res_name').val();
    numpeople = $('#num_people').val();
    Location = $('#Location').val();

    if(title == ""){
        alert("The title is empty. Please fill it.")
        window.stop()
    }else if(comment == ""){
        alert("The content is empty. Please fill it.")
        window.stop()
    }else if(numpeople==""){
        alert("The number of people is empty. Please fill it.")
        window.stop()
    }
    else{

        savePost();
        window.location.href = "ViewPost.html";
    }

});

function savePost() {
    //thanks 라는 테이블을 만들고 하위 데이터에 유저 아이디를 넣어준다. 그곳에 push로 가상의 키를 넣고, 객체를 넣어준다.!!!!
    postRef = firebaseDatabase.ref("Posts");
    postkey = postRef.push();
    keyval = postkey.key;
    participantRef = firebaseDatabase.ref("Posts/"+keyval+"/participants");
    //Login 한 User의 Data
    obj = {
        userkey: loginUserKey,
        name: name,
        title: title,
        restaurant: restaurant,
        numpeople: numpeople,
        content: comment,
        createtime: -1*currentTime,
        location: Location,
    };

    postkey.set(obj);
    participantRef.push().set({participant: loginUserKey});
    alert("You have successfully posted.");
    $('#messagebox').val("");
}