# CS473_BFFT
- A web application for gathering people to order delivery food together.
------------------------------------------
## Team members  
- 20150263 KyungGeun Roh  
- 20150455 Mingyu Yang  
- 20160662 Seungho Choi  
- 20203351 Wooil Ahn  

## Project description
- **index.html**
  - Log-in page : The first screen that people will see when they enter the platform. Mainly related to the log-in process which is connected to the firebase database.

- **Signup.html**
  - Signup page : Takes an e-mail address and password with a username that is needed to create an account.

- **ViewPost.html**
  - Post veiwing page : A page for looking up uploaded postings to join in. Users can join in a post by clicking 'join' button of its post card or add new posts by the "new post" button.
  - ViewPost.js : Supports ViewPost.html in order to connect a post and its chatting room.

- **AddPost.html**
  - Post adding page : Takes the information from the users when they hope to add a post. Takes a title, restaurant name, number of people, and content which shows how many letters you used.

- **ChatRoom.html**
  - Chatting page : Shows other members who joined in same post and let them chat. This page strongly supports interactions, so that users can communicate or send images with it.
  - chat.js : Brings post_key information from localStorage, it helps setting up chatting room, getting or sending messages. Supports ChatRoom.html.

- **Review.html**
  - Review page : Shows the members that you met in the post and has a rating-comment system that takes a input of 1~5 for the rating and a input of text as the comment.
  - review.js : Takes the information of the users and gives makes them appear in the rating screen. Supports Review.html.
  - star-rating.js : The package that has the functions related to the star-ratings. Supports Review.html.


## Reference
https://www.w3schools.com/bootstrap4/  
https://getbootstrap.com/docs/4.5/components/alerts/
