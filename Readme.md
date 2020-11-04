
# CS473 BFFT Milestone 3: Low-Fi Prototype  
  
  
## Team members  
- 20150263 KyungGeun Roh  
- 20150455 Mingyu Yang  
- 20160662 Seungho Choi  
- 20203351 Wooil Ahn  
  
  
## Problem Statement  
**Students who are living in the KAIST dormitory near the KAIST currently have difficulty ordering delivery food, due to a lack of friends to order food together resulting in increased delivery cost and leftovers during COVID-19 pandemic.** As the number of students living in the dormitory or near KAIST reduced due to the COVID issue, it became hard to gather people to deliver food together. However, as the delivery fee is quite expensive with a large amount of food for a single person, it became hard to deliver food. So, we are tackling the problem that it became hard to deliver food in KAIST with the corona pandemic. While solving this main problem with the corona pandemic, we are trying to solve some sub-problems like making people feel like they are enjoying their meals with others, even if they eat alone and how to find the trolls out of our system.  
  
  
## Tasks  
We mainly listed the tasks that will appear in our platform. (1) First, we will need to have the users sign in or sign up. (2) Next, the users will be writing posts and gather people to order delivery food together. (3) After that, people will be chatting in order to decide the menu and talk with each other during the mealtime. (4) Another task is that people will need to order food and get the food to enjoy their meal. (5) The last task that we thought will be to review each other. **Between these five tasks we thought that (2), (3), (5) are main tasks that will be concentrating on.**  
  
- **<Core Task 1>** (2) Writing posts and gathering people will be the main goal of our application as BFFT is a platform that gathers people to order delivery food together. Also, this task will be the most frequently faced problem that the users will be facing always when they come into our platform.   
  
- **<Core Task 2>** (3) Chatting in order to decide the menu and talking with each other during the mealtime seemed to be an important task as people will be able to decide the menu to order by debating and it will help them communicate to each other although they are having meal separately. Thinking about the example of Kakao Talk, Chatting seems to be the best way that people can debate easily and doesn’t give any pressure to them while video chat can make some people difficult to use while eating(showing others how you eat can be difficult and embarrassing for many people and people won’t be free to concentrate on eating which can seem to be ignoring others).   
  
- **<Core Task 3>** (5) Reviewing each other is to prevent trolling. As social communities have many trollers that can disturb the process or ruin the communication, we thought that we need a feature that can prevent these trollings. After leaving reviews of others will leave some ratings or information of the trollers and can also leave some good information about how polite the user was. These features felt to be a source that can activate the social interaction with each other that seemed to be an important part in our platform.    
  
  
## Prototype  
- Our prototype link is here: [BFFT Low-Fi Prototype link](https://invis.io/DUZ9HR9NGHR "BFFT Low-Fi Prototype link")  
  
- We made the prototype using InVision. The reason why we decided to use InVision out of the various tools is because it is intuitive and easy to edit for new users. Also, it has a clean UI and allows more than 4 people to cooperate(Figma seems to have a limit of 2 cooperating members). As most of our team members had no experience at using prototype platforms, we also considered how much information we could earn by searching the internet. 'Marvel' had too many related links to the movie company which bothered us and 'proto.io' didn’t have any Korean links that made us prefer InVision. Lastly, one member of our group had some experience using InVision in HCI.  
  
- As InVision can easily create a prototype by images, we thought that it would be more pretty and clean to use photoshop to create an image and use the images to make the prototype. To make the images, we first designed how the pages should work and how the application should flow. So we used a feature of InVision, called ‘freehand’, to make a simple drawing of the design we thought to develop. After that, we made images using adobe photoshop to make the images that will be used in the prototype. However, as making images by photoshop could take a lot of effort, we divided the slides into three parts and distributed the work. This made the design quite unbalanced which became a problem of the prototype. Also, it was quite hard to add some functions in an image, so we had to add several images that could show the progress of the application. These were the problems we had using InVision.  
  
- What we choose NOT to implement?    
     Considering our prototype, we thought that we don’t need any special algorithms to make evaluations. Only rating will be evaluated by others reviews that will be just an evaluation of the mean of all reviews from others. So we thought that we won’t need any manual algorithm. Also the prototype only shows how the platform works and what kind of features we will have. So, we just only had some examples of fake information however didn’t need any other intentional things to implement into our design.    
       
- Representative screenshots:  
1. Posting List page    
In this page, people can see the currently active posting list for finding others to enjoy delivery food together.  
![postinglist_representative](./images/postinglist_representative.png)    
  
2. Add Posting page    
In this page, the users can add postings with setting the desired restaurant and group size.  
![addposting_representative](./images/addposting_representative.png)  
  
3. Chatting page    
In this page, the users in the group can talk to each other.  
![chatting_representative](./images/chatting_representative.png)  
  
4. Reviewing page    
In this page, the users can rate and review the people who have ordered and enjoyed the delivery food together.  
![reviewing_representative](./images/reviewing_representative.png)    
  
- We decided to make another design of a prototype which will be in this link. It is a clean design that was made by Powerpoint which is quite easy to balance every slide so that we could concentrate on the design more than any other things. We used both designs to check which design will be better in the survey by the testers. New our prototype link is here: [New BFFT Low-Fi Prototype link](https://invis.io/VHZAZ7E45MG "New BFFT Low-Fi Prototype link").
  
- Instructions  
    InVision shows where you should click by a blue blink when you click anywhere in the background. **So what you can do is just follow the blue blinks and follow the progress.**  Just in case, we will leave a short process to use the prototype. We first start with the log-in page. You can just enter your ID and password or sign up for a new account. If you once sign in, the postings will show up. You can enter into the posted rooms or add a post. If you add a post you will get into a chatting room and if people join, you will be able to share opinions with others.  
    
    
## Observations  
The Participants are 25 university students in 20s (P1, P2, ... , P25). Our team informed these participants that this prototype is about a web application that brings people together to share delivery food within KAIST.  
  
1. Users lack information about the people they eat together. It makes the users feel strange and unreliable for them. (P1, P21, P24) [HIGH]      
    Solution) Ask the questions so that detailed information can be obtained when signing up as a member. (These information will be opened to every member who will be matched with that user)  
      
2. Detailed information on restaurants (e.g., location, operating hours) is not provided, so it is uncertain to estimate delivery time or whether the order is available or not. (P2, P3)[MEDIUM] 
    Solution) Provide users with with information on which restaurants can be delivered.(the restaurant operation time will be provided for order availability, but expected delivery time is not possible to estimate as it changes due to the situation)
      
3. The preferred time is not provided in advance, so it is likely to take a long time due to an increase in what needs to be discussed. (P4) [MEDIUM]     
    Solution) When posting, Ask the host(who create the post) to write down the time that he or she prefers in order to prevent conflicts.
      
4. It's too much pressure to order food with strangers. (P5, P19) [MEDIUM]    
    Solution) Close psychological distance by providing some information about people who ordered delivery food together in advance. Also, you can increase friendliness by using features such as adding friends which will be mentioned below.  
  
5. If you don't know where to get the delivery in advance, you may have problems such as time spent on moving to the place. (P6, P10, P23) [LOW]    
    Solution) When posting, ask the host(who create the post) fill out where the group are going to receive delivery food in advance.  
  
6. There may be people who use anonymity to troll on bad purpose. (P7) [HIGH]     
    Solution) Since it will be operated within KAIST, real-name system can be used to prevent trolling or malicious behavior.  
      
7. A system will be needed to alert people because they will often miss the posting about the menu they want. (P8, P20) [LOW]    
    Solution) Set up a restaurant or keyword that you want and make a system that notifies you when a post or chat is posted.  
  
8. When paying for delivery, there is no feature to do 1/n in the app in advance. (P9, P15, P22) [LOW]    
    Solution) Create a system that the person responsible for the order should press the button ‘completed spliting bill’ for ordering.  
  
9. Users who had trouble in the past may be matched. It would be better to provide a blocking feature. (P11, P23) [HIGH]    
    Solution) Apart from report/rating system, We will ensure that postings that the user's blacklists are participating in are not displayed to that user.  
    
10. The lack of detailed information on the restaurant might cause the order failure(meaning unsavory food). (P12, P25) [MEDIUM]    
    Solution) Ask a review of restaurants along with an evaluation function for the mealmates, and provide this information for the users.
      
11. It is too difficult to find the trolls with quantitative rating scores only (P13) [MEDIUM]    
    Solution) When evaluating the mealmates, write down a simple reason so that qualitative evaluation can be evaluated as well.  
      
12. It's hard to find the postings for the menu we want. (P.14 P16) [MEDIUM]    
    Solution) Add a feature to filter posts by food or by food classification (Korean, Western, Chinese) in the system.  
      
13. It is hard to meet mealmates who became close by ordering and chatting together. (P17, P18) [MEDIUM]     
    Solution) Add a ‘add friend’ feature in the system.
    
    
## Conclusion
So far, we developed a prototype that simply shows how our system works in big step. We’ve found several problems as stated above. Most of the problems are about features that has to be added in further development or lack of intimacy in meeting unfamiliar people. The standard we used on classifying problems is “Does that problem affects on social interaction?”. Considering our indication on each problem, we will preferentially work on high level problems meaning that it should be fixed right away as it lowers efficiency of the whole system. If possible we would like to work on medium and low problems also.  

Moreover, we also added some questions about the usage of messages while eating. The responses show that they actually don’t care much about it with 12 responses while only a few people (6responses) thought that chatting during eating will be difficult (4 people thought it will be good). Another question is mentioned above on the prototype. We had the two different designs and asked them which will be better and about 60% answered that the second design made by Powerpoint felt better. So, we are considering following the second design.

