

//  works on the backend API
//  fundamental example of how a promise object works
//  most API functions (ie, fetch()) function similarly
function fetchPosts() {
    //  Promise is an object which can either resolve or reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err) {
                console.log("success");
                console.log("[post item]");
                resolve();
            } else {
                reject('Error');
            }
        }, 3000)
    });
}

//  frontend function
async function callAPI() {
    // use try-catch for error handling
    try {
        // must 'await' for the result of the promise while data is handled over the internet
        await fetchPosts(false);
    } catch (error) {
        console.log(`Error Occured: ${error}`);
    }
}
