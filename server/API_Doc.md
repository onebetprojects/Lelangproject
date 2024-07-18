# Group-Challange-OneBid

# server API Documentation

## Endpoints :

- `socket.emit(`message`, data)`
- `socket.on(`count`, args)`
- `io.emit(`result`, data)`

## 1. socket.emit("message", data)

request :
- socket.emit(`message`, data)
```json
data[
    {
        "username":"dadang",
        "latestBid":40000
    },{
        "username":"farrel",
        "latestBid":41000
    },{
        "username":"dadang",
        "latestBid":42000
    },{
        "username":"dadang",
        "latestBid":43000
    },{
        "username":"hary",
        "latestBid":44000
    },...
]
```

## 2. socket.on("count", args)
request :
- socket.on(`count`, args)
```json
args{
   "username":"dadang",
   "latestBid":45000 
}
```

## 3. io.emit("result", data)
request :
```json
data{
   "username":"dadang",
   "latestBid":45000 
}
```