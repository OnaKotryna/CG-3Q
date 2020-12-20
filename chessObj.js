/* QUEEN */
function generateQueen(colour) {
    var pointsX = [
        /* head */
        250, 240.5, 231.9, 225.39, 221.54, 220,
        221.54, 226.5, 222.6,219.84, 200,
        /* neck */
        196.94, 196.21, 224.14,
        /* necklace */
        214.89, 208.76, 204.58, 204.01, 
        198.8, 195.46, 194.92, 197.88,
        /* lower body */
        226, 225, 223, 221, 217, 212, 
        204, 188, 185, 195, 174, 169, 168, 175, 172, 172, 173, 250];
    var pointsY = [
        /* head */
        20, 21.5, 26, 32.84, 40.5, 
        50, 59.49, 68.65, 73.9, 80, 80,
        /* neck */
        88.19, 97.32, 162.82,
        /* necklace */
        164.43, 168.84, 176.25, 184, 
        189.91, 198.36, 206.99, 217.27,
        /* lower body */
        217.27,  234, 257, 290, 323, 356, 
        374, 385, 390, 398, 410, 422, 434, 446, 458, 470, 482, 482];

    var points = [];
    var height = 10;
    var count = pointsY.length;
    var last = count - 1;
    for (var i = 0; i < count; i++) {
        points.push(new THREE.Vector3(25 - pointsX[i] / 10, 0, (pointsY[last] - pointsY[i] - 174) / 10));
    }

    var latheGeometry = new THREE.LatheGeometry(points, 100, 0, 2 * Math.PI);
    latheMesh = createMesh(latheGeometry, colour);
    latheMesh.rotation.x = -Math.PI / 2;
    latheMesh.position.y = 2.65;
    latheMesh.scale.set(0.15, 0.15, 0.15);
    latheMesh.castShadow = true;
    return latheMesh;
}
/* BOARD */
function loadBoard(){
    var board = new THREE.Object3D();

    var boardBaseBox = new THREE.BoxGeometry( 28, 28, 0.5); 
    var baseMaterial =  new THREE.MeshPhongMaterial({color: 0x371200});
    var boardBase = new THREE.Mesh(boardBaseBox, baseMaterial);
    boardBase.position.z = -0.25;
    boardBase.receiveShadow = true;
    board.add(boardBase);

    var plane = new THREE.PlaneGeometry(24, 24);
    var texture = new THREE.ImageUtils.loadTexture("board-pattern.png");
    texture.repeat.set(4,4);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    var textureMat = new THREE.MeshBasicMaterial({ 
        map: texture,
        side: THREE.DoubleSide
    });        
    var boardPattern = new THREE.Mesh(plane, textureMat);
    boardPattern.receiveShadow = true;
    boardPattern.position.z = 0.025;
    board.add(boardPattern);
    board.rotation.x = -Math.PI / 2;
    return board;
}
function createMesh(geom, colour) {
    var meshMaterial = new THREE.MeshPhongMaterial({color: colour});
    meshMaterial.side = THREE.DoubleSide;
    var mesh = new THREE.Mesh(geom, meshMaterial)
    return mesh;
}
