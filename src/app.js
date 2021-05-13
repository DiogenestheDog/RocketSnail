window.addEventListener('DOMContentLoaded', () => {
    const game = document.getElementById('canvas');
    const GAME_WIDTH = game.width;
    const GAME_HEIGHT = game.height;
    const ctx = game.getContext('2d');
    
    const erase = function() {
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }.bind(this);

    function Sprite(url, sheetX, sheetY, x, y, ctx) {
        this.url = url;
        this.x = x;
        this.y = y;
        this.sheetX = sheetX;
        this.sheetY = sheetY;
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = url;
    }

    Sprite.prototype.moveSpriteSheet = () => {
        
    }

    Sprite.prototype.draw = () => {
        console.log(this);
        ctx.drawImage(this.image, this.sheetX, this.sheetY, this.x, this.y);
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }

    function InputTracker() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        window.addEventListener("keydown", e => {
            console.log(e.keyCode);
            if (e.keyCode === 65 || e.keyCode === 37) {
                this.left = true;
            }
            if (e.keyCode === 68 || e.keyCode === 39) {
                this.right = true;
            }
            if (e.keyCode === 83 || e.keyCode === 40) {
                this.down = true;
            }
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.up = true;
            }
        });
        window.addEventListener("keyup", e => {

            if (e.keyCode === 65 || e.keyCode === 37) {
                this.left = false;
            }
            if (e.keyCode === 68 || e.keyCode === 39) {
                this.right = false;
            }
            if (e.keyCode === 83 || e.keyCode === 40) {
                this.down = false;
            }
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.up = false;
            }
        });
    }
    

    function moveSprite(sprite, tracker) {
        let {left, right, up, down } = tracker;

        if (up && left) {
            sprite.x--;
            sprite.y--;
        } else if (up && right) {
            sprite.x++;
            sprite.y--;
        } else if (down && left) {
            sprite.x--;
            sprite.y++;
        } else if (down && right) {
            sprite.x++;
            sprite.y++;
        } else if (left) {
            sprite.x--
        } else if (right) {
            sprite.x++
        } else if (down) {
            sprite.y++
        } else if (up) {
            sprite.y--;
        }
        erase();
        sprite.ctx.drawImage(sprite.image, sprite.sheetX,
            sprite.sheetY, 64, 64, sprite.x, sprite.y, 64, 64);
        sprite.sheetX = (sprite.sheetX + 64) % 256;
    }

    let rocketSnail = new Sprite("./src/images/rocket_snail.png", 0, 0, 64, 64, ctx);

    rocketSnail.image.onload = () => {
        ctx.drawImage(rocketSnail.image, rocketSnail.sheetX, rocketSnail.sheetY, 64, 64, rocketSnail.x, rocketSnail.y, 64, 64);
    }

    const tracker = new InputTracker();
    

    const gameLoop = (timestamp) => {

        // look into throttling this
        secondsPassed = (timestamp - oldTimeStamp) / 1000;
        oldTimeStamp = timestamp;
    
        // Calculate fps
        fps = Math.round(1 / secondsPassed);
        console.log(fps)
            erase();
            moveSprite(rocketSnail, tracker);
            window.requestAnimationFrame(gameLoop);

    }

    window.requestAnimationFrame(gameLoop);


});
