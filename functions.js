let MaxBattery = 100;
display = '';
let on = 1;

let x = document.getElementById("iphoneDisplay");
iphoneOn = 0;
nokiaOn = 0;

function Iphone() {
    this.battery = MaxBattery;
    this.inBox = '';
    this.outBox = '';
    // this.pressOnOff = function () {

    //     if (iphoneOn === 0) {
    //         document.getElementById("iphoneDisplay").value = "Hello. I'm Siri";
    //         iphoneOn++;
    //         enable("Battery");
    //         enable("Sent");
    //         enable("Read");
    //         enable("Write");
    //         enable("Charge");
    //         enable("Inbox");
    //         enable("Outbox");
    //         return;
    //     } else (iphoneOn === 1);
    //     {
    //         document.getElementById("iphoneDisplay").value = '';
    //         iphoneOn--;
    //         disable("Battery");
    //         disable("Sent");
    //         disable("Read");
    //         disable("Write");
    //         disable("Charge");
    //         disable("Inbox");
    //         disable("Outbox");
    //         return;
    //     }
    //
    // };
    this.writeMess = function () {
        document.getElementById("iphoneDisplay").value = "Hello i'm Iphone";
        this.message = "Hello i'm Iphone";
    };
    this.sendMessage = function (phone) {
        phone.inBox = this.message;
        this.outBox = this.message;
        console.log(this.outBox);
        this.battery--;
    };
    this.getOutbox = function () {
        console.log(this.outBox);
        document.getElementById("iphoneDisplay").value = this.outBox;
    };

    this.getInbox = function () {
        document.getElementById("iphoneDisplay").value = this.inBox;
    };

    this.charge = function () {
        this.battery = this.battery + 1;
        if (this.battery > 99) this.battery = 100;
    };
    this.getBattery = function () {
        document.getElementById("iphoneDisplay").value = "Battery is : " + this.battery + " %";
        return this.battery;
    }
}

let iphone = new Iphone();
let nokia = new NPhone();
function NPhone() {
        this.battery = MaxBattery;
        this.inBox = '';
        this.outBox = '';
        // this.pressOnOff = function () {
        //     if (iphoneOn === 0) {
        //         document.getElementById("iphoneDisplay").value = "Hello. I'm Siri";
        //         iphoneOn++;
        //         enable("Battery");
        //         enable("Sent");
        //         enable("Read");
        //         enable("Write");
        //         enable("Charge");
        //         enable("Inbox");
        //         enable("Outbox");
        //         return;
        //     } else (iphoneOn === 1);
        //     {
        //         document.getElementById("iphoneDisplay").value = '';
        //         iphoneOn--;
        //         disable("Battery");
        //         disable("Sent");
        //         disable("Read");
        //         disable("Write");
        //         disable("Charge");
        //         disable("Inbox");
        //         disable("Outbox");
        //         return;
        //     }
        //
        // };
        this.writeMess = function () {
            document.getElementById("nDisplay").value = "Hello i'm Nokia";
            this.message = document.getElementById("nDisplay").value;
        };
        this.sendMessage = function (phone) {
            phone.inBox = this.message;
            this.outBox = this.message;
            this.battery--;
        };
        this.getOutbox = function () {
            console.log(this.outBox);
            document.getElementById("nDisplay").value = this.outBox;
        };

        this.getInbox = function () {
            document.getElementById("nDisplay").value = this.inBox;
        };

        this.charge = function () {
            this.battery = this.battery + 1;
            if (this.battery > 99) this.battery = 100;
        };
        this.getBattery = function () {
            document.getElementById("nDisplay").value = "Battery is : " + this.battery + " %";
            return this.battery;
        }
    }


function disable(buttonId) {
    document.getElementById(buttonId).disabled = true;
}

function enable(buttonId) {
    document.getElementById(buttonId).disabled = false;
}