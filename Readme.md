# CS473 BFFT Milestone 3: Low-Fi Prototype


## Team members
- 20150263 KyungGeun Roh
- 20150455 Mingyu Yang
- 20160662 Seungho Choi
- 20203351 Wooil Ahn


## Problem Statement
-  Students who are living in the KAIST dormitory near the KAIST currently have difficulty ordering delivery food, due to a lack of friends to order food together resulting in increased delivery cost and leftovers during COVID-19 pandemic. As the number of students living in the dormitory or near KAIST reduced due to the COVID issue, it became hard to gather people to deliver food together. However, as the delivery fee is quite expensive with a large amount of food for a single person, it became hard to deliver food. So, we are tackling the problem that it became hard to deliver food in KAIST with the corona pandemic. While solving this main problem with the corona pandemic, we are trying to solve some sub-problems like making people feel like they are enjoying their meals with others, even if they eat alone and how to find the trolls out of our system.


## Tasks

- Task 1) Writing posting & Gathering people to order delivery food together
  - Why?) 자신이 희망하는 업체나 메뉴를 선택하고, 함께 주문할 사람을 찾는 것이 BFFT를 사용하는 주 목적이기 때문이다.
     
- Task 2) Chatting in order to decide the menu and talk with each other during mealtime.
  - Why?) 사람들이 토론을 통해 주문하고자 하는 메뉴를 자유롭게 정할 수 있도록 하고, 식사시간 동안에 이야기를 나눌 수 있도록 설계하는 것이 BFFT의 다른 주 목적이다. 이 목적을 실현하기 위해, 우리는 chatting 이 best option이라고 생각했다. KAKAO TALK의 사례를 생각해봤을 때, Chatting system은 가장 토론을 활발하게 할 수 있음과 동시에 화상회의와 다르게 자신이 원할 때만 대화에 참여할 수 있을 것으로 기대되기 때문이다.

- Task 3) Reviewing
  - Why?) 리뷰를 남기는 것이 소셜컴퓨팅적인 측면에서 가장 활발하게 커뮤니케이션이 이루어 질 수 있는 부분이라 생각했기 때문. 또한 이를 위해서는 트롤링 방지와 함께 깨끗한 매너를 유지해야 하기에 필요하다고 판단함.


## Prototype
- Our prototype link is here.


- We made the prototype using InVision. The reason why we decided to use InVision out of the various tools is because it is intuitive and easy to edit for new users. Also, it has a clean UI and allows more than 4 people to cooperate(Figma seems to have a limit of 2 cooperating members). As most of our team members had no experience at using prototype platforms, we also considered how much information we could earn by searching the internet. Marvel had too many related links to the movie company which bothered us and proto.io didn’t have any Korean links that made us prefer InVision. Lastly, one member of our group had some experience using InVision in HCI.

- As InVision can easily create a prototype by images, we thought that it would be more pretty and clean to use photoshop to create an image and use the images to make the prototype. To make the images, we first designed how the pages should work and how the application should flow. So we used a feature of InVision, called ‘freehand’, to make a simple drawing of the design we thought to develop. After that, we made images using adobe photoshop to make the images that will be used in the prototype. However, as making images by photoshop could take a lot of effort, we divided the slides into three parts and distributed the work. This made the design quite unbalanced which became a problem of the prototype. Also, it was quite hard to add some functions in an image, so we had to add several images that could show the progress of the application. These were the problems we had using InVision.


- Not to implement?  
    Contents


- Instructions  
    InVision shows where you should click by a blue blink when you click anywhere in the background. **So what you can do is just follow the blue blinks and follow the progress.**  Just in case, we will leave a short process to use the prototype. We first start with the log-in page. You can just enter your ID and password or sign up for a new account. If you once sign in, the postings will show up. You can enter into the posted rooms or add a post. If you add a post you will get into a chatting room and if people join, you will be able to share opinions with 


## Observations

Participants는 20대 대학생 19명 (P1, P2, … , P25)입니다. 저희 팀은 이 참여자들에게 이 prototype이 카이스트 내에서 배달음식을 같이 먹을 수 있는 사람들을 모으는 웹 애플리케이션에 대한 것임을 공지하였습니다.

1. 같이 먹는 사람들에 대한 정보가 매우 부족해 낯선 느낌이 들고, 신뢰도가 떨어진다. (P1, P21, P24) [HIGH]  
    Solution) 회원가입 시 세부적인 정보들을 제공받을 수 있게 질문을 구성한다.
    
    
2. 음식점에 대한 세부적인 정보 (위치 등)이 제공되지 않아 예상 배달시간이나 주문가능 여부 등이 불확실하다. (P2, P3)[MEDIUM]  
    Solution) 어떤 음식점이 배달 가능한지 앱 내에서 제공한다. (예상 배달시간은 불가능, 주문가능여부는 음식점의 운영시간을 기재함)
    
    
3. 선호하는 시간이 미리 제공되지 않아 상의해야할 내용이 증가해 시간이 오래 걸릴 듯 하다. (P4) [MEDIUM]  
    Solution) 포스팅 시 미리 작성자가 선호하는 시간을 기재해두어 의견 충돌을 방지한다.


4. 낯선 사람과 같이 배달을 시켜먹기에는 부담감이 심하다. (P5, P19) [?]  
    Solution) 유저에 대한 정보를 어느정도 미리 제공함으로써 심리적 거리를 좁힌다. 또한 반복적 이용 시 아래에 기재 된 친구추가 등의 기능을 이용해 친근감을 높일 수 있다.


5. 어디서 배달받을 지 미리 알지 못하면 장소까지 이동시간 등의 문제가 생길 수 있다.  (P6, P10, P23) [LOW]  
    Solution) 회원가입 시 세부적인 정보들을 제공받을 수 있게 질문을 구성한다.


6. 익명성을 이용해 악의를 가지고 트롤링을 하는 사람들이 있을 수 있다. (P7) [HIGH]  
    Solution) 카이스트 내에서 운영할 예정이니만큼 실명제를 이용해 트롤링이나 악의적인 행동을 방지할 수 있다.
    
    
7. 자신이 원하는 메뉴에 대한 모집이 있어도 놓치는 경우가 많을 것 같아 알림을 주는 시스템이 필요할 것 같다. (P8, P20) [LOW]  
    Solution) 자신이 원하는 음식점이나 키워드를 설정해 포스팅 되거나 채팅이 올라오면 알림을 주는 시스템을 구축한다.


8. 가격 정산에 있어서 귀찮음이 존재하기에 미리 앱 내에서 1/n을 할 수 있는 기능이 있었으면 좋겠다. (P9, P15, P22) [LOW]  
    Solution) 1/n을 해서 정산 후 결제가 되는 시스템을 구축하거나 주문하기로 한 사람이 정산 확인버튼을 눌러야지만 주문이 되는 시스템을 만든다.  


9. 과거 트러블이 있었던 유저끼리 매칭 될 경우가 생길 수 있다. 차단기능을 제공하는 것이 좋을 듯 하다. (P11, P23) [HIGH]  
    Solution) Report / Rating과는 별개로 본인이 차단한 유저의 목록에는 본인이 들어가 있는 방이 표시되지 않도록 시스템을 만든다.  


10. 음식점에 대한 자세한 정보가 제공되지 않아 주문이 실패할 염려가 있다. (P12, P25) [MEDIUM]  
    Solution) mealmate에 대한 평가 기능과 함께 음식점에 대한 리뷰 기능을 제공한다.  
    
    
11. 정량적인 rating score만으로 비매너 유저를 가리기는 너무 어렵다.(P13) [MEDIUM]  
    Solution) mealmate를 평가할 때, 간단한 이유를 같이 적도록 하여 정성적인 평가도 같이 이루어지도록 한다.  
    
    
12. 원하는 메뉴에 대한 posting을 빠르게 찾기 어렵다. (P.14, P16) [MEDIUM]  
    Solution) 음식별로 혹은 요리 분류 별(한식, 양식, 중식)로  posting들을 필터하는 기능을 추가한다.  
    
    
13. 주문과 채팅을 같이 하면서 친해진 mealmates들과 다시 만나기 어렵다. (P17, P18) [MEDIUM]  
    Solution) 친구 추가 기능을 추가한다.  
