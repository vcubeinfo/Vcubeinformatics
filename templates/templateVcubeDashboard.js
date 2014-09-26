// This file was automatically generated from templateVcubeDashboard.soy.
// Please don't edit this file by hand.

if (typeof templateDashboard == 'undefined') { var templateDashboard = {}; }


templateDashboard.renderHome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="homeServices">UI / UX</div><div class="homeServices">Apps</div><div class="homeServices">E-Pubs</div>');
  if (!opt_sb) return output.toString();
};


templateDashboard.renderWhatWeDo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li>', soy.$$escapeHtml(opt_data.contentItem), '</li>');
  if (!opt_sb) return output.toString();
};


templateDashboard.renderContactUs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="cotactContainer"><div class="leftContact"><h3> Address </h3>Flat No # 101, Sri Surya Rama Residency, Plot No: 13, Hyderabad, Andhra Pradesh\t500 081\tIndia. Landline: 040 60605959.</div><div id="map_canvas"></div></div>');
  if (!opt_sb) return output.toString();
};


templateDashboard.renderAboutUs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="AboutItem"><h3>', soy.$$escapeHtml(opt_data.header), '</h3><div class="aboutContent">', soy.$$escapeHtml(opt_data.content), '</div></div>');
  if (!opt_sb) return output.toString();
};
