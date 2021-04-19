var rooms = {
    "start": {
        "description": "youre in your room. there is a door to the <b>north</b>. or you can just <b>wait</b>",
        "directions":{
            "north": "door1",
            "wait": "StartWait"
        }
    },
"StartWait":{
    "description": "Yup. you're waiting now. the shadows in your room wait for the perfect time to strike."
},

    "door1": {
        "description": "you go through the door, its a short hallway. its dark but you can make out a dresser to your left and an small statue\
    a few feet infront of you, it shines in the light produced from your garage light. A door next to the statue opens, go through.",
    
"directions":{
"north":"start"
}
},
    "door2": {
        "description": "You enter the room, it feels as the statue watches you as you walk through the door. dang, im tired as heck right now."
    }
}