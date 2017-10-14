/**
 * Created by IMAD on 24/07/2017.
 */

(function (d, s, id) {
        const element = d.getElementsByTagName(s)[0];
        const fjs = element;
        let js = element;
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    window.FB.init({
            appId      : '1996625590613757',
            xfbml      : true,
            version    : 'v2.10'
        });
    window.FB.AppEvents.logPageView();
};

export function loginFb(callBack) {
    window.FB.getLoginStatus((response)=> {
        if (response.status !== 'connected'){
            window.FB.login((response)=>callBack(response), {scope: 'user_photos'});
        } else{
            callBack(response);
        }

    });
}


export function logoutFB(accessToken,callBack) {
    window.FB.logout(accessToken,(response) =>{
        console.log(response);
    });
}

export function getAlbums(callBack,callBackError) {
    window.FB.api('/me/albums', (response) => {
        if (response && !response.error) {
            /* handle the result */
            callBack(response);
        }else{
            callBackError(response);
        }
    });
}
export function getPhotos(id,callBack,callBackError) {
    const host = '/me/'+id+'/photos';
    window.FB.api(host, (response) => {
        if (response && !response.error) {
            /* handle the result */
            callBack(response);
        }else{
            callBackError(response);
        }
    });
}

