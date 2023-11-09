const userid = document.getElementById("userid");
const username = document.getElementById("username");
const publicrepo = document.getElementById("public-repo");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userlink = document.getElementById("user-link");
const inputname = document.getElementById("inputname");
const imgs = document.getElementById('imgs');


function setCard(name){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${name}`)
    xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        userid.innerHTML=name;
        username.innerHTML=data.name;
        publicrepo.innerHTML=data.public_repos;
        followers.innerHTML= data.followers;
        following.innerHTML = data.following;
        imgs.src = data.avatar_url;
        userlink.href = data.html_url;
    }
    }
    xhr.send()
}

document.getElementById('submit').addEventListener('click', function(){
    setCard(inputname.value)
})