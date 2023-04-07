console.log("Welcome To Symphony");
//initialize the variable
let songindex=1;
let audioelement=new Audio('songs1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogress=document.getElementById('progress');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname= document.getElementById('mastersongname');
let songs=[
    {songname:"A Thousand Years - By Christina Perri",filepath:"songs1.mp3",coverpath:"song1.jpg"},

    {songname:"Dandelions - By Ruth B",filepath:"songs2.mp3",coverpath:"song2.jpg"},

    {songname:"How Long - By Charlie Puth",filepath:"songs3.mp3",coverpath:"song11.jpg"},

    {songname:"Levitating - By Dua Lipa",filepath:"songs4.mp3",coverpath:"song4.jpg"},

    {songname:"One Woman Army - By Porceline Black",filepath:"songs5.mp3",coverpath:"song5.jpeg"},

    {songname:"Run Free - By Deep Chills",filepath:"songs6.mp3",coverpath:"song6.jpg"},

    {songname:"Irene's Theme Song - By David Arnold",filepath:"songs7.mp3",coverpath:"song7.jpg"},

    {songname:"Stained - By Selena Gomez",filepath:"songs8.mp3",coverpath:"song8.jpg"},

    {songname:"Unstoppable - By Sia",filepath:"songs9.mp3",coverpath:"song9.jpg"},

    {songname:"We Belong Together - By Mariah Carey",filepath:"songs10.mp3",coverpath:"song10.jpg"}
]

songitems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverpath;
   element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})
//audioelement.play();

//handle play pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;
    }
})

//listen to event in the progress bar
audioelement.addEventListener('timeupdate',()=>{
    //update seekbar
    //percentage of time elapsed in comparison to total duration
    let progress=parseInt((audioelement.currentTime/audioelement.duration)* 100);
    myprogress.value=progress;
});

myprogress.addEventListener('change',()=>{
    //percentage to value conversion
    audioelement.currentTime=((myprogress.value * audioelement.duration)/100);
})

const makeallplay= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=> { 
        makeallplay();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`songs${songindex}.mp3`;
        mastersongname.innerText=songs[songindex-1].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=10){
        songindex=1;
    }
    else{
        songindex+=1;
    }
        audioelement.src=`songs${songindex}.mp3`;
        mastersongname.innerText=songs[songindex-1].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex=10;
    }
    else{
        songindex-=1;
    }
        audioelement.src=`songs${songindex}.mp3`;
        mastersongname.innerText=songs[songindex-1].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})

