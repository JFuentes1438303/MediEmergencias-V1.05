function validar() {

	var tdocumento,
		documento,
		edad,
		nombres,
		apellidos,
		fnacimiento,
		ciudad,
		departamento,
		direccion,
		sexo,
		ocupacion,
		ecivil,
		entidad,
		regimen,
		region,
		escolaridad,
		triage,
		sintomas,
		enfermedades,
		antecedentes,
		habitos,
		fisiologicos,
		examenes;

		tdocumento = document.getElementById("tdocumento").value;
		documento = document.getElementById("ndocumento").value;
		edad = document.getElementById("edad").value;
		nombres = document.getElementById("nombres").value;
		apellidos = document.getElementById("apellidos").value;
		fnacimiento = document.getElementById("fnacimiento").value;
		ciudad = document.getElementById("ciudad").value;
		departamento = document.getElementById("departamento").value;
		direccion = document.getElementById("direccion").value;
		sexo = document.getElementById("sexo").value;
		ocupacion = document.getElementById("ocupacion").value;
		ecivil = document.getElementById("ecivil").value;
		entidad = document.getElementById("entidad").value;
		regimen = document.getElementById("regimen").value;
		region = document.getElementById("region").value;
		escolaridad = document.getElementById("escolaridad").value;
		triage = document.getElementById("triage").value;
		sintomas = document.getElementById("motivo").value;
		enfermedades = document.getElementById("enfermedad").value;
		antecedentes = document.getElementById("antecedentes").value;
		habitos = document.getElementsById("toxico").value;
		fisiologicos = document.getElementById("fisiologico").value;
		examenes = document.getElementById("examenes").value;

		if (tdocumento ==="Seleccione.." || documento ==="" || edad ==="" || nombres ==="" || apellidos ==="" || fnacimiento ==="" || ciudad ==="" ||departamento ==="" || direccion ==="" || sexo ==="Seleccione.." || ocupacion ==="" || ecivil ==="Seleccione.." || entidad ==="" || regimen ==="Seleccione.." || region ==="Seleccione.." || escolaridad ==="" || triage ==="Seleccione.." || sintomas ==="" || enfermedades ==="" || antecedentes ==="" || habitos ==="" || fisiologicos ==="" || examenes ==="") {
			alert("Todos los campos deben ser diligenciados");
			return false;
		}
		
}