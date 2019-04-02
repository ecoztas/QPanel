/**
 * @name            QPanel
 * @name            application.js
 * @version         1.0.0
 * @description     Bootstrap Admin Panel
 * @repository      https://github.com/emrecanoztas-com/QPanel
 * @author          Emre Can ÖZTAŞ (ecoztas) <me@emrecanoztas.com>
 * @license         MIT
 */

$(document).ready(function() {
    // Sidebar aç / kapat
    $('#launcher').click(function() {
        $('#l__sidebar').toggleClass('launch');
    });
});
