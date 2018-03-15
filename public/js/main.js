// Write your JavaScript here

var dimeOutput = $("dimes-output");
var nickelOutput = $("nickels-output");
var pennyOutput = $("pennies-output");


$("#calculate-change").click(function () {
    calculateChange();
});

$("#clear-btn").click(function () {
    $(".clear-in").html("-");
    $(".clear").html("$0");
});

function calculateChange() {

    var amountDue = $("#amount-due").val();
    var amountReceived = $("#amount-received").val();

/***********************Form Validation************************/    
    if (amountDue === ""){
        document.getElementById("amount-due").style.borderColor = "red";
        document.getElementById("message-output").innerHTML = "Please Enter A Number";
        return false;
    }
    if (amountReceived === ""){
        document.getElementById("amount-received").style.borderColor = "red";
        document.getElementById("message-output").innerHTML = "Please Enter A Number";
        return false;
    }

    amountDue = parseInt(amountDue * 100);
    amountReceived = parseInt(amountReceived * 100);
    var change = amountReceived - amountDue;
    var change1 = amountReceived - amountDue;
    var newChange;
    
/***********************Form Validation************************/    
    if (isNaN(amountDue)) {
        document.getElementById("amount-due").style.borderColor = "red";
        document.getElementById("message-output").innerHTML = "Please Enter A Number";
        return false;
    }
    
    if (isNaN(amountReceived)) {
        document.getElementById("amount-received").style.borderColor = "red";
        document.getElementById("message-output").innerHTML = "Please Enter A Number";
        document.getElementById("money-output").innerHTML = "$0";
        return false;
    }
    
    if (amountReceived < amountDue) {
        $(".clear").html("");
        $("#message-output").html("Customer Still Owes");
        $("#money-output").html(("$" + change / 100 * -1));


        dollars = dol20 = dol10 = dol5 = dol2 = dol1 = quarters = dimes = nickels = pennies = 0;
        $("#dollars-output").html("$" + dollars);
        $("#20dollars-output").html("$" +dol20);
        $("#10dollars-output").html("$" +dol10);
        $("#5dollars-output").html("$" +dol5);
        $("#2dollars-output").html("$" +dol2);
        $("#1dollars-output").html("$" +dol1);
        $("#quarters-output").html("$" +quarters);
        $("#dimes-output").html("$" +dimes);
        $("#nickels-output").html("$" +nickels);
        $("#pennies-output").html("$" +pennies);
    } else {
/*******************************Animation****************************************/
        $("#message-output").html("Please Return");
        $("#money-output").each(function () {
            $(this).prop("Counter", 0).animate({ Counter: (change1/100).toFixed(2)}, {
                duration: 1000,
                step: function (now) {
                    $(this).text("$" + now.toFixed(2));
                }
            });
        });

        if (change1) {
            var totalChange = change1 / 100;
            change1 = change1 % 100;
            console.log(change1);
            var dollars = parseInt(totalChange);
            $("#dollars-output").html(dollars);
            $("#change-output").html(change1 + "¢");
        } else {
            dollars = 0;
            $("#dollars-output").html("$" + dollars);
        }


        if (change > 1999) {
            newChange = change / 2000;
            change = change % 2000;
            var dol20 = parseInt(newChange);
            $("#20dollars-output").html("$" +dol20);
        } else {
            dol20 = 0;
            $("#20dollars-output").html("$" +dol20);
        }
        if (change > 999) {
            newChange = change / 1000;
            change = change % 1000;
            var dol10 = parseInt(newChange);
            $("#10dollars-output").html("$" +dol10);
        } else {
            dol10 = 0;
            $("#10dollars-output").html("$" +dol10);
        }
        if (change > 499) {
            newChange = change / 500;
            change = change % 500;
            var dol5 = parseInt(newChange);
            $("#5dollars-output").html("$" +dol5);
        } else {
            dol5 = 0;
            $("#5dollars-output").html("$" +dol5);
        }
        if (change > 199) {
            newChange = change / 200;
            change = change % 200;
            var dol2 = parseInt(newChange);
            $("#2dollars-output").html("$" +dol2);
        } else {
            dol2 = 0;
            $("#2dollars-output").html("$" +dol2);
        }
        if (change > 99) {
            newChange = change / 100;
            change = change % 100;
            var dol1 = parseInt(newChange);
            $("#1dollars-output").html("$" +dol1);
        } else {
            dol1 = 0;
            $("#1dollars-output").html("$" +dol1);

        }

        if (change > 24 && change < 100) {
            newChange = change / 25;
            change = change % 25;
            var quarters = parseInt(newChange)
            $("#quarters-output").html(quarters);
        } else {
            quarters = 0;
            $("#quarters-output").html(quarters);

        }

        if (change < 25) {
            newChange = change / 10;
            change = change % 10;
            var dimes = parseInt(newChange);
            $("#dimes-output").html(dimes);
        } else {
            dimes = 0;
            $("#dimes-output").html(dimes);

        }
        if (change < 10) {
            newChange = change / 5;
            change = change % 5;
            var nickels = parseInt(newChange);
            $("#nickels-output").html(nickels);
        } else {
            nickels = 0;
            $("#nickels-output").html(nickels);

        }

        if (change < 5) {
            var pennies = change;
            $("#pennies-output").html(pennies);
        } else {
            pennies = 0;
            $("#pennies-output").html(pennies);

        }
    }


    // console.log(dol20);
    // console.log(change);
    // console.log(dol10);
    // console.log(change);
    // console.log(dol5);
    // console.log(change);
    // console.log(dol2);
    // console.log(change);
    // console.log(dol1);
    // console.log(change);
    // console.log(quarters);
    // console.log(dimes);
    // console.log(nickels);
    // console.log(pennies);
}
