# Focus track #

**Objetivo de la herramienta:**
Brindar a los usuarios un espacio mediante el cual indiquen los proyectos que trabajaron durante el día y registren el tiempo real en horas que dedicaron a cada uno, esto dará transparencia a sus encargados de grupo de como se está dedicando el tiempo y que tan certeras fueron sus estimaciones antes de iniciar el proyecto.

## ¿Quiénes ingresaran al portal web Focus Track? ##
Los AGENTES, un agente es un usuario que no cuenta con licencia Salesforce y que tiene la responsabilidad de registrar sus horas diarias dedicadas por proyecto.
Un AGENTE puede:
* Ingresar al portal web con su código de agente [IdEmpleado] y contraseña. [Inicial que deje entrar con clave Temp1234]
* Al ingresar es importante obtener el identificador de Salesforce del AGENTE
* Consultar sus proyectos y los registros de trabajo ya generados en cada uno.
* Los proyectos activos que se visualizan son los asignados al AGENTE directamente primero y proyectos de su GRUPO incluso si no está asignado a ellos.
* La información de PROYECTO que se puede consultar es: ID, Nombre del proyecto, fecha de creado, fecha de fin estimada.
* Los ID’s de proyecto son generados desde Salesforce y son alfanuméricos.
* Registrar el trabajo que realizaron en un PROYECTO especificando HORAS y MINUTOS [0,15,30,45 minutos] que se dedicaron además de la fecha en la que se realizó ese trabajo
* * Solo se pueden registrar horas de hasta 3 días en el pasado (el 3 es parámetro), ejemplo, si hoy es lunes, se puede registrar trabajo de hoy, el domingo, sábado y el viernes, por default al hacer un nuevo registro la fecha seleccionada es el día actual, para versión 1 dejarlo “fijo” a 3 días como en el ejemplo.
* * No se puede registrar tiempo de días “posteriores” a hoy.
* * No se puede registrar más de 24 horas en un día, mínimo 1 hora.
* * Los registros de trabajo no son editables (ni eliminar si ya están aprobados).
* * Registrar varios registros en un mismo día para proyectos diferentes, sin embargo, se debe respetar el límite de las 24 máximo por día sin importar si no han sido revisadas por el encargado. No es necesario envío de correos o mensajes de aviso
* Puede consultar cuantas horas tiene registrada en la herramienta para todos sus proyectos y el estatus en el que se encuentra [En revisión, Aprobadas].
* Puede consultar la información base de su perfil y cambiar su contraseña


## ¿Quiénes ingresan a Focus Track desde Salesforce? ##
Los **ENCARGADOS DE GRUPO** o facilitadores de grupo en focus track ingresan desde Salesforce con su cuenta nombrada, un **ENCARGADO DE GRUPO** también puede ser un AGENTE, en estos casos el registro de horas lo realiza desde el portal web como un AGENTE y las actividades de monitoreo y revisión de las horas registradas por los agentes de su grupo lo hace desde Salesforce.
