class Github {
    constructor() {
        this.client_id = 'ae5b7440068fc0e79c82'
        this.client_secret = '49d76b7a23c9bda91605d8153df8bcc2fa704744';

    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}