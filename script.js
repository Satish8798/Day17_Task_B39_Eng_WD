/* CALLBACK HELL or PAIN OF CALLBACK*/

let countdown=11; // initializing a countdown variable for the countdown number to be displayed on screen
let headerTwo=document.querySelector("h2"); //h2 element for displaying count and text message

//callback hell using setTimeout function
//calling back 10 times
setTimeout(()=>{
    countdown--;
    headerTwo.innerHTML=`<h2>${countdown}</h2>`;
    setTimeout(()=>{
        countdown--;
        headerTwo.innerHTML=`<h2>${countdown}</h2>`;
        setTimeout(()=>{
            countdown--;
            headerTwo.innerHTML=`<h2>${countdown}</h2>`;
            setTimeout(()=>{
                countdown--;
                headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                setTimeout(()=>{
                    countdown--;
                    headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                    setTimeout(()=>{
                        countdown--;
                        headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                        setTimeout(()=>{
                            countdown--;
                            headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                            setTimeout(()=>{
                                countdown--;
                                headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                                setTimeout(()=>{
                                    countdown--;
                                    headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                                    setTimeout(()=>{
                                        countdown--;
                                        headerTwo.innerHTML=`<h2>${countdown}</h2>`;
                                        setTimeout(()=>{
                                            headerTwo.innerHTML=`
                                            <h2>Happy Independance day</h2>
                                            `
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
