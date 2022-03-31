const linksSocialMedia = {
    github: "marcusadp",
    youtube: "channel/UCide8Up4PnG6nEcKcLCbEZg",
    facebook: "marcusaugusto.dp",
    instagram: "marcus_adp",
    twitter: "marcus_adp"

}

function changeSocialMediaLinhks(){

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }
    
}


changeSocialMediaLinhks()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGithubProfileInfos()