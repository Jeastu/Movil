import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  public dbInstance: SQLiteObject | null = null;

  constructor(private sqlite: SQLite) {}

  // 1. Inicializa la base de datos y crea la tabla de sesión y certificaciones
  async inicializarBD(): Promise<void> {
    try {
      const db = await this.sqlite.create({
        name: 'appBD.db',
        location: 'default'
      });

      this.dbInstance = db;

      await db.executeSql(
        `CREATE TABLE IF NOT EXISTS sesion_data (
          user_name TEXT(8) PRIMARY KEY NOT NULL,
          password INTEGER NOT NULL,
          active INTEGER NOT NULL
        )`, []
      );

      await this.crearTablaCertificaciones();
      await this.crearTablaExperienciaLaboral();


      console.log('✅ Base de datos inicializada y tablas creadas correctamente');

    } catch (error) {
      console.error('❌ Error al inicializar la base de datos:', error);
    }
  }

  // 2. Validar si hay sesión activa
  async existeSesionActiva(): Promise<boolean> {
    try {
      const res = await this.dbInstance?.executeSql(
        'SELECT * FROM sesion_data WHERE active = 1', []
      );
      return res?.rows.length > 0;
    } catch (error) {
      console.error('❌ Error al validar sesión activa:', error);
      return false;
    }
  }

  // 3. Validar usuario
  async validarUsuario(username: string, password: number): Promise<boolean> {
    try {
      const res = await this.dbInstance?.executeSql(
        'SELECT * FROM sesion_data WHERE user_name = ? AND password = ?', [username, password]
      );
      return res?.rows.length > 0;
    } catch (error) {
      console.error('❌ Error al validar usuario:', error);
      return false;
    }
  }

  // 4. Registrar sesión nueva
  async registrarSesion(username: string, password: number): Promise<void> {
    try {
      await this.dbInstance?.executeSql(
        'INSERT OR REPLACE INTO sesion_data (user_name, password, active) VALUES (?, ?, 1)',
        [username, password]
      );
      console.log('✅ Sesión registrada y activada');
    } catch (error) {
      console.error('❌ Error al registrar sesión:', error);
    }
  }

  // 5. Cerrar sesión
  async cerrarSesion(username: string): Promise<void> {
    try {
      await this.dbInstance?.executeSql(
        'UPDATE sesion_data SET active = 0 WHERE user_name = ?',
        [username]
      );
      console.log('✅ Sesión cerrada');
    } catch (error) {
      console.error('❌ Error al cerrar sesión:', error);
    }
  }

  // Crear tabla certificaciones
  async crearTablaCertificaciones(): Promise<void> {
    try {
      await this.dbInstance?.executeSql(
        `CREATE TABLE IF NOT EXISTS certificaciones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          institucion TEXT NOT NULL,
          fecha TEXT NOT NULL
        )`, []
      );
      console.log('✅ Tabla certificaciones creada');
    } catch (error) {
      console.error('❌ Error al crear tabla certificaciones:', error);
    }
  }

  // Insertar una certificación
  async insertarCertificacion(nombre: string, institucion: string, fecha: string): Promise<void> {
    try {
      await this.dbInstance?.executeSql(
        'INSERT INTO certificaciones (nombre, institucion, fecha) VALUES (?, ?, ?)',
        [nombre, institucion, fecha]
      );
      console.log('✅ Certificación insertada');
    } catch (error) {
      console.error('❌ Error al insertar certificación:', error);
      throw error;
    }
  }

  // Obtener todas las certificaciones
  async obtenerCertificaciones(): Promise<any[]> {
    const lista: any[] = [];
    try {
      const res = await this.dbInstance?.executeSql('SELECT * FROM certificaciones', []);
      for (let i = 0; i < res?.rows.length; i++) {
        lista.push(res.rows.item(i));
      }
      return lista;
    } catch (error) {
      console.error('❌ Error al obtener certificaciones:', error);
      return [];
    }
  }

  // Crear tabla experiencia laboral
async crearTablaExperienciaLaboral(): Promise<void> {
  try {
    await this.dbInstance?.executeSql(
      `CREATE TABLE IF NOT EXISTS experiencia_laboral (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        empresa TEXT NOT NULL,
        cargo TEXT NOT NULL,
        fecha_inicio TEXT NOT NULL,
        fecha_termino TEXT NOT NULL
      )`, []
    );
    console.log('✅ Tabla experiencia_laboral creada');
  } catch (error) {
    console.error('❌ Error al crear tabla experiencia_laboral:', error);
  }
}

// Insertar experiencia laboral
async insertarExperienciaLaboral(empresa: string, cargo: string, fecha_inicio: string, fecha_termino: string): Promise<void> {
  try {
    await this.dbInstance?.executeSql(
      `INSERT INTO experiencia_laboral (empresa, cargo, fecha_inicio, fecha_termino)
       VALUES (?, ?, ?, ?)`,
      [empresa, cargo, fecha_inicio, fecha_termino]
    );
    console.log('✅ Experiencia laboral insertada');
  } catch (error) {
    console.error('❌ Error al insertar experiencia laboral:', error);
    throw error;
  }
}
async obtenerExperienciaLaboral(): Promise<any[]> {
  const lista: any[] = [];
  try {
    const res = await this.dbInstance?.executeSql('SELECT * FROM experiencia_laboral', []);
    for (let i = 0; i < res?.rows.length; i++) {
      lista.push(res.rows.item(i));
    }
    return lista;
  } catch (error) {
    console.error('❌ Error al obtener experiencias laborales:', error);
    return [];
  }
}

// Crear tabla mis_datos
async crearTablaMisDatos(): Promise<void> {
  try {
    await this.dbInstance?.executeSql(
      `CREATE TABLE IF NOT EXISTS mis_datos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        nivel TEXT NOT NULL,
        fecha TEXT NOT NULL
      )`, []
    );
    console.log('✅ Tabla mis_datos creada');
  } catch (error) {
    console.error('❌ Error al crear tabla mis_datos:', error);
  }
}

// Insertar datos
async insertarMisDatos(nombre: string, apellido: string, nivel: string, fecha: string): Promise<void> {
  try {
    await this.dbInstance?.executeSql(
      `INSERT INTO mis_datos (nombre, apellido, nivel, fecha)
       VALUES (?, ?, ?, ?)`,
      [nombre, apellido, nivel, fecha]
    );
    console.log('✅ Datos personales insertados');
  } catch (error) {
    console.error('❌ Error al insertar mis datos:', error);
  }
}

// Obtener datos
async obtenerMisDatos(): Promise<any[]> {
  const lista: any[] = [];
  try {
    const res = await this.dbInstance?.executeSql(`SELECT * FROM mis_datos`, []);
    for (let i = 0; i < res?.rows.length; i++) {
      lista.push(res.rows.item(i));
    }
    return lista;
  } catch (error) {
    console.error('❌ Error al obtener mis datos:', error);
    return [];
  }
}


}
