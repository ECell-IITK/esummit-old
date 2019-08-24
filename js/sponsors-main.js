var spons = [];
var sponsors_gallery = document.getElementById("sponsors_gallery");

// To add a speaker just add an element
// in the below spons and add its
// respective properties name, pic, about, etc
// (
// and keep the element id as NULL
// it will automatically generate it

spons.push({
        name: "Incubation and Innovation, IITK",
        pic: "images/sponsors/2019/incubation.png",
        url: "",
        cat: "",
        id: ""
    }, {
        name: "Asti Infotech",
        pic: "images/sponsors/2019/astiInfo.jpeg",
        url: "",
        cat: "",
        id: ""
    }, {
        name: "Amazon Web Service",
        pic: "images/sponsors/2019/aws.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Cadmatic",
        pic: "images/sponsors/2019/cadmatic.jpg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Dare2Compete",
        pic: "images/sponsors/2019/d2c.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Department of Service and Technology, Govt. of India",
        pic: "images/sponsors/2019/dst.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Global Student Entrepreneur Awards",
        pic: "images/sponsors/2019/eogsea.jpg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "IMS",
        pic: "images/sponsors/2019/ims.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "JK Cements",
        pic: "images/sponsors/2019/jkcements.jpg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "LIC",
        pic: "images/sponsors/2019/lic.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Morris Garages",
        pic: "images/sponsors/2019/morrisG.jpg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "OmniBulls",
        pic: "images/sponsors/2019/omnibulls.jpg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "OYO",
        pic: "images/sponsors/2019/oyo.jpeg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "PayTM",
        pic: "images/sponsors/2019/paytmbfi.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Prime83",
        pic: "images/sponsors/2019/prime83.jpg",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Prithvi.AI",
        pic: "images/sponsors/2019/prithvi.PNG",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "SBI",
        pic: "images/sponsors/2019/sbi.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "The Souled Store",
        pic: "images/sponsors/2019/souled.png",
        cat: "",
        url: "",
        id: ""
    }, {
        name: "Zebronics",
        cat: "",
        pic: "images/sponsors/2019/zebronics.png",
        url: "",
        id: ""
    }, {
        name: "Your Story",
        pic: "images/sponsors/2019/yourStory.png",
        cat: "Online Media Partner",
        url: "https://yourstory.com/",
        id: ""
    }, {
        name: "Inc42",
        pic: "images/sponsors/2019/inc42.png",
        cat: "Online Media Partner",
        url: "https://inc42.com/",
        id: ""
    },{
        name: "Blogadda",
        pic: "images/sponsors/2019/blogadda.jpg",
        cat: "Online Blog Partner",
        url: "https://www.blogadda.com/",
        id: ""
    },{
        name: "DK",
        pic: "images/sponsors/2019/dainik.jpg",
        cat: "Offline Media Partner",
        url: "https://www.jagran.com/",
        id: ""
    },{
        name: "AU",
        pic: "images/sponsors/2019/amarujjala.jpg",
        cat: "Offline Media Partner",
        url: "https://www.amarujala.com/",
        id: ""
    },

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