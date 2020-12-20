function loadCameraDummy(){
    var cameraObject = new THREE.Object3D();
    var box = new THREE.BoxGeometry( 1.5, 2, 3 );
    var material = new THREE.MeshBasicMaterial( {color: 0x999999} );
    var cube = new THREE.Mesh(box, material);
    cube.position.z = -1.5;
    cameraObject.add(cube)

    var lenseGeom = new THREE.CylinderGeometry( 0.5, 0.4, 1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xC0C0C0} );
    var lense = new THREE.Mesh( lenseGeom, material );
    lense.rotation.x = 90 * Math.PI / 180;
    lense.position.z = 0.5;
    cameraObject.add(lense);

    var options = {
        amount: 0,
        bevelThickness: 0.1,
        bevelSize: 0.1,
    };
    var circle1 = createMesh(new THREE.ExtrudeGeometry(drawCircle(), options));
    circle1.rotation.y =  90 * Math.PI / 180;
    circle1.position.y = 1.75;
    circle1.position.z = -2;
    cameraObject.add( circle1 );
    var circle2 = createMesh(new THREE.ExtrudeGeometry(drawCircle(), options));
    circle2.rotation.y =  90 * Math.PI / 180;
    circle2.position.y = 1.5;
    circle2.position.z = -1;
    circle2.scale.set(0.75, 0.75, 0.75);
    cameraObject.add( circle2 );

    function drawCircle(){
        var step = new THREE.Shape();
        step.moveTo(0, -1);
        step.lineTo(-0.33, -0.94);
        step.lineTo(-0.67, -0.74);
        step.lineTo(-0.9, -0.43);
        step.lineTo(-1, 0);
        step.lineTo(-0.92, 0.39);
        step.lineTo(-0.69, 0.72);
        step.lineTo(-0.32, 0.95);
        step.lineTo(-0.69, 0.72);
        step.lineTo(0, 1);
        step.lineTo(0.41, 0.91);
        step.lineTo(0.69, 0.72);
        step.lineTo(0.92, 0.39);
        step.lineTo(1, 0);
        step.lineTo(0.93, -0.38);
        step.lineTo(0.71, -0.7);
        step.lineTo(0.42, -0.91);
        step.lineTo(0, -1);
        return step;
    }
    return cameraObject;
}

function createMesh(geom, colour) {
    var meshMaterial = new THREE.MeshPhongMaterial({color: colour});
    meshMaterial.side = THREE.DoubleSide;
    var mesh = new THREE.Mesh(geom, meshMaterial)
    return mesh;
}
