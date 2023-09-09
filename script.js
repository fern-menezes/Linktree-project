function toggleMode(){
    const html = document.documentElement
    //if(html.classList.contains('light')){
        //html.classList.remove('light')
   // } else{
       // html.classList.add()}
    html.classList.toggle('light')


    //pegar a tag img
    const img = document.querySelector('#profile img')

    //substituir imagem
    if(html.classList.contains('light')){
        //se tiver light mode, adcionar imag light
        img.setAttribute('src', './assets/avatar-light.jpg')
        img.setAttribute('alt', "Icon de perfil fada flora Winks girl mode")
    } else{
          //se tiver darl mode, usar imagem dark mode
          img.setAttribute('src', './assets/avatar.jpg')
          img.setAttribute('alt')
    }

}
