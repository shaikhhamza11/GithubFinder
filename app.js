// const github = new Github;
// const ui = new UI;
// const searchUser = document.querySelector('#search-user');


// searchUser.addEventListener('keyup', (e) => {

//     const searchInput = e.target.value;
//     if (searchInput !== '') {
//         github.getUser(searchInput).then(data => {
//             if (data.profile.message === 'Not Found') {
//                 //show alert
//                 ui.showAlert("User Not Found", 'alert alert-danger');
//             }
//             else {
//                 //display Profile
//                 ui.showProfile(data.profile);
//             }
//         })
//     }
//     else {
//         //clear profile
//         ui.clearProfile(data.profile);

//     }
// })
// function reverseString(str) {
//     let splitStr = str.split('');
//     let srevStr = splitStr.reverse('');
//     let joinstr = srevStr.join('');
//     return joinstr;
// }
// console.log(reverseString('hamza'));

// /
