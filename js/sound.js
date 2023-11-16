let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
    {
        name: "ส่องวิสัยทัศน์กล้างัดนายทุนของผู้กำกับ นักรบมนตรา ตำนานแปดดวงจันทร์",
        path: "./music/mon.mp3",
        img: "./images/mantra.jpg",
        singer: "Rubmao Media",
    },
    {
        name: "Teenage Mutant Ninja Turtles:MutantMayhem อนิเมชั่นม้ามืดเต็มเปี่ยมไปด้วยหัวใจ",
        path: "./music/ninja.mp3",
        img: "./images/TMNT.jpg",
        singer: "Rubmao Media",
    },
    {
        name: "จากหนังสู่ซีรีส์ รีวิวเรื่องตลก 69 เดอะซีรีส์",
        path: "./music/69.mp3",
        img: "./images/69.jpg",
        singer: "Rubmao Media",
    },
    {
        name: "รีวิวภาพยนตร์ POSTMAN ไปรษณีย์ 4 โลก ผลงานจากมือเขียนบทที่ชนะการประกวด Major Writer Context",
        path: "./music/postman.mp3",
        img: "./images/postman.jpg",
        singer: "Rubmao Media",
    },
    {
        name: "ความรู้สึกหลังดูภาพยนตร์ Past Lives ครั้งหนึ่ง...ซึ่งคิดถึงตลอดไป",
        path: "./music/past.mp3",
        img: "./images/pastlives.jpg",
        singer: "Rubmao Media",
    },
    {
        name: "จดหมายรักถึงหนังไทย ความรู้สึกหลังดู มนต์รักนักพากย์",
        path: "./music/rakpak.mp3",
        img: "./images/monrak.jpg",
        singer: "Rubmao Media",
    },
];


// All functions


// function load the track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider, 1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
    if (Playing_song == false) {
        playsong();

    } else {
        pausesong();
    }
}


// reset song slider
function reset_slider() {
    slider.value = 0;
}

// play song
function playsong() {
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}


// previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();

    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


// change volume
function volume_change() {
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#27a0ff";
    }
}


function range_slider() {
    let position = 0;

    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}