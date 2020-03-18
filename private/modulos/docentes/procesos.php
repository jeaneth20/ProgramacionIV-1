<?php

include('../../Config/config.php');
$docentes= new docentes($conexion);

$proceso='';

if(isset($_GET['proceso']) && strlen($_GET['proceso'])>0){
    $proceso=$_GET['proceso'];
}

$docentes->$proceso($_GET['docente']);
print_r(json_encode($docentes->respuesta));

class docentes{
    private $datos=array(),$bd;
    public $respuesta=['msg'=>'correcto'];

    public function __construct($bd){
        $this->bd=$bd;
    }

    public function recibirDatos($docentes){
        $this->datos=json_decode($docentes, true);
        $this->validar_datos();
    }

    private function validar_datos(){
        if(empty($this->datos['codigo'])){
            $this->respuesta['msg']='Por Favor Ingrese el codigo del Docente';
        
        }
        if(empty($this->datos['nombre'])){
            $this->respuesta['msg']='Por Favor Ingrese el nombre del Docente';

        }
        if(empty($this->datos['direccion'])){
            $this->respuesta['msg']='Por Favor Ingrese la direccion del Docente';

        }
        $this->almacenar_docente();
    }

    private function almacenar_docente(){
        if($this->respuesta['msg']==='correcto'){
            if($this->datos['accion']==="nuevo"){
                $this->bd->consultas('
                INSERT INTO docentes (codigo,nombre,direccion,telefono) VALUES(
                    "'. $this->datos['codigo'] .'",
                    "'. $this->datos['nombre'] .'",
                    "'. $this->datos['direccion'] .'",
                    "'. $this->datos['telefono'] .'"
                    )
                ');
                $this->respuesta['msg']='Registro Insertado con Exito';
            }
        }
    }
}

?>