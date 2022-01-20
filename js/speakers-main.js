//Array to store the data of the speakers
var arr = [];
var section = document.getElementById("all-speakers");
var m_contents = document.getElementById("model_contents");

//To add a speaker just add an element
// in the below array and add its
//respective properties like name, pic, about, etc
//(
//and keep the element id as NULL
// it will automatically generate it
arr.push(
  {
    name: "Yogi Adityanath",
    pic: "images/speakers/yogi-adityanath.jpg",
    about:
      "Yogi Adityanath is an Indian monk and Hindu nationalist politician serving as the 22nd and current Chief Minister of Uttar Pradesh, in office since 19 March 2017. He was appointed as the Chief Minister on 26 March 2017 after the Bharatiya Janata Party (BJP) won the 2017 State Assembly elections, in which he was a prominent campaigner. He has been the Member of Parliament from the Gorakhpur constituency, Uttar Pradesh, for five consecutive terms since 1998. Adityanath is also the Mahant or head priest of the Gorakhnath Math, a Hindu temple in Gorakhpur, a position he has held since the death of his spiritual father, Mahant Avaidyanath, in September 2014.",
    id: ""
  },
  {
    name: "P.S. Jayakumar",
    pic: "images/speakers/P.S. Jayakumar.jpg",
    about:
      "Mr. P. S. Jayakumar is the current CEO and MD of Bank of Baroda. Prior to this, he was the Co-founder and CEO of VBHC Value Budget Housing (VBHC), a leader in housing for low and moderate-income household from 2009 onwards. A Chartered Accountant by qualification, he was also the Co-founder and Non-Executive Promoter Director for Home First Finance Company, a housing finance institution regulated by the NHB. Spending over 23 years in Citibank in India and Singapore starting in 1986, he has held diverse assignments there, including Treasurer – consumer bank and Business Development Head. He also served as a Board Member in many of Citibank’s subsidiaries in India.In his long, successful career as a banker, he has contributed to severƒal innovations in retail banking in India. He was associated with the first asset securitization in India in 1991 and the first multi-lingual biometric ATM for the financially excluded in 2006.\n",
    id: ""
  },
  {
    name: "Mahesh Gupta",
    pic: "images/speakers/mahesh.jpg",
    about: "Mahesh Gupta, a first generation entrepreneur and the founder of Kent RO Systems Ltd., is an alumnus IIT Kanpur Mechanical Engineering department. Kent, founded in 1999, now sells more than 225,000 RO purifiers every year and holds around 40% market share in India. The “Pure Water Man of India”, as Dr. Gupta is also known as, has also been conferred upon by an Honorary Doctorate degree by Sri Sri University Orissa, for his contribution in providing safe and healthy drinking water in Rural and Urban areas. "
    ,
    id: ""
  },
  {
    name: "Sandeep Jain",
    pic: "images/speakers/sandeep-jain.jpg",
    about: "An IIT Roorkee alumnus and founder of GeeksforGeeks, Sandeep Jain loves to solve programming problems in most efficient ways. Apart from GeeksforGeeks, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor. His wide variety of articles not only indicate his technical skills but also his logical and creative skills since quite a few articles were also based on math and puzzles.",
    id: ""
  },
  {
    name: "Anshuman Singh",
    pic: "images/speakers/anshuman.jpeg",
    about: "This IIITH alumnus was the ACM ICPC World Finalist for consecutive years and and ranked third in the world by SPOJ. After leading a team which completely revamped Facebook’s messaging system and recruiting for Facebook India, he co-founded Interviewbit with an intent of restructuring the education system.",
    id: ""
  },
  {
    name: "Nipun Goyal",
    pic: "images/speakers/nipun.jpeg",
    about: "Nipun Goyal is the Co-founder of Curofy, where he leads business development, investor & media relations and overall business strategy. He is a graduate from IIT Delhi, 2012 batch, with major in Electrical Engineering and minor in Business Management. Today, Curofy is India’s largest community of verified doctors. For his work in the field of Social Media & Mobile Tech, Nipun was included in Forbes India's 30 under 30 batch of 2018",
    id: ""
  },

  {
    name: "Dr. Radhakrishnan Pillai",
    pic: "images/speakers/Dr.Radhakrishnan Pillai.jpg",
    about:
      "Radhakrishnan Pillai from the University of Mumbai, Department of Philosophy is the founder-director of Chanakya Institute of Public leadership (CIPL) a research based organisation that is working to promote Indian concepts in management. He has done an extensive research on “Kautilya’s Arthashastra”.He later proceeded to do his MA in Sanskrit and a PhD. in the subject. He is a certified managementconsultant from the International Institute of Management consultants. He is the director at SPM Foundation and founder Director of Atma Darshan a spiritual tourism company. He has also hosted a radio show “Ask Chanakya’ on Moksha Channel of Worldspace satellite radio which has completed nearly 100 shows. He has represented India in various national and international conferences including the Academy of Management (AOM) in San Antonio, Texas. His first book ‘Corporate Chanakya’ has been on the “best-seller” list since its launch in 2010 and used as a text book in various Business schools in India and abroad.",
    id: ""
  },

  {
    name: "Anand Chowdhary",
    pic: "images/speakers/Anand Chowdhary.jpg",
    about:
      "Today’s speaker is a creative technologist and entrepreneur from New Delhi, India, currently living in Enschede, the Netherlands. He is the co-founder and CEO of Oswald Labs, an award-winning accessibility technology company, and studies Creative Technology BSc at the University of Twente. His firm, Osward Labs offers a free online reading tool for people with dyslexia and other visual complications. This year, Oswald Labs’ founders have been featured in the Forbes 30 Under 30 Asia 2018 list. His creation has taken many differently abled people closer to a normal life. Please join me in welcoming Mr. Anand Chowdhary",
    id: ""
  },
  {
    name: "Marta Vanduzer-Snow",
    pic: "images/speakers/marta-vanduzer-snow.jpeg",
    about:
      "An American Ph.D student Marta Vanduzer-Snow moved to rural India four years ago thinking that the country needed a different approach altogether—”To be an invisible human who makes a difference on the ground.” Marta is a Rutgers University scholar who grew up in Boston. She has paved way for the construction of 82 low-cost evapotranspiration toilets in homes, and 1 in a primary school. She has also got done 122-meters of 10-feet-wide permeable roads constructed. What’s more? The construction cost of these projects have been half to one-third the cost of similar governmental projects in the villages of Rai Bareli and Amethi in Uttar Pradesh.",
    id: ""
  },
  {
    name: "Abha Bakaya",
    pic: "images/speakers/Abha Bakaya.jpg",
    about:
      "She started off as a print journalist at Business Today back in 2002 before embarking on a prolific television and online media career. She obtained her Bachelor’s degree in Media & Communications from the University of New South Wales, Sydney and completed a course in creative screenwriting at Columbia University. She joined NDTV Profit as a senior correspondent and anchored multiple shows like “Boss’ Days Out”. Using her experience of serving as a producer at CNBC TV18 in the past, she crafted “Gadget Guru”, one of the flagship shows of the network after being promoted to the post of Associate Producer of NDTV GOOD TIMES. After a couple of years at ET NOW, working as an anchor of primetime and morning stock market shows, she was awarded the post of Sr Anchor & Editor - New Economy at Bloomberg and took the organization to unimaginable heights. Apart from the shows focused on finance and general news, she spearheaded lifestyle shows like “Aspire” and evening talk shows like “The Date”. The self professed feminist couldn't just keep on working for the ‘man’, she left Bloomberg and founded AB Networks in Jan 2018 and plans to revolutionize online media",
    id: ""
  },
  //   {
  //     name: "Ankit Kawatra",
  //     pic: "images/speakers/Ankit Kawatra.jpg",
  //     about: " ",
  //     id: ""
  //   },
  //   {
  //     name: "Mr. Uday Sodhi",
  //     pic: "images/speakers/Mr.-Uday-Sodhi-2.jpg",
  //     about:
  //       "E Cell IITK graces the presence of Mr. Uday Sodhi, the Head of Digital Business and Executive Vice President, Sony Pictures Networks India Pvt. Ltd, as one of the chief guest of ESummit 2018. Mr. Sodhi is responsible for heading Sony Entertainment Television's digital business, including its entertainment site Sony LIV and sports site LIV Sports. He is also a ​mentor, an angel Investor and has built Internet Businesses in India in ecommerce, web services, online OTT digital media and online recruitment. He served as the Chief Executive Officer of portal HeadHonchos.com at ABC Consultants Pvt. Ltd. since December 21, 2010. He has over 14 years of experience in various Indian internet media giants",
  //     id: ""
  //   },
  {
    name: "Samir Cairae",
    pic: "images/speakers/samir.jpeg",
    about:
      "Mr. Samir Cairae, CEO of Diversified Metals, Vedanta Limited. He has spent more than two decades in managing complex, rapidly evolving and competitive global businesses. He has gained the reputation for mobilizing businesses, driving growth and profits and carrying out company-wide transformation programs.",
    id: ""
  },
  {
    name: "Bijay Sahoo",
    pic: "images/speakers/Bijay Sahoo.jpg",
    about:
      "Bijay Sahoo Bijay Sahoo,Group President - Strategic HR, Chairman's Office, Reliance Industries Limited, who strongly believes that education can change the destiny and direction of life, who has been contributing to many skill development programs will be with us this Summit as one of our main speakers for the event.",
    id: ""
  },
  {
    name: "Anisha Motwani",
    pic: "images/speakers/Anisha Motwani.jpeg",
    about:
      "A MBA graduate and a holder of Bachelor of Science, Anisha Motwani, ex-advisor with MAX group of companies, advisor for programmes like “Swachh Bharat Abhiyan” and “National Mission for Clean Ganga” with the World Bank, has been reigning over with her expertise to turn fresh insight into actional customer propositions and experience in ​ advertising, auto-manufacturing, financial and health services. Her independent mindset, the courage to believe and work on her ideas, the entrepreneurial knowledge she possesses makes her stand apart strong and bold in the market. The way she has broken stereotypes, stood firm in her decisions however different they might be, and hence is one of the magic ladies we look up to.",
    id: ""
  },
  {
    name: "Stefan Haves",
    pic: "images/speakers/stefan.jpeg",
    about: "Stefan Haves, the Director of Cirque, had completed his bachelors in theatre arts from university of california followed by MFA from Brandeis university. Being a scholar and guest professor in various institutes, he is a really knowledged man in the field of acting and theatre arts. Featuring as the comic act designer, has brought laughter and happiness to a lot of people.",
    id: ""
  },
  {
    name: "Vinayak Nath",
    pic: "images/speakers/vinayak.jpg",
    about: "He is the Managing Partner at Venture Catalysts and the Co-Founder of Venture Catalysts ,Uttar Pradesh. He is  also an Active Advisor and Mentor at several Investment Firms like, Indian Angel Network etc. His NGO, Vinayak Nath Foundation program NAUKRI MAHAKUMBH has been awarded by many state governments for its work in the field of employment generation across India. He has been Member Study Group, Planning Commission UP.",
    id: ""
  },
  {
    name: "Aditya Agrawal",
    pic: "images/speakers/aditya.jpeg",
    about: "He is the director of Emami Paper Mills Ltd , Emami Biotech Ltd., and Bengal Emami Infrastructure & Developers Ltd. Being extremely versatile and an expert at PR and management, Aditya heads the Cement, edible oil and bio diesel, health care and paper manufacturing businesses of the Group. He is the Honorary Consul of the Republic of Ethiopia in Kolkata.",
    id: ""
  },
  {
    name: "Kapil Ralzada",
    pic: "images/speakers/Kapil Razaida.jpg",
    about:
      "Mr. Kapil Raizada completed his B. Tech in Chemical Engineering from IIT Kanpur in 1993 which was followed by an MBA in IIM Bangalore in 1998. In 2012 he founded his startup, Railyatri, the travel e-commerce marketplace ​ that uses deep-analytics to help change the way real India travels long-distance. It provides the most up to date information to the 25 million passengers who board a train every day. Making Railyatri one of the best travel consumer platform, he is truly an inspiration to millions. It's an honour that you've graced the occasion with your presence.",
    id: ""
  },
  //   {
  //     name: "Keshav Bansal",
  //     pic: "images/speakers/Keshav Bansal.jpeg",
  //     about:
  //       "Keshav Bansal is an indian entrepreneur. He was born on 4th feb, 1992 and brought up in New Delhi​ . He did his schooling from ​ The Heritage School​ in ​ Vasant Kunj​ , ​ New Delhi​ . He pursued ​ Management Studies​ at ​ IILM Institute for Higher Education​ in ​ New Delhi​ after spending a year at the ​ Alliance Manchester Business School​ . He started with the Logistics Department of ​ Intex Technologies​ in the year 2012. He later worked with the marketing department and took over as director in the year 2013. In 2016, Bansal bought the ​ Rajkot​ based ​ IPL​ franchise ​ Gujarat Lions​ . The acquisition made him the youngest owner of an ​ IPL​ team. ​ GQ India​ named him as 9 among the ​ 50 Most Influential Young Indians ​ for 2016",
  //     id: ""
  //   },
  {
    name: "Mahima Kaul",
    pic: "images/speakers/mahima.jpeg",
    about:
      "Mahima Kaul co-founded one of India's largest C2C app - CoutLoot which leads the fashion re-commerce market in India. Backed by Facebook, CoutLoot has raised over $1M in it's recent pre-A round led by Chinese P2P Unicorn CashBUS. It's vision is to make products affordable to mass  markets at bargained prices. Popular among Indian youth, CoutLoot which has over a million users is revolutionising the people-to-people commerce segment with it's sophisticated AI enabled tech & focussed user targeting.",
    id: ""
  },
  {
    name: "Tarun Katial",
    pic: "images/speakers/Tarun Katial.jpg",
    about:
      "Tarun Katial is the Founder COO-CEO of India's largest radio network BIG FM across over 60 cities.He’s also set up the content incubator Thwink BIG as well as the BIG TV channels - Magic and Ganga. In 1998, Tarun earned an MBA in marketing from Mumbai League Trust. he spent three rewarding years with agencies like Saatchi & Saatchi, Enterprise Nexus Lowe and Ogilvy & Mather. He then joined the Star Network and rose to become the Head of Content and Communications across the network in India before moving to Sony Entertainment Television as Business Head. Tarun has an established record of accomplishment through successful shows.With an experience of over 2 decades in the industry, he has been instrumental in revolutionizing the media and entertainment landscape in India, along with being a Tedx speaker, Jury chair for the Ad club Abby and DMAI, committee member with FICCI and CII, Ex-Com at IAAA and Vice President at Association of Radio Operators for India (AROI)",
    id: ""
  },
  {
    name: "Tanmay Saksena",
    pic: "images/speakers/Tanmay Saksena.jpg",
    about: "He is an alumni of IIT Kanpur . he is  the Chief Operating Officer at 1mg, an e-commerce health care company based in Gurgaon, Haryana. He was the Global Business Head of Online Food Ordering at Zomato. He was also the Executive Producer at Disney Social Games.",
    id: ""
  },
  {
    name: "Amit Roy",
    pic: "images/speakers/amit.jpeg",
    about: "He is the director at PwC , India and was Chief Distribution Officer at Aegon life insurance ltd. He has charmed the market with his experience in Distribution Management, Customer Relationship  Management.",
    id: ""
  },
  //   {
  //     name: "Sumit Jain",
  //     pic: "images/speakers/Sumit Jain..jpg",
  //     about:
  //       "With titles like ​ Fortune 40 Under 40, Younger Achiever of the Year 2015' by National Awards for Excellence in Real Estate & Infrastructure and earning places in lists like Dataquest’s list of the 25 Hot Indian Web 2.0 start-ups, Business World Hottest Young Entrepreneurs, Power Profiles in India for the year of 2015 Mr. Sumit Jain is surely not an unfamiliar name to any keen Indian entrepreneur.​ Sumit graduated as a computer engineer from the ​ Indian Institute of Technology Roorkee​ in 2006. After working with ​ Oracle​ Server Technologies, he decided to start his own business and in 2007 he started ​ Commonfloor.com​ . As the co-founder and CEO, Sumit is responsible for driving the strategic direction for ​ Commonfloor.com​ as well as delivering on company goals.",
  //     id: ""
  //   },
  {
    name: "Sandeep Mathur",
    pic: "images/speakers/Sandeep Mathur.jpg",
    about:
      "Sandeep Mathur is the MD of LyncBiz Corporations.He is also president and CBO at FinUNO technologies. He is a global IT executive, who has, for the past 24 years, led large multicultural sales team in major IT corporations. He did B.E in electronics from B.M.S college of engineering from 1985-1990. He also spent few years in Harvard Business School and London Business School. From being sales manager at Tata Consulting services to MD of LyncBiz, he has gained a lot of experience and evolved as a successful entrepreneur. He is ex- Vice President and then MD of oracle India.",
    id: ""
  },
  {
    name: "Apoorv Ranjan Sharma",
    pic: "images/speakers/apoorv.jpeg",
    about: "Dr. Apoorv Sharma is cofounder & president of Venture Catalysts - Asia’ first integrated incubator and No. 1 Early Stage Investor in 2017 rated by leading national media. He is one of the founding fathers of startup ecosystem in India, he has been instrumental in developing startup ecosystem since early 2000. He has been pioneer in establishing incubators in India.",
    id: ""
  },
  {
    name: "Abhinav Pathak",
    pic: "images/speakers/Abhinav-Pathak.jpg",
    about:
      "This recipient of Forbes 30 under 30 is the CEO and co-founder of Perpule which has raised over USD 650,000. He left the post of analyst at Goldman Sachs after setting his sights on making cashiers obselete in the near future.",
    id: ""
  }
  //   {
  //     name: "Revathi Roy",
  //     pic: "images/speakers/Revathi Roy.jpg",
  //     about:
  //       "She is a social entrepreneur who has been working towards empowering urban poor women since 2007. She is best known for Asia’s first women taxi service, Viira in Mumbai, another taxi service, and Hey Deedee, India’s first all-women hyperlocal delivery start-up. Featuring on the Forbes India magazine, winning multiple women excellence awards undoubtedly puts her forward as one of the most “to-look-for” people. “Rock bottom became the solid foundation on which I rebuilt my life”- is one of the quotes hanging on Revathi’s wall and this clearly shows how instead of wallowing in self-pity, she picked up the broken pieces of her life and converted her passion into business. This unsung hero is one of the women we seek inspiration from and shout out to.",
  //     id: ""
  //   }
);
//Assign id to each element of the speaker array=> s0, s1, s2 etc
//and adds the respective speaker
for (var i = 0; i < arr.length; i++) {
  arr[i].id = "s" + i.toString();
  addspeaker(i);
}

//function will add a speaker by using
// the data from the Xth position of the array
function addspeaker(x) {
  //creates an model element to be appended to the m_content class=============================

  // The first word in the name of the variables tells
  // about the type of element
  // and the numbers after these tells us about the
  // position with respect to the parent element
  var div1 = document.createElement("div");
  div1.classList.add("md-modal");

  //can change this md-effect-8 class if want an different effect
  div1.classList.add("md-effect-8");
  div1.setAttribute("id", arr[x].id);
  var div11 = document.createElement("div");
  div11.classList.add("md-content");
  var div111 = document.createElement("div");
  div111.classList.add("md-box-wrapper");
  var div112 = document.createElement("div");
  div112.classList.add("md-close-wrapper");
  var button1121 = document.createElement("button");
  button1121.classList.add("md-close");
  button1121.innerText = "Close";
  var div1111 = document.createElement("div");
  div1111.classList.add("md-pic-wrapper");
  var div1112 = document.createElement("div");
  div1112.classList.add("md-disc");
  div1112.innerHTML = arr[x].about;
  var img11111 = document.createElement("img");
  img11111.setAttribute("src", arr[x].pic);
  var h111112 = document.createElement("h2");
  h111112.innerText = arr[x].name;
  div1111.appendChild(img11111);
  div1111.appendChild(h111112);
  div111.appendChild(div1111);
  div111.appendChild(div1112);
  div112.appendChild(button1121);
  div11.appendChild(div111);
  div11.appendChild(div112);
  div1.appendChild(div11);
  m_contents.appendChild(div1);
  //-------------------------------------------------------------------

  //Creates a new row if previous row is completely filled
  if (x % 4 == 0) {
    var row = document.createElement("div");
    row.classList.add("row");
    var bgrid = document.createElement("div");
    bgrid.classList.add("bgrid-fourth");
    bgrid.classList.add("s-bgrid-third");
    bgrid.classList.add("tab-bgrid-half");
    bgrid.classList.add("mob-bgrid-whole");
    bgrid.classList.add("group");
    //adds a pseudo class 'row-detect' to detect row
    bgrid.classList.add("row-detect");
    row.appendChild(bgrid);
    section.appendChild(row);
  }
  //============================================================

  // Creates an element to be appended to the row
  var bid = "b" + arr[x].id;
  var link = "javascript:run_model('" + arr[x].id + "','" + bid + "')";
  var ddiv1 = document.createElement("div");
  ddiv1.classList.add("bgrid");
  ddiv1.classList.add("member");
  var da11 = document.createElement("a");
  da11.setAttribute("id", bid);
  da11.setAttribute("href", link);
  var ddiv111 = document.createElement("div");
  ddiv111.classList.add("speaker-pic-wrapper");
  var dimg1111 = document.createElement("img");
  dimg1111.setAttribute("src", arr[x].pic);
  dimg1111.classList.add("speaker-pic");
  var ddiv112 = document.createElement("div");
  ddiv112.classList.add("speaker-name");
  var dh21121 = document.createElement("h2");
  dh21121.innerText = arr[x].name;
  ddiv111.appendChild(dimg1111);
  ddiv112.appendChild(dh21121);
  da11.appendChild(ddiv111);
  da11.appendChild(ddiv112);
  ddiv1.appendChild(da11);

  //Detect The last row by the "row-detect" class
  //and adds the created element
  var sbgrid = document.getElementsByClassName("row-detect");
  var num = sbgrid.length - 1;
  sbgrid[num].appendChild(ddiv1);
}


var arrPresent = [];
var section_present = document.getElementById("all-speakers-present");
var m_contents_present = document.getElementById("model_contents_present");

//To add a speaker just add an element
// in the below array and add its
//respective properties like name, pic, about, etc
//(
//and keep the element id as NULLF
// it will automatically generate it
arrPresent.push(
  {
    name: "Srikanth Gopalakrishnan",
    pic: "images/speakers/images-speakers/Srikanth Gopalakrishnan. CIO, Legal, HR and communications, Deutsche bank.png",
    about: "Since joining Deutsche Bank in 2020 as CIO for HR, Legal and Communications, Srikanth has been involved in evolving the Workday footprint in HR. He has also been managing the Legal portfolio with the rollout of the new Document Management system for the bank. Srikanth has had a wealth of experience in the HR Technology domain with over 22 years in that space. He has been involved in large HR technology projects in the US. He has been building HR products for Peoplesoft, Oracle, SAP and Success Factors. He also has spent the last 5 years building products for manufacturing using IoT, Machine Learning and building Business networks at SAP for Industry 4.0.",
    id: ""
  },
  {
    name: "Manu Rekhi",
    pic: "images/speakers/images-speakers/manu.jpg",
    about: "\"Manu Rekhi, a Venture Investor, is the Partner & Managing Director at Inventus Capital Partners. He has worked across Product Management, General management, and marketing segmentation, and has served as a top-level executive at companies namely Myspace, Google, NewsCorp, 6waves Lolapps Inc & WineGlobe Inc. He's a Boston University graduate and did the Berkeley-Columbia Executive MBA program by HaaS school of business and Columbia Business School.\"",
    id: ""
  },
  {
    name: "Amit Agarwal",
    pic: "images/speakers/present/amitAgarwal.jpg",
    about: "A banking & finance veteran with over 15 years of experience in management consulting and strategy, Amit Kumar Agarwal is the Co-founder and CEO of NoBroker.com, the world’s largest peer-to-peer real estate portal. He is responsible for defining and guiding the overall vision and direction at NoBroker.com and spearheads the company’s corporate strategies. Amit is an alumnus of the Indian Institute of Technology, Kanpur, and IIM, Ahmedabad. He was associated with the Management Consulting division of PricewaterhouseCoopers’ Banking and Financial Services vertical. He worked with many leading Indian and foreign banks during his eight years at PwC, leading consulting teams and working directly with top CXOs on critical aspects such as formulating business strategy and enhancing on-ground profitability.",
    id: ""
  },
  {
    name: "Abhisht Arora",
    pic: "images/speakers/images-speakers/abhisht.jpg",
    about: "",
    id: ""
  },
  {
    name: "Manpreet Bhuie",
    pic: "images/speakers/images-speakers/manpreet.jpg",
    about: "Since joining Deutsche Bank in 2020 as CIO for HR, Legal and Communications, Srikanth has been involved in evolving the Workday footprint in HR. He has also been managing the Legal portfolio with the rollout of the new Document Management system for the bank. Srikanth has had a wealth of experience in the HR Technology domain with over 22 years in that space. He has been involved in large HR technology projects in the US. He has been building HR products for Peoplesoft, Oracle, SAP and Success Factors. He also has spent the last 5 years building products for manufacturing using IoT, Machine Learning and building Business networks at SAP for Industry 4.0.",
    id: ""
  },
  {
    name: "Jay Vikram Bakshi",
    pic: "images/speakers/images-speakers/jay-vikram.jpg",
    about: "Jay is founder president of DIGIQOM SOLUTIONS (www.digiqom.com), a leading digital marketing and social media communications advocacy consulting firm, focused at enabling corporates, institutions, and governments across the world – communicate for results. A senior management professional with a track record of over 25 years in media, marketing, and corporate communications, Jay, in addition to spearheading innovation in Telecom, Software, and Brand creation, has been associated with sustainability and development organizations as the leader of Corporate Social Responsibility initiatives in every corporate he served in.",
    id: ""
  },
  {
    name: "Ninad Karpe",
    pic: "images/speakers/images-speakers/ninad.jpg",
    about: "Ninad Karpe is a Partner at 100X.VC – a VC firm, which invests in early stage start-ups and has invested in 70 startups so far. It aims to invest in 100 startups every year. Karpe was the MD & CEO of Aptech Ltd. for more than seven years, till 2016. He previously served CA Technologies, a US headquartered leader in software products, as Managing Director of India. Karpe has authored a book on business strategies, titled “BOND to BABA”, which received rave reviews and was listed by Amazon in its prestigious list of “Memorable books of 2018”. He was the Chairman, Western Region of the Confederation of Indian Industries (CII) for 2017-18, an honorary position. Besides his day job as a VC, Karpe is passionate about supporting theatre and has produced two Marathi plays, which have received wide acclaim. An avid follower of F1 racing, he switches off his mobile phone during race days.",
    id: ""
  },
  {
    name: "Anil Joshi",
    pic: "images/speakers/images-speakers/anil-joshi.jpg",
    about: "Anil Joshi is the Founder and Managing Partner at Unicorn India Ventures, a leading Venture Capital Fund focusing on early-stage investments in tech companies. With over two decades of experience in the field, Anil pioneered angel investments in India as the head of operations and President at Mumbai Angels, one of the most reputable and prolific Angel Investment forums in India. As an early mover in early 2000 in this segment, Anil was investing in budding companies even before venture investment had taken any formal shape in India. Within the start-up ecosystem, Anil has been at the helm of over 100 venture-financing deals. He serves on the board of several companies in the field of Fintech, Robotic, Meditech, IOT, Bigdata, SaaS and is involved with multiple incubation centres as a board member and mentor in India as well as internationally. Additionally, he also advices the government and industry bodies on start-ups regarding policy. Young entrepreneurs draw upon his vast experience for guidance and strategic direction for their own start-ups. As an accomplished public speaker with informed opinions about the sector, he is much sought after at start-up events both in the domestic and the international circuit. His speaking engagements have taken him to countries like Singapore, Malaysia, USA, Canada, China, France, Australia and the Middle East",
    id: ""
  },{
    name: "Harsh Pamnani",
    pic: "images/speakers/images-speakers/Harsh-Picture-RC-Fellowship.jpg",
    about:
      "Author of Booming Brands and Booming Digital Stars",
    id: ""
  },{
    name: "Aman Dhall",
    pic: "images/speakers/aman-dhall.jpg",
    about:
    "Aman Dhall is an Indian communications specialist, widely known for his role in building the insurtech brand, Policybazaar.com.The company has emerged as a go to digital platform for death, disease & disability products in India, and is currently the most valued insurtech entity in the world, after its recent listing on the Indian bourses.",
    id: ""
  },
  {
    name: "Ranjith Mukundan",
    pic: "images/speakers/images-speakers/ranjith.jpg",
    about: "Ranjith, an alum from Bangalore Institute of Technology, is the CEO and Co-founder at Stellapps Technologies. Earlier, he was the Practice Head at Wipro in the Communications domain. Ranjith is currently working on digitizing the dairy industry.",
    id: ""
  },
  {
    name: "Vipin Pathak",
    pic: "images/speakers/images-speakers/vipin-pathak.jpg",
    about: "Mr. Vipin Pathak is the Co-founder and CEO of Care24. Mr. Vipin Pathak (BT/CE/2006) was honored with the Businessworld Young Entrepreneur Award. Founded in 2014, Care24 is not only one of India’s top home healthcare companies but also one of India’s pioneering venture capital-backed startups in this space.",
    id: ""
  },
  {
    name: "Priya Prakash",
    pic: "images/speakers/images-speakers/priya-prakash.jpg",
    about: "Priya Prakash is a healthcare entrepreneur and the Founder and CEO of HealthSetGo. HealthSetGo is India's largest healthcare organisation for school with the vision to establish India's largest network of health promoting schools. HealthSetGo currently operates in over 77 cities across India with 250,000+ students and parents with it’s flagship program CARE which monitors the healthy growth of students at School and generates Intelligent insights for Parents to empower them to take care of their child’s health as well as impart the right Health Education customised to the age of the child. Priya is a Delhi State Level Weightlifter, Tedx Speaker, Crossfit L1 Trainer , and an avid health blogger. She was honoured as Forbes Under 30 Asia 2018 in Healthcare and Sciences and awarded the Unilever Young Entreprenuer of the Year in 2018.",
    id: ""
  },
  {
    name: "Tamanna Singh",
    pic: "images/speakers/images-speakers/Tamanna Singh, Founder & CEO, UberLux.jpg",
    about:
      "Tamanna Singh, is an Indian Business Woman, a President of India Awardee, Under 40 Top 40 business women awardee, a well-known mentor, motivational speaker, investor, philanthropist with over 20 yrs. Of experience. She is Founder and Managing Director of The Uberlux group of Companies .She along with her husband Col. Gautam Singh, formed UberLux in 2011, with the vision to pioneer the concept of affordable luxury in India. The company presently has seven brands under its wings .Recently, the company diversified its portfolio to foray into Real estate projects and exports in Australia. An MBA in HR & marketing, Tamanna also studied Cosmetology from Paris. She has conceptualized and executed a number of innovative brand management and global market entry strategies for some of the world’s best known brands as well as start-ups and entrepreneurs. She has also collaborated with leading thought leaders of Harvard Business School, Indian Institute of Management, Indian Institute of Technology and some other leading management institutes on case studies and teaching programmes. She contributes regularly for various articles for magazines, websites and papers on entrepreneurship. She is also a subject matter expert in Beauty, wellness, fashion, women entrepreneurship, scaling up businesses, negotiation skills, how to bootstrap your start-up, fund raising, pitch deck, etc. She has already empowered over 15,000 women through various platforms .Over the last 15 years she has been highly recognized and awarded both nationally and internationally for her work on women empowerment and upliftment.",
    id: ""
  },
  {
    name: "Amar Nagaram",
    pic: "images/speakers/images-speakers/amar-nagaram.jpg",
    about: "Amar Nagaram is an Indian Business Executive. He was the chief executive officer (CEO) of Myntra.com, succeeding Ananth Narayanan in 2019. Before becoming CEO, he was the vice president of Flipkart Technology, responsible for building and running the consumer products. He is regarded as one of the very vocal voices on technology and its role in modern business.",
    id: ""
  },

  {
    name: "Alok Bansal",
    pic: "images/speakers/images-speakers/Alok-Bansal.jpg",
    about: "Alok Bansal is the Whole-time Director & CFO, PB Fintech Limited that owns India’s leading insurtech brand Policybazaar.com & leading lending marketplace Paisabazaar.com. He heads various functions including corporate finance and controllership, tax, treasury, strategic planning, and analytics. He firmly believes that the primary responsibility of a CFO is to accomplish business goals rather than just concentrating on functional goals. According to him, the success of any business lies in working with a team with different mindsets, allowing them the flexibility and freedom to experiment, innovate and contribute. Alok’s core strengths lie in strategic thinking, process control, and execution. Prior to joining PolicyBazaar.com, Alok has worked in various cross-functional leadership roles with Mahindra & Mahindra, iGate Global Solutions and GE. He was recognized as one of the top 100 CFOs in the country by the CFO India Magazine in 2016. Alok has a special interest in science and technology, economic empowerment, education and civil rights.",
    id: ""
  },

  {
    name: "Niranjan Gupta",
    pic: "images/speakers/images-speakers/niranjan.jpg",
    about: "Niranjan Gupta is CFO at Hero Motocorp Limited and plays Senior leadership roles in finance and procurement , covering a wide range from start up businesses ( water purifier in HUL ) to large scale established categories ( Home & personal care ) , and covering both local and global responsibilities. Width of experience covers wide ranging finance roles ; P/L balance sheet management, acquisitions and disposals, setting up financially viable models for start ups, driving financial metrics/performance in business and controls & governance. Experience in procurement has given deep understanding of supply chain, and external market forces which influence business performance; a crucial element for a modern day CFO.",
    id: ""
  },

  {
    name: "Saket Modi",
    pic: "images/speakers/images-speakers/Saket Modi, Founder & CEO, Lucideus.jpg",
    about: "",
    id: "Saket Modi is the Co-founder and CEO of Safe Security, a Cybersecurity and Digital Business Risk Quantification platform company. A computer science engineer by education, he founded Safe Security in 2012 while in his final year of engineering. Incubated in IIT Bombay and backed by Cisco’s former Chairman and CEO John Chambers, Safe Security protects the digital infrastructure of multiple Fortune 500 companies around the world with its cyber risk measurement and mitigation platform called SAFE. Saket is a part of Fortune Magazine’s 40-under-40, Entrepreneur Magazine’s 35-under-35, Forbes Magazine’s 30-under-30 lists, among others."
  },

  {
    name: "Sandeep Jain",
    pic: "images/speakers/images-speakers/Sandeep Jain, CEO, GFG.jpg",
    about: "The founder and CEO of GeeksforGeeks, a widely popular computer science portal created by geeks, for geeks. A postgraduate from IIT Roorkee, he has worked at D.E Shaw and Co., and at JIIT Noida as an assistant professor. His passion for imparting quality and affordable programming knowledge and a vision to build a gigantic network of geeks has helped GeeksforGeeks mark its incredible presence in the e-learning world, helping innumerable students and coding enthusiasts build a successful career in the tech world.",
    id: ""
  },

  {
    name: "Tapan Singhel",
    pic: "images/speakers/images-speakers/Tapan-singhel.jpg",
    about: "Tapan Singhel has a rich experience of over 30 years in the insurance industry. He is one of the founding members of Bajaj Allianz General Insurance and has been with the Company for over 20 years. As its MD & CEO for close to 10 years, Tapan has built the organisation to where it is today with close to 11 crore customers and a wide distribution network spanning across more than 1,000 locations across the country. Customer obsession and passion to do good for the people are what drives Tapan and his success in the industry. Under his aegis, the Company has been recognised as one of the best in Asia. An avid social media influencer, Tapan has over 6.8 lakh followers on LinkedIn and has been recognised as the LinkedIn’s Top Voice in India in both 2018 and 2019. He also chairs the CII National Committee on Insurance and Pensions. He recently won the ‘Lifetime Achievement Award’ at the 25 th Asia Insurance Industry Awards 2021. He has also been honoured as the ‘Personality of the Year’ at Quantic’s BFSI Excellence Awards 2021, India Insurance Summit & Awards 2019, 22nd Asia Insurance Industry Awards 2018 and Indian Insurance Summit 2017 and the ‘Most Promising Business Leader’ of Asia at The Economic Times Global Business Summit 2018. He has also won ‘CEO of the Year’ for India and Asia-Pacific region at the IDC Future Enterprise Awards 2021, 3 rd Annual Insurance India Summit & Awards 2018 and Insurance Asia Awards.",
    id: ""
  },

  {
    name: "Sanjay Mohan",
    pic: "images/speakers/images-speakers/sanjay.jpg",
    about: "",
    id: ""
  },

  {
    name: "Ashutosh Gupta",
    pic: "images/speakers/images-speakers/ashutosh.jpg",
    about: "",
    id: ""
  },

  {
    name: "Suchishree Chatterjee",
    pic: "images/speakers/images-speakers/Suchishree-Chatterjee-scaled.jpg",
    about: "Suchi is a technologist with over 25 years’ experience. Suchi has taken over as the Head of India Technology Centre as well as the CIO for RFT Global Data Ingestion She is globally responsible for data platforms and services within the Risk, Finance, and Treasury Technology organization and responsible for the execution of the Technology Centre strategy for India. A post-graduate in Computer Science, Suchi has extensive experience in implementing, developing, and managing trade lifecycle platforms across all asset classes and has a very good understanding of the Front2Back data and process flows within the Investment and Corporate Banking domains. For the past few years, she has been working to simplify the fragmented data sourcing landscape across the key reporting functions within the Bank. At the same time, she has helped build the India technology Centre and worked on its vision and mission. She is passionate about the Diversity & Inclusion agenda within the bank and is the sponsor for the India franchise across DbGO, dbEnable and dbPride pillars.",
    id: ""
  },

  {
    name: "Ruchi Deepak",
    pic: "images/speakers/images-speakers/Ruchi-Deepak.jpg",
    about: "",
    id: ""
  },

  {
    name: "Rahul Garg",
    pic: "images/speakers/images-speakers/rahul.jpg",
    about: "",
    id: ""
  },

  {
    name: "Mikhil Innani",
    pic: "images/speakers/images-speakers/mikhil.jpg",
    about: "Mikhil Innani is the Managing Director & CEO at Apollo Finvest, a public listed NBFC. He has 10+ years experience of building products from scratch to an unprecedented scale of 250+ million monthly active users. He is currently building the \"AWS for Lending\" platform which enables any company to start digital lending in under 48 hours Prior to Apollo Finvest, Mikhil headed consumer products and growth at Hotstar (India’s largest OTT platform) and CouponDunia (Acquired by Times Internet). He also co-founded PharmEasy (India’s largest online medicine delivery startup valued at >$1 Billion) Mikhil holds a Master's degree in Information Systems from Carnegie Mellon University and a Bachelor's degree from Mumbai University",
    id: ""
  },

  {
    name: "Vishal Chaudhary",
    pic: "images/speakers/images-speakers/vishal.jpg",
    about: "Vishal Chaudhary is Co-Founder at Zetwerk. He has worked as Lead, Organization & Business Engine (OBE) at RIVIGO, as Manager at ITC Limited. He holds Master’s from Indian Institute of Technology, Kharagpur.",
    id: ""
  },

  {
    name: "Harishankaran",
    pic: "images/speakers/images-speakers/Harishankaran, Founder, InterviewStreet(Hackerrank).jpg",
    about: "Harishankaran is Co-founder and CTO at HackerRank. He has Scaled the product from 0 users to thousands of users per day and wrote an in-house code checker which is the core of hackerrank.com. Responsible for product delivery and management. He has also worked in IBM as a Software Developer and Build Engineer and with DB2, Websphere, Cognos, and Datastage",
    id: ""
  },
  {
    name: "Murugavel Janakiraman",
    pic: "images/speakers/images-speakers/murugavel.jpg",
    about: "",
    id: ""
  },
  {
    name: "Rajneesh Jain",
    pic: "images/speakers/images-speakers/Rajneesh.jpg",
    about: "",
    id: ""
  }
);


for (var i = 0; i < arrPresent.length; i++) {
  arrPresent[i].id = "sp" + i.toString();
  addspeakerNew(i);
}

//function will add a speaker by using
// the data from the Xth position of the array
function addspeakerNew(x) {
  //creates an model element to be appended to the m_content class=============================

  // The first word in the name of the variables tells
  // about the type of element
  // and the numbers after these tells us about the
  // position with respect to the parent element
  var div1 = document.createElement("div");
  div1.classList.add("md-modal");

  //can change this md-effect-8 class if want an different effect
  div1.classList.add("md-effect-8");
  div1.setAttribute("id", arrPresent[x].id);
  var div11 = document.createElement("div");
  div11.classList.add("md-content");
  var div111 = document.createElement("div");
  div111.classList.add("md-box-wrapper");
  var div112 = document.createElement("div");
  div112.classList.add("md-close-wrapper");
  var button1121 = document.createElement("button");
  button1121.classList.add("md-close");
  button1121.innerText = "Close";
  var div1111 = document.createElement("div");
  div1111.classList.add("md-pic-wrapper");
  var div1112 = document.createElement("div");
  div1112.classList.add("md-disc");
  div1112.innerHTML = arrPresent[x].about;
  var img11111 = document.createElement("img");
  img11111.setAttribute("src", arrPresent[x].pic);
  var h111112 = document.createElement("h2");
  h111112.innerText = arrPresent[x].name;
  div1111.appendChild(img11111);
  div1111.appendChild(h111112);
  div111.appendChild(div1111);
  div111.appendChild(div1112);
  div112.appendChild(button1121);
  div11.appendChild(div111);
  div11.appendChild(div112);
  div1.appendChild(div11);
  m_contents_present.appendChild(div1);
  //-------------------------------------------------------------------

  //Creates a new row if previous row is completely filled
  if (x % 4 == 0) {
    var row = document.createElement("div");
    row.classList.add("row");
    var bgrid = document.createElement("div");
    bgrid.classList.add("bgrid-fourth");
    bgrid.classList.add("s-bgrid-third");
    bgrid.classList.add("tab-bgrid-half");
    bgrid.classList.add("mob-bgrid-whole");
    bgrid.classList.add("group");
    //adds a pseudo class 'row-detect' to detect row
    bgrid.classList.add("row-detect-present");
    row.appendChild(bgrid);
    section_present.appendChild(row);
  }
  //============================================================

  // Creates an element to be appended to the row
  var bid = "b" + arrPresent[x].id;
  var link = "javascript:run_model('" + arrPresent[x].id + "','" + bid + "')";
  var ddiv1 = document.createElement("div");
  ddiv1.classList.add("bgrid");
  ddiv1.classList.add("member");
  var da11 = document.createElement("a");
  da11.setAttribute("id", bid);
  da11.setAttribute("href", link);
  var ddiv111 = document.createElement("div");
  ddiv111.classList.add("speaker-pic-wrapper");
  var dimg1111 = document.createElement("img");
  dimg1111.setAttribute("src", arrPresent[x].pic);
  dimg1111.classList.add("speaker-pic");
  var ddiv112 = document.createElement("div");
  ddiv112.classList.add("speaker-name");
  var dh21121 = document.createElement("h2");
  dh21121.innerText = arrPresent[x].name;
  ddiv111.appendChild(dimg1111);
  ddiv112.appendChild(dh21121);
  da11.appendChild(ddiv111);
  da11.appendChild(ddiv112);
  ddiv1.appendChild(da11);

  //Detect The last row by the "row-detect" class
  //and adds the created element
  var sbgrid = document.getElementsByClassName("row-detect-present");
  var num = sbgrid.length - 1;
  sbgrid[num].appendChild(ddiv1);
}
