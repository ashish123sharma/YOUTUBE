let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }
 
 
 
 // const searchVideos = async()=>{
     async function searchVideos(){
        
     try{
         // const q = document.getElementById("query").value;
     const q = read("query");
 
 
         const res = await fetch(
             `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=AIzaSyBWXzlMWSc01CWYgm06PEZA6cXOIBsFLZE`
         )
             const data = await res.json();
         // console.log(data)   
         append(data.items);
     }
     
   
     // // it is in form of array of objects so we can use forEach to itrate in  array of object 
         catch(err){
         console.log(err);
     }
 }
 
 const append = (videos) =>{
     get("navbar").style.backgroundColor="grey"
     let show_videos=get("show_videos");
     show_videos.innerHTML = null;
      videos.forEach(({id :{videoId} , snippet:{title} })=>{
 
         let div = creat('div');
         div.id="each_video"
      
 
          let iframe = creat('iframe');
          iframe.id="playbutton"
          iframe.src=`https://www.youtube.com/embed/${videoId}`
           iframe.width="90%";
           iframe.height="70%";
           iframe.allow="fullscreen";
        //  iframe.allowFullscreen
           iframe.allow="accelerometer"
           let name = creat('h5');
           name.innerText= title;
           div.append(iframe,name);
 
           let data ={
               title,
               videoId,
           };
 
           div.onclick=()=>{
               show(data);
           }
 
           show_videos.append(div);
         });
 
 }
 
 
 const show =(x)=>{
 //   
     window.location.href="mainvideo.html"
     localStorage.setItem("Yvideos",JSON.stringify(x));
 }
 
  