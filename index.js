function windowOnLoad() {
    document.addEventListener('readystatechange', (event)=> {
        if(event.target.readyState === 'complete') {
            console.log('page is fully loaded')
        }
    })
}

windowOnLoad();

