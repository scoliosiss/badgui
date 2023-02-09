let configpath = ("BadGUI/") // module name then path to file
let configpath2 = ("config.js") // name of file to store data (you have to create the file yourself)
let fileconfig = (FileLib.read(configpath, configpath2))
const configGui = new Gui();

// i love filelib!
// i dont know wwhy i didnt just use persistant data or pogobject...
// FPS GETS BEAMED

register("gameLoad", () => {if (!fileconfig.includes("function")) {FileLib.write(configpath, configpath2, "let incoolgui = false; let inercoolgui = false; let clicker = false; let rightclicker = false; let mousedown = false; let epiccumeater = false; register(\"postGuiRender\" , (mx, my, gui) => {if (gui instanceof com.chattriggers.ctjs.engine.langs.js.JSGui) inercoolgui = true; else inercoolgui = false}); register(\"step\", () => {if (inercoolgui) {if (clicker || rightclicker || mousedown) {incoolgui = true;}}}); register(\"clicked\", (x,y,lr,down) => {if (Client.currentGui.get() !== null) {if (down) mousedown = true; else mousedown = false; if (lr == \"0\" && down) clicker = true; else clicker = false; if (lr == \"1\" && down) rightclicker = true; else rightclicker = false}}); register(\"step\", () => {if (!epiccumeater) {incoolgui=false}}).setFps(5); register(\"guiMouseClick\", function(mx, my, button, state) {if (inercoolgui) {if (mx >= 800 && mx <= 800 + 150 && my >= 450 && my <= 450 + 25) {epiccumeater = true; setTimeout(function() {epiccumeater = false; Client.currentGui.close()}, 500)}}});register(\"step\", () => {if (epiccumeater) {incoolgui = true}});\n")}})
/*
how to use drawbut:
register("command", function() {configGui.open();}).setName("opengui");
register("renderOverlay", function() {
  if (configGui.isOpen()) {                                    
    new drawbut(1, 1, 20000000, 50000000, "new button", "hi there friend", "0 // hiii", always).togglebutton();
                ^x ^y  ^width    ^height     ^text       ^hover text        ^button type  ^show if           ^ put in extra info if you want (need to put in 2 numbers for slider)
    or let newbutton = new drawbut(1, 1, 20000000, 50000000, "new button", "hi there friend", "0 // hiii", always);
    newbutton.togglebutton(); then you can use the ismouseover function
  }
}

how to use ismouseover:
let newwbutton = new drawbut(1, 1, 200, 50, "newbutton", "", "1", always).togglebutton(); // you also have to draw the button
register("guiMouseClick", function(x, y, button) {
if (configGui.isOpen()) {
  if (button == 0) {
    if (newwbutton.isMouseOver()) {
        ChatLib.Chat("cum")
    }
  }
}
*/

class drawbut {
  constructor(x, y, width, height, text, hovert, type, show) { this.x = x; this.y = y; this.width = width; this.height = height; this.text = text; this.hovert = hovert; this.type = type; this.show = show;}
  togglebutton(min, max) {
    file = FileLib.read(configpath, configpath2)
    let newtext = this.text.replace(" ", "").replace("&", "").replace("-", "").replace("(", "").replace(")", "").replace("/", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "") // replaces spaces multiple times just incase!
    if (file.includes(`/*${newtext}true`)) toggle = true;
    else toggle = false;
    if (toggle) col = "&a";
    else col = "&c"; // \/ failsafe
    if (!file.includes(`/*${newtext}true`) && !file.includes(`/*${newtext}false`) && this.type < 4) FileLib.write(configpath, configpath2, `${file}/*${newtext}false*/ let fortnite${newtext} = false; function ${newtext}tog() {if (incoolgui) {let configfile = FileLib.read("${configpath}", "${configpath2}"); if (configfile.includes("/*${newtext}"+"true*/")) fortnite${newtext} = true; else fortnite${newtext} = false;} return fortnite${newtext}}; export{${newtext}tog}; /*${newtext}rightfalse*/ let fortnite${newtext}right = false; function ${newtext}righttog() {if (incoolgui) {let configfile = FileLib.read("Mushroom/gui", "config.js"); if (configfile.includes("/*${newtext}right"+"true*/")) fortnite${newtext}right = true; else fortnite${newtext}right = false;} return fortnite${newtext}right}; export{${newtext}righttog}\n`);
    else if (!file.includes(`${newtext}`) && this.type == 4) FileLib.write(configpath, configpath2, `${file}/*${newtext}${widthe2}*/ function ${newtext}tog() {let configfile = FileLib.read("${configpath}", "${configpath2}"); let fortnite = 0; fortnite = configfile.split("/*"+"${newtext}").pop().split("*/ "+"function ${newtext}tog()")[0]; return fortnite}; export {${newtext}tog}\n`);
    else if (!file.includes(`${newtext}`) && this.type == 5) FileLib.write(configpath, configpath2, `${file}/*${newtext}&f*/ function ${newtext}tog() {let configfile = FileLib.read("${configpath}", "${configpath2}"); let fortnite = ""; fortnite = configfile.split("/*"+"${newtext}").pop().split("*/ "+"function ${newtext}tog()")[0]; return fortnite}; export {${newtext}tog}\n`);
    if (this.show) {
      if (Client.getMouseX() >= this.x && Client.getMouseX() <= this.x + this.width && Client.getMouseY() >= this.y && Client.getMouseY() <= this.y + this.height) { // checks if mouse is over button
        Renderer.drawRect(Renderer.color(10, 10, 150, 150), this.x, this.y, this.width, this.height); // changes color of button
        if (this.hovert !== "") configGui.drawCreativeTabHoveringString(this.hovert, Client.getMouseX(), Client.getMouseY());
        if (clicker) { // checks if you left clicked
          clicker = false // sound effects!
          if (this.type < 2) if (toggle) World.playSound('tile.piston.out', 1, 1); else World.playSound('tile.piston.in', 1, 1);
          if (this.type > 1) if (toggle) World.playSound('mob.chicken.plop', 1, 1); else World.playSound('gui.button.press', 1, 1);
          if (this.type == 4) World.playSound('game.player.swim.splash', 1, 1); 
          if (this.type > 3) return; // i dont like using the curly brackets, curly brackets are ugly >:(
          if (!file.includes(`${newtext}true`)) {FileLib.write(configpath, configpath2, file.replace(`${newtext}false`, `${newtext}true`)); toggle = true}
          else FileLib.write(configpath, configpath2, file.replace(`${newtext}true`, `${newtext}false`)); toggle = false;
        } // writes true / false. the function to read the file writes itself.
        if (rightclicker) { // checks if you left clicked
          if (this.type > 3) return;
          if (this.type > 1) if (toggle) World.playSound('tile.piston.out', 1, 1), World.playSound('mob.chicken.plop', 1, 1); else World.playSound('tile.piston.in', 1, 1); World.playSound('gui.button.press', 1, 1);
          if (!file.includes(`${newtext}righttrue`)) {FileLib.write(configpath, configpath2, file.replace(`${newtext}rightfalse`, `${newtext}righttrue`)); toggle = true}
          else FileLib.write(configpath, configpath2, file.replace(`${newtext}righttrue`, `${newtext}rightfalse`)); toggle = false;
          rightclicker = false // set right clicked false 
        }
      }
      //if (scroll) {if (scrold = "-1") this.y+=10; else this.y-=10; scroll = false} doesnt work :(
      if (this.type == 0) { // draws plain black button: https://i.imgur.com/dg6uLGX.png
        Renderer.drawRect(Renderer.color(0,0,0,250), this.x, this.y, this.width, this.height);
        Renderer.drawString(col + this.text, this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2), this.y + (this.height / 2 - 4));
      }
      if (this.type == 2) { // toggleable button: https://i.imgur.com/vfP5DR1.png
        Renderer.drawRect(Renderer.color(10, 10, 10, 150), this.x, this.y, this.width, this.height);
        if (toggle) Renderer.drawRect(Renderer.color(20, 0, 150, 250), this.x, this.y, this.width, this.height);
        Renderer.drawString(col + this.text, this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2), this.y + (this.height / 2 - 4));
      }
      if (this.type == 3) { // draws a different toggle button: https://i.imgur.com/C3heK6w.png
        Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
        Renderer.drawRect(Renderer.color(250, 250, 250, 250), this.x + (this.width * 0.85), this.y + (this.height / 2)-4, this.width / (this.width / 8.5), this.height / (this.height / 8));
        if (Client.getMouseX() >= this.x && Client.getMouseX() <= this.x + this.width && Client.getMouseY() >= this.y && Client.getMouseY() <= this.y + this.height) Renderer.drawRect(Renderer.color(0, 0, 250, 150), this.x + (this.width * 0.85) + 1, this.y + (this.height / 2) + 1-4, this.width / (this.width / 8.5) - 2, this.height / (this.height / 8) - 2);
        if (toggle) Renderer.drawRect(Renderer.color(0, 0, 250, 250), this.x + (this.width * 0.85) + 1, this.y + (this.height / 2) + 1 - 4, this.width / (this.width / 8.5) - 2, this.height / (this.height / 8) - 2);
        Renderer.drawString(col + this.text, this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2), this.y + (this.height / 2 - 4));
      }
      if (this.type == 1) { // less seethrough toggle button: https://i.imgur.com/TXjN41h.png
        if (Client.getMouseX() >= this.x && Client.getMouseX() <= this.x + this.width && Client.getMouseY() >= this.y && Client.getMouseY() <= this.y + this.height) Renderer.drawRect(Renderer.color(0,0,100,200), this.x, this.y, this.width, this.height);
        else Renderer.drawRect(Renderer.color(50,50,50,200), this.x, this.y, this.width, this.height);
        if (toggle) Renderer.drawRect(Renderer.color(0, 0, 200, 200), this.x, this.y, this.width, this.height);
        Renderer.drawString(col + this.text, this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2), this.y + (this.height / 2 - 4));
      }
      if (this.type == 4) { // Slider button: https://i.imgur.com/Ru8Kqch.png
        Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
        widthe=((widthe2-min)*(this.width / (max-min))) // :fire: 
        widthe2=file.split(`/*${newtext}`).pop().split(`*/ function ${newtext}tog()`)[0] // ngl i spent like 30 minutes wondering why this wasnt working and i figured out i mispelled "file" as "fiel"
        if (mousedown && Client.getMouseX() >= this.x && Client.getMouseX() <= this.x + this.width && Client.getMouseY() >= this.y && Client.getMouseY() <= this.y + this.height) {
          widthe = (Client.getMouseX() - this.x).toFixed(0)
          widthe3 = ((widthe / (this.width / (max-min)))+min).toFixed(1); // MATHS IS SO FUCKING HARD IM NEVER DOING IT AGAIN
          FileLib.write(configpath, configpath2, file.replace(`${newtext}${widthe2}`, `${newtext}${widthe3}`))
        }
        if (widthe > this.width) widthe = this.width; if (widthe < 0.1) widthe = 1;
        if (widthe2 > max) widthe2 = max; if (widthe2 < min) widthe2 = min;
        Renderer.drawRect(Renderer.color(0, 0, 250, 250), this.x, this.y, widthe, this.height);
        Renderer.drawString("&a"+this.text + "  " + widthe2, this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2), this.y + (this.height / 2 - 4));
      }
      if (this.type == 5) { // Text button: text
        Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
        textboxpiss=file.split(`/*${newtext}`).pop().split(`*/ function ${newtext}tog()`)[0]
        if (textboxpiss == "&f") textboxpiss2 = this.text;
        else textboxpiss2 = textboxpiss;
        if (typed && Client.getMouseX() >= this.x && Client.getMouseX() <= this.x + this.width && Client.getMouseY() >= this.y && Client.getMouseY() <= this.y + this.height && keycode !== 42 && keycode !== 58 && keycode !== 15 && keycode !== 29 && keycode !== 5 && keycode !== 28) {
          if (keycode == 14 && textboxpiss !== "&f") {let newtextpiss = textboxpiss.charAt(textboxpiss.length-1)
            FileLib.write(configpath, configpath2, file.replace(`/*${newtext}${textboxpiss}`, `/*${newtext}${removeLastInstance(newtextpiss, textboxpiss)}`));}
          else FileLib.write(configpath, configpath2, file.replace(`/*${newtext}${textboxpiss}`, `/*${newtext}${textboxpiss}${keypressed}`)); typed = false;
        }
        Renderer.drawString("&b "+textboxpiss2, this.x, this.y + (this.height / 2 - 4));
      }
    }
  }
  isMouseOver() { // for if you want to make pressing buttons run commands or smth
    let mx = Client.getMouseX();
    let my = Client.getMouseY();
    if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
        return true;
    }
  }
}

register("guiKey", (key, code, gui, event) => {keypressed = key; keycode = code; typed = true;})
register("scrolled", (x,y,d) => {if (configGui.isOpen())scroll = true; scrold = d})
register("clicked", (x,y,lr,down) => {if (configGui.isOpen()) {if (down) mousedown = true; else mousedown = false; if (lr == "0" && down) clicker = true; if (lr == "1" && down) rightclicker = true}})
function removeLastInstance(badtext, str) {var charpos = str.lastIndexOf(badtext);if (charpos<0) return str;ptone = str.substring(0,charpos);pttwo = str.substring(charpos+(badtext.length));return (ptone+pttwo);} 
// ^^^^ made by someone in stackoverflow: https://i.imgur.com/eKfwYab.png the thread: https://stackoverflow.com/questions/2729666/javascript-replace-last-occurrence-of-text-in-a-string yes i googled this...
let widthe = 0
let widthe2 = 0
let widthe3 = 0
let typed = false
let keycode = ""
let keypressed = ""
let textboxpiss = ""
let textboxpiss2 = ""
let mousedown = false
let clicker = false
let rightclicker = false

export {drawbut, configGui, configpath, configpath2, fileconfig}