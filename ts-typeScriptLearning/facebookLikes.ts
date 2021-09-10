export class FacebookLikeButton{
    private isLiked: boolean;
    private likes: number = 0;

    constructor(likes?: number){
        if(likes){
            this.likes = likes;
        }
        this.isLiked = false;
    }

    like(){
        if(!this.isLiked){
            this.isLiked = true;
            this.likes++;
        }else{
            console.log("you have already liked this post")
        }
    }
    unlike(){
        if(this.isLiked){
            this.isLiked = false;
            this.likes --;
        }else{
            console.log("you have not liked this post")
        }
    }

    get Likes(){
        return this.likes
    }
}