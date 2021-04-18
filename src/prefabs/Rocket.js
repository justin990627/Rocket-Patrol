//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene,x, y, texture, frame);
        scene.add.existing(this); //add object to existing scene

        this.isFiring = false; //track rocket's firing status
        this.moveSpeed = 4; //pixels per frame
    }

    update(){
        if(this.isFiring){
            this.y -=this.moveSpeed;
            if(this.y < borderUISize*3){
                this.y = game.config.height-borderUISize-borderPadding
                this.isFiring = false;
            }
        }else{
            if(keyLEFT.isDown){
                this.x -= this.moveSpeed;
            }
            if (keyRIGHT.isDown){
                this.x += this.moveSpeed;
            }
            if(Phaser.Input.Keyboard.JustDown(keyF)){
                this.isFiring = true;
            }
            this.x = Phaser.Math.Clamp(this.x, borderUISize+borderPadding, game.config.width-borderUISize-borderPadding)
        }
    }
}