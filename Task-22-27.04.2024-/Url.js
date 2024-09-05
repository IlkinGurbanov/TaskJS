let url = "https://www.example.com/path/to/resource?param1=value1&param2=value2"
// let url = prompt("enter url :")

const Url = new URL(url)

const Protocol = Url.protocol;
const HostName = Url.hostname;
const PathName = Url.pathname;
const queryParams = Url.searchParams;

console.log(Protocol,HostName,PathName);

queryParams.forEach((value,key) => {
    console.log(key,value);
})