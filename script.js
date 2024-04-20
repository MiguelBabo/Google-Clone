const query = document.getElementById("query")
const queryBtn = document.getElementById("queryBtn")

queryBtn.onclick = function(){
    let url = "https://www.google.com.br/search?q="+query.value
    window.open(url,'_self')
}