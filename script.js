"use strict";
var app = Vue.createApp({
    data: function () {
        return {
            header1: 'Смартфоны',
            param_runame: {
                name: 'notext',
                manufacturer: 'ПРОИЗВОДИТЕЛЬ',
                releaseYear: 'ГОД РЕЛИЗА',
                screenSize: 'ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)',
                manufcountry: 'СТРАНА-ПРОИЗВОДИТЕЛЬ',
                disksize: 'ОБЪЁМ ПАМЯТИ',
                screenFPS: 'ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА',
                nfc: 'NFC',
                esimSupport: 'ПОДДЕРЖКА ESIM',
                wirelessCharge: 'ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ',
                price: 'СТОИМОСТЬ',
            },
            phones: [
                {
                    id: 1,
                    name: 'Apple IPhone 12',
                    manufacturer: 'Apple',
                    releaseYear: 2020,
                    screenSize: 6.1,
                    manufcountry: 'Китай',
                    disksize: 128,
                    screenFPS: 60,
                    nfc: false,
                    esimSupport: true,
                    wirelessCharge: true,
                    price: 81990,
                    isVisible: false,
                },
                {
                    id: 2,
                    name: 'Xiaomi Mi 11 Lite',
                    manufacturer: 'Xiaomi',
                    releaseYear: 2021,
                    screenSize: 6.55,
                    manufcountry: 'Китай',
                    disksize: 128,
                    screenFPS: 90,
                    nfc: true,
                    esimSupport: true,
                    wirelessCharge: false,
                    price: 27490,
                    isVisible: false,
                },
                {
                    id: 3,
                    name: 'Samsung Galaxy A72',
                    manufacturer: 'Samsung',
                    releaseYear: 2021,
                    screenSize: 6.7,
                    manufcountry: 'Вьетнам',
                    disksize: 128,
                    screenFPS: 90,
                    nfc: true,
                    esimSupport: false,
                    wirelessCharge: true,
                    price: 32890,
                    isVisible: false,
                },
                {
                    id: 4,
                    name: 'Samsung Galaxy S21',
                    manufacturer: 'Samsung',
                    releaseYear: 2021,
                    screenSize: 6.4,
                    manufcountry: 'Вьетнам',
                    disksize: 128,
                    screenFPS: 120,
                    nfc: true,
                    esimSupport: true,
                    wirelessCharge: true,
                    price: 64120,
                    isVisible: false,
                },
                {
                    id: 5,
                    name: 'Apple IPhone XR',
                    manufacturer: 'Apple',
                    releaseYear: 2018,
                    screenSize: 6.06,
                    manufcountry: 'Китай',
                    disksize: 64,
                    screenFPS: 120,
                    nfc: true,
                    esimSupport: true,
                    wirelessCharge: true,
                    price: 22500,
                    isVisible: false,
                },
                {
                    id: 6,
                    name: 'Realme 8 Pro',
                    manufacturer: 'Realme',
                    releaseYear: 2021,
                    screenSize: 6.4,
                    manufcountry: 'Китай',
                    disksize: 128,
                    screenFPS: 60,
                    nfc: true,
                    esimSupport: false,
                    wirelessCharge: true,
                    price: 19900,
                    isVisible: false,
                },
            ],
            showName: true,
            showManufacturer: true,
            showReleaseYear: true,
            showScreenSize: true,
            showManufcountry: true,
            showDisksize: true,
            showScreenFPS: true,
            showNFC: true,
            showESIMSupport: true,
            showWirelessCharge: true,
            showPrice: true,
            devmode: false,
            outputQuantity: 3,
            currentlyOutputing: 0,
            isChecked: false,
            distinctName: false,
            distinctManufacturer: false,
            distinctReleaseYear: false,
            distinctScreenSize: false,
            distinctManufcountry: false,
            distinctDisksize: false,
            distinctScreenFPS: false,
            distinctNFC: false,
            distinctESIMSupport: false,
            distinctWirelessCharge: false,
            distinctPrice: false,
        };
    },
    computed: {
        phonesOutput: function () {
            console.log("phonesOutput RUN");
            return this.phones.filter(function (phone) { return phone.isVisible === true; });
        },
        phonesHidden: function () {
            console.log("phonesHidden RUN");
            return this.phones.filter(function (phone) { return phone.isVisible === false; });
        },
        outputDiff: function () {
            if (this.outputQuantity > this.currentlyOutputing)
                return this.outputQuantity - this.currentlyOutputing;
            else
                return this.currentlyOutputing - this.outputQuantity;
        }
    },
    methods: {
        checkboxEvent: function () {
            console.log("checkboxEvent RUN");
            console.log("checkbox.isChecked ".concat(this.isChecked));
            var baselineName = this.phonesOutput[0].name;
            var baselineManufacturer = this.phonesOutput[0].manufacturer;
            var baselineReleaseYear = this.phonesOutput[0].releaseYear;
            var baselineScreenSize = this.phonesOutput[0].screenSize;
            var baselineManufcountry = this.phonesOutput[0].manufcountry;
            var baselineDisksize = this.phonesOutput[0].disksize;
            var baselineScreenFPS = this.phonesOutput[0].screenFPS;
            var baselineNFC = this.phonesOutput[0].nfc;
            var baselineESIMSupport = this.phonesOutput[0].esimSupport;
            var baselineWirelessCharge = this.phonesOutput[0].wirelessCharge;
            var baselinePrice = this.phonesOutput[0].price;
            for (var i = 1; i < this.phonesOutput.length; i++) {
                if (baselineName != this.phonesOutput[i].name) {
                    this.distinctName = true;
                }
                if (baselineManufacturer != this.phonesOutput[i].manufacturer) {
                    this.distinctManufacturer = true;
                }
                if (baselineReleaseYear != this.phonesOutput[i].releaseYear) {
                    this.distinctReleaseYear = true;
                }
                if (baselineScreenSize != this.phonesOutput[i].screenSize) {
                    this.distinctScreenSize = true;
                }
                if (baselineManufcountry != this.phonesOutput[i].manufcountry) {
                    this.distinctManufcountry = true;
                }
                if (baselineDisksize != this.phonesOutput[i].disksize) {
                    this.distinctDisksize = true;
                }
                if (baselineScreenFPS != this.phonesOutput[i].screenFPS) {
                    this.distinctScreenFPS = true;
                }
                if (baselineNFC != this.phonesOutput[i].nfc) {
                    this.distinctNFC = true;
                }
                if (baselineESIMSupport != this.phonesOutput[i].esimSupport) {
                    this.distinctESIMSupport = true;
                }
                if (baselineWirelessCharge != this.phonesOutput[i].wirelessCharge) {
                    this.distinctWirelessCharge = true;
                }
                if (baselinePrice != this.phonesOutput[i].price) {
                    this.distinctPrice = true;
                }
            }
            if (this.isChecked) {
                console.log("FILTER ENABLED");
                console.log("");
                if (!this.distinctName) {
                    this.showName = false;
                }
                else {
                    this.showName = true;
                }
                if (!this.distinctManufacturer) {
                    this.showManufacturer = false;
                }
                else {
                    this.showManufacturer = true;
                }
                if (!this.distinctReleaseYear) {
                    this.showReleaseYear = false;
                }
                else {
                    this.showReleaseYear = true;
                }
                if (!this.distinctScreenSize) {
                    this.showScreenSize = false;
                }
                else {
                    this.showScreenSize = true;
                }
                if (!this.distinctManufcountry) {
                    this.showManufcountry = false;
                }
                else {
                    this.showManufcountry = true;
                }
                if (!this.distinctDisksize) {
                    this.showDisksize = false;
                }
                else {
                    this.showDisksize = true;
                }
                if (!this.distinctScreenFPS) {
                    this.showScreenFPS = false;
                }
                else {
                    this.showScreenFPS = true;
                }
                if (!this.distinctNFC) {
                    this.showNFC = false;
                }
                else {
                    this.showNFC = true;
                }
                if (!this.distinctESIMSupport) {
                    this.showESIMSupport = false;
                }
                else {
                    this.showESIMSupport = true;
                }
                if (!this.distinctWirelessCharge) {
                    this.showWirelessCharge = false;
                }
                else {
                    this.showWirelessCharge = true;
                }
                if (!this.distinctPrice) {
                    this.showPrice = false;
                }
                else {
                    this.showPrice = true;
                }
            }
            else {
                console.log("FILTER DISABLED");
                console.log("");
                this.showName = true;
                this.showManufacturer = true;
                this.showReleaseYear = true;
                this.showScreenSize = true;
                this.showManufcountry = true;
                this.showDisksize = true;
                this.showScreenFPS = true;
                this.showNFC = true;
                this.showESIMSupport = true;
                this.showWirelessCharge = true;
                this.showPrice = true;
            }
            console.log("distinctName ".concat(this.distinctName));
            console.log("distinctManufacturer ".concat(this.distinctManufacturer));
            console.log("distinctReleaseYear ".concat(this.distinctReleaseYear));
            console.log("distinctScreenSize ".concat(this.distinctScreenSize));
            console.log("distinctManufcountry ".concat(this.distinctManufcountry));
            console.log("distinctDisksize ".concat(this.distinctDisksize));
            console.log("distinctScreenFPS ".concat(this.distinctScreenFPS));
            console.log("distinctNFC ".concat(this.distinctNFC));
            console.log("distinctESIMSupport ".concat(this.distinctESIMSupport));
            console.log("distinctWirelessCharge ".concat(this.distinctWirelessCharge));
            console.log("distinctPrice ".concat(this.distinctPrice));
            console.log("");
            this.distinctDisksize = false;
        },
        toggleParamDevmode: function () {
            this.devmode = !this.devmode;
        },
        toggleParamName: function () {
            this.showName = !this.showName;
        },
        toggleParamManufacturer: function () {
            this.showManufacturer = !this.showManufacturer;
        },
        toggleParamReleaseYear: function () {
            this.showReleaseYear = !this.showReleaseYear;
        },
        toggleParamScreenSize: function () {
            this.showScreenSize = !this.showScreenSize;
        },
        toggleParamManufcountry: function () {
            this.showManufcountry = !this.showManufcountry;
        },
        toggleParamDisksize: function () {
            this.showDisksize = !this.showDisksize;
        },
        toggleParamScreenFPS: function () {
            this.showScreenFPS = !this.showScreenFPS;
        },
        toggleParamNFC: function () {
            this.showNFC = !this.showNFC;
        },
        toggleParamESIMSupport: function () {
            this.showESIMSupport = !this.showESIMSupport;
        },
        toggleParamWirelessCharge: function () {
            this.showWirelessCharge = !this.showWirelessCharge;
        },
        toggleParamPrice: function () {
            this.showPrice = !this.showPrice;
        },
        checkIsVisible: function (elem) {
            if (elem.isVisible)
                return true;
            else
                return false;
        },
        giveOutput: function (quantity) {
            console.log("giveOutput(".concat(quantity, ") RUN"));
            for (var i = 0; i < quantity; i++) {
                console.log("phone[".concat(this.phones[i].id, "], isVisible = ").concat(this.phones[i].isVisible));
                console.log("output to phone[".concat(this.phones[i].id, "] granted by giveOutput"));
                this.phones[i].isVisible = true;
                console.log("phone[".concat(this.phones[i].id, "], isVisible = ").concat(this.phones[i].isVisible));
            }
            console.log("");
        },
        removeOutput: function (quantity) {
            console.log("removeOutput(".concat(quantity, ") RUN"));
            for (var i = 0; i < quantity; i++) {
                console.log("phone[".concat(this.phones[i].id, "], isVisible = ").concat(this.phones[i].isVisible));
                console.log("output to phone[".concat(this.phones[i].id, "] removed by removeOutput"));
                this.phones[i].isVisible = false;
                console.log("phone[".concat(this.phones[i].id, "], isVisible = ").concat(this.phones[i].isVisible));
            }
            console.log("");
        },
        rectifyOutput: function () {
            console.log("rectifyOutput RUN");
            this.removeOutput(this.phones.length);
            this.giveOutput(this.outputDiff);
            console.log("");
        },
        checkOutput: function () {
            console.log("checkOutput RUN");
            for (var i = 0; i < this.phones.length; i++) {
                console.log("phone with id ".concat(this.phones[i].id, ", isVisible = ").concat(this.phones[i].isVisible));
            }
            console.log("");
            console.log(this.phones);
            console.log(this.phonesOutput);
            console.log(this.phonesHidden);
            console.log("");
        },
        checkOutputVariables: function () {
            console.log("currentlyOutputing ".concat(this.currentlyOutputing));
            console.log("outputQuantity ".concat(this.outputQuantity));
            console.log("outputDiff ".concat(this.outputDiff));
            console.log("");
        },
        countVisible: function () {
            this.phones.filter(function (phone) { return phone.isVisible === true; });
        },
        setQuantity2: function () {
            console.log("setQuantity2 RUN");
            this.outputQuantity = 2;
            this.rectifyOutput();
            this.checkboxEvent();
        },
        setQuantity3: function () {
            console.log("setQuantity3 RUN");
            this.outputQuantity = 3;
            this.rectifyOutput();
            this.checkboxEvent();
        },
        setQuantity4: function () {
            console.log("setQuantity4 RUN");
            this.outputQuantity = 4;
            this.rectifyOutput();
            this.checkboxEvent();
        },
        setQuantity5: function () {
            console.log("setQuantity5 RUN");
            this.outputQuantity = 5;
            this.rectifyOutput();
            this.checkboxEvent();
        },
        setQuantity6: function () {
            console.log("setQuantity6 RUN");
            this.outputQuantity = 6;
            this.rectifyOutput();
            this.checkboxEvent();
        },
    },
    created: function () {
        console.log("created RUN");
        for (var i = 0; i < this.outputDiff; i++) {
            console.log("for loop, i is ".concat(i));
        }
        console.log("");
        this.giveOutput(this.outputDiff);
        this.checkOutput();
    },
}).mount('#app');
