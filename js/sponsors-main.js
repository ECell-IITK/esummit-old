var spons = [];
var sponsors_gallery = document.getElementById("sponsors_gallery");

// To add a speaker just add an element
// in the below spons and add its
// respective properties name, pic, about, etc
// (
// and keep the element id as NULL
// it will automatically generate it

spons.push(
    {
        name: "Department of Service and Technology, Govt. of India",
        pic: "images/sponsors/2019/dst.png",
        cat: "",
        url: "http://www.dst.gov.in",
        id: ""
    }, {
        name: "JK Cements",
        pic: "images/sponsors/2019/jkcements.jpg",
        cat: "Co-Title Sponsor",
        url: "https://www.jkcement.com/",
        id: ""
    }, {
        name: "Incubation and Innovation, IITK",
        pic: "images/sponsors/2019/incubation.png",
        url: "http://www.iitk.ac.in/siic/d/incubation",
        cat: "Incubation Partner",
        id: ""
    },
    {
        name: "nascom 1000",
        pic: "images/sponsors/2019/nasscom10000.png",
        url: "http://10000startups.com/",
        cat: "Incubation Partner",
        id: ""
    }, {
        name: "Cadmatic Software",
        pic: "images/sponsors/2019/cadmatic.jpg",
        cat: "Associate Sponsor",
        url: "https://www.cadmatic.com/",
        id: ""
    }, {
        name: "Prime83",
        pic: "images/sponsors/2019/prime83.jpg",
        cat: "Pitchprime Partner",
        url: "https://www.iitk.ac.in/dora/prime-83",
        id: ""
    }, {
        name: "SBI",
        pic: "images/sponsors/2019/sbi.png",
        cat: "Powered By",
        url: "https://sbi.co.in/",
        id: ""
    }, {
        name: "Prithvi.AI",
        pic: "images/sponsors/2019/prithvi.PNG",
        cat: "Workshop Partner",
        url: "http://prithvi.ai/",
        id: ""
    }, {
        name: "Amazon Web Service",
        pic: "images/sponsors/2019/aws.png",
        cat: "Cloud Computing Partner",
        url: "https://aws.amazon.com/",
        id: ""
    }, {
        name: "PayTM : build for India",
        pic: "images/sponsors/2019/paytmbfi.png",
        cat: "Outreach Partner",
        url: "https://www.meetup.com/Paytm-Build-for-India/",
        id: ""
    },
    {
        name: "Dare2Compete",
        pic: "images/sponsors/2019/d2c.png",
        cat: "Outreach Partner",
        url: "https://dare2compete.com/",
        id: ""
    }, {
        name: "startuplab",
        pic: "images/sponsors/2019/tsl.png",
        url: "https://www.thestartuplab.in/",
        cat: "Outreach Partner",
        id: ""
    },
    {
        name: "internshala",
        pic: "images/sponsors/2019/Internshala_company_logo.png",
        url: "https://internshala.com/",
        cat: "Outreach Partner",
        id: ""
    },
    {
        name: "venture Catalyst",
        pic: "images/sponsors/2019/venturecatalysts.png",
        url: "https://venturecatalysts.in/",
        cat: "Upstart Partner",
        id: ""
    },
    {
        name: "Lead Angels",
        pic: "images/sponsors/2019/lead-angels.png",
        url: "https://www.leadangels.in/",
        cat: "Upstart Partner",
        id: ""
    },
    {
        name: "Ekcle",
        pic: "images/sponsors/2019/ekcle.jpg",
        url: "https://www.ecelliitk.org/esummit/upstart/associates.html#",
        cat: "Upstart Partner",
        id: ""
    },
    {
        name: "Unitus",
        pic: "images/sponsors/2019/unituscapital.png",
        url: "http://unituscapital.com/",
        cat: "Upstart Partner",
        id: ""
    },
    {
        name: "Ivycap venture",
        pic: "images/sponsors/2019/ivycap.png",
        url: "http://www.ivycapventures.com/",
        cat: "Upstart Partner",
        id: ""
    }, {
        name: "chandigarh angel network",
        pic: "images/sponsors/2019/can.png",
        url: "https://chandigarhangelsnetwork.com/",
        cat: "Mentorship Partner",
        id: ""
    }
    // }, {
    //     name: "kyt",
    //     pic: "images/sponsors/2019/astiInfo.jpeg",
    //     url: "",
    //     cat: "",
    //     id: ""
    // },
    , {
        name: "OmniBulls",
        pic: "images/sponsors/2019/omnibulls.jpg",
        cat: "Business Partner",
        url: "https://omnibulls.com/",
        id: ""
    },
    {
        name: "91 springboard",
        pic: "images/sponsors/2019/91springboard.png",
        url: "https://www.91springboard.com/",
        cat: "Community Partner",
        id: ""
    }, {
        name: "OYO",
        pic: "images/sponsors/2019/oyo.jpeg",
        cat: "Community Partner",
        url: "https://www.oyorooms.com/officialoyoblog/2019/07/16/introducing-oyo-workspaces-a-better-way-to-work-for-everyone-in-india",
        id: ""
    },
    {
        name: "Morris Garages : Hector",
        pic: "images/sponsors/2019/morrisG.jpg",
        cat: "Gold Partner",
        url: "https://www.mgmotor.co.in/vehicles/mghector",
        id: ""
    },
    {
        name: "ibhubs",
        pic: "images/sponsors/2019/iBhubs_logo.svg",
        url: "https://ibhubs.co/",
        cat: "Business Partner",
        id: ""
    },
    {
        name: "Asti Infotech",
        pic: "images/sponsors/2019/astiInfo.jpeg",
        url: "https://www.astiinfotech.com/",
        cat: "Gold Partner",
        id: ""
    },
    {
        name: "bikaji",
        pic: "images/sponsors/2019/bikaji.png",
        cat: "Snacks Partner",
        url: "https://www.bikaji.in/",
        id: ""
    },
    {
        name: "malwa",
        pic: "images/sponsors/2019/malwa.png",
        cat: "Snacks Partner",
        url: "https://www.thetasteofmalwa.com/",
        id: ""
    },
    {
        name: "Inc42",
        pic: "images/sponsors/2019/inc42.png",
        cat: "Media Partner",
        url: "https://inc42.com/",
        id: ""
    },
    {
        name: "Your Story",
        pic: "images/sponsors/2019/yourStory.png",
        cat: "Online Media Partner",
        url: "https://yourstory.com/",
        id: ""
    }, {
        name: "Blogadda",
        pic: "images/sponsors/2019/blogadda.jpg",
        cat: "Blogger Outreach Partner",
        url: "https://www.blogadda.com/",
        id: ""
    }, {
        name: "AU",
        pic: "images/sponsors/2019/amarujjala.jpg",
        cat: "Offline Media Partner",
        url: "https://www.amarujala.com/",
        id: ""
    },
    {
        name: "Global Student Entrepreneur Awards",
        pic: "images/sponsors/2019/eogsea.jpg",
        cat: "",
        url: "https://gsea.org/",
        id: ""
    }, {
        name: "IMS",
        pic: "images/sponsors/2019/ims.png",
        cat: "",
        url: "https://www.imsindia.com/",
        id: ""
    }, {
        name: "Silicon India",
        pic: "images/sponsors/2019/siliconindia.png",
        cat: "",
        url: "https://www.siliconindia.com/",
        id: ""
    }, {
        name: "LIC",
        pic: "images/sponsors/2019/lic.png",
        cat: "Insurance Partner",
        url: "https://www.licindia.in/",
        id: ""
    }, {
        name: "The Souled Store",
        pic: "images/sponsors/2019/souled.png",
        cat: "",
        url: "https://www.thesouledstore.com/",
        id: ""
    }, {
        name: "Zebronics",
        cat: "Internet Connectivity Partner",
        pic: "images/sponsors/2019/zebronics.png",
        url: "https://zebronics.com/",
        id: ""
    },{
        name: "Ambition",
        cat: "Education Partner",
        pic: "images/sponsors/2019/ambition.png",
        url: "",
        id: ""
    }

);
//Assign id to each element of the speaker sponsay=> s0, s1, s2 etc
//and adds the respective speaker
for (var i = 0; i < spons.length; i++) {
    spons[i].id = "s" + i.toString();
    addSponsor(i);
}

function addSponsor(index) {
    var div = document.createElement("div");
    div.classList.add("flex-item");

    var a1 = document.createElement("a");
    if (spons[index].url) {
        a1.setAttribute("href", spons[index].url);
        a1.setAttribute("target", "_blank");
    } else {
        a1.setAttribute("href", "#");
    }

    var div11 = document.createElement("div");
    div11.classList.add("sponsor-pic-wrapper");

    var img111 = document.createElement("img");
    img111.classList.add("sponsor-pic");
    img111.setAttribute("src", spons[index].pic);

    var div2 = document.createElement("div");
    div2.classList.add("spon-cat");
    div2.innerText = spons[index].cat;

    div11.appendChild(img111);
    a1.appendChild(div11);

    div.appendChild(a1);
    div.appendChild(div2);

    sponsors_gallery.appendChild(div);
}