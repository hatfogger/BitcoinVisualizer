var block_hash = "00000000000000000002cb1c80ef783f6445a4e6a5ae5bbcfa4ff1d693bc6985"
var api_url = "https://corsproxy.io/?https://blockchain.info/rawblock/"+block_hash
const api_key = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkFQSSJ9.eyJhdWQiOiJtZXJjdXJ5IiwidWlkIjoiY2FiNmEyYTgtMmNkYi00NzExLWE4NTctNDhjNmQxYzEwZDQ2IiwiaXNzIjoiYmxvY2tjaGFpbiIsInJkbyI6dHJ1ZSwiaWF0IjoxNjkxNzM0NDkyLCJqdGkiOiIwYTYwM2ExNy1kZmUyLTQwYmEtOGMzYy00ZTUzYzYwZjMxOTgiLCJzZXEiOjY5NjkyNDQsIndkbCI6ZmFsc2V9.IP/IDFLiRx9jfhFtqr2AS20QyzZAqi7DjK6Xvobl9297AWtiC00zwTE2syaGB+sLwmD6ocdV4twjqPX7XbTa7TE="
headers = {"Authorization":"Bearer"+api_key}
var element = document.getElementById("block1");
var data_final ;
var blocks = [];
fetch(api_url, {
    headers: headers
  }).then(response => response.json())
  .then(
    data =>{
      console.log(data["hash"])
      const hashinfo = document.createElement("block-text")
      hashinfo.textContent = data["hash"]
      element.appendChild(hashinfo)
    //   var_
    // const hashinfo = document.createElement("p")
    // hashinfo.textContent = data["hash"]
    // document.body.insertBefore(hashinfo,element)
  }
  )
  // const info = response.json();
// console.log(response)