class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2" alt="">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary mb-2">Public Repos:${user.public_repos}</span>
            <span class="badge badge-secondary mb-2">Public Gists:${user.public_gists}</span>
            <span class="badge badge-success mb-2">Followers:${user.followers}</span>
            <span class="badge badge-info mb-2">Following:${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company:${user.company}</li>
                <li class="list-group-item">Website/Blog:${user.blog}</li>
                <li class="list-group-item">Location:${user.location}</li>
                <li class="list-group-item">MEMBER sINCE:${user.created_at}</li>
            </ul>
        </div>
    </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>


        `

    }
    clearProfile() {
        this.profile.innerHTML = "";
    }
    showAlert(message, className) {
        this.clearAlert()


        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        // setTimeout(() => {
        //     this.clearAlert();
        // }, 3000)

    }
    clearAlert() {

        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}