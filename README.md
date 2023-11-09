El proyecto se encuentra dividido en frontend y backend
la carpeta backcotizador es donde se encuentra el backend y en la carpeta front_cotizador se encuentra el frontend

Cada una de las carpetas tiene un archivo readme para explicar como ejecutar cada uno


Respuestas a las preguntas

Autenticación y autorización: Implementar un sistema de autenticación robusto y seguro, como autenticación de dos factores (2FA) para asegurarse de que solo los usuarios autorizados tengan acceso a la información sensible.

Encriptación de datos: Utilizar técnicas de encriptación sólidas para proteger los datos sensibles tanto en tránsito como en reposo. Esto puede incluir el uso de protocolos como SSL/TLS para la comunicación segura y el almacenamiento de datos encriptados en la base de datos.

Validación de entrada de datos: Implementar controles estrictos de validación de datos en el lado del cliente y del servidor para prevenir ataques de inyección de código, como SQL injection y cross-site scripting (XSS). Validar y filtrar cuidadosamente todos los datos de entrada, como formularios y consultas de base de datos.

Control de acceso: Establecer políticas de control de acceso que limiten el acceso a datos sensibles solo a usuarios autorizados. Esto implica la implementación de roles y permisos que definan quién puede acceder, modificar o eliminar determinados datos.

Pruebas de penetración y pruebas de seguridad: Realizar pruebas de penetración y pruebas de seguridad de manera regular para identificar posibles vulnerabilidades en la aplicación. Esto ayuda a detectar y corregir posibles fallos de seguridad antes de que sean explotados por atacantes malintencionados.

Explique la diferencia entre una base de datos relacional y una base de datos NoSQL. ¿Cuándo usaría uno u otro?

Relacionales

    Se caracterizan por organizar la información en partes pequeñas, con identificadores a partir de los cuales esas partes pequeñas se relacionen entre sí.
    Se organizan normalmente en tablas, no en documentos, como en el caso de las otras.
    Se trata de bases de datos más robustas y con menos vulnerabilidades ante fallos
    Garantizan el cumplimiento de las cualidades ACID: atomicidad, consistencia, integridad y durabilidad.
    MySQL junto con Oracle, son las bases de datos de este tipo más conocidas. Luego siguen en la lista SQL Server y PostgreSQL.

No relacionales

    Se trata de bases de datos que están diseñadas para soportar grandes volúmenes de datos, por lo que son bases de datos altamente escalables.
    Si bien pueden utilizar lenguaje SQL como herramienta de apoyo, no es este su lenguaje principal para consultas.
    La información se suele almacenar en documentos y no en tablas, como en el caso de las bases de datos relacionales.
    No garantizan el cumplimiento de atomicidad, consistencia, integridad y durabilidad, es decir, las cualidades ACID, que sí garantizan las bases de datos relacionales. 
    Se trata de bases de datos de gran utilidad si lo que se desea es gestionar y organizar información no estructurada, o bien en los casos en los que no se sabe fehacientemente el tipo de datos que se pretende almacenar. 
    No poseen identificadores que sirvan de relación entre un conjunto de datos y otros
    No cuenta aún con un sistema estandarizado, ya que se trata de un sistema de almacenamiento de datos bastante nuevo.
    MongoDB es la base de datos de este tipo sin dudas más conocida. Atrás suyo vienen Redis, Elasticsearch y Cassandra.

¿Qué patrones de diseño conoce, mencione y explique brevemente los que conoce?

    Singleton: Garantiza una única instancia de una clase.
    Factory Method: Delega la creación de objetos a subclases.
    Builder: Construye objetos complejos paso a paso.
    Observer: Notifica cambios a múltiples observadores.
    Strategy: Permite cambiar algoritmos en tiempo de ejecución.
    MVC: Divide una aplicación en Model, View y Controller.

¿Cuáles son los métodos usados en la interfaz RESTful y explique cada uno?

Los métodos utilizados en una interfaz RESTful son:
    GET: Recupera datos del servidor. Se utiliza para leer información, como consultar una página web o recuperar un recurso.
    POST: Crea nuevos datos en el servidor. Se usa para enviar datos al servidor para su procesamiento y creación de recursos.
    PUT: Actualiza o reemplaza un recurso en el servidor. Se utiliza para modificar o sobrescribir recursos existentes.
    DELETE: Elimina un recurso en el servidor. Se emplea para eliminar recursos específicos.