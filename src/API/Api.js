import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "1afcb89f-5cbe-4acc-8784-8be4344ca6c0"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`, )
            .then(response => response.data)
    },
    getFollow(userId) {
        return instance.post(`follow/${userId}`, {} )
            .then(response => response.data)
    },
    getProfileInfo(userId){
        console.log('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfileInfo(userId);
    }
}

export const profileAPI = {
    getProfileInfo(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    },
    updatePhoto(photo){
        return instance.put(`profile/photo`, {image: photo});
    },
    updateProfile() {
        return instance.put(`profile`,
            {
                "aboutMe": "Эх было бы что сказать",
                "contacts": {
                    "facebook": "facebook.com",
                    "website": null,
                    "vk": "vk.com",
                    "twitter": null,
                    "instagram": null,
                    "youtube": null,
                    "github": null,
                    "mainLink": null
                },
                "lookingForAJob": false,
                "lookingForAJobDescription": "ForAJobDescription",
                "fullName": "Max_yaf",
                "userId": 31300,
                "photos": {
                    "small": "https://social-network.samuraijs.com/activecontent/images/users/31300/user-small.jpg?v=0",
                    "large": "https://social-network.samuraijs.com/activecontent/images/users/31300/user.jpg?v=0"
                }
            });
    },
}


export const authAPI = {
    getAuthMe(){
        return instance.get('/auth/me');
    },
    login(email, password, rememberMe = false){
        return instance.post('/auth/login', {email, password, rememberMe});
    },
    logout(){
        return instance.delete('/auth/login');
    }
}

//Было в уроке 63... На что мы заменяли
// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "1afcb89f-5cbe-4acc-8784-8be4344ca6c0"
//     }
// })
//     .then(response => {
//         if (response.data.resultCode === 0) {
//             props.unfollow(user.id)
//         }
//     });
