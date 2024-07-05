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
    
    navbarLinks.forEach((navbarLink) => {
        navbarLink.addEventListener('click', () => {
            navbarMenu.classList.remove('active'); 
            // Remove 'active-link' class from all navbar links
            navbarLinks.forEach((link) => link.classList.remove('active-link'));
            // Add 'active-link' class to the clicked navbar link
            navbarLink.classList.add('active-link');
        });
    });

    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            this.innerHTML = `<ion-icon name="sunny-outline"></ion-icon> Light Mode`;
        } else {
            this.innerHTML = `<ion-icon name="moon-outline"></ion-icon> Dark Mode`;
        }
    });
    
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
        filterDisplay= returnDisplay();
        document.getElementById('search').value= '';
        if (needMessage){
            displayFail();
            document.querySelector('.suggested').innerHTML=`We were not able to find any projects. Maybe try entering a new search. To reset the filter, click the X`;
        }
        else{
             document.querySelector('.suggested').innerHTML=`You are currently looking at ${filterDisplay} projects. To reset the filter, click the X`;
        }
       
        document.getElementById('project-title').innerHTML= `${filterDisplay} Projects`;
    
    }
    function returnDisplay() {
        const entered = document.getElementById('search').value.toUpperCase().trim();
    
        const displayMap = {
            'HTML': 'HTML',
            'CSS': 'CSS',
            'JAVASCRIPT': 'Javascript',
            'REACT': 'React',
            'GEOPANDAS': 'GeoPandas',
            'PANDAS': 'Pandas',
            'JAVA': 'Java'
        };
    
        // Check if the entered value exists in the displayMap
        if (entered in displayMap) {
            return displayMap[entered];
        } else {
            return 'No';
        }
    }
    
    function resetFilter(){
        let projectCards= document.getElementsByClassName('project-card');
        for (let i=0; i<projectCards.length;i++){
            projectCards[i].style.display='';
        }
        document.getElementById('search').value= '';
        document.querySelector('.suggested').innerHTML= `<h4>Suggested: </h4>
                            <div class="known-text">
                              HTML, CSS, JavaScript, Python, Pandas, GeoPandas, Java
                            </div>`;
        document.getElementById('project-title').innerHTML= 'Projects';
       
    }

    //for user clicking enter after typing search!
    document.getElementById('search').addEventListener('keydown', function(event) {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
            filterProjects();
        }
    });

    function updatePlaceholder() {
        const searchInput = document.getElementById('search');
        if (window.innerWidth <= 600) {
            searchInput.placeholder = "Search Project";
        } else {
            searchInput.placeholder = "Search Project by Language or Framework";
        }
    }

    // Update placeholder on page load
    updatePlaceholder();

    // Update placeholder on window resize
    window.addEventListener('resize', updatePlaceholder);
    
    
    function displayFail(){
        let failMessage= document.getElementById('search-fail');
        failMessage.style.display='block';
    }
    
    function hideFail(){
        let failMessage= document.getElementById('search-fail');
        failMessage.style.display='none';
    }

    //define variables for the display cert "buttons"
    const pythonCert= document.getElementById('py-cert');
    const pyCircle=document.getElementById('py');
    const jsCert= document.getElementById('js-cert');
    const jsCircle=document.getElementById('js');
    const cssCert = document.getElementById('css-cert');
    const cssCircle = document.getElementById('css');
    const htmlCert = document.getElementById('html-cert');
    const htmlCircle= document.getElementById('html');
    const reactCircle= document.getElementById('react');
    const reactCert = document.getElementById('react-cert');
    
    
    function displayPython(){
        pythonCert.style.display="block";
        jsCert.style.display="none";
        cssCert.style.display="none";
        htmlCert.style.display="none";
        reactCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        reactCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
    }

    function displayJs(){
        jsCert.style.display="block";
        pythonCert.style.display="none";
        cssCert.style.display="none";
        htmlCert.style.display="none";
        reactCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        reactCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
    }
    
    function displayCss(){
        cssCert.style.display="block";
        pythonCert.style.display="none";
        jsCert.style.display="none";
        htmlCert.style.display="none";
        reactCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        reactCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
    }

    function displayHtml(){
        htmlCert.style.display="block";
        pythonCert.style.display="none";
        jsCert.style.display="none";
        cssCert.style.display="none";
        reactCert.style.display="none";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
        reactCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        
    }

    function displayReact(){
        htmlCert.style.display="none";
        pythonCert.style.display="none";
        jsCert.style.display="none";
        cssCert.style.display="none";
        reactCert.style.display="block";

        pyCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        jsCircle.innerHTML= '<ion-icon name="ellipse-outline"></ion-icon>';
        cssCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        htmlCircle.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
        reactCircle.innerHTML = '<ion-icon name="ellipse"></ion-icon>';
    }