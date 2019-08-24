var arr = [];
var section = document.getElementById("sponsors");

//To add a speaker just add an element
// in the below array and add its
//respective properties like name, pic, about, etc
//(
//and keep the element id as NULL
// it will automatically generate it
arr.push(
    {
        name: "Asti Infotech",
        pic: "images/sponsors/2019/astiInfo.jpeg",
        id: ""
    },
    {
        name: "Amazon Web Service",
        pic: "images/sponsors/2019/aws.png",
        id: ""
    },
    {
        name: "Cadmatic",
        pic: "images/sponsors/2019/cadmatic.jpg",
        id: ""
    },
    {
        name: "Dare2Compete",
        pic: "images/sponsors/2019/d2c.png",
        id: ""
    },
    {
        name: "Department of Service and Technology, Govt. of India",
        pic: "images/sponsors/2019/dst.png",
        id: ""
    },
    {
        name: "Global Student Entrepreneur Awards",
        pic: "images/sponsors/2019/eogsea.jpg",
        id: ""
    },
    {
        name: "IMS",
        pic: "images/sponsors/2019/ims.png",
        id: ""
    },
    {
        name: "Inc42",
        pic: "images/sponsors/2019/inc42.png",
        id: ""
    },
    {
        name: "Incubation and Innovation, IITK",
        pic: "images/sponsors/2019/incubation.png",
        id: ""
    },
    {
        name: "JK Cements",
        pic: "images/sponsors/2019/jkcements.jpg",
        id: ""
    },
    {
        name: "LIC",
        pic: "images/sponsors/2019/lic.png",
        id: ""
    },
    {
        name: "Morris Garages",
        pic: "images/sponsors/2019/morrisG.jpg",
        id: ""
    },
    {
        name: "OmniBulls",
        pic: "images/sponsors/2019/omnibulls.jpg",
        id: ""
    },
    {
        name: "OYO",
        pic: "images/sponsors/2019/oyo.jpeg",
        id: ""
    },
    {
        name: "PayTM",
        pic: "images/sponsors/2019/paytmbfi.png",
        id: ""
    },
    {
        name: "Prime83",
        pic: "images/sponsors/2019/prime83.jpg",
        id: ""
    },
    {
        name: "Prithvi.AI",
        pic: "images/sponsors/2019/prithvi.PNG",
        id: ""
    },
    {
        name: "Red-Bull",
        pic: "images/sponsors/2019/redBull.png",
        id: ""
    },
    {
        name: "SBI",
        pic: "images/sponsors/2019/sbi.png",
        id: ""
    },
    {
        name: "The Souled Store",
        pic: "images/sponsors/2019/souled.png",
        id: ""
    },
    {
        name: "Your Story",
        pic: "images/sponsors/2019/yourStory.png",
        id: ""
    },
    {
        name: "Zebronics",
        pic: "images/sponsors/2019/zebronics.png",
        id: ""
    },


);
//Assign id to each element of the speaker array=> s0, s1, s2 etc
//and adds the respective speaker
for (var i = 0; i < arr.length; i++) {
    arr[i].id = "s" + i.toString();
    addsponsor(i);
}

//function will add a speaker by using
// the data from the Xth position of the array
function addsponsor(x) {
    //creates an model element to be appended to the m_content class=============================

    // The first word in the name of the variables tells
    // about the type of element
    // and the numbers after these tells us about the
    // position with respect to the parent element


    //can change this md-effect-8 class if want an different effect

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
    //   var link = "javascript:run_model('" + arr[x].id + "','" + bid + "')";
    var ddiv1 = document.createElement("div");
    ddiv1.classList.add("bgrid");
    ddiv1.classList.add("member");
    //   var da11 = document.createElement("a");
    //   da11.setAttribute("id", bid);
    //   da11.setAttribute("href", link);
    var ddiv111 = document.createElement("div");
    ddiv111.classList.add("sponsor-pic-wrapper");
    var dimg1111 = document.createElement("img");
    dimg1111.setAttribute("src", arr[x].pic);
    dimg1111.classList.add("sponsor-pic");
    var ddiv112 = document.createElement("div");
    ddiv112.classList.add("speaker-name");
    var dh21121 = document.createElement("h2");
    // dh21121.innerText = arr[x].name;
    dh21121.innerText = ' ';
    ddiv111.appendChild(dimg1111);
    ddiv112.appendChild(dh21121);
    ddiv1.appendChild(ddiv111);
    ddiv1.appendChild(ddiv112);


    //Detect The last row by the "row-detect" class
    //and adds the created element
    var sbgrid = document.getElementsByClassName("row-detect");
    var num = sbgrid.length - 1;
    sbgrid[num].appendChild(ddiv1);
}