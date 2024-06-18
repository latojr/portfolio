function toggleMenu(){
    const menu = document.querySelector(".menu-links"); //target the entire div class menu-link in the html file
    const icon = document.querySelector(".hamburger-icon"); //target the entire div class hamburger-link in the html file
    menu.classList.toggle("open") // when clicked, it adds or remove the open class in the element
    icon.classList.toggle("open")
}
