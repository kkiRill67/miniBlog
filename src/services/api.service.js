import { request } from "http";

class ApiService {
    constructor(baseUrl){
        this.url = baseUrl
    }

    async createPost(post){
        try{
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            const res = await fetch(request)
            return await res.json()
        } catch (error){
            console.error(error)
        }
    }

    async fetchPosts(){
        try{
            const request = new Request(this.url + '/posts.json', {
                method: 'get'
            })
            const res = await fetch(request)
            return await res.json()
        } catch (error){
            console.error(error)
        }
    }

}

export const apiService = new ApiService('https://jsblogs-5ef52.firebaseio.com')