var canvas = new fabric.Canvas("myCanvas");

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_body_part_object="";
function player_update(){
    fabric.Image.fromURL("player(1).png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
            canvas.add(player_object);
        

    }
    );

}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_body_part_object = Img;
        block_body_part_object.scaleToWidth(block_image_width);
        block_body_part_object.scaleToHeight(block_image_height);
        block_body_part_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
            canvas.add(block_body_part_object);
        

    }
    );
}

