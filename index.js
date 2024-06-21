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

    //for hiding the extra text on Animal Crossing project description:
    document.addEventListener("DOMContentLoaded", function() {
        var fullText = document.getElementById("full-description").textContent.trim();
        var shortText = fullText.substring(0, 100);
      
        document.getElementById("short-description").textContent = shortText;
        
        document.getElementById("show-more").addEventListener("click", function(event) {
          event.preventDefault();
          
          var fullDesc = document.getElementById("full-description");
          var ellipsis = document.getElementById("ellipsis");
          var shortDesc = document.getElementById("short-description");
      
          if (fullDesc.style.display === "none") {
            fullDesc.style.display = "inline";
            ellipsis.style.display = "none";
            shortDesc.style.display = "none";
          } else {
            fullDesc.style.display = "none";
            ellipsis.style.display = "inline";
            shortDesc.style.display = "inline";
          }
        });
      });
          

    //define variables for the display cert "buttons"
    const pythonCert= document.getElementById('py-cert');
    const pyCircle=document.getElementById('py');
    const jsCert= document.getElementById('js-cert');
    const jsCircle=document.getElementById('js');
    const cssCert = document.getElementById('css-cert');
    const cssCircle = document.getElementById('css');
    const htmlCert = document.getElementById('html-cert');
    const htmlCircle= document.getElementById('html');
    
    
    function displayPython(){
        pythonCert.style.display="block";
        jsCert.style.display="none";
        cssCert.style.display="none";
        htmlCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
    }

    function displayJs(){
        jsCert.style.display="block";
        pythonCert.style.display="none";
        cssCert.style.display="none";
        htmlCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
    }
    
    function displayCss(){
        cssCert.style.display="block";
        pythonCert.style.display="none";
        jsCert.style.display="none";
        htmlCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
    }

    function displayHtml(){
        htmlCert.style.display="block";
        pythonCert.style.display="none";
        jsCert.style.display="none";
        cssCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
        
    }