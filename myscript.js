
let app = new Vue({
    el: '#app',
    created:function(){
        this.autoPlay() 
    },
    data: {
        timer: null,
        currentIndex: 1,
        slideArr: [
            {
                image: 'img/01.jpg',
                title:  'Svezia',
                text:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/02.jpg',
                title:  'Svizzera',
                text:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/03.jpg',
                title:  'Gran Bretagna',
                text:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title:  'Germania',
                text:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/05.jpg',
                title:  'Paradise',
                text:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            }
        ]
    },
    methods:{
        displayImage: function(index){
            if(this.currentIndex == index){
                return 'active';
            }
            return '';
        },
        next: function(){
            this.currentIndex++;
            if(this.currentIndex == this.slideArr.length){
                this.currentIndex = 0;
            }
        },
        previous: function(){
            this.currentIndex--;
            if(this.currentIndex < 0){
                this.currentIndex = this.slideArr.length - 1;
            }
        },
        activate: function(index){
            this.currentIndex = index;
        },
        autoPlay: function(){
           this.timer = setInterval(this.next, 3000); 
        },
        stopPlay: function(){
            clearInterval(this.timer);
        }
    }
  })


    // const imgArr = [
    //     'img/01.jpg',
    //     'img/02.jpg',
    //     'img/03.jpg',
    //     'img/04.jpg',
    //     'img/05.jpg'
    // ];

    // const titleArr = [
    //     'Svezia',
    //     'Svizzera',
    //     'Gran Bretagna',
    //     'Germania',
    //     'Paradise'
    // ];

    // const textArr = [
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    //     'Lorem ipsum',
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    //     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    // ];

// let mainContent = '';

// //Ciclo immagini vetrina

 

// document.getElementById('mainbox').innerHTML = mainContent;

// let thumbsContent = '';

// //Ciclo immagini carosello

// for (let i = 0; i < imgArr.length; i++) {
//     if(i == 0){
//         thumbsContent += `
//         <img src="${imgArr[i]}">
//         <div id="freccia-su">
//             <i class="bi bi-arrow-up"></i>
//         </div>    
//         `
//     }else if(i == 4){
//         thumbsContent += `
//         <img src="${imgArr[i]}">
//         <div id="freccia-giu">
//             <i class="bi bi-arrow-down"></i>
//         </div>    
//         `
//     }else{
//     thumbsContent += `
//     <img src="${imgArr[i]}">
//     `
//     }
// }

// document.getElementById('thumbnailsbox').innerHTML = thumbsContent;

// //Funzione freccette

// let prevArrow = document.getElementById('freccia-su');
// let nextArrow = document.getElementById('freccia-giu');

// //Mettiamo di default la prima immagine sovrascrivendo l'intero ciclio for definito all'inizio che assume un valore differente, non sparisce.

// let x = 1;
// let activated = document.getElementById('img-' + x);
// activated.classList.add('active'); 

// //Freccia in su + loop

// prevArrow.addEventListener('click', function(){
//     if(x == 1){
//         x = 5;
//         activated.classList.remove('active');
//         activated = document.getElementById('img-' + x);
//         activated.classList.add('active'); 
//     }else{
//         activated.classList.remove('active');
//         x--;      
//         activated = document.getElementById('img-' + x);       
//         activated.classList.add('active'); 
//     }
// });

// //Freccia in giu + loop 

// nextArrow.addEventListener('click', function(){
//         if(x == 5){
//             x = 1;  
//             activated.classList.remove('active');
//             activated = document.getElementById('img-' + x);
//             activated.classList.add('active'); 
//         }else{
//             activated.classList.remove('active');
//             x++;      
//             activated = document.getElementById('img-' + x);       
//             activated.classList.add('active'); 
//         }
// });

