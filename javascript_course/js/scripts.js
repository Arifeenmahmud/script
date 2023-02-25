/* 
document.getElementById("blue_box").innerHTML = `<h1>Hello JavaScript!<h1>
<h2>It's me, your JavaScript!</h2>
<h3>It's nice to meet you!</h3>
`;
document.getElementById("blue_box").style.backgroundColor = "blue";
document.getElementById("blue_box").style.color = "white";   */

/* var user_name = "User name variable";
console.log(user_name);

prompt("What is your name?");

document.getElementById("user_greeting_message").innerHTML = `Hello ${user_name}!`
    + "<br> Hello " + user_name + "!"; 

    var url = "http://www.google.com";
    var link_text = "Click here to go to Google";
    url.replace("http://", "https://");

  
    var orderValue = 2800;  
    if(orderValue >= 1000) {
        console.log("You get a discount!");
    } else {
        console.log("You don't get a discount!");
    }
 */


/* 

var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Analyst'
};

employee.role = 'IT Manager';
employee['role'] = 'IT Manager';
employee['yearOfBirth'] = 1949;
employee.yearOfBirth = 1949;
employee.passport = '123456789';





var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }

];

employee.passport
'123456789'
courses.length


courses[1].categories
    ['web development', 'programming']
courses[2].categories
    ['productivity', 'business']
courses[2].categories
    (2)['productivity', 'business']
courses[2].reviews
4209
courses[2].title
'Learn Microsoft Excel 2020'
courses[2].categories[0]

'productivity' */

/* 
$("#hide").click(
    function () {
        // $(".example").css("display", "none");
        $(".example").hide();
    }
) */

// var  content = $("#sample_text").html();
// console.log(content);

/* 
var content = $("#sample_text").html();
console.log(content);

var content_text = $("#sample_text").text();
console.log(content_text);

$("#sample_text").html("New content");
content = $("#sample_text").html();
console.log(content);


$("#change_image").click(function() {
        $("#imagem_js").attr("src", "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png");
        $("#change_image").hide();
    }
)
 */
/* 
$("#change_image").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#change_image").hide();
}); */
/* 
var contentInput= $("#name_field").val();
console.log(contentInput);
$("#options option:selected").text();
$("#options option:selected").val();
$("#options option:selected").attr("value");
$("#options option:selected").attr("data-value");
console.log($("#options option:selected").text());
console.log($("#options option:selected").val());
console.log($("#options option:selected").attr("value"));
console.log($("#options option:selected").attr("data-value"));

$("#options option:selected").attr("data-value", "new value"); */


/* $("#options").change(function() {
    var selectedOption = $("#options option:selected").text();
    // $("#selected_option").html(selectedOption);
    console.log(selectedOption);
});
 */
/* 
$("input[name='gender']").change(function() {
    // console.log($("input[name='gender']:checked").val());
    // console.log($("input[name='gender']:checked").parent().html());
    
    console.log($("input[name='gender']:checked").parent().text());

}); */

/* 
$("input[name='interest']").change(function () {
    // console.log($("input[name='gender']:checked").parent().text());
    // console.log("changed");
    var selectedCheckboxes=$("input[name='interest']:checked");
    // console.log(selectedCheckboxes);

    $.each(selectedCheckboxes, function(index, value) {
        console.log($(value).parent().text());
        
    });

});

//example-paragraph
$("#add_class").click(function() {
    $("#example-paragraph").addClass("styling");
});

$("#remove_class").click(function() {
    $("#example-paragraph").removeClass("styling");
});

$("#toggle_class").click(function() {
    $("#example-paragraph").toggleClass("styling");
}); */

/* 
//ready event for the document object
$("example").click(function() {

}); */

/* //ready event for the document object
$(function() {

}); */

/* $("element").on("click", function() {
    
    }); */

    /* $("#fullName").change(
        function() {
            $("#submit").show();
        }
    );
     */

    /* 
    $("#fullName").keydown(
        function() {
            $("#fullName").val() =="" ? $("#submit").hide() : $("#submit").show();
            // $("#submit").show();
        }
    ); */

    /* 
    $("#fullName").keyup(
        function() {
            // $("#fullName").val() =="" ? $("#submit").hide() : $("#submit").show();
            // $("#submit").show();
            if($("#fullName").val() =="") {
                $("#submit").hide();
            } else {
                $("#submit").show();
            }
        }
    ); */

    $("#hide-button").click( function() {
        $("#hide-button").hide(4200, function() {   
        $("#hidden-text").show();
        });
    });

    $("#toggle-tab").click( function() {
        // $("#tab-content").toggle(200);
        $("#tab-content").slideToggle(200);
        $("#toggle-tab").toggleClass("flip");
       
    });

