$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
	var quill = new Quill('#editor', {
		theme: 'snow'
	});

	
	var c = 2;
	var myForm = $('#submitComment');
	myForm.on('click', function () {
		var textArea = $('textarea#comment-field-1');
		var text = textArea.val();
		if (text != "") {
			var btn = $('#buttonComments').get(0);
			var container = $("#multiCollapseExample1");
			var commentBody = "<div class=\"card card-body border-right-0 border-left-0 border-bottom-0\"> <div class=\"d-flex w-100 justify-content-between\"> <h6 class=\"mb-2 mt comment-user\"><a href=\"#\">Henry Collins<\/a><\/h6> <small>3 days ago<\/small> <\/div> <p class=\"card-text comment-text\">" + text + "<button type=\"button\" class=\"close mt-\" aria-label=\"Close\"> <span aria-hidden=\"true\">\u00D7<\/span> <\/button> <\/p> <\/div>";
			container.append(commentBody);
			textArea.val("");
			c++;
			btn.innerHTML = "Comments " + "(" + c + ")"
		}
	});

	var postfb = $('#submitFeedback');
	postfb.on('click', function () {
		var textArea = $('textarea#exampleFormControlTextarea2');
		var text = textArea.val();
		if (text != "") {
			var container = $("#postcontainer");
			var commentBody = "<div class=\"card mb-4 w-100\">\t\t\t\t\t\t\t\t<ul class=\"list-group list-group-flush\">\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item list-group-item-action list-group-item-success flex-column align-items-start\">\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex w-100 justify-content-between\">\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"mb-2 feedback-title\">Henry Collins<\/h6>\t\t\t\t\t\t\t\t\t\t\t<small>3 days ago<\/small>\t\t\t\t\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t\t\t<p class=\"mb-1\">" + text + "<\/p>\t\t\t\t\t\t\t\t\t<\/a>\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default text-left\"  href=\"#multiCollapseExample1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1\" id=\"\">Comments (0) <\/a>\t\t\t\t\t\t\t\t\t<div class=\"card card-body border-right-0 border-left-0 border-bottom-0\">\t\t\t\t\t\t\t\t\t\t<form id=\"myForm\">\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"comment-field-1\" placeholder=\"Enter your comments...\" rows=\"3\"><\/textarea>\t\t\t\t\t\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"submitComment\" class=\"btn btn-success\">Submit Comment<\/button>\t\t\t\t\t\t\t\t\t\t<\/form>\t\t\t\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\t\t<\/ul>\t\t\t\t\t\t\t<\/div>";
			container.append(commentBody);
			textArea.val("");
		}
	});

	var requestfb = $("#requestFeedback");
	requestfb.on('click', function () {
		requestfb.text("You have requested Feedback");
		requestfb.removeClass('btn btn-success btn-lg request-feedback-btn');
		requestfb.addClass('btn btn-warning btn-lg request-feedback-btn disabled');

	});
});
