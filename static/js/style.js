function home()
{

    const url = document.querySelector('#url');
    let no = -1;
    const addr = [
        "https://www.youtube.com/watch?v=C0GsRz9EscM",
        "https://www.youtube.com/watch?v=PGmAsmiAZv0",
        "https://www.youtube.com/watch?v=hH3S0vUjsMo",
        "https://www.youtube.com/watch?v=BIAsz-QzWjU",
    ]
    
    setInterval(() => {
        no++
        if(no > addr.length - 1)
        {
            no = 0;
            url.setAttribute('placeholder', `Masukan url contoh : ${addr[no]}`);
        }else{
            url.setAttribute('placeholder', `Masukan url contoh : ${addr[no]}`);
        }
    }, 1000)
}


function result()
{

    // function control

    function berhenti()
    {
        audio.pause()
        iconM.setAttribute('class', 'fa fa-play');
        img.classList.remove('rotate-image');
    }

    function main()
    {
        audio.play()
        iconM.setAttribute('class', 'fa fa-pause');
        img.classList.add('rotate-image');
    }

    // audio controller 
    const audio = document.querySelector('#audio');
    const btnM = document.querySelector('.c-main');
    const iconM = document.querySelector('#icon-m');
    const img = document.querySelector('.spin-img');
    const src = document.querySelector('#source');
    const link = document.querySelector('.link-download')
    const range = document.querySelector('#range');
    const times = document.querySelectorAll('.times');

    setTimeout(() => {
        link.setAttribute('href', src.getAttribute('src'));
    }, 2000)
    
    btnM.addEventListener('click', () => {
        if(audio.paused === true)
        {
            main()
        }else{
            berhenti()
        }
    });
    
    // setting up the audio
    
    audio.addEventListener('timeupdate', () => {
        let nilai = (100 / audio.duration) * audio.currentTime;
        let time = {
            fromD : parseInt(audio.currentTime % 60),
            fromM : parseInt(audio.currentTime / 60, 10),
            toD: parseInt(audio.duration % 60),
            toM: parseInt(audio.duration / 60,10),
        }
        //setting up the time
        range.value = nilai;
        times[0].innerHTML = time.fromM;
        times[1].innerHTML = time.fromD;
        times[2].innerHTML = time.toM;
        times[3].innerHTML = time.toD;

        if(nilai >= 99)
        {
            berhenti()
        }else{
            main()
        }
    });

    // setting up range slider

    range.addEventListener('change', () => {
        let val = range.value;
        audio.currentTime = audio.duration * (val / 100);
    })
}