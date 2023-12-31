document.addEventListener("DOMContentLoaded", function (){
    const menuIcon= document.querySelector('.toggle-icon');
    const navbarMenu= document.querySelector('.navbar');
    const navbarLinks= document.querySelectorAll('.nav-link');
    const closeIcon = document.querySelector('.close-icon');
    
    menuIcon.addEventListener('click', () =>{
        navbarMenu.classList.toggle('active');
    });
    
    closeIcon.addEventListener('click', () =>{
        navbarMenu.classList.remove('active');
    });
    
    navbarLinks.forEach((navbarLink) =>{
        navbarLink.addEventListener('click', ()=>{
            navbarMenu.classList.remove('active');
        })
    })
    
    function scrollHeader(){
        const header= document.getElementById('header');
        if (header){
            this.scrollY >= 20? header.classList.add('active'): header.classList.remove('active');
        }
    }
    
    window.addEventListener('scroll', scrollHeader)
    
    const typed= document.querySelector('.typed');
    if(typed){
        let typed_strings= typed.getAttribute('data-typed-items'); //gets the text in that attribute, separated by commas
        typed_strings= typed_strings.split(','); //split them by the commas to get each individual "type" 
        new Typed ('.typed', {
            strings: typed_strings,
            loop:true,
            typeSpeed:100,
            backSpeed:50,
            backDelay:2000 //2sec
        })
    }
    
    });
    
    
    //for the filterProjects function
    
    function filterProjects(){
        const input=document.getElementById('search');
        let filter= input.value.toUpperCase().trim(); //changes to all uppercase
        let projectCards= document.getElementsByClassName('project-card');
        let needMessage= true;
        hideFail();
    
        //iterate through all the projectTagItems that were gathered (all project's tags --> not yet filtered)
        for (let i=0; i<projectCards.length;i++){
            let cardTagList= projectCards[i].getElementsByClassName('project-tags')[0]
            
            if (cardTagList){
                cardTagList= cardTagList.getElementsByTagName('ul')[0];
                let projectTags = cardTagList.getElementsByTagName('li'); //gets all list items
                let displayProject= false; 
        
    
                //need to check if the project tags match the search:
                for (let j=0; j<projectTags.length;j++){ //iterate through the project tags array to see if match
                    let currentTag= projectTags[j];
                    let tagText= currentTag.textContent.trim();
    
                    if (tagText.toUpperCase() == filter){
                        displayProject=true;
                        break; //we found a matching tag!
                    }
    
                }
                
                //did we find a matching tag for this project? will display if we did, will not display if not found
                if (displayProject){
                    projectCards[i].style.display='';
                    needMessage= false;
                }
                else{
                    projectCards[i].style.display='none';
                }
            }
    
        }
        if (needMessage){
            displayFail();
        }
    
    }
    
    function displayFail(){
        let failMessage= document.getElementById('search-fail');
        failMessage.style.display='block';
    }
    
    function hideFail(){
        let failMessage= document.getElementById('search-fail');
        failMessage.style.display='none';
    }
    