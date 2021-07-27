![](RackMultipart20201031-4-16iqwhj_html_27eb9ee46ab3d18f.png)
# https://book-share-b.web.app/
# **Delhi Technological University**

# V Semester

**Online Book sharing platform**

**Member 1:**

Ashutosh Kumar Dixit

2K18/CO/099

**Member 2:**

Anshul Yadav

2K18/CO/080

**Content:**

- **Introduction**
  - Motivation
  - Intended Project
- **Objectives**
  - Problem statement
  - Solution
- **Methodologies**
  - Software Lifecycle Model
  - Requirement Engineer
  - Design and Development
- **Bibliography**

**Introduction**

**Motivation:**

In college, we study subjects that are important for fundamental understanding but not for future development. We have a collection of these books. We either sell them to resellers or donate them to our known juniors. In our software, Students have to buy books for these subjects from the market at a high price for one semester only. Reseller exploits book holders and buyers by purchasing old books at a shallow rate and selling them at a considerable margin.

**Intended Project:**

We will be providing a platform to the book holder where they can post their book so that students can rent or buy it.Here students can post their book and anyone nearby can buy, take on rent or just donate their books to anyone they want. In our software, students can rent a book at a low price, and book holders will also get profit for their collection. In further development we decided to integrate our project to a community platform, People can come together and share their knowledge related to books they read.

**Objectives:**

**Statement:** To reduce the cost of books for students, books that they need for a short period of time.

**Solution:** Book renting drives profitable growth with reduction is cost-to-customer, developing customer-reach, and providing a unique customer experience. The general objective of the project is to help the book lovers for getting books at considerable price and will also help book owners to sell or rent their books directly.The specific purposes of the study are the following:

1.) To remove middle men in dealing with second hand books.

2.) To make owners books stock available for revenue.

3.) To provide unique customer experience.

# **Methodology:**

**Software Lifecycle Model**

**Waterfall model**

In this project we have planned to use a waterfall model, initially we had developed basic login system with google o-auth and passport, After testing the login system we developed Models for user and books.

![](RackMultipart20201031-4-16iqwhj_html_258bf9b609868d3f.png)

**Requirement Engineering:**

**Use Case:** A use case diagram at its simplest is a representation of a user&#39;s interaction with the system that shows the relationship between the user and the different use cases in which the user is involved. Our use case diagram will consist of renter, tenant, admin and payment as actor

![](https://github.com/ashu-dixit/Book-Share/blob/master/basicUI/Untitled%20Document.png)

**Database:** Choosing databases is the trickiest part of software development. We use [this](https://towardsdatascience.com/choosing-the-right-database-in-a-system-design-interview-b8af9c6dc525) article from Deeksha kaul. Our data needs are similar to amazon and olx. For the community part in our project data needs are similar to facebook. Taking account of both aspects, the elasticSearch database is most appropriate for our data needs. But for taking account that we don&#39;t know much about development in ElasticSearch we will use MogoDB a document DB in our prototype development and later if possible we slowly shift toward Elasticsearch DB.

**ER Diagram:** Our database will consist of following entities

1. Renter
2. Tenant
3. Books
4. Publisher
5. Author

![](RackMultipart20201031-4-16iqwhj_html_b771d01b4119d283.png)

**Data Flow Diagram:** Data Flow Diagram represents the flow of data between different processes, here we use an online platform to design a closest representation of flow of data in our project. Here a user can be both tenant and renter. Here we use the physical representation but for the development process both are the same in terms of database usage.

![](RackMultipart20201031-4-16iqwhj_html_80e4176c79bebd9f.png)

**Development:**

**APIs:**

Login: We are using Passport middleware for the login system on our website. Most of the people use Google so we used Google Oauth2.0 API for login using Google. Google API saves the time of user wasted in filling log forms for login and reduce the code length

![](RackMultipart20201031-4-16iqwhj_html_42e2781f1b307864.png)

**// This sends token to google server**

**// After Successful login return a token ID which is used by my server to get Account information**

**route****. ****get**** ( ****&#39;/google&#39;**** , **** passport ****.**** authenticate****(****&#39;google&#39; ****, {**

**scope:** **[****&#39;profile&#39; ****,**  **&#39;email&#39;****]**

**}))**

**//exchange Code and redirect to home Screen**

**route****. ****get**** ( ****&#39;/google/redirect&#39;**** , **** passport ****.**** authenticate****(****&#39;google&#39;****), (****req ****,**  **res**** ) **** =\&gt; **** {**

**// res.send(&#39;you reached a callback url&#39;)**

**res****. ****redirect**** ( ****&#39;http://127.0.0.1:3000&#39;**** )**

**// res.send(req.user)**

**})**

Get Books: This API request response with Book from dataBase

Type 1: &quot;[www.example.com/books/](http://www.example.com/books/)&quot; this return book uploaded by user logged in

**route****. ****get**** ( ****&quot;/&quot;**** , ( ****req**** , **** res****)**  **=\&gt;**  **{**

**Books****. ****find**** ({**

**UserID :**** req ****.**** user ****.**** \_id**

**}).****then****(****response ****=\&gt;**  **{**

**res****. ****send**** ( ****response**** )**

**})**

**});**

Type 2: This return books to display at home of user

**route****. ****get**** ( ****&quot;/home&quot;**** , ( ****req**** , **** res****)**  **=\&gt;**  **{**

**Books****. ****find**** ({**

**limit:**** 10**

**}).****then****(****response ****=\&gt;**  **{**

**res****. ****send**** ( ****response**** );**

**})**

**})**

&quot;/login/user&quot;: This return user details of User logged in

**route****. ****get**** ( ****&#39;/user&#39;**** , ( ****req**** , **** res****)**  **=\&gt;**  **{**

**console****. ****log**** ( ****req****. ****user**  **+**  **&quot; /login/user&quot;**** )**

**res****. ****send**** ( ****req****. ****user**** )**

**})**

**Redux Thunk:**

To identify the user logged in We are using Redux-Thunk which keeps the track of user logged in and we can render books from user account

UserAction in redux thunk

**import**** axios ****from****&#39;axios&#39;**

**export**** const ****fetchUsername** **= ()**  **=\&gt;**  **{**

**return** **(****dispatch****)**  **=\&gt;**  **{**

**axios****. ****get**** ( ****&#39;/login/user&#39;**** )**

**.**** then****((****user****)**  **=\&gt;**  **{**

**console****. ****log**** ( ****user**  **+**  **&quot; User Action&quot;**** );**

**dispatch**** ({**

**type:****&#39;GET\_USER&#39; ****,**

**payload:**** user ****.**** data ****,**

**})**

**})**

**}**

**}**

**Root Reducer:**

**import**  **{**  **combineReducers**  **}**  **from****&quot;redux&quot; ****;**

**import**** userReducer ****from****&quot;./user/userReducer&quot; ****;**

**const**** rootReducer **** = **** combineReducers****({**

**user**** : ****userReducer**

**})**

**export**** default ****rootReducer**

**Store:**

**import**  **{**  **createStore**** , **** applyMiddleware ****}**  **from****&quot;redux&quot; ****;**

**import**** rootReducer ****from****&quot;./rootReducer&quot; ****;**

**import**  **{**** compose ****}**  **from****&#39;redux&#39;**

**import**** thunk ****from****&quot;redux-thunk&quot; ****;**

**const**** composeEnhancer **** = **** window ****.**** \_\_REDUX\_DEVTOOLS\_EXTENSION\_COMPOSE\_\_ **** || **** compose**

**// () =\&gt; dispatch(changeCountry(&quot;Europe&quot;)),**

**const**** store **** = **** createStore****(****rootReducer ****,**** composeEnhancer****(****applyMiddleware****(****thunk****)))**

**export**** default ****store**

**React:**

We are using react for UI because need of UI in our App are very simple. We need only single page application, which can be easily fulfilled by using it. Moreover using React with Material UI will reduce time for simple, attractive UI with animations and transitions.

![](RackMultipart20201031-4-16iqwhj_html_aa2401a2b95d3c01.png)

**Timeline:**

![](RackMultipart20201031-4-16iqwhj_html_6c5ab7403c6e3a6a.png)

**Bibliography:**

1. Google Oauth2.0: [https://developers.google.com/identity/protocols/oauth2](https://developers.google.com/identity/protocols/oauth2)
2. React: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
3. Material UI: [https://material-ui.com/components/container/](https://material-ui.com/components/container/)
4. Diagrams: https://app.creately.com/
