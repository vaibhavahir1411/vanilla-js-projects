        //create div 
        const addItem = async (item) => {
            await randomDelay();
            let div = document.createElement("div");
            div.innerHTML = item;
            document.body.append(div)
        }

        //put random delay between new lines
        const randomDelay = () => {
            return new Promise((resolve, reject) => {
               let timeout = 1 + 6 * Math.random();
                setTimeout(() => {
                    resolve()
                }, timeout * 1000);
            })
        }

        //main function
        async function main() {

            //for blinking dots
            let t = setInterval(() => {
                let divs = document.body.getElementsByTagName("div");
                if (divs.length > 0) {//checks that one div available in document

                    let last = divs[divs.length - 1]; // Get the last div
                    //in [] brackets there is an index divs.length total length minus 1 means last index of element

                if(last.innerHTML.endsWith("...")){
                    last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)//if therr are three dots it will start from zero
                }
                else{
                    last.innerHTML = last.innerHTML + "."
                }
            }
            }, 300);


            let text = ["Initialized Hacking now reading your data",
                "Reading your Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Extracting sensitive files",
                "Hash cracked: **********",
                "Hijacking user sessions",
                "Disconnecting from target device",
                "Clearing system logs",
                "Cleaning up"]

                //for select all items one by one
            for (const item of text) {
                await addItem(item)
                
            }

             // call the functions
            await randomDelay()
            clearInterval(t)
            
        }
        main()

   //show alert error at random time     
setTimeout(() => {
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert";
    alertDiv.innerHTML = "⚠ SECURITY BREACH DETECTED! ⚠";
    document.body.append(alertDiv);
}, Math.random() * 15000 + 5000);
