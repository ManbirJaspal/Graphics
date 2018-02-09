var InitDemo = function () {
    alert("connected");
    
    var canvas = document.getElementById('game-surface');
    var gl = canvas.getContext('webgl'); //opengl context
    
    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT) 
};