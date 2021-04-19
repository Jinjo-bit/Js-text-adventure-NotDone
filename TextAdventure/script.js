//i just want to make my anime dating sim..
//BIG note! im tired, so basically our room paths are messed up. figure out.


var currentRoom = "start";

function changeRoom(dir){
if(rooms[currentRoom].directions[dir] !==undefined){
    currentRoom = rooms[currentRoom].directions[dir];
    $("game-text").append("<p>" + rooms[currentRoom].description + "</p>");
}
}

$(document).ready(function () {
    $("#game-text").append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function (key) {
        //if enter(13) is pressed say hello
        //com doesnt understand letters, only numbers
        if (key.which === 13 && $("#user-input").is(":focus")) {
            var value = $("#user-input").val().toLowerCase();

            switch (value) {
                case "north":
                    changeRoom("north");
                    break;
                case "wait":
                    changeRoom("wait");
                    break;
                default:
                    alert: ("I don't understand.");

            }
        }
    })
})
