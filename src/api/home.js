import axios from 'axios'

export function sliderdata(){
   return axios.get("/api/revision/explore/getSlideshow'").then((res)=>{
       return Promise.resolve(res)
   })
}

export function diclist(pagenum){
    if(!pagenum){
        pagenum = 1
    }
    return axios.get("/api/revision/category/queryCategoryPageAlbums?category=youshengshu&subcategory=xuanyi&meta=&sort=0&page="+pagenum+"&perPage=30").then((res)=>{
        return Promise.resolve(res)
    })
 }

 export function getDetail(id,num){
    if(!num){
        num = 1
    }
    return axios.get("/api/revision/album/getTracksList?albumId="+id+"&pageNum="+num).then((res)=>{
        return Promise.resolve(res)
    })
 }

 export function toplay(id){
    return axios.get("/api/tracks/"+id+".json").then((res)=>{
        return Promise.resolve(res)
    })
 }


 