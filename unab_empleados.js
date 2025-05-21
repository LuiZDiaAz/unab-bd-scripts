use unab;

db.empleados.drop();

db.empleados.insertMany([
  { nombre: "Carolina Suárez", edad: 29, ciudad: "Bogotá", correo: "carolina@unab.com", cargo: "Desarrolladora Backend", departamento: "Tecnología" },
  { nombre: "Andrés López", edad: 35, ciudad: "Medellín", correo: "andres@unab.com", cargo: "Analista de Datos", departamento: "Tecnología" },
  { nombre: "María Gómez", edad: 32, ciudad: "Bogotá", correo: "maria@unab.com", cargo: "Ingeniera de Software", departamento: "Tecnología" },
  { nombre: "Juan Pérez", edad: 28, ciudad: "Cali", correo: "juan@unab.com", cargo: "Diseñador UX", departamento: "Diseño" },
  { nombre: "Luisa Martínez", edad: 30, ciudad: "Barranquilla", correo: "luisa@unab.com", cargo: "Desarrolladora Frontend", departamento: "Tecnología" },
  { nombre: "Carlos Ramírez", edad: 45, ciudad: "Bogotá", correo: "carlos@unab.com", cargo: "Jefe de Proyectos", departamento: "Gestión" },
  { nombre: "Diana Torres", edad: 26, ciudad: "Medellín", correo: "diana@unab.com", cargo: "Tester QA", departamento: "Calidad" },
  { nombre: "Jorge Castillo", edad: 34, ciudad: "Bogotá", correo: "jorge@unab.com", cargo: "DevOps", departamento: "Infraestructura" },
  { nombre: "Paola Herrera", edad: 29, ciudad: "Cali", correo: "paola@unab.com", cargo: "Scrum Master", departamento: "Gestión" },
  { nombre: "Miguel Ángel", edad: 31, ciudad: "Medellín", correo: "miguel@unab.com", cargo: "Desarrollador Backend", departamento: "Tecnología" },
  { nombre: "Natalia Ríos", edad: 27, ciudad: "Bogotá", correo: "natalia@unab.com", cargo: "Diseñadora Gráfica", departamento: "Diseño" },
  { nombre: "Camilo Vargas", edad: 36, ciudad: "Cartagena", correo: "camilo@unab.com", cargo: "Product Owner", departamento: "Gestión" },
  { nombre: "Laura Acosta", edad: 33, ciudad: "Bogotá", correo: "laura@unab.com", cargo: "Ingeniera de Datos", departamento: "Tecnología" },
  { nombre: "Sofía Méndez", edad: 25, ciudad: "Cali", correo: "sofia@unab.com", cargo: "Desarrolladora Fullstack", departamento: "Tecnología" },
  { nombre: "Ricardo León", edad: 40, ciudad: "Medellín", correo: "ricardo@unab.com", cargo: "Arquitecto de Software", departamento: "Tecnología" },
  { nombre: "Valentina Ruiz", edad: 29, ciudad: "Bogotá", correo: "valentina@unab.com", cargo: "Tester QA", departamento: "Calidad" },
  { nombre: "Sebastián Mora", edad: 38, ciudad: "Bucaramanga", correo: "sebastian@unab.com", cargo: "Analista de Requisitos", departamento: "Gestión" },
  { nombre: "Esteban Nieto", edad: 41, ciudad: "Bogotá", correo: "esteban@unab.com", cargo: "Desarrollador Backend", departamento: "Tecnología" },
  { nombre: "Alejandra Peña", edad: 26, ciudad: "Medellín", correo: "alejandra@unab.com", cargo: "Diseñadora UX", departamento: "Diseño" },
  { nombre: "Manuel Salazar", edad: 37, ciudad: "Cali", correo: "manuel@unab.com", cargo: "Líder Técnico", departamento: "Tecnología" }
]);

db.empleados.createIndex({ ciudad: 1 });

db.empleados.createIndex({ ciudad: 1, edad: 1 });

db.empleados.createIndex({ correo: 1 }, { unique: true });

db.empleados.createIndex({ cargo: "text" });