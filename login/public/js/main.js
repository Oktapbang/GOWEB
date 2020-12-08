
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    $(document).ready(function(){

        //$('#ex_filename').change(function() {
        //	var filename = $(this).val();
        //	$('.upload-name').val(filename);
        //});
   
        var fileTarget = $('.file-upload .upload-hidden');
   
        fileTarget.on('change', function(){  // 값이 변경되면
             if(window.FileReader){  // modern browser
                  var filename = $(this)[0].files[0].name;
             } 
             else {  // old IE
                  var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
             }
   
             // 추출한 파일명 삽입
             $(this).siblings('.upload-name').val(filename);
        });
   }); 
   




   //review image_ preview image 
   var imgTarget = $('.preview-image .upload-hidden');
   
   imgTarget.on('change', function(){
        var parent = $(this).parent();
        parent.children('.upload-display').remove();
   
        if(window.FileReader){
             //image 파일만
             if (!$(this)[0].files[0].type.match(/image\//)) return;
   
             var reader = new FileReader();
             reader.onload = function(e){
                  var src = e.target.result;
                  parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
             }
             reader.readAsDataURL($(this)[0].files[0]);
        }
   
        else {
             $(this)[0].select();
             $(this)[0].blur();
             var imgSrc = document.selection.createRange().text;
             parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');
   
             var img = $(this).siblings('.upload-display').find('img');
             img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
        }
   });
    

})(jQuery);