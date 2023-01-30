
// fade preloader

let preloader = document.querySelector("#preloader");
window.onload = function(){
  preloader.style.opacity = "0";
}

//CHANGE MODE

let mode_changer = document.querySelector("#mode_changer");

mode_changer.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
})

let section_header_mode = document.querySelector("#mode_changerr");

mode_changerr.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
})
// AUTO WRITING

let header_text = document.querySelector("#header_text");
let text = "OMAR";
let header_p = document.querySelector("#header_p");
// let p = "Welocme To My Website";
let i = 1;

//header_p.textContent = p.slice(0, i);

let main_interval = setInterval(() => {
    header_text.textContent = text.slice(0, i);
    i++;
    if (i === (text.length + 1)) {
        clearInterval(main_interval)
    }
}, 300);

// let ii = 0;
// setTimeout(() => {
//     let p_interval = setInterval(() => {
//         header_p.textContent = p.slice(0, ii);
//         ii++
//         if (ii === (p.length + 1)) {
//             clearInterval(p_interval)
//         }
//     }, 100)
// }, 1500)

// CHANGE WEB COLORS

let header_bg = document.querySelector("#header_bg");
let title_bg = document.querySelector("#title_bg");
let title_color = document.querySelector("#title_color");
let section_bg = document.querySelector("#section_bg");
let reset = document.querySelector("#reset");
let main_color = "";

const Random = (e) => {
    return Math.round(Math.random() * 360);
}

header_bg.addEventListener("click", () => {
    window.localStorage.setItem("header_bg", `hsl(${Random()}, 45%, 65%)`);
    window.location.reload()
})

document.querySelector("header").style.backgroundColor = window.localStorage.getItem("header_bg");

title_bg.addEventListener("click", () => {
    window.localStorage.setItem("title_bg", `hsl(${Random()}, 55%, 75%)`);
    window.location.reload()
})

title_color.addEventListener("click", () => {
    // let hex_random = Math.random().toString(16).slice(2, 8);
    const HexRandom = () => {
        return Math.random().toString(16).slice(2, 8)
    }
    window.localStorage.setItem("title_color", `#${HexRandom()}`);
    window.location.reload()
})

let titles = document.querySelectorAll("h1:not(body > header > h1)");
for (let i = 0; i < titles.length; i++) {
    titles[i].style.backgroundColor = window.localStorage.getItem("title_bg");
    titles[i].style.color = window.localStorage.getItem("title_color");
}

section_bg.addEventListener("click", () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(Math.round(Math.random() * 255));
    }
    window.localStorage.setItem("section_bg", `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`);
    window.location.reload();
})

let sections = document.querySelectorAll("section");
for (let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = window.localStorage.getItem("section_bg")
}

reset.addEventListener("click", () => {
    document.querySelector("header").style.backgroundColor = "#3d4a59";
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.backgroundColor = main_color;
        titles[i].style.color = "#fff"
    }
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.backgroundColor = "#fff";
    }
    window.localStorage.clear()
})

// RANDOM VIDEOS

let vid_1 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1__CAdTJ5JU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
let vid_2 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/s3w84PSb63E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
let vid_3 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ze9cxZXA_HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
let vid_4 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/SDn1vfT-9Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
let vid_5 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/u7JMhVI7taQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
let vid_6 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/A1kzr5ldsbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
let vid_7 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/rpOjFiV0X6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

let vids_arr = [vid_1, vid_2, vid_3, vid_4, vid_5, vid_6, vid_7];

const RandomVideo = () => {
    let random_num = Math.floor(Math.random() * vids_arr.length);
    document.querySelector("#video").innerHTML = vids_arr[random_num];
}

RandomVideo();

let rand_btn = document.querySelector("#rand_video_btn");

rand_btn.addEventListener("click", () => {
    RandomVideo()
    document.querySelector("iframe").style.animation = "move 2s 1";
    document.querySelector("iframe").style.transform = "translate(0, 0)";
})

// RANDOM QUOTES

const RandomQuotes = () => {
    let quote_1 = `<div class="rand_quote"><h2>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</h2><p>- By Marilyn Monroe</p></div>`;
    let quote_2 = `<div class="rand_quote"><h2><span>"</span>Belive By Your Self This The Secret Of Success</h2><p>- By Omar Elbedwehy<span>"</span></p></div>`;
    let quote_3 = `<div class="rand_quote"><h2>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</h2><p>- By Albert Einstein</p></div>`;
    let quote_4 = `<div class="rand_quote"><h2>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</h2><p>- By Bernard M. Baruch</p></div>`;
    let quote_5 = `<div class="rand_quote"><h2>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</h2><p>- By Dr. Seuss</p></div>`;
    let quote_6 = `<div class="rand_quote"><h2>“You only live once, but if you do it right, once is enough.”</h2><p>- By Mae West</p></div>`;
    let quote_7 = `<div class="rand_quote"><h2>“To live is the rarest thing in the world. Most people exist, that is all.”</h2><p>- By Oscar Wilde</p>`;
    let quote_8 = `<div class="rand_quote"><h2>“Without music, life would be a mistake.”</h2><p>- By Friedrich Nietzsche</p>`;

    let quotes = [quote_1, quote_2, quote_3, quote_4, quote_5, quote_6, quote_7, quote_8];
    let random_num = Math.floor(Math.random() * quotes.length)
    let quote = quotes[random_num];
    document.querySelector("#quote").innerHTML = quote;
}

RandomQuotes();

let random_quote_btn = document.querySelector("#rand_quote_btn");
random_quote_btn.addEventListener("click", () => {
    RandomQuotes();
    document.querySelector(".rand_quote").style.animation = "move_quote 2s 1";
    document.querySelector(".rand_quote").style.transform = "translate(0, 0)";
})

window.onscroll = function () {
    // SHOW SCROLL TO TOP BUTTON
    if (this.scrollY >= 295.6500244140625) {
        scroll_to_top.style.right = "7px";
    } else {
        scroll_to_top.style.right = "-50px";
    }

    // MAKE ANIMATION WHEN SCROLL ON RANDOM VIDEO SECTION

    if (this.scrollY >= 200.75) {
        document.querySelector("iframe").style.animation = "move 2s 1";
        document.querySelector("iframe").style.transform = "translate(0, 0)";
    } else {
        document.querySelector("iframe").style.animation = "";
        document.querySelector("iframe").style.transform = "translate(100vw, 0)";
    }

    //MAKE ANIMATION WHEN SCROLL ON RANDOM QUOTES SECTION
    if (this.scrollY >= 700) {
        document.querySelector(".rand_quote").style.animation = "move_quote 2s 1";
        document.querySelector(".rand_quote").style.transform = "translate(0, 0)";
    } else {
        document.querySelector(".rand_quote").style.animation = "";
        document.querySelector(".rand_quote").style.transform = "translate(-100vw, 0)";
    }

    if (this.scrollY >= 200){
      document.querySelector("#scroll_header").style.display = "block";
    }else{
      document.querySelector("#scroll_header").style.display = "none";
    }
    console.log(this.scrollY)
}

// SCROLL TO TOP

let scroll_to_top = document.querySelector("#scroll_to_top");

scroll_to_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// SCROLL TO SECTIONS IN PAGE

let rand_vid_section_link = document.querySelectorAll("#rand_vid_section_link");
let random_quote_section_link = document.querySelectorAll("#random_quote_section_link");
let heart_section_link = document.querySelectorAll("#heart_section_link");
let accordion_section_link = document.querySelectorAll("#accordion_section_link");
let time_section_link = document.querySelectorAll("#time_section_link");
let image_slider_section_link = document.querySelectorAll("#image_slider_section_link");
let currency_section_link = document.querySelectorAll("#currency_section_link");
let about_section_link = document.querySelectorAll("#about_section_link");

rand_vid_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 700,
    })
  })
});

random_quote_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 1400,
    })
  })
});

heart_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 1700,
    })
  })
});

accordion_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 2000,
    })
  })
});

time_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 2400,
    })
  })
});

image_slider_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 2800,
    })
  })
});

currency_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 3108,
    })
  })
});

about_section_link.forEach((e) => {
  e.addEventListener("click", ()=>{
    window.scrollTo({
      top: 60,
    })
  })
});


// HEARTS ANIMATION

let hearts_btn = document.querySelector("#hearts_btn");
let hearts_cont = document.querySelector("#hearts_container");
let rand_num = Math.round(Math.random() * 100);
hearts_btn.addEventListener("click", () => {
    let heart_interval = setInterval(() => {
        let heart = document.createElement("div")
        heart.innerHTML = "&#129505;";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
        hearts_cont.appendChild(heart);
        setTimeout(() => {
            clearInterval(heart_interval);
        }, 3000)
    }, rand_num)
    let secound_interval = setInterval(() => {
        let heart_2 = document.createElement("div")
        heart_2.innerHTML = "&#128156;";
        heart_2.style.left = `${Math.random() * 100}%`;
        heart_2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
        hearts_cont.appendChild(heart_2);
        setTimeout(() => {
            clearInterval(secound_interval);
        }, 3000)
    }, rand_num)
    let third_interval = setInterval(() => {
        let heart_3 = document.createElement("div")
        heart_3.innerHTML = "&#128153;";
        heart_3.style.left = `${Math.random() * 100}%`;
        heart_3.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
        hearts_cont.appendChild(heart_3);
        setTimeout(() => {
            clearInterval(third_interval);
        }, 3000)
    }, rand_num)
    setTimeout(() => {
        hearts_cont.innerHTML = "";
    }, 7000)
})

// ACCORDION

let accord = document.querySelectorAll("#Accordion");
accord.forEach((e) => {
    e.addEventListener("click", (eo) => {
        let trusted_value = eo.target.querySelector("span");
        let section = eo.target.getAttribute("data-value");
        if (section == "accordion_1") {
            let p_1 = document.querySelector("#p_1");
            if (trusted_value.textContent == "+") {
                trusted_value.textContent = "-";
                eo.target.style.backgroundColor = "#0072cd";
                p_1.style.height = `${p_1.scrollHeight - 10}px`;
                p_1.style.opacity = "1";
                p_1.style.userSelect = "all";
            } else {
                trusted_value.textContent = "+";
                eo.target.style.backgroundColor = "#0086f1";
                p_1.style.height = "0";
                p_1.style.opacity = "0";
                p_1.style.userSelect = "none";
            }
        }
        if (section == "accordion_2") {
            let p_2 = document.querySelector("#p_2");
            if (trusted_value.textContent == "+") {
                trusted_value.textContent = "-";
                eo.target.style.backgroundColor = "#0072cd";
                p_2.style.height = `${p_2.scrollHeight - 10}px`;
                p_2.style.opacity = "1";
                p_2.style.userSelect = "all";
            } else {
                trusted_value.textContent = "+";
                eo.target.style.backgroundColor = "#0086f1";
                p_2.style.height = "0";
                p_2.style.opacity = "0";
                p_1.style.userSelect = "none";
            }
        }
        if (section == "accordion_3") {
            let p_3 = document.querySelector("#p_3");
            if (trusted_value.textContent == "+") {
                trusted_value.textContent = "-";
                eo.target.style.backgroundColor = "#0072cd";
                p_3.style.height = `${p_3.scrollHeight - 10}px`;
                p_3.style.opacity = "1";
                p_3.style.userSelect = "all";
            } else {
                trusted_value.textContent = "+";
                eo.target.style.backgroundColor = "#0086f1";
                p_3.style.height = "0";
                p_3.style.opacity = "0";
                p_1.style.userSelect = "none";
            }
        }
    })
})





let time_countainer = document.querySelector(".time")

setInterval(() => {
    // DATE

    let date = new Date;

    let day = date.getDay();

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let final_day = weekDays[day];

    if (day == 0) {
        final_day = weekDays[0];
    }

    let month = date.getMonth();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let final_month;

    if (month == 0) {
        final_month = months[0]
    }

    let day_in_nums = date.getDate();

    let year = date.getFullYear();

    // TIME
    time_countainer.querySelector("p").textContent = `${final_day} ${final_month} ${day_in_nums} ${year}`;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secounds = date.getSeconds();
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (secounds < 10) {
        secounds = `0${secounds}`
    }
    if (hours > 12){
        hours = hours - 12;
    }
    if (hours == 0){
        hours = 12;
    }
    let final_time = `${hours} : ${minutes} : ${secounds}`
    if (hours > 12){
        final_time = `${final_time} Pm`
    }else{
        final_time = `${final_time} Am`
    }
    time_countainer.querySelector("h2").textContent = final_time;
}, 1000)

// IMAGES SLIDER

let img_1 = `<img src="./imgs/img_1.png" alt="">`;
let img_2 = `<img src="./imgs/img_2.png" alt="">`;
let img_3 = `<img src="./imgs/img_3.jpg" alt="">`;
let img_4 = `<img src="./imgs/img_4.png" alt="">`;
let img_5 = `<img src="./imgs/img_5.jpg" alt="">`;
let img_6 = `<img src="./imgs/img_6.jpeg" alt="">`;
// let img_7 = `<img src="./imgs/img_7.jpg" alt="">`;
let img_8 = `<img src="./imgs/img_8.jpg" alt="">`

let imgs = ["", img_8, img_1, img_2, img_3, img_6 ,img_4, img_5];

let ul_nums = document.querySelector(".slider_counter")

for (let i = 1; i < imgs.length; i++){
    let li = document.createElement("li");
    li.id = "img_num";
    li.textContent = i;
    ul_nums.appendChild(li)
}

let next_btn = document.querySelector("#next");
let pre_btn = document.querySelector("#pre");

let img_index = 1;

let li_num = document.querySelectorAll("#img_num");

li_num.forEach((e)=>{
    e.addEventListener("click", (eo)=>{
        let li_num_text = eo.target.textContent;
        img_index = li_num_text;
        li_num.forEach((ele)=>{
            ele.style.backgroundColor = "rgb(184 217 247)";
            ele.style.color = "#000";
        })
        if (li_num_text == img_index){
            eo.target.style.backgroundColor = "rgb(90 168 226)";
            eo.target.style.color = "#fff";
        }
        document.querySelector(".i_m_g").innerHTML = imgs[img_index];
        document.querySelector(".img_count").innerHTML = `Slide # ${imgs.indexOf(imgs[img_index])} of ${imgs.length - 1}`;
        if (img_index == (imgs.length - 1)){
            next_btn.style.pointerEvents = "none";
            next_btn.style.opacity = "0.5";
        }else{
            next_btn.style.pointerEvents = "all";
            next_btn.style.opacity = "1";
        }
        if (img_index == 1){
            pre_btn.style.pointerEvents = "none";
            pre_btn.style.opacity = "0.5";
        }else{
            pre_btn.style.pointerEvents = "all";
            pre_btn.style.opacity = "1";
        }
    })
});

li_num.forEach((ele)=>{
    ele.style.backgroundColor = "rgb(184 217 247)";
    ele.style.color = "#000";
    if (ele.textContent == img_index){
        ele.style.backgroundColor = "rgb(90 168 226)";
        ele.style.color = "#fff";
    }
})

document.querySelector(".i_m_g").innerHTML = imgs[img_index];
document.querySelector(".img_count").innerHTML = `Slide # ${imgs.indexOf(imgs[img_index])} of ${imgs.length - 1}`;

if (img_index == 1){
    pre_btn.style.pointerEvents = "none";
    pre_btn.style.opacity = "0.5";
}

next_btn.addEventListener("click", ()=>{
    img_index++;
    document.querySelector(".i_m_g").innerHTML = imgs[img_index];
    document.querySelector(".i_m_g img").style.animation = "next_show 0.6s 1 linear forwards";
    document.querySelector(".img_count").innerHTML = `Slide # ${imgs.indexOf(imgs[img_index])} of ${imgs.length - 1}`;
    li_num.forEach((ele)=>{
        ele.style.backgroundColor = "rgb(184 217 247)";
        ele.style.color = "#000";
        if (ele.textContent == img_index){
            ele.style.backgroundColor = "rgb(90 168 226)";
            ele.style.color = "#fff";
        }
    });
    if (img_index == (imgs.length - 1)){
        next_btn.style.pointerEvents = "none";
        next_btn.style.opacity = "0.5";
    }else{
        next_btn.style.pointerEvents = "all";
        next_btn.style.opacity = "1";
    }
    if (img_index == 1){
        pre_btn.style.pointerEvents = "none"
        pre_btn.style.opacity = "0.5"
    }else{
        pre_btn.style.pointerEvents = "all"
        pre_btn.style.opacity = "1"
    }
})

pre_btn.addEventListener("click", ()=>{
    img_index--;
    document.querySelector(".i_m_g").innerHTML = imgs[img_index];
    document.querySelector(".i_m_g img").style.animation = "pre_show 0.6s 1 linear forwards";
    document.querySelector(".img_count").innerHTML = `Slide # ${imgs.indexOf(imgs[img_index])} of ${imgs.length - 1}`
    li_num.forEach((ele)=>{
        ele.style.backgroundColor = "rgb(184 217 247)";
        ele.style.color = "#000";
        if (ele.textContent == img_index){
            ele.style.backgroundColor = "rgb(90 168 226)";
            ele.style.color = "#fff";
        }
    });
    if (img_index == 1){
        pre_btn.style.pointerEvents = "none"
        pre_btn.style.opacity = "0.5";
    }else{
        pre_btn.style.pointerEvents = "all"
        pre_btn.style.opacity = "1"
    }
    if (img_index == (imgs.length - 1)){
        next_btn.style.pointerEvents = "none";
        next_btn.style.opacity = "0.5";
    }else{
        next_btn.style.pointerEvents = "all";
        next_btn.style.opacity = "1";
    }
})

// CURRENY IN USD

fetch("https://api.currencyfreaks.com/latest?apikey=3fae5a9a0b8c4609a8246a7acadaf596&format=json").then(((result) =>{
    let Data = result.json();
    return Data
})).then((curreny) =>{
    let egpInUsd = Number(curreny.rates["EGP"]).toFixed(2);
    let egp_curreny = document.querySelector("#egp_curreny");
    egp_curreny.textContent = `1 EGP => ${egpInUsd} USD`;
    let egp_to_usd = document.querySelector("#egp_to_usd");
    let curreny_input = document.querySelector("#curreny_input");
    curreny_input.addEventListener("input", (e)=>{
        if(isNaN(e.target.value)){
            egp_to_usd.textContent = `{Please Enter A Number} USD Dollar = {} Egyptian Pound`;
        }else{
            egp_to_usd.textContent = `{${e.target.value}} USD Dollar = {${(e.target.value * egpInUsd)}} Egyptian Pound`;
        }
    })
}).catch(
  document.querySelector("#currency").remove()
)

document.querySelector("#convert_egp_to_usd").addEventListener("submit", (e)=>{
    e.preventDefault();
})
