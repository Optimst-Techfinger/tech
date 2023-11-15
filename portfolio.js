const skillExpEduLinks = document.querySelectorAll(".skill-exp-edu_link");
const skillExpEduContents = document.querySelectorAll(".skill-exp-edu_content");

function openTab_SkillExpEdu(tabname){
    for(eachskillExpEduLink of skillExpEduLinks){
        eachskillExpEduLink.classList.remove('active');
    }
    for(skillExpEduContent of skillExpEduContents){
        skillExpEduContent.classList.remove('skill-exp-edu_active');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabname).classList.add('skill-exp-edu_active')
}

//Start- Responsive Navbar Script
const sideMenuBar = document.getElementById('sidemenu_bar')
function openmenu_bar(){
    sideMenuBar.style.right = "0";

}

function closemenu_bar(){
    sideMenuBar.style.right = "-200px";

}
//Start- Responsive Navbar Script