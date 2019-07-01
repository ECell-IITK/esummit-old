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
    id:""
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

  //The first word in the name of the variables tells
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
