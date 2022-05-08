// let read=(id)=>{
//     return document.getElementById(id).value
//  }
//  let creat=(id)=>{
//      return document.createElement(id);
//  }
//  let get=(id)=>{
//  return document.getElementById(id);
 
//  }




let trendvideos = async()=>{
    try{
        const res = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=IN&key=AIzaSyDSbcBg5Cwz9yeqLonnXhx_JBgQ0mztNoQ')
       const data =  await res.json();
       console.log(data);
       append1(data.items)

    }catch(err){
        console.log(err);
    }
}
trendvideos();


const append1=(videos)=>{
// let videos1 =
    videos.forEach(({id:{videoId},snippet:{title}})=>{
        let div1=creat("div");
        div1.id="screen"
        let iframe=creat("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.height="60%";
        iframe.width="100%";
        iframe.allow="fullscreen"
        let name=document.createElement("h4")
        name.innerText=title;
        name.style.color="black"
        div1.append(iframe,name);
        get("show_videos").append(div1);
        // let data={
        //     title,
        //     videoId,
        // }
        
    })
}
