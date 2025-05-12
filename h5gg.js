/*
<script src="h5gg.js"></script>
*/

"use strict";

if (!(navigator.userAgent.toLowerCase().includes("iphone") || navigator.userAgent.toLowerCase().includes("ipad"))) {

    const sym = Symbol();

    var h5gg_internel_version = "0.0";

    var h5gg = new class {

        constructor() {
            this.body = null;
            this.icon = document.createElement("img");
this.setting = {
    ButtonAction: function () {
        const menu = document.querySelector(".mod-menu");
        if (menu) {
            if (menu.style.display === "none") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        }
    },
    WindowDrag: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    }
};


            Object.defineProperty(Screen.prototype, "width", {
                get: function () {
                    return window.innerWidth;
                },
                set: function (v) {
                    this.sym = v;
                }
            });

            Object.defineProperty(Screen.prototype, "height", {
                get: function () {
                    return window.innerHeight;
                },
                set: function (v) {
                    this.sym = v;
                }
            });

            document.addEventListener("DOMContentLoaded", () => {

                this.body = document.body;

                this.icon = document.createElement("img");
                this.icon.src = "https://i.pinimg.com/736x/1a/e2/a2/1ae2a2ebffa169bbfc4bb544296a901d.jpg";
                this.icon.style.position = "fixed";
                this.icon.style.top = "20px";
                this.icon.style.left = "25px";
                this.icon.style.width = "55px";
                this.icon.style.height = "55px";
                this.icon.style.objectFit = "cover";
                this.icon.style.borderRadius = "50px";
                this.icon.style.zIndex = "999";
                this.icon.style.opacity = "0.8";
                this.icon.style.userSelect = "none";
                this.icon.draggable = false; 
                this.icon.oncontextmenu = e => e.preventDefault();
                this.icon.onclick = this.setting.ButtonAction;
                document.documentElement.appendChild(this.icon);
                
                

                this.body.IO = {
                    isDragging: false,
                    offset: {
                        x: 0,
                        y: 0
                    }
                };

                this.icon.IO = {
                    isDragging: false,
                    offset: {
                        x: 0,
                        y: 0
                    }
                };

                this.body.addEventListener("mousedown", (e) => {
                    const rect = this.body.getBoundingClientRect();
                    if (e.clientX >= rect.left + this.setting.WindowDrag.x &&
                        e.clientX <= rect.left + this.setting.WindowDrag.w &&
                        e.clientY >= rect.top + this.setting.WindowDrag.y &&
                        e.clientY <= rect.top + this.setting.WindowDrag.h) {
                        this.body.IO.isDragging = true;
                        this.body.IO.offset.x = e.clientX - rect.left;
                        this.body.IO.offset.y = e.clientY - rect.top;
                        e.stopPropagation();
                    }
                });

                this.icon.addEventListener("mousedown", (e) => {
                    this.icon.IO.isDragging = true;
                    const rect = this.icon.getBoundingClientRect();
                    this.icon.IO.offset.x = e.clientX - rect.left;
                    this.icon.IO.offset.y = e.clientY - rect.top;

                    e.stopPropagation();
                });

                document.addEventListener("mousemove", (e) => {
                    if (this.icon.IO.isDragging) {
                        this.icon.style.left = `${e.clientX - this.icon.IO.offset.x}px`;
                        this.icon.style.top = `${e.clientY - this.icon.IO.offset.y}px`;
                    }
                    if (this.body.IO.isDragging) {
                        this.body.style.left = `${e.clientX - this.body.IO.offset.x}px`;
                        this.body.style.top = `${e.clientY - this.body.IO.offset.y}px`;
                    }
                });

                document.addEventListener("mouseup", () => {
                    this.icon.IO.isDragging = false;
                    this.body.IO.isDragging = false;
                });

this.icon.addEventListener("touchstart", (e) => {
    e.preventDefault(); // これでタッチのデフォルト動作を無効化
    this.icon.IO.isDragging = true;
    const rect = this.icon.getBoundingClientRect();
    this.icon.IO.offset.x = e.touches[0].clientX - rect.left;
    this.icon.IO.offset.y = e.touches[0].clientY - rect.top;
    e.stopPropagation();
});

document.addEventListener("touchmove", (e) => {
    if (this.icon.IO.isDragging) {
        this.icon.style.left = `${e.touches[0].clientX - this.icon.IO.offset.x}px`;
        this.icon.style.top = `${e.touches[0].clientY - this.icon.IO.offset.y}px`;
    }
    if (this.body.IO.isDragging) {
        this.body.style.left = `${e.touches[0].clientX - this.body.IO.offset.x}px`;
        this.body.style.top = `${e.touches[0].clientY - this.body.IO.offset.y}px`;
    }
});

// touchend イベントをアイコンにだけ適用
this.icon.addEventListener("touchend", (e) => {
    // ドラッグが行われていなければタップとして扱い、setButtonAction を実行
    if (!this.icon.IO.isDragging) {
        this.setting.ButtonAction();
    }

    // ドラッグが終了した場合、状態をリセット
    this.icon.IO.isDragging = false;
    this.body.IO.isDragging = false;
});



            });

            console.log("H5GG Success!!");

        }

        clearResults() {
            console.log(`h5gg.clearResults();`);
        }

        searchNumber(value, type, min, max) {
            console.log(`h5gg.searchNumber("${Number(value)}", "${type}", "${min}", "${max}");`);
        }

        searchNearby(value, type, range) {
            console.log(`h5gg.searchNearby("${Number(value)}", "${type}", "${range}");`);
        }

        editAll(value, type) {
            console.log(`h5gg.editAll("${Number(value)}", "${type}");`);
            return 1;
        }

        getResultsCount = function () {
            console.log(`h5gg.getResultsCount();`);
            return 1;
        }

        getResults = function (count) {
            console.log(`h5gg.getResults(${count});`);
            let Results = new Array();
            for (let i = 0; i < count; i++) {
                const Object = {
                    address: "0x0",
                    value: 0,
                    type: "F32"
                };
                Results.push(Object);
            }
            return Results;
        }

        getRangesList = function (count = "") {
            console.log(`h5gg.getRangesList(${count});`);
            let Results = new Array();
            const Object = {
                name: "/var/mobile/Bundle/Application/0123-4567-89AB-CDEF/Game.app/Game",
                start: "0x0",
                end: "0x0"
            };
            Results.push(Object);
            return Results;
        }

        getValue = function (address, type) {
            console.log(`h5gg.getValue("0x${address.toString(16)}", "${type}");`);
            return 0;
        }

        setValue = function (address, value, type) {
            console.log(`h5gg.setValue("0x${address.toString(16)}", "${value}", "${type}");`);
        }

        getProcList() {
            console.log(`h5gg.getProcList();`);
            let Results = new Array();
            for (let i = 0; i < 5; i++) {
                const Object = {
                    pid: i,
                    name: `Process(${i})`
                };
                Results.push(Object);
            }
            return Results;
        }

        setTargetProc = function (pid) {
            return true;
        }

        setFloatTolerance = function (float) {
            console.log(`h5gg.setFloatTolerance(${float});`);
        }

        getLocalScripts = function () {
            console.log(`h5gg.getLocalScripts();`);
            let Results = new Array();
            for (let i = 0; i < 5; i++) {
                const Object = {
                    name: `File${i}`,
                    path: `/var/mobile/`
                };
                Results.push(Object);
            }
            return Results;
        }

        pickScriptFile = function () {
            console.log(`h5gg.pickScriptFile();`);
        }

        makeTweak = function () {
            console.log(`h5gg.makeTweak();`);
        }

        loadPlugin = function (oc, dylib) {
            console.log(`h5gg.loadPlugin(${oc},${dylib});`);
        }

    }

    var setWindowRect = function (x, y, w, h) {
        document.body.style.position = `fixed`;
        document.body.style.top = `${y}px`;
        document.body.style.left = `${x}px`;
        document.body.style.width = `${w}px`;
        document.body.style.height = `${h}px`;
        console.log(`setWindowRect(${x}, ${y}, ${w}, ${h});`);
    }

    var setWindowDrag = function (x, y, w, h) {
        h5gg.setting.WindowDrag.x = x;
        h5gg.setting.WindowDrag.y = x;
        h5gg.setting.WindowDrag.w = w;
        h5gg.setting.WindowDrag.h = h;
        console.log(`setWindowDrag(${x}, ${y}, ${w}, ${h});`);
    };

    var setButtonAction = function (func) {
        h5gg.setting.ButtonAction = func;
    }

    var setLayoutAction = function (func) {
        const w = window.screen.width;
        const h = window.screen.height;
        func(w, h);
    }

    var setWindowTouch = function (bool) {
        console.log(`setWindowTouch(${bool});`);
    }

    var setWindowVisible = function (bool) {
        console.log(`setWindowVisible(${bool});`);
    }

    var setButtonImage = function (url) {
        console.log(`setButtonImage(${url});`);
    }
}

function B1() {
    const menu = document.querySelector(".mod-menu");
    if (menu) {
        menu.style.display = "none"; 
        var locker = setInterval(() => {
        }, 15);
    }
}
