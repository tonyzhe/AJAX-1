let n = 1;
getNEXT.onclick = ()=>{

    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)

    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const array = JSON.parse(request.response);
                array.forEach(item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id;
                    xxx.appendChild(li)
                });
                n+=1;

            }
        }


    }
    request.send()

}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                console.log(object)
                Myname.textContent = object.name;

            }else {
                alert('加载json失败')
            }
        }
    }
    request.send()
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest();

    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState===4){

            if(request.status>=200&&request.status<300){
                const responseXML = request.responseXML;
                const text = responseXML.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())

            }else{
                alert('加载XML失败')
            }
        }
    }
    request.send()

}

getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = ()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{
        console.log('失败了')
    }
    request.send()
}
getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open("get","/2.js")
    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else{
                alert('加载js失败')
            }
        }
    }


    request.send()
}
getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('get','/style.css')
    request.onreadystatechange = () =>{
        if(request.readyState===4){//下载完成，但不知道时对是错
            if(request.status>=200 &&request.status<300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else {
                alert('加载css失败')
            }
        }
    }


    request.send()
}