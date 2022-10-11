const box = document.getElementById("box"); // getting element from html
const title = document.getElementById("title");
const image = document.getElementById("image");
const tab_switcher = document.getElementById("tab-switcher");

const list = new Linkedlist();// creating new linked list

const data = [
    { title: "Chrome", value: "This is a window that contains chrome", url: "https://cdn.vox-cdn.com/thumbor/eG32HnbPci_k88_8A_HXS3-pnB8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6676117/chromelogo.0.jpg" },
    { title: "VS code", value: "This is a window that contains VS Code", url: "https://user-images.githubusercontent.com/49339/32078127-102bbcfe-baa6-11e7-8ab9-b04dcad2035e.png" },
    { title: "Sublime", value: "This is a window that contains Sublime text 2", url: "https://cdn.dribbble.com/users/533705/screenshots/3811091/sublime-icon.png" },
    { title: "Final Cut", value: "This is a window that contains Final Cur Pro X", url: "https://i.pcmag.com/imagery/reviews/00FaQZAwQoZwxbFpiehSYlN-21.fit_scale.size_1028x578.v_1569473012.png" },
    { title: "Photos", value: "This is a window that contains Photos", url: "https://i.pcmag.com/imagery/reviews/01JBzqHYl37ch2AaT3qOR9H-10.fit_scale.size_1028x578.v_1569475171.png" },
    { title: "Calendar", value: "This is a window that contains Calendar", url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png" },
    { title: "Maps", value: "This is a window that contains Maps", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AppleMaps_logo.svg/1200px-AppleMaps_logo.svg.png" }
];// data for this linked list
  // array which contains object
  // every object in this data array have title value or url of img


for (let i in data)
    list.add({ id: i }); // adding these object/elements in linked list map type id to name
                          

tab_switcher.hidden = true; //initially tab switcher is hidden we will be able to see when we press ctl+b

let tabbable = false; // keeping track of wheather we are precessing b or not if it is false then window will not move

let point, children, offset;
// point pointing to exat node we are at when we hold ctl+b this will move

// children is child of tab switcher/ child node tab switcher

// number like offset from head of the list to /point/ upper wala variable
// with help of this chidren[offset] we can get exat alie we gonna to manipulate 

setState();

document.addEventListener('keydown', function(e) { // what happen when we press a key
    if (e.key === "Control") {                // we are capturing whole html document
        tabbable = true;                      // into event
        point = list.head;
    }
    if ((e.key === "b") && tabbable) {
        tab_switcher.hidden = false; // when we press ctl+b tab switcher will apper
        let key = e.key; // store current pressed key.
        let dataSize = data.length; // store total size of data array

        children[offset].classList.remove("sel"); // rem the all the things from prev node
        
        point = key === "b" ? point.next : point.prev; // if key = b move to next node else rmain at curr node
        offset = key === "b" ? ((offset + 1) % dataSize) : offset ? ((offset - 1) % dataSize) : (dataSize - 1);
        // offset ko move kr rhe hai 
        children[offset].classList.add("sel"); // current node
    }
});


document.addEventListener("keyup", function(e) {// how tab switcher hide when user release
    if (e.key === "Control") {                  // the clt key
        tabbable = false;
        list.move_to_front(point); // jo current poinit pr hai vo head pr move kr jayega
        tab_switcher.hidden = true;
        setState();
    }
});


function setState() {
    image.src = data[list.head.content.id].url;         //this is going to set my maina 
    title.innerHTML = data[list.head.content.id].title; // window appli, current active 
    box.innerHTML = data[list.head.content.id].value;   // application

    tab_switcher.innerHTML = "";                                      //

    let temp = list.head;                                             //

    do{
        tab_switcher.innerHTML += `<li class="list-group-item"><img src="${data[temp.content.id].url}"><p>${data[temp.content.id].title}</p></li>`; // addinig element
        temp = temp.next;                                              //to tab switche
    }while(temp !== list.head);                                        //
// imp ${ data[something..]} 
//this is going to treat as javascript not as string
// this is going to take that node upper wala like loop
// extract the id use that to actually get
// img url we gonna add over here
// $p tag will show img and title for each of the alies of while loop

    children = tab_switcher.childNodes;
    //this is going to set of these alies into children
    //upper wale jinhe hmne abhi create kiya hai
    children[0].classList.add("sel");
    //this is going to change the color of text inside first alie
    //representing the one which is active
    offset = 0;
    //for now offset is 0
}