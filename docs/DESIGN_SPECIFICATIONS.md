# CFC Wired Design Specifications

> **Document Purpose:** Comprehensive design specifications for recreating the cfcwired.org website exactly.
> **Source:** https://www.cfcwired.org/
> **Last Updated:** January 21, 2026
>
> **Related docs:** [agents.md](agents.md) | [README.md](../README.md)

---

## Table of Contents

1. [Global Design Elements](#1-global-design-elements)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Navigation Structure](#4-navigation-structure)
5. [Header Design](#5-header-design)
6. [Footer Design](#6-footer-design)
7. [Page-by-Page Specifications](#7-page-by-page-specifications)
8. [Common Components](#8-common-components)
9. [Icons & Social Media](#9-icons--social-media)
10. [External Links & Integrations](#10-external-links--integrations)

---

## 1. Global Design Elements

### Top Banner

- **Position:** Fixed at top of viewport
- **Background:** Dark navy/black
- **Text:** White
- **Content:** `Sunday mornings 9:30am & 11am. Watch Online ->`
- **Link:** https://live.cfcwired.org/
- **Arrow indicator** with link to live stream

### Designer Credit

- **Text:** `Designed By: PlainJoe Studios`
- **Copyright:** `© 2026 CHRISTIAN FELLOWSHIP CHURCH. ALL RIGHTS RESERVED.`

---

## 2. Color Palette

### Primary Colors

| Color Name            | Hex Code              | Usage                                          |
| --------------------- | --------------------- | ---------------------------------------------- |
| **CFC Blue/Primary**  | `#2c5aa0`             | Primary buttons, links, accents                |
| **Brand Navy**        | `#1a1a2e`             | Hero backgrounds, footer, dark sections        |
| **Brand Accent Blue** | `#3d7dd8`             | Hover states, secondary accents                |
| **Gold/Warning**      | `#d4a84b` / `#ffc107` | Call-to-action highlights, "Watch Online" link |

### Background Colors

| Color Name     | Hex Code  | Usage                                |
| -------------- | --------- | ------------------------------------ |
| **White**      | `#ffffff` | Main content backgrounds, navigation |
| **Light Gray** | `#f8f9fa` | Alternate section backgrounds        |
| **Dark**       | `#212529` | Footer background                    |
| **Dark Navy**  | `#1a1a2e` | Hero sections, top banner            |

### Text Colors

| Color Name     | Hex Code  | Usage                        |
| -------------- | --------- | ---------------------------- |
| **Body Text**  | `#333333` | Main body copy               |
| **Muted Text** | `#6c757d` | Secondary text, descriptions |
| **White Text** | `#ffffff` | Text on dark backgrounds     |
| **Link Blue**  | `#2c5aa0` | Links                        |

### Gradients

- **Hero Gradient:** `linear-gradient(135deg, #1a1a2e 0%, #2c5aa0 100%)`

---

## 3. Typography

### Font Family

- **Primary Font:** System UI stack (or potentially custom font - appears to be similar to Montserrat/Open Sans)
- **Fallback:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Font Sizes

| Element             | Size                  | Weight          |
| ------------------- | --------------------- | --------------- |
| H1 (Page Titles)    | Display large (~3rem) | Bold (700)      |
| H2 (Section Titles) | ~2rem                 | Bold (700)      |
| H3 (Subsection)     | ~1.5rem               | Bold (600-700)  |
| H4 (Card Titles)    | ~1.25rem              | Semi-bold (600) |
| H5 (Small Headings) | ~1.1rem               | Semi-bold (600) |
| Body Text           | 1rem (16px)           | Normal (400)    |
| Small Text          | 0.875rem              | Normal (400)    |

### Text Styles

- **Uppercase:** Used for section labels like "WEEKLY RESOURCES:", "QUICK MENU:", "OFFICE HOURS"
- **Line Height:** 1.6 for body text
- **Letter Spacing:** Slightly increased for uppercase headings

---

## 4. Navigation Structure

### Main Navigation Menu Items

```
├── About Us (dropdown)
│   ├── About Us
│   ├── Find Community
│   └── Contact Us
├── Come Visit (single link)
├── Watch/Read (dropdown)
│   └── Messages
├── Get Involved (dropdown)
│   └── Core Classes
├── For My Family (dropdown)
│   ├── Children
│   ├── Middle School
│   └── High School
└── [Plan Your Visit] (CTA button)
```

### Navigation Behavior

- **Desktop:** Horizontal navigation with dropdowns
- **Mobile:** Off-canvas/hamburger menu
- **Sticky:** Navigation sticks to top on scroll
- **CTA Button:** "Plan Your Visit" - links to https://myrock.cfcwired.org/pyv

---

## 5. Header Design

### Top Banner Bar

```
┌─────────────────────────────────────────────────────────────────┐
│  Sunday mornings 9:30am & 11am. Watch Online ->                 │
└─────────────────────────────────────────────────────────────────┘
```

- Background: Dark (#1a1a2e or similar)
- Text: White, centered
- "Watch Online ->" is a gold/warning colored link

### Main Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│ [CFC LOGO]   About Us  Come Visit  Watch/Read  ...  [Plan Visit]│
└─────────────────────────────────────────────────────────────────┘
```

- Background: White
- Shadow: Light bottom shadow (`box-shadow: 0 2px 4px rgba(0,0,0,0.1)`)
- Logo: "Christian Fellowship Church" text logo or image logo
- CTA Button: Blue primary button

---

## 6. Footer Design

### Footer Layout (4-5 Column)

```
┌─────────────────────────────────────────────────────────────────┐
│ [CFC LOGO]          │ QUICK MENU:       │ OFFICE HOURS        │
│                     │ • About Us        │ M-T: 9:00a to 5:00p │
│ 44505 Atwater Drive │ • Messages        │ F & S: Closed       │
│ Ashburn, VA 20147   │ • Request Prayer  │                     │
│                     │ • Contact Us      │ SERVICE TIMES       │
│ 1.703.729.3900      │                   │ Sunday: In Person:  │
│ cfc@cfcwired.org    │                   │ 9:30a & 11:00a      │
│                     │                   │ Watch from Anywhere │
│ [Social Icons]      │                   │ Online: 9:30 & 11:00a│
├─────────────────────────────────────────────────────────────────┤
│ CFCWIRED WEEKLY           │ DOWNLOAD THE APP                   │
│ Subscribe to our email... │ [App Store] [Google Play]          │
│ [Subscribe]               │                                     │
├─────────────────────────────────────────────────────────────────┤
│ Designed By: PlainJoe Studios  © 2026 CHRISTIAN FELLOWSHIP...  │
└─────────────────────────────────────────────────────────────────┘
```

### Footer Content (Exact Text)

**Address:**

```
44505 Atwater Drive
Ashburn, VA 20147
```

**Contact:**

```
1.703.729.3900
cfc@cfcwired.org
```

**Quick Menu:**

```
- About Us
- Messages
- Request Prayer
- Contact Us
```

**Office Hours:**

```
M-T: 9:00a to 5:00p
F & S: Closed
```

**Service Times:**

```
Sunday: In Person: 9:30a & 11:00a
Watch from Anywhere Online: 9:30 & 11:00a
```

**Newsletter Section:**

```
CFCWIRED WEEKLY
Subscribe to our email newsletter to stay in the loop with everything happening at CFC
[Subscribe Button]
```

- Subscribe Link: http://eepurl.com/hIOCKn

**App Downloads:**

```
DOWNLOAD THE APP
[Available on the Apple Store]
[Get it on Google Play]
```

- Apple: https://apps.apple.com/us/app/christian-fellowship-ashburn/id1200541819
- Google: https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_D44NRF

**Copyright:**

```
Designed By: PlainJoe Studios
© 2026 CHRISTIAN FELLOWSHIP CHURCH. ALL RIGHTS RESERVED.
```

---

## 7. Page-by-Page Specifications

### 7.1 Homepage (/)

#### Hero Section

**Heading:** `WELCOME`
**Layout:** Full-viewport media hero with the site header overlaying the top of the hero.
**Buttons:**

- `Come Visit` → /come-visit/
- `Watch Messages` → /watch-read/messages/

#### Welcome Statement Section

**Layout:** Standalone black band immediately below the hero.
**Text:** `Christian Fellowship Church is committed to being a place where people become followers of Christ no matter what their religious or denominational background.`

#### This Sunday Section

**Heading:** `THIS SUNDAY`
**Image:** Current sermon graphic, left column. The image scales fluidly with viewport width on desktop and tablet, then stacks above the text on mobile.
**Body:** `We are called not only to believe and preach the Gospel but to live it out daily through our actions just like Jesus did.`

**Weekly Resources Label:** `WEEKLY RESOURCES:`
**Links:** Blue filled resource buttons.

- Watch Messages → /watch-read/messages/
- Bulletin → /bulletin
- Study Guide → /studyguide

#### Coming Up Section

**Heading:** `COMING UP`
**Layout:** Light gray section with event promotion tiles in a fluid 80%-width content row. Tiles use four columns on desktop, shrink proportionally with the viewport, and switch to two columns on tablet/mobile widths.

- Event cards from Rock calendar
- Button: `See More Events` → https://myrock.cfcwired.org/Events?audience=All+Church

#### Experience CFC Section

**Heading:** `EXPERIENCE CFC`

**Layout:** White section with three unframed columns in a fluid 80%-width content row and large vertical spacing between heading and column content. Images scale proportionally with the viewport, then stack into a single column on mobile.

**Column 1 - Sunday Mornings:**

- **Image:** Sunday worship image
- **Title:** `SUNDAY MORNINGS`
- **Text:** `In person at 9:30am & 11:00am`
  `Servicio en Español at 2pm`
  `Watch from home at 9:30 & 11:00am`
- **Button:** `Come Visit`

**Column 2 - Wednesday Nights:**

- **Image:** Wednesday Nights image
- **Title:** `WEDNESDAY NIGHTS`
- **Text:** `Our 10-week classes, offered year-round, help you grow with God, build friendships, and find community.`
- **Button:** `Events` → https://myrock.cfcwired.org/events

**Column 3 - Community Groups:**

- **Image:** Community Groups image
- **Title:** `COMMUNITY GROUPS`
- **Text:** `We know that life can get busy. That is why we invite you to explore, connect and find a group that fits your schedule.`
- **Button:** `Find Community`

#### Discipleship Pathway Section

**Heading:** `DISCIPLESHIP PATHWAY`
**Layout:** Light gray section with the roadmap image above the body copy in a fluid 80%-width content row capped at the public-site desktop image width.
**Body:** `CFC offers 8 core classes that form our discipleship pathway. These classes are designed to help you grow as a follower of Jesus, deepening your faith, shaping your character, and equipping you to become more like Christ in everyday life.`
**Button:** `Learn More` → /get-involved/core-class/
**Image:** Visible CFC-Roadmap_web-1.png roadmap graphic.

---

### 7.2 About Us (/about-us/)

#### Hero Section

**Heading:** `ABOUT US`

#### Mission Statement

**Text:** `Christian Fellowship Church is committed to being a place where people become followers of Christ no matter what their religious or denominational background.`

**Tagline:** `We are a Spirit-directed church discipling people to know Jesus as Lord.`

#### Vision Section

**Heading:** `VISION`
**Text:** `Christian Fellowship Church desires to be a body of thriving Christ-followers indispensably integrated in the community and daily witnessing the reality of Jesus' mission in the world.`

#### Values Section

**Heading:** `VALUES`

**Value 1 - Truth:**

- **Title:** `TRUTH`
- **Text:** `There are a lot of places to turn to for "fake news" and convenient facts, but there is only one person we can turn to make sure that we have the full story – Jesus. We want to be people who identify with what He says about how we should live.`

**Value 2 - Diversity:**

- **Title:** `DIVERSITY`
- **Text:** `Diversity – Ashburn is a 64 Crayola crayon box but too often we live in an 8-crayon environment. We want to embrace the truth that comes from Jesus while also embracing the various cultures and backgrounds that reflect that same truth.`

**Value 3 - Grace:**

- **Title:** `GRACE`
- **Text:** `Grace – We live in a world that is quick to draw an opinion and slow to exhibit grace. Our desire is to be quick to listen and quick to exhibit the love and forgiveness that Jesus continually gives to everyone.`

**Value 4 - Prayer:**

- **Title:** `PRAYER`
- **Text:** `Prayer – Life is loud. We believe that one of the best ways to cut through all the noise is to develop a relational connection to Jesus by talking and listening to what He has to say.`

**Value 5 - Worship:**

- **Title:** `WORSHIP`
- **Text:** `Worship – The great song theologian, Bob Dylan, once said "You're gonna have to serve somebody." Everywhere you go, people are serving someone. Our desire is that we serve the one that matters – Jesus.`

#### History Section

**Heading:** `HISTORY`
**Text:** `Since 1977, Christian Fellowship Church has served the Ashburn, Virginia area and has reached out to the far corners of the globe. We are an independent, nondenominational church grounded on the word of God, communicated through relevant biblical teaching. Messages challenge and help people to change, becoming all that God intends them to be. Energetic, authentic worship makes our services lively and full of celebration.`

`We invite you to see how God is moving in our church community, awakening people to His love and calling them to action. We would love for you to be part of it!`

**Photo Caption:** `Pictured above: Beaumeade Circle location, Ground Breaking for Atwater location, Bird's eye view of Atwater, Atwater location.`

---

### 7.3 Come Visit (/come-visit/)

#### Hero Section

**Heading:** `COME VISIT`
**Button:** `Plan Your Visit` → https://myrock.cfcwired.org/pyv

#### Join Us On Section

**Heading:** `JOIN US ON`

**Sundays Card:**

- **Title:** `SUNDAYS`
- **Time:** `9:30a & 11:00a`
- **Button:** `Get Directions` → Google Maps link

**Wednesdays Card:**

- **Title:** `WEDNESDAYS`
- **Time:** `7:00p`
- **Button:** `Get Directions`

**Online Card:**

- **Title:** `ONLINE`
- **Text:** `live.cfcwired.org`
- **Button:** `Go Live` → http://live.cfcwired.org/

**Hispana CFC Card:**

- **Title:** `HISPANA CFC`
- **Time:** `Sundays 2p`
- **Button:** `Learn More` → https://hispanacfc.com/

#### Welcome Text

**Text:** `Welcome to CFC! Whether you're looking to join us online or in-person, our hope is to create an experience where you feel at home. We gather every Sunday and no matter what your background may be, you are welcome here.`

`At our in-person services, you'll be able to enjoy a cup of coffee in our café, sit in one of our morning services or connect with one of our community groups. We've also taken additional measures to help everyone stay healthy and our online service is always available for you and your family.`

`Nuestra congregación Hispana Invita a su Servicio en Español los domingos a la 2p.`

#### What Should I Expect Section

**Heading:** `WHAT SHOULD I EXPECT?`

**FAQ Items (Accordion):**

1. `I'M NEW HERE! WHAT CAN I EXPECT?`
   - Text: `You are our honored guest! Our hope is that you'll feel valued and honored as our greeters welcome you inside. Stop by our welcome desk to receive a gift and introduce yourself. We'd love to get to know you. And we pray that you'll experience the reality of the Good News of Jesus Christ through the worship, message and people.`
2. `DO I HAVE TO SIGN, GIVE OR SAY ANYTHING?`
3. `WHAT SHOULD I WEAR?`
4. `WHAT IS THE LATEST ON COVID HEALTH PROTOCOLS?`
5. `IS THE CHILDREN'S AREA SECURE?`
6. `IS THERE A PLACE FOR MY TEENAGER?`

#### What About My Kids Section

**Heading:** `WHAT ABOUT MY KIDS?`
**Text:** `Every Sunday, kids at CFC will experience safe, age-appropriate environments where the Bible is taught in a creative and relevant way. We believe in seeing the next generation of Jesus' disciples rise up to take their place in the world. Church should be a place where kids can enjoy the process of learning about Jesus on their level. We would love for you and your family to visit us this Sunday!`

**Links:**

- Children → /for-my-family/children/
- Middle School → /for-my-family/middle-school/
- High School → /for-my-family/high-school/

---

### 7.4 Find Community (/about-us/find-community/)

#### Hero Section

**Heading:** `FIND COMMUNITY`

#### Importance of Community Section

**Heading:** `IMPORTANCE OF COMMUNITY`
**Text:** `When we read about the early church in Acts 2:42-47, we see authentic biblical community. The people in the Early Church were not extraordinary, they simply knew that they loved Jesus and needed each other. Thousands of years later, we feel the same way here at CFC.`

`Whether you are an introvert or an extrovert, God wired you for community. At CFC, groups offer opportunities for genuine friendship, where you can grow as you study God's word together. That combination moves you to live out what you are learning together and put that knowledge into practice.`

`In community groups and small groups, we learn together, pray together, serve together, and have fun together. We remind each other of why God created us and His purpose for each of us here on earth.`

`Life is so much richer together. Discover groups at CFC!`

**Link:** `What is Community? PDF Handout` → PDF download

#### Types of Community Section

**Heading:** `TYPES OF COMMUNITY`

**Rooted:**
`Rooted is a 10-week small group experience designed to connect you to God, the church, and your purpose. Together, in a group of 8-12 people from all walks of life, you'll explore the Bible, engage in prayer, serve experiences, share stories, and practice the rhythms essential to a healthy spiritual life. These spiritual rhythms aren't new, or something the church recently created, every one of them is found in Acts 2 where the early church began. Rooted small groups are led by a trained facilitator to guide you through the 10-week experience.`

**Sermon Series Discussion Groups:**
`Sermon Series Discussion Groups dig deeper into the Sunday main stage message. A dynamic group discussion will focus on the practical application of the main stage message each week, allowing God's word to shape us and change us. The group will challenge you to deepen your relationship with God and take your faith out into your community.`

**Community Groups:**
`On Sundays, we gather in community groups to study God's word and then discuss what we are learning together as we grow more like Christ. This is where friendships begin. Other groups that meet during the week at the church may have specific focus based on life stages or interests.`

**Small Groups:**
`Small groups are well…. smaller. In a small group you will study God's word with friends and deepen those friendships through a sharing of personal stories, praying together, serving together, and doing life together in and outside of the church.`

#### Find a Group Section

**Heading:** `FIND A GROUP`
**Text:** `We were made for community. Join a group here at CFC where you can do life together and grow in your faith.`
**Button:** `Learn More` → https://myrock.cfcwired.org/groupfinder

#### Men's Ministry Section

**Heading:** `MEN'S MINISTRY`
**Subheading:** `Band of Brothers`
**Text:** `Band of Brothers meets at 8:00a for breakfast on the 2nd Saturday of every month at CFC. Please check CFC's event details for more information about upcoming meetings. All men are welcome to join this monthly meeting for fellowship and discussion of God's word.`
**Button:** `Upcoming Events` → https://myrock.cfcwired.org/events?audience=Men

#### Women's Ministry Section

**Heading:** `WOMEN'S MINISTRY`
**Subheading:** `Heart to Heart`
**Text:** `H2H is a Mentor Ministry for any woman at CFC who would like to grow in her faith journey and is seeking to be discipled within the context of a Biblical friendship. Please contact Beth Davidson for an application or for more information.`
**Button:** `Sign Up` → https://myrock.cfcwired.org/page/969?OpportunityId=40

---

### 7.5 Contact Us (/about-us/contact-us/)

#### Hero Section

**Heading:** `CONTACT US`

#### Contact Form

**Fields:**

- Name \* (required)
- Email \* (required)
- Message \* (required)
- Recaptcha
- Submit button

---

### 7.6 Messages (/watch-read/messages/)

#### Hero Section

**Heading:** `MESSAGES`

**Note:** This page embeds a media player/content from RockRMS or external service to display sermon recordings.

---

### 7.7 Core Classes (/get-involved/core-class/)

#### Hero Section

**Heading:** `CORE CLASSES`

#### Spiritual Growth Section

**Heading:** `SPIRITUAL GROWTH`
**Text:** `Spiritual growth is a personal journey. It's also a journey that should not be taken alone. At CFC, we are dedicated to the process of helping each person become a mature, Spirit-directed disciple of Jesus Christ. To that end, we encourage everyone to participate in 4 foundational experiences that help to cultivate community, deepen your relationship with God, and experience the abundant life Jesus promises.`

**Image:** Discipleship pathway/roadmap graphic

#### The Essentials Section

**Heading:** `THE ESSENTIALS`

**Class 1 - Square One:**

- **Title:** `SQUARE ONE`
- **Text:** `Get to know CFC, how to become a member, or how to go deeper in your faith.`
  `This 4-week class is designed to introduce you to the mission, vision, and values of CFC. Dig into the unique gifting, passions, and personality that God has placed in you and discover the people and places that need the exact thing you were created to offer. Learn the importance of sharing your story – both with the people in your day-to-day who need hope and the ones God has placed in your life to help you maintain that hope.`
  `Square One is for everyone, whether you're new to faith in Jesus, new to CFC, or have a long and familiar relationship with both.`
- **Button:** `Sign Up` → https://myrock.cfcwired.org/events-new?keyword=squareone

**Class 2 - Rooted:**

- **Title:** `ROOTED`
- **Text:** `Rooted is a powerful 10-week small group experience that will connect you more deeply to God, to His purpose for your life and to your church community.`
  `ROOTED continues to build on the four spiritual disciplines or "rhythms" introduced in Square One – Daily Devotion, Prayer, Sacrificial Generosity, and Sharing Your Story. ROOTED also introduces the remaining three rhythms central to a mature spiritual life – Breaking Strongholds, Serve the Community, and Celebration.`
  `With daily reading in the Rooted workbook and weekly small group time, plus three large group experiences, these 10 weeks can truly be life changing.`
  `*Rooted groups are traditionally launched together in both the spring and fall, though individual groups may be able to launch at other points in the year with sufficient interest.`
- **Button:** `Learn More` → mailto:bdavidson@cfcwired.org

#### Studying the Bible for Growth Section

**Heading:** `STUDYING THE BIBLE FOR GROWTH`
**Text:** `In this 5-week program we will help you to explore several methods of studying the Bible for personal growth, expand your ability to interpret the Scriptures, and most importantly apply this understanding in a way that creates greater closeness and connection with the God who wrote them.`

#### Reading the Bible for Life Section

**Heading:** `READING THE BIBLE FOR LIFE`
**Text:** `The Bible was meant to shape more than our minds—it was meant to shape our lives. This 5-week class will help you develop habits of daily Scripture reading that bring clarity, connection with God, and a deeper understanding of your true identity in Christ.`
**Button:** `Learn More` → https://myrock.cfcwired.org/Events?keyword=thebiblefor

#### Following God's Voice Section

**Heading:** `FOLLOWING GOD'S VOICE`
**Text:** `Having a close, personal relationship with God means talking to Him – sharing the thoughts of our heart and mind – and hearing and understanding what He is saying to us. We are wired to hear from our Heavenly Father in a very personal way, and yet that part of the conversation can often feel like a challenge. Over these 10 weeks, we will uncover the thoughts and behaviors that can lead us to believe God is silent, gain confidence in the ways God chooses to communicate, and provide space to experience the loving, creative, transformational communication that is the birthright of every son and daughter of God.`
`*Following God's Voice is offered in both the spring and fall on Wednesday nights.`
**Button:** `Learn More` → https://myrock.cfcwired.org/Events?keyword=followinggod

#### Living on Mission Section

**Heading:** `LIVING ON MISSION`
**Text:** `Living on Mission is a 13-week journey of prayer, learning, and action designed to help you live with intentionality and purpose — loving your neighbors, sharing life, and proclaiming the Gospel in both word and deed. You'll hear the heart behind Living on Mission, connect with others taking the next step, and discover how this isn't a program — it's a lifestyle shift toward seeing your neighborhood, workplace, and daily rhythms as places where God is already at work.`
**Button:** `Learn More` → https://myrock.cfcwired.org/Events?keyword=livingonmission

---

### 7.8 Children (/for-my-family/children/)

#### Hero Section

**Heading:** `CHILDREN`
**Text:** `We believe that heart transformation can only take place when a child experiences the gospel. In our nursery through fifth grade programs at CFC, kids will understand the Bible is not just a collection of stories, but one unified story—God's story of redemption!`

#### Sundays Section

**Heading:** `SUNDAYS`
**Time:** `9:30am and 11:00am`

**Nursery/K (0-5 years):**

- **Title:** `NURSERY/K`
- **Age:** `0-5 years`
- **Text:** `Through age-appropriate Bible stories, songs and lesson-oriented activities, Your nursery, preschool and kindergarten children will interact with volunteers and friends discovering the value of God's word and relationships through activities, songs and crafts that reinforce that day's Bible story.`

**KidsZone (1st-3rd grade):**

- **Title:** `KIDSZONE`
- **Age:** `1st – 3rd grade`
- **Text:** `The desire for our 1st through 3rd grade program is to partner with parents and teach the children to know and follow Jesus. Through fun, fellowship and digging into God's Word, students will acquire knowledge of the Bible and come to know it as the one big, true story where everything points to Jesus!`

**Route 54 (4th-5th grade):**

- **Title:** `ROUTE 54`
- **Age:** `4th – 5th grade`
- **Text:** `In this program, specifically designed for 4th and 5th graders, we partner with parents to teach children about God and the Bible as they become followers of and disciples for Christ. Through fun, fellowship and the use of creative teaching elements, students will learn how every story in the Bible connects to the gospel!`

#### Checking In Section

**Heading:** `CHECKING IN`
**Text:** `We use computer check-in systems, which helps us track attendance and provide security for all kids. Stop by the Guest Information Desk when you arrive, and we will assist you with check-in, or you can use our mobile check-in. Just download the CFC App from your app store and you can check-in your kids even before you step into the building. Then, you can stop by the Mobile Check-in cart in Children's Ministry and pick up your name tags.`

**Links:**

- `Mobile Checkin` → https://myrock.cfcwired.org/mobilecheckin
- `Fall 2024 Parent News` → PDF link

#### Wednesday Night Kids Group Section

**Heading:** `WEDNESDAY NIGHT KIDS GROUP`
**Time:** `This group meets from 7:00 to 8:30p`
**Text:** `Each week we offer an additional time of learning that includes an applicational truth children can relate to and incorporate into their everyday life. Our evenings are full of fun and fellowship with Bible story videos, large group discussions, Bible drills, lesson application activities, games, crafts, snacks and more!`
**Button:** `Learn More` → https://myrock.cfcwired.org/events

#### Baptism & Dedication Section

**Heading:** `BAPTISM & DEDICATION`

**Baptism:**
`The Baptism class is offered to students in 1st through 5th grades who have professed a desire to be baptized. We will answer the questions: Why should people get baptized?, What should you know before you are baptized? and How do you get baptized? A parent is required to accompany their students in this class.`

**Child Dedication:**
`Child Dedication Class is established for parents to commit publicly and formally to raising their child(ren) according to God's principles. Unlike baptisms, child dedications focus on the responsibility of parents. Family members, close friends, and the congregational community are included in the process to support the efforts of the parents to train up a child in the way he should go. This class is required for participation in the in-service child dedication ceremony.`

#### Wellness Policy Section

**Heading:** `WELLNESS POLICY`
**Text:** `Parents are asked not to bring a child if he/she:`

- `Has run a fever within the last 24 hours`
- `Has had diarrhea or has vomited in the last 24 hours`
- `Has a green or yellow discharge coming from their nose or eyes`
- `Has an ongoing cough or sore throat`
- `Is known to have any infectious disease`

`If there is any question as to the health of your child, we ask that parents keep their child home to protect the health of others.`

`Thanks for helping us keep our kids safe & healthy.`

**Button:** `Full Wellness Policy` → PDF link

---

### 7.9 Middle School (/for-my-family/middle-school/)

#### Hero Section

**Heading:** `MIDDLE SCHOOL`

#### Middle School United Section

**Heading:** `MIDDLE SCHOOL UNITED`
**Text:** `Middle School United is a place created specifically for 6-8th grade students, their questions, and their struggles. Our goal is to lead students toward being Spirit-led and living gospel-centered. MSU meets on Sunday mornings during the 9:30 service. We use G Shades Youth Ministry Curriculum. During the 11:00 service, we do a Bible study together!`
**Button:** `Mid Nite` → Link to Wednesday program

#### Mid-Nite Section

**Heading:** `MID-NITE`
**Text:** `Mid-Nite is a Wednesday night gathering for middle school students at CFC from 7pm-8:30pm. Students hang out, play games, engage in a Bible study discussion, and then spend time in worship and prayer! We walk through the 7 Spiritual Rhythms of Rooted.`

#### U-Lead Section

**Heading:** `U-LEAD`
**Text:** `At MSU, we make a really big deal out of students getting involved. We have a few student volunteer teams that we would LOVE for you to be on. Sign up at the Snack Shack in the Student Ministries Hang Space!`

#### For Your Pre-Teens Section

**Heading:** `FOR YOUR PRE-TEENS`

**Retreat/Camp:**

- **Title:** `RETREAT/CAMP`
- **Text:** `Camp is one of the best things we do all year! We build and strengthen relationships with each other, make amazing memories, and grow in our understanding of what it means to live Spirit-directed.`

**Online Content:**

- **Title:** `ONLINE CONTENT`
- **Text:** `Join us on Facebook and Instagram to stay connected!`
- Social links: Facebook, Instagram

---

### 7.10 High School (/for-my-family/high-school/)

#### Hero Section

**Heading:** `HIGH SCHOOL`

#### High School United Section

**Heading:** `HIGH SCHOOL UNITED`
**Text:** `HSU is a place for 9-12th grade students to grow toward maturity and ownership in their walk with Christ. Our goal is to lead students toward being Spirit-led and gospel-centered. HSU meets for a worship service and small groups during the 9:30 service. We use G Shades Youth Ministry Curriculum. During the 11:00 service, we do a Bible study together!`
**Button:** `U-Nite` → Link to Wednesday program

#### U-Nite Section

**Heading:** `U-NITE`
**Text:** `U-Nite is our Wednesday night environment for high school students. This gathering takes place from 7-8:30pm at CFC and is intentionally designed as a space for high school students to build relationships with one another and experience Jesus together. The nights typically consist of hang out time and games, followed by either a discussion on cultural issues, worship, personal sharing, or Bible study. We walk through the 7 Spiritual Rhythms of Rooted.`

#### U-Lead Section

**Heading:** `U-LEAD`
**Text:** `At HSU, we make a really big deal out of students getting involved. We have a few student volunteer teams that we would LOVE for you to be on. Sign up at the Snack Shack in the Student Ministries Hang Space or right here online!`

#### For Your Teens Section

**Heading:** `FOR YOUR TEENS`

**Retreat/Camp:**

- **Title:** `RETREAT/CAMP`
- **Text:** `Camp is one of the best things we do all year! We build and strengthen relationships with each other, make amazing memories, and grow in our understanding of what it means to live Spirit-directed.`

**Online Resources:**

- **Title:** `ONLINE RESOURCES`
- **Text:** `Join us on Facebook and Instagram to stay connected!`
- Social links: Facebook (highschoolunited), Instagram (cfcstudents1)

---

### 7.11 Request Prayer (/request-prayer/)

#### Hero Section

**Heading:** `REQUEST PRAYER`

#### Main Content

**Text:** `Prayer at Christian Fellowship Church is not something we do; it defines who we are. We are a praying people. Through prayer, we grow in our personal relationship with God. Through intercession, we partner with God to establish His heart, His will and His purposes in our families, our church, our city, our nation and the world. Prayer is engaging, exciting and rewarding.`

`Wherever you are in your personal prayer life, God wants to take you higher. God made you to have a joyful, life-giving connection to Him and to enjoy a sense of purpose and fulfillment when you pray.`

`To meet with a member of the prayer team one on one, please request an appointment. Or submit your prayer request for the prayer wall or privately so the team can pray for you.`

**Buttons:**

- `Post to Prayer Wall` → https://myrock.cfcwired.org/prayerrequest
- `Request Appointment` → https://myrock.cfcwired.org/carerequest/16

#### Prayer Warriors Section

**Heading:** `PRAYER WARRIORS`
**Text:** `Join us in praying for the needs in our church and in our community by logging into your myCFC and visiting our prayer wall.`
**Button:** `Prayer Wall` → https://myrock.cfcwired.org/PrayerWall

---

## 8. Common Components

### Buttons

#### Primary Button

- **Background:** #2c5aa0 (CFC Blue)
- **Text:** White
- **Border Radius:** ~0.375rem
- **Padding:** Comfortable padding (px-4 py-2 approx)
- **Hover:** Darker blue

#### Secondary/Outline Button

- **Background:** Transparent
- **Border:** 1px solid color
- **Text:** Color matches border
- **Variants:** outline-primary, outline-secondary, outline-light

#### Button Text Examples

- `Come Visit`
- `Watch Messages`
- `Learn More`
- `Sign Up`
- `Subscribe`
- `Get Directions`
- `Plan Your Visit`
- `Go Live`
- `See More Events`

### Cards

- **Background:** White
- **Border Radius:** Rounded corners (~0.5rem)
- **Shadow:** Subtle shadow
- **Image:** Top or side positioned
- **Content:** Title, description, button

### Accordion (FAQ)

- Used on Come Visit page for "What Should I Expect?" section
- Expandable/collapsible items
- Plus/minus or chevron icon indicator

### Section Layout Patterns

1. **Full-width hero** with overlay text
2. **Two-column** image + text (alternating)
3. **Three-column** card grids
4. **Single column** centered content
5. **Grid** for event cards

---

## 9. Icons & Social Media

### Social Media Icons (Footer)

- **Facebook:** https://www.facebook.com/cfcwired
- **Twitter/X:** https://twitter.com/cfcwired
- **YouTube:** https://youtube.com/cfcwired
- **Instagram:** https://instagram.com/cfcwired

### Icon Style

- Using icon font (likely Font Awesome or Bootstrap Icons)
- Circular or square icon containers
- White icons on dark footer background
- Hover effects

### Student Ministry Social (Middle/High School)

- **Facebook:** https://www.facebook.com/highschoolunited
- **Instagram:** https://www.instagram.com/cfcstudents1/

---

## 10. External Links & Integrations

### RockRMS Integration Points

| Feature           | URL Pattern                                                    |
| ----------------- | -------------------------------------------------------------- |
| Plan Your Visit   | https://myrock.cfcwired.org/pyv                                |
| Events Calendar   | https://myrock.cfcwired.org/events                             |
| Event Details     | https://myrock.cfcwired.org/EventDetail?EventOccurrenceId={id} |
| Group Finder      | https://myrock.cfcwired.org/groupfinder                        |
| Mobile Check-in   | https://myrock.cfcwired.org/mobilecheckin                      |
| Prayer Request    | https://myrock.cfcwired.org/prayerrequest                      |
| Prayer Wall       | https://myrock.cfcwired.org/PrayerWall                         |
| Care Request      | https://myrock.cfcwired.org/carerequest/{id}                   |
| Volunteer Sign Up | https://myrock.cfcwired.org/page/{id}?OpportunityId={id}       |

### External Services

| Service           | URL                                  |
| ----------------- | ------------------------------------ |
| Live Stream       | https://live.cfcwired.org/           |
| myCFC Portal      | https://my.cfcwired.org/             |
| Hispana CFC       | https://hispanacfc.com/              |
| Newsletter Signup | http://eepurl.com/hIOCKn (MailChimp) |

### App Store Links

| Platform          | URL                                                                            |
| ----------------- | ------------------------------------------------------------------------------ |
| Apple App Store   | https://apps.apple.com/us/app/christian-fellowship-ashburn/id1200541819        |
| Google Play Store | https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_D44NRF |

### Google Maps

- Address: 44505 Atwater Drive, Ashburn, VA 20147
- Direct Link: https://www.google.com/maps/place/Christian+Fellowship+Church/@39.0576887,-77.4615329,18z/

---

## Image Assets Needed

### Hero/Banner Images

- Homepage hero background
- Sermon series graphics (weekly rotation)
- Come Visit header images (Sundays, Wednesdays, Hispanic service, Online)

### Section Images

- Prayer image
- Community group photos (multiple)
- History photos (Beaumeade, Ground Breaking, Bird's eye view, Atwater)
- Kids ministry photos
- Youth ministry photos (Middle School, High School)

### Graphics

- CFC Logo (light and dark versions)
- Discipleship Pathway/Roadmap graphic
- Core Class graphics (Square One, Rooted, etc.)
- App store badges
- Social media icons

---

## Notes for Implementation

1. **Mobile Responsiveness:** Site uses responsive design; all pages should work on mobile
2. **RockRMS Compatibility:** HTML should be convertible to Lava templates
3. **Video Integration:** Some pages include embedded video players
4. **Form Integration:** Contact and prayer request forms integrate with Rock
5. **Dynamic Content:** Events, sermon series, and calendar data come from Rock
6. **Accessibility:** Include proper ARIA labels, heading hierarchy, and alt text

---

_End of Design Specifications Document_
