//  wigs object array, fetch information
 const wigs = [
    {
        id : 1,
        title : 'Piano Black/ Brown',
        length: '10',
        config : "SDD2",
        type: 'Straight',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'pre-order'
        
    },
    {
        id : 2,
        title : 'Piano Black/ Brown',
        length: '12',
        config : "SDD1",
        type: 'Curls',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'pre-order'
    },
    {
        id : 3,
        title : 'Piano Black/ Brown',
        length: '14',
        config : "SD",
        type: 'Natural',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'pre-order'
    },
    {
        id : 4,
        title : 'Piano Black/ Brown',
        length: '18',
        config : "DD",
        type: 'Straight',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'pre-order'
    },
    {
        id : 5,
        title : 'Piano Black/ Brown',
        length: '20',
        config : "SDD2",
        type: 'Curls',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'pre-order'
    },
    {
        id : 6,
        title : 'Piano Black/ Brown',
        length: '22',
        config : "SDD1",
        type: 'Natural',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'available'
    },
    {
        id : 7,
        title : 'Piano Black/ Brown',
        length: '12',
        config : "SD",
        type: 'Straight',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'available'
    },
    {
        id : 8,
        title : 'Piano Black/ Brown',
        length: '14',
        config : "DD",
        type: 'Curls',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'available'
    },
    {
        id : 9,
        title : 'Piano Black/ Brown',
        length: '18',
        config : "SDD2",
        type: 'Natural',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'available'
    },
    {
        id : 10,
        title : 'Piano Black/ Brown',
        length: '20',
        config : "SDD1",
        type: 'Straight',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'available'
    },
    {
        id : 11,
        title : 'Piano Black/ Brown',
        length: '22',
        config : "SD",
        type: 'Curls',
        price: '$600',
        img: "./img/wig1.jpg",
        imageOptions : [
            "./img/wig1inner.jpg",
            "./img/h5.jpg",
            "./img/wig1.jpg"
        ],
        availability : 'available'
    },
    // {
    //     id : 12,
    //     title : '12" Piano Black/ Brown',
    //     config : "SDD",
    //     type: 'Natural Straight',
    //     price: '$600',
    //     img: "./img/wig1.jpg"
    // },
 ]



 const sectionCenter = document.querySelector("#sectionCenter");
 const sectionTwo = document.querySelector('#sectiontwo')

//  load items
 window.addEventListener('DOMContentLoaded', function(){
    displayWigItems(wigs)
 });

// items displayed
function displayWigItems(wigItems){
    var displayWig = wigItems.map(function(item){
       return `<a  href="#" class="wigCard">
       
       <div class="block  w-[300px] px-3 py-2 md:pl-2">
           <div>
               <img src="${item.img}" alt="" class="wigContent rounded-lg">
           </div>
           <div class="relative">
            <div class="absolute bottom-4 text-center w-[100%]">
                <button onclick="show()" class=" wigBtn px-[4em] py-1 font-normal text-base rounded-lg">Quick View</button>
            </div>
            </div>
           <div class="flex justify-start items-center pt-3">
               <div class="block space-y-2">
                   <div class="text-sm space-y-1 font-normal">
                       <h1 data-id="car">${item.title}</h1>
                       <h1>${item.length}</h1>
                       <h1>${item.config}</h1>
                       <h1>${item.type}</h1>
                   </div>
                   <h1 class="text-base font-semibold">${item.price}</h1>
               </div>
           </div>
       </div>
       <span class="hidden">${item.id}</span>
       </a>`;
    })

    displayWig = displayWig.join("")
    sectionCenter.innerHTML = displayWig

    //  function to get particular wig item choosen when displayed on quick view
    function Trying(){  
        // change image options
        const optionPrevious = document.getElementById("previous-option");
        const optionNext = document.getElementById("next-option"); 
        // getting section children
        let sectionCenterChildren = sectionCenter.childNodes;
        // changed elements
        let wigDisplayTitle = document.querySelector("#WigDisplayTitle"),
            wigDisplayConfig = document.querySelector("#WigDisplayConfig"),
            wigDisplayType = document.querySelector("#WigDisplayType"),
            wigDisplayPrice = document.querySelector("#WigDisplayPrice"),
            wigDisImg = document.querySelector('#wigDisImg');
        // for each loop for all wig cards t get the name and add to the wig quick view
            sectionCenterChildren.forEach((current) => {
                // for each
                current.addEventListener('click', function(){
                    // getting all elements used to replace on  the quick view
                    const mainDiv = this.firstElementChild,
                        idNumber = this.lastElementChild,
                        mainDivInner = mainDiv.lastElementChild.firstElementChild.firstElementChild,
                        mainDivInnerPrice = mainDiv.lastElementChild.firstElementChild.lastElementChild,
                        // changing the title, configuration and hair type
                        title = mainDivInner.children[0].innerHTML,
                        config =  mainDivInner.children[2].innerHTML,
                        type =  mainDivInner.children[3].innerHTML;
                    // getting the id for each
                    imgOp = (idNumber.innerHTML) - 1;
                        // changing the title, configuration and hair type
                        wigDisplayTitle.innerHTML = title;
                        wigDisplayConfig.innerHTML = config;
                        wigDisplayType.innerHTML = type;
                        wigDisplayPrice.innerHTML = mainDivInnerPrice.innerHTML; 
                })       
            });
            var i =0
            // next option clicked
            optionNext.addEventListener('click',() => {
                // changing img src
                let imgSrc = wigs[imgOp].imageOptions[i]
                wigDisImg.src = `${imgSrc}`
                if( i < 2){
                    i++
                }
                else{
                    i = 0
                }               
            })
            // previous option
            optionPrevious.addEventListener('click',() => {
                // changing img src
                let imgSrc = wigs[imgOp].imageOptions[i]
                wigDisImg.src = `${imgSrc}`
                
                if( i === 0){
                    i === 2
                   i++
                }
                else{
                    i --
                }               
            })
    }
    Trying()
}

const shows = document.querySelector('.WigDisplaySec')

function show(){
   
   shows.classList.remove('hidden') 
   const closeWigBtn = document.getElementById('closeWigBtn');
    
   closeWigBtn.addEventListener('click', () => {
    document.querySelector('.WigDisplaySec').classList.add('hidden')
   })    

}

// filter btn

const filterBtn1 = document.querySelector('.filterBtn1');
const filterBtn2 = document.querySelector('.filterBtn2');
const filterBtn3 = document.querySelector('.filterBtn3');
const hairConfig = document.querySelectorAll('.hairConfig');
const hairLength = document.querySelectorAll('.hairlength');
const hairGrade = document.querySelectorAll('.hairGrade');
const allFilterBtn = document.querySelectorAll('.filBtn')


function changeText(){
    filterBtn1.addEventListener('click',function(){
        for (let i = 0; i < hairConfig.length; i++) {
            hairConfig[i].addEventListener('click',function(){
                filterBtn1.innerHTML = hairConfig[i].innerHTML
                if(hairConfig[i] === hairConfig[hairConfig.length - 1]){
                    filterBtn1.innerHTML = 'Hair Configuration'
                }
            })  
        }
    })
};

function changeText1(){
    filterBtn2.addEventListener('click',function(){
        for (let i = 0; i < hairLength.length; i++) {
            hairLength[i].addEventListener('click',function(){
                filterBtn2.innerHTML = hairLength[i].innerHTML
                if(hairLength[i] === hairLength[hairLength.length - 1]){
                    filterBtn2.innerHTML = 'Hair Lengths'
                }
            })  
        }
    })
};

function changeText2(){
    filterBtn3.addEventListener('click',function(){
        for (let i = 0; i < hairGrade.length; i++) {
            hairGrade[i].addEventListener('click',function(){
                filterBtn3.innerHTML = hairGrade[i].innerHTML
                if(hairGrade[i] === hairGrade[hairGrade.length - 1]){
                    filterBtn3.innerHTML = 'Hair Grade'
                }
            })  
        }
    })
};

changeText()
changeText1()
changeText2()

// filter items

hairConfig.forEach(function(item){
    item.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.config;
        const itemCategory = wigs.filter(function(wigItems){
            if(wigItems.type === category){
                return wigItems
            }
        })
        if( category === "All"){
            displayWigItems(wigs)
        }
        else{
            displayWigItems(itemCategory)
        }
        
    })
})

hairLength.forEach(function(item){
    item.addEventListener('click', function(e){
        const categoryLength = e.currentTarget.dataset.length;
        const itemCategoryLength = wigs.filter(function(wigItems){
            if(wigItems.length === categoryLength){
                return wigItems
            }
        })
        if( categoryLength === "All"){
            displayWigItems(wigs)
        }
        else{
            displayWigItems(itemCategoryLength)
        }
        
    })
})

hairGrade.forEach(function(item){
    item.addEventListener('click', function(e){
        const categoryGrade = e.currentTarget.dataset.grade;
        const itemCategoryGrade = wigs.filter(function(wigItems){
            if(wigItems.config === categoryGrade){
                return wigItems
            }
        })
        if( categoryGrade === "All"){
            displayWigItems(wigs)
        }
        else{
            displayWigItems(itemCategoryGrade)
        }
        
    })
});

function showAvailablePreOrder(){
    let available = document.querySelector("#bordered-radio-1");
    let preOrder = document.querySelector("#bordered-radio-2");
    let all = document.querySelector("#bordered-radio-3");
    if(available.checked){
        console.log(33)
        const availableCategory = 'available';
        const itemCategoryGrade = wigs.filter(function(wigItems){
            if(wigItems.availability === availableCategory){
                return wigItems
            }
        })
        displayWigItems(itemCategoryGrade)
    }
    else if(preOrder.checked){
        console.log(22)
        const preOrderCategory = 'pre-order';
        const itemCategoryGrade = wigs.filter(function(wigItems){
            if(wigItems.availability === preOrderCategory){
                return wigItems
            }
        })
        displayWigItems(itemCategoryGrade)
    }
    else{
        displayWigItems(wigs)

    }
}
 













