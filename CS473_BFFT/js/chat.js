var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

var myName = "";

$(window).load(function() {
    userSessionCheck();
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    sendMessage();
}

$('.message-submit').click(function() {
    insertMessage();
});

$(window).on('keydown', function(e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
});

//유저가 로그인 했는지 안했는지 확인해주는 함수
function userSessionCheck() {

    //로그인이 되어있으면 - 유저가 있으면, user를 인자값으로 넘겨준다.
    firebaseEmailAuth.onAuthStateChanged(function (user) {

        if (user) {
            //조회 - 데이터 베이스에 저장된 닉네임을 현재 접속되어 있는 user의 pk key 값을 이용해서 가져오기
            firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
                //자바스크립트 dom 선택자를 통해서 네비게이션 메뉴의 엘리먼트 변경해주기
                myName = snapshot.val().nickname;

                loadMessages();
                document.getElementById("loginmenu").textContent = "logout";
                document.getElementById("loginmenu").href = "Logout.html";
                document.getElementById("joinmenu").textContent = "Welcome! " + snapshot.val().nickname;
                document.getElementById("joinmenu").href = "#";

                name = snapshot.val().name;   //유저 닉네임은 계속 쓸거기 때문에 전역변수로 할당
                loginUserKey = snapshot.key;  //로그인한 유저의 key도 계속 쓸 것이기 때문에 전역변수로 할당
                userInfo = snapshot.val(); //snapshot.val()에 user 테이블에 있는 해당 개체 정보가 넘어온다. userInfo에 대입!


                //alert(userInfo.userid);  //uid는 db에서 user 테이블의 각 개체들의 pk 인데, 이 값은 인증에서 생성된 아이디의 pk 값과 같다. *중요!

                return true
            });

        } else {
            return false
        }
    });
}

function loadMessages() {
    $messages.mCustomScrollbar();

    firebase.database().ref("messages").on("child_added", function (snapshot) {
        if (snapshot.val().sender == myName) {
            $('<div class="message message-personal"><figure class="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdX6tPX96Zk00S47LcCYAdoFK8INeCElPeJrVDrh8phAGqUZP_g" /></figure><div id="message-' + snapshot.key + '">' + snapshot.val().message + '<button class="btn-delete" data-id="' + snapshot.key + '" onclick="deleteMessage(this);">Delete</button></div></div>').appendTo($('.mCSB_container')).addClass('new');
            $('.message-input').val(null);
        } else {
            $('<div class="message new"><figure class="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdX6tPX96Zk00S47LcCYAdoFK8INeCElPeJrVDrh8phAGqUZP_g" /></figure><div id="message-' + snapshot.key + '">' + snapshot.val().sender + ': ' + snapshot.val().message + '</div></div>').appendTo($('.mCSB_container')).addClass('new');
        }
        updateScrollbar();
    });

    firebase.database().ref("messages").on("child_removed", function (snapshot) {
        var messageId = snapshot.key;
        var element = document. getElementById("message-"+messageId);
        element.parentNode.parentNode.removeChild(element.parentNode);
        updateScrollbar();
    });
}