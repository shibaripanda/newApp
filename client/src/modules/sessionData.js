export const sessionData = (forward, item, data) => {

    if(forward === 'write'){
        if(item === 'currentUser'){
            sessionStorage.setItem(item, data)
        }
        else if(item === 'token' || item === 'campId'){
            sessionStorage.setItem(`${item} ${sessionStorage.getItem('currentUser')}`, data)
        }
        else if(item === 'activUsers'){
            if(sessionStorage.getItem(item)){
                if(!sessionStorage.getItem(item).split(' ').includes(data)){
                  sessionStorage.setItem(item, sessionStorage.getItem(item) + ' ' + data)
                }
            }
            else{
                sessionStorage.setItem(item, data)
            }
        }
    }
    else if(forward === 'read'){
        if(item === 'currentUser' || item === 'activUsers'){
            return sessionStorage.getItem(item)
        }
        else if(item === 'token' || item === 'campId'){
            return sessionStorage.getItem(`${item} ${sessionStorage.getItem('currentUser')}`)
        }
    }
    else if(forward === 'close'){
        sessionStorage.removeItem('currentUser')
    }
    else if(forward === 'exit'){
        sessionStorage.setItem('activUsers', sessionStorage.getItem('activUsers').split(' ').filter(item => item !== sessionStorage.getItem(`currentUser`)))
        sessionStorage.removeItem(`token ${sessionStorage.getItem('currentUser')}`)
        sessionStorage.removeItem(`campId ${sessionStorage.getItem('currentUser')}`)
        sessionStorage.removeItem(`currentUser`)
    }
    else if(forward === 'off'){
        sessionStorage.clear()
    }
    else{
        console.log('нихуя')
    }

}