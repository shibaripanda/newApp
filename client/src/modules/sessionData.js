// export const sessionData = (forward, item, data) => {

//     if(forward === 'write'){
//         if(item === 'currentUser' || item === 'currentUserName'){
//             sessionStorage.setItem(item, data)
//         }
//         else if(item === 'token' || item === 'campId'){
//             sessionStorage.setItem(`${item} ${sessionStorage.getItem('currentUser')}`, data)
//         }
//         else if(item === 'activUsers'){
//             if(sessionStorage.getItem(item)){
//                 if(!sessionStorage.getItem(item).split(' ').includes(data)){
//                   sessionStorage.setItem(item, sessionStorage.getItem(item) + ' ' + data)
//                 }
//             }
//             else{
//                 sessionStorage.setItem(item, data)
//             }
//         }
//     }
//     else if(forward === 'read'){
//         if(item === 'currentUser' || item === 'activUsers' || item === 'currentUserName'){
//             return sessionStorage.getItem(item)
//         }
//         else if(item === 'token' || item === 'campId'){
//             return sessionStorage.getItem(`${item} ${sessionStorage.getItem('currentUser')}`)
//         }
//     }
//     else if(forward === 'close'){
//         sessionStorage.removeItem('currentUser')
//         sessionStorage.removeItem('currentUserName')
//     }
//     else if(forward === 'exit'){
//         console.log(sessionStorage.getItem('activUsers'))
//         sessionStorage.setItem('activUsers', sessionStorage.getItem('activUsers').split(' ').filter(item => item !== sessionStorage.getItem(`currentUser`)).join(' '))
//         console.log(sessionStorage.getItem('activUsers'))
//         sessionStorage.removeItem(`token ${sessionStorage.getItem('currentUser')}`)
//         sessionStorage.removeItem(`campId ${sessionStorage.getItem('currentUser')}`)
//         sessionStorage.removeItem(`currentUser`)
//         sessionStorage.removeItem(`currentUserName`)
//     }
//     else if(forward === 'off'){
//         sessionStorage.clear()
//     }
//     else{
//         console.log('нихуя')
//     }

// }

export const sessionData = (forward, item, data) => {

    if(forward === 'write'){
        if(item === 'currentUser'){
            sessionStorage.setItem(item, data)
        }
        else if(item === 'campId'){
            sessionStorage.setItem(item, data)
        }
        else if(item === 'activUsers'){
            if(sessionStorage.getItem(item)){
                if(!sessionStorage.getItem(item).split('%').includes(data)){
                  sessionStorage.setItem(item, sessionStorage.getItem(item) + '%' + data)
                }
            }
            else{
                sessionStorage.setItem(item, data)
            }
        }
    }
    else if(forward === 'read'){
        if(item === 'activUsers' && sessionStorage.getItem(item)){
            return sessionStorage.getItem(item)?.split('%')
        }
        else if(item === 'currentUser'){
            return sessionStorage.getItem('currentUser')
        }
        else if(item === 'email'){
            return sessionStorage.getItem('currentUser').split('#')[0]
        }
        else if(item === 'name'){
            const res = sessionStorage.getItem('currentUser').split('#')[1]
            if(res === 'noname'){
                return sessionStorage.getItem('currentUser').split('#')[0]
            }
            return res
        }
        else if(item === 'token'){
            return sessionStorage.getItem('currentUser')?.split('#')[2]
        }
        else if(item === 'campId'){
            return sessionStorage.getItem('campId')
        }
    }
    else if(forward === 'close'){
        sessionStorage.removeItem('currentUser')
        sessionStorage.removeItem('campId')
    }
    else if(forward === 'exit'){
        console.log(sessionStorage.getItem('activUsers'))
        sessionStorage.setItem('activUsers', sessionStorage.getItem('activUsers').split('%').filter(item => item !== sessionStorage.getItem(`currentUser`)).join('%'))
        console.log(sessionStorage.getItem('activUsers'))
        sessionStorage.removeItem(`campId`)
        sessionStorage.removeItem(`currentUser`)
    }
    else if(forward === 'off'){
        sessionStorage.clear()
    }
    else{
        console.log('нихуя')
    }

}