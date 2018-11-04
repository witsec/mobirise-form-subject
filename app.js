(function(jQuery, mbrApp) {
    mbrApp.regExtension({
        name: "witsec-form-subject",
        events: {
            load: function() {
                var a = this;
                a.addFilter("publishHTML", function(b) {
					var c = a.projectSettings["witsec-form-subject"] || "Mobirise Form";

					if (c) {
						b = b.replace(/(<form.+data-form-title=")([a-zA-Z0-9 _.,-]+)(">)/img, "$1" + c + "$3");
					}

					return b
				});
                a.addFilter("additionalPageSettings", function(b) {
					var c = a.projectSettings["witsec-form-subject"] || "Mobirise Form";
					return b + [
							'<div class="form-group clearfix">',
							'<label class="col-md-3 control-label">Form Subject</label>',
							'<div class="togglebutton col-md-9">',
							'<label style="width: 100%;">',
							'<input type="text" id="site-settings-witsec-form-subject" name="witsec-form-subject" value="' + c + '">',
							'</label>',
							'</div>',
							'</div>'
							].join("")
                })
            }
        }
    })
})(jQuery, mbrApp);