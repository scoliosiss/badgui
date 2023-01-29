import { configGui, drawbut } from "./gui";
import { clickmetog, rightclickmerighttog } from './config';


let always = true
register("command", () => {
  configGui.open();
}).setName("examplegui")

// toggles are named after the buttons text then tog example: button 1's toggle is clickmetog()
// every button also has a right click toggle so it can toggle multiple things
// right click toggles are named the buttons text then righttog example: button 7's toggle is rightclickmerighttog() and also rightclickmetog()
// you can also make the gui need multiple toggles to turn on by putting the toggles in ()

register("renderOverlay", function() {
  if (configGui.isOpen()) {                                    
    new drawbut(200, 50, 200, 50, "click me", "hi there friend", "0", always).togglebutton(); // 1
    new drawbut(200, 100, 200, 50, "other title button", "hiiii", "1", clickmetog()).togglebutton(); 
    new drawbut(200, 150, 200, 50, "toggle button", "wya", "2", clickmetog()).togglebutton(); 
    new drawbut(200, 200, 200, 50, "extra toggle button", "wha", "3", clickmetog()).togglebutton(); // 4
    new drawbut(200, 250, 200, 50, "slider", "helo", "4", clickmetog()).togglebutton(-1000,1000);
    new drawbut(200, 300, 200, 50, "text box (hover over to type)", "helo", "5", clickmetog()).togglebutton();
    new drawbut(200, 350, 200, 50, "right click me", "helo", "2", clickmetog()).togglebutton(); // 7
    new drawbut(200, 400, 200, 50, "ahhh secret button", "woah", "3", (clickmetog() && rightclickmerighttog())).togglebutton(); 
  }
})

