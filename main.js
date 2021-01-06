var canvas = new fabric.Canvas("my_canvas");
var superhero_width = 30;
var superhero_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";
var superhero_faces = ["hulk_face.png", "ironman_face.png", "spiderman_face.png", "thor_face.png"];
var superhero_bodies = ["hulk_body.png", "ironman_body.png", "spiderman_body.png"];
var superhero_left_hands = ["hulk_left_hand.png", "ironman_left_hand.png", "spiderman_left_hand.png", "thor_left_hand.png", "captain_america_left_hand.png"];
var superhero_right_hands = ["hulk_right_hand.png", "ironman_right_hand.png", "spiderman_right_hand.png", "thor_right_hand.png"];
var superhero_legs = ["hulk_legs.png", "ironman_legs.png", "spiderman_legs.png",];
var random_number = Math.floor(Math.random()*4);
var random_number_left_hand_special = Math.floor(Math.random()*5);
var random_number_legs_body_special = Math.floor(Math.random()*3);

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {

        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
    });

    canvas.add(player_object);
}


function new_superhero(superhero_chosen) {
    fabric.Image.fromURL(superhero_chosen, function (Img) {


        superhero_object = Img;
        superhero_object.scaleToWidth(superhero_width);
        superhero_object.scaleToHeight(superhero_height);
        superhero_object.set({
            top: player_y,
            left: player_x
        });
    });
    
    canvas.add(superhero_object);
}


//New Code starting


window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    var key_down = e.keyCode;
    console.log(key_down);

    if ( e.shiftKey == true && key_down == 80){
        superhero_width = superhero_width + 10;
        superhero_height = superhero_height + 10;
        document.getElementById("current_width").innerHTML = superhero_width;
        document.getElementById("current_height").innerHTML = superhero_height;
    } 
    
    if ( e.shiftKey == true && key_down == 77){
        superhero_width = superhero_width - 10;
        superhero_height = superhero_height - 10;
        document.getElementById("current_width").innerHTML = superhero_width;
        document.getElementById("current_height").innerHTML = superhero_height;
    }
    
    //Other if's

    if (key_down == 70){
        new_superhero(superhero_faces[random_number]);
        random_number = Math.floor(Math.random()*4);
    }
    if (key_down == 66){
        new_superhero(superhero_bodies[random_number_legs_body_special]);
        random_number_legs_body_special = Math.floor(Math.random()*3);
    }
    if (key_down == 76){
        new_superhero(superhero_left_hands[random_number_left_hand_special]);
        random_number_left_hand_special = Math.floor(Math.random()*5);
    }
    if (key_down == 82){
        new_superhero(superhero_right_hands[random_number]);
        random_number = Math.floor(Math.random()*4);
    }
    if (key_down == 74){
        new_superhero(superhero_legs[random_number_legs_body_special]);
        random_number_legs_body_special = Math.floor(Math.random()*3);
    }
    
    //

    if (key_down == 38){
        up();
        console.log("up");
    }
    if (key_down == 40){
        down();
        console.log("down");
    }
    if (key_down == 39){
        right();
        console.log("right");
    }
    if (key_down == 37){
        left();
        console.log("left");
    }
}
function app_button(){
    new_superhero(superhero_faces[random_number]);
    random_number = Math.floor(Math.random()*4);
    new_superhero(superhero_bodies[random_number_legs_body_special]);
    random_number_legs_body_special = Math.floor(Math.random()*3);
    new_superhero(superhero_left_hands[random_number_left_hand_special]);
    random_number_left_hand_special = Math.floor(Math.random()*5);
    new_superhero(superhero_right_hands[random_number]);
    random_number = Math.floor(Math.random()*4);
    new_superhero(superhero_legs[random_number_legs_body_special]);
    random_number_legs_body_special = Math.floor(Math.random()*3);
}