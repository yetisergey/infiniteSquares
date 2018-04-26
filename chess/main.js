function Figure(x, y, c, i) {
    this.X = x;
    this.Y = y;
    this.C = c;
    this.I = i;
    this.Move = (xMove, yMove) => {};
}

function King() {
    Figure.apply(this, arguments);
}

function Queen() {
    Figure.apply(this, arguments);
}

function Rook() {
    Figure.apply(this, arguments);
    this.Move = (xMove, yMove) => {
        if (this.X === xMove && this.Y !== yMove) {
            if (this.Y < yMove) {
                let flag = true;
                for (let i = 0; i < game.figures.length; i++) {
                    if (
                        game.figures[i].X === xMove &&
                        game.figures[i].Y < yMove &&
                        game.figures[i].Y > this.Y
                    ) {
                        flag = false;

                        break;
                    }
                }
                if (flag) {
                    var flag2 = true;
                    for (let i = 0; i < game.figures.length; i++) {
                        if (
                            game.figures[i].Y === yMove &&
                            game.figures[i].X === xMove &&
                            game.figures[i].C !== this.C
                        ) {
                            game.figures.splice(i, 1);
                            this.Y = yMove;
                            flag2 = false;
                            game.updateGameField();

                            break;
                        }
                    }
                    if (flag2) {
                        if (game.getFigure(xMove, yMove) === undefined) {
                            this.Y = yMove;
                            game.updateGameField();
                        }
                    }
                }
            } else {
                let flag = true;
                for (let i = 0; i < game.figures.length; i++) {
                    if (
                        game.figures[i].X === xMove &&
                        game.figures[i].Y > yMove &&
                        game.figures[i].Y < this.Y
                    ) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    var flag2 = true;
                    for (let i = 0; i < game.figures.length; i++) {
                        if (
                            game.figures[i].Y === yMove &&
                            game.figures[i].X === xMove &&
                            game.figures[i].C !== this.C
                        ) {
                            game.figures.splice(i, 1);
                            this.Y = yMove;
                            game.updateGameField();
                            flag2 = false;
                            break;
                        }
                    }
                    if (flag2) {
                        if (game.getFigure(xMove, yMove) === undefined) {
                            this.Y = yMove;
                            game.updateGameField();
                        }
                    }
                }
            }
        } else {
            if (this.Y === yMove && this.X !== xMove) {
                if (this.X < xMove) {
                    let flag = true;
                    for (let i = 0; i < game.figures.length; i++) {
                        if (
                            game.figures[i].Y === yMove &&
                            game.figures[i].X < xMove &&
                            game.figures[i].X > this.X
                        ) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        var flag2 = true;
                        for (let i = 0; i < game.figures.length; i++) {
                            if (
                                game.figures[i].Y === yMove &&
                                game.figures[i].X === xMove &&
                                game.figures[i].C !== this.C
                            ) {
                                game.figures.splice(i, 1);
                                this.X = xMove;
                                game.updateGameField();
                                flag2 = false;
                                break;
                            }
                        }
                        if (flag2) {
                            if (game.getFigure(xMove, yMove) === undefined) {
                                this.X = xMove;
                                game.updateGameField();
                            }
                        }
                    }
                } else {
                    let flag = true;
                    for (let i = 0; i < game.figures.length; i++) {
                        if (
                            game.figures[i].Y === yMove &&
                            game.figures[i].X > xMove &&
                            game.figures[i].X < this.X
                        ) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        var flag2 = true;
                        for (let i = 0; i < game.figures.length; i++) {
                            if (
                                game.figures[i].Y === yMove &&
                                game.figures[i].X === xMove &&
                                game.figures[i].C !== this.C
                            ) {
                                game.figures.splice(i, 1);
                                this.X = xMove;
                                game.updateGameField();
                                flag2 = false;
                                break;
                            }
                        }
                        if (flag2) {
                            if (game.getFigure(xMove, yMove) === undefined) {
                                this.X = xMove;
                                game.updateGameField();
                            }
                        }
                    }
                }
            }
        }
    };
}

function Bishop() {
    Figure.apply(this, arguments);
}

function Knight() {
    Figure.apply(this, arguments);
}

function Pawn(x, y) {
    Figure.apply(this, arguments);
    this.Move = (xMove, yMove) => {
        if (this.C === "W") {
            if (xMove === this.X && yMove === this.Y + 1) {
                let flag = false;
                for (let i = 0; i < game.figures.length; i++) {
                    if (game.figures[i].X === xMove && game.figures[i].Y === yMove) {
                        flag = true;
                    }
                }
                if (!flag) {
                    this.Y++;
                    game.updateGameField();
                }
            } else {
                if (xMove === this.X + 1 && yMove === this.Y + 1) {
                    for (let i = 0; i < game.figures.length; i++) {
                        if (
                            game.figures[i].X === xMove &&
                            game.figures[i].Y === yMove &&
                            game.figures[i].C === "B"
                        ) {
                            game.figures.splice(i, 1);
                            this.X = xMove;
                            this.Y = yMove;
                            game.updateGameField();

                            break;
                        }
                    }
                } else {
                    if (xMove === this.X - 1 && yMove === this.Y + 1) {
                        for (let i = 0; i < game.figures.length; i++) {
                            if (
                                game.figures[i].X === xMove &&
                                game.figures[i].Y === yMove &&
                                game.figures[i].C === "B"
                            ) {
                                game.figures.splice(i, 1);
                                this.X = xMove;
                                this.Y = yMove;
                                game.updateGameField();

                                break;
                            }
                        }
                    }
                }
            }
        } else {
            if (xMove === this.X && yMove === this.Y - 1) {
                let flag = false;
                for (let i = 0; i < game.figures.length; i++) {
                    if (game.figures[i].X === xMove && game.figures[i].Y === yMove) {
                        flag = true;
                    }
                }
                if (!flag) {
                    this.Y--;
                    game.updateGameField();
                }
            } else {
                if (xMove === this.X - 1 && yMove === this.Y - 1) {
                    for (let i = 0; i < game.figures.length; i++) {
                        if (
                            game.figures[i].X === xMove &&
                            game.figures[i].Y === yMove &&
                            game.figures[i].C === "W"
                        ) {
                            game.figures.splice(i, 1);
                            this.X = xMove;
                            this.Y = yMove;
                            game.updateGameField();

                            break;
                        }
                    }
                } else {
                    if (xMove === this.X + 1 && yMove === this.Y - 1) {
                        for (let i = 0; i < game.figures.length; i++) {
                            if (
                                game.figures[i].X === xMove &&
                                game.figures[i].Y === yMove &&
                                game.figures[i].C === "W"
                            ) {
                                game.figures.splice(i, 1);
                                this.X = xMove;
                                this.Y = yMove;
                                game.updateGameField();

                                break;
                            }
                        }
                    }
                }
            }
        }
    };
}

function Game() {
    var self = this;
    self.figures = [];
    self.gameStroke = "B";

    self.initGame = () => {
        for (let i = 0; i < 8; i++) {
            game.figures.push(new Pawn(i, 1, "W", loadImage("PawnW")));
        }

        for (let i = 0; i < 8; i++) {
            game.figures.push(new Pawn(i, 6, "B", loadImage("PawnB")));
        }

        game.figures.push(new King(4, 0, "W", loadImage("KingW")));
        game.figures.push(new Queen(3, 0, "W", loadImage("QueenW")));
        game.figures.push(new Rook(0, 0, "W", loadImage("RookW")));
        game.figures.push(new Rook(7, 0, "W", loadImage("RookW")));
        game.figures.push(new Bishop(2, 0, "W", loadImage("BishopW")));
        game.figures.push(new Bishop(5, 0, "W", loadImage("BishopW")));
        game.figures.push(new Knight(1, 0, "W", loadImage("KnightW")));
        game.figures.push(new Knight(6, 0, "W", loadImage("KnightW")));

        game.figures.push(new King(4, 7, "B", loadImage("KingB")));
        game.figures.push(new Queen(3, 7, "B", loadImage("QueenB")));
        game.figures.push(new Rook(0, 7, "B", loadImage("RookB")));
        game.figures.push(new Rook(7, 7, "B", loadImage("RookB")));
        game.figures.push(new Bishop(2, 7, "B", loadImage("BishopB")));
        game.figures.push(new Bishop(5, 7, "B", loadImage("BishopB")));
        game.figures.push(new Knight(1, 7, "B", loadImage("KnightB")));
        game.figures.push(new Knight(6, 7, "B", loadImage("KnightB")));
        turnOnActionControl();
        self.updateGameField();
    };

    function turnOnActionControl() {
        var XPrevMove = -1;
        var YPrevMove = -1;
        var railsGameField = document
            .getElementsByTagName("table")[0]
            .getElementsByTagName("tr");
        for (var i = 0; i < railsGameField.length; i++) {
            var tds = railsGameField[i].getElementsByTagName("td");
            for (var n = 0; n < railsGameField.length; n++) {
                tds[n].onclick = function () {
                    var figure = self.getFigure(
                        parseInt(this.id[0]),
                        parseInt(this.id[1])
                    );
                    if (figure !== undefined) {
                        if (figure.C === self.gameStroke) {
                            XPrevMove = parseInt(this.id[0]);
                            YPrevMove = parseInt(this.id[1]);
                        } else {
                            XPrevMove = -1;
                            YPrevMove = -1;
                        }
                    } else {
                        if (XPrevMove !== -1 && YPrevMove != -1) {
                            self
                                .getFigure(XPrevMove, YPrevMove)
                                .Move(parseInt(this.id[0]), parseInt(this.id[1]));
                        }
                        XPrevMove = -1;
                        YPrevMove = -1;
                    }
                };
            }
        }
    }
    self.gameStrokeVision = () => {
        document.getElementById("info").innerHTML = self.gameStroke;
    };
    self.updateGameField = () => {
        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++)
                document.getElementById(i.toString() + j.toString()).innerHTML = "";

        for (let i = 0; i < game.figures.length; i++)
            document
            .getElementById(
                game.figures[i].X.toString() + game.figures[i].Y.toString()
            )
            .append(game.figures[i].I);

        self.gameStroke = "W" === self.gameStroke ? "B" : "W";

        self.gameStrokeVision();
    };
    self.getFigure = (x, y) => {
        for (let i = 0; i < game.figures.length; i++) {
            if (game.figures[i].X === x && game.figures[i].Y === y) {
                return game.figures[i];
            }
        }
    };

    function loadImage(name) {
        const path = "./images/";
        let img = new Image();
        img.src = path + name + ".svg";
        return img;
    }
}

var game = new Game();
game.initGame();
