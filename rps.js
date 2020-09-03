var oponent = Math.floor(Math.random() * 3); 

var user = 0;

$("#stone").click(function(){
    user = 0;
    console.log(oponent, user);
    switch (oponent) {
        case 0:
            if(user == 0) {
                console.log("Tie");
                $("#result").text("Tie");
            }
    
            if (user == 1) {
                console.log("Won");
                $("#result").text("Won");
            }
    
            if (user == 2) {
                console.log("Lost");
                $("#result").text("Lost");
            }
        break;
    
        case 1:
            if(user == 0) {
                console.log("Lost");
                $("#result").text("Lost");
            }
    
            if (user == 1) {
                console.log("Tie");
                $("#result").text("Tie");
            }
    
            if (user == 2) {
                console.log("Won");
                $("#result").text("Won");
            }
        break;
    
        case 2:
            if(user == 0) {
                console.log("Won");
                $("#result").text("Won");
            }
    
            if (user == 1) {
                console.log("Lost");
                $("#result").text("Lost");
            }
    
            if (user == 2) {
                console.log("Tie");
                $("#result").text("Tie");
            }
        break;
    }
});

$("#paper").click(function(){
    user = 1;
    console.log(oponent, user);
    switch (oponent) {
        case 0:
            if(user == 0) {
                console.log("Tie");
                $("#result").text("Tie");
            }
    
            if (user == 1) {
                console.log("Won");
                $("#result").text("Won");
            }
    
            if (user == 2) {
                console.log("Lost");
                $("#result").text("Lost");
            }
        break;
    
        case 1:
            if(user == 0) {
                console.log("Lost");
                $("#result").text("Lost");
            }
    
            if (user == 1) {
                console.log("Tie");
                $("#result").text("Tie");
            }
    
            if (user == 2) {
                console.log("Won");
                $("#result").text("Won");
            }
        break;
    
        case 2:
            if(user == 0) {
                console.log("Won");
                $("#result").text("Won");
            }
    
            if (user == 1) {
                console.log("Lost");
                $("#result").text("Lost");
            }
    
            if (user == 2) {
                console.log("Tie");
                $("#result").text("Tie");
            }
        break;
    }
});

$("#shears").click(function(){
    user = 2;
    console.log(oponent, user);
    switch (oponent) {
        case 0:
            if(user == 0) {
                console.log("Tie");
                $("#result").text("Tie");
            }
    
            if (user == 1) {
                console.log("Won");
                $("#result").text("Won");
            }
    
            if (user == 2) {
                console.log("Lost");
                $("#result").text("Lost");
            }
        break;
    
        case 1:
            if(user == 0) {
                console.log("Lost");
                $("#result").text("Lost");
            }
    
            if (user == 1) {
                console.log("Tie");
                $("#result").text("Tie");
            }
    
            if (user == 2) {
                console.log("Won");
                $("#result").text("Won");
            }
        break;
    
        case 2:
            if(user == 0) {
                console.log("Won");
                $("#result").text("Won");
            }
    
            if (user == 1) {
                console.log("Lost");
                $("#result").text("Lost");
            }
    
            if (user == 2) {
                console.log("Tie");
                $("#result").text("Tie");
            }
        break;
    }
});



