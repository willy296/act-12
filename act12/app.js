const { createApp } = Vue;

function crearPerfilInicial() {
 return {
 nombre: 'Alex Hernández',
 carrera: 'Ingeniería en Software',
 descripcion: 'Me gusta crear interfaces web.',
 correo: 'alex@example.com',
 color: '#2563eb',
 mostrarContacto: false,
 semestre: '3.er semestre', // Reto A
 disponible: false // Reto C
 };
}

createApp({
 data() {
 return {
 ...crearPerfilInicial(),
 temaOscuro: false // Desafío opcional
 };
 },
 methods: {
 alternarContacto() {
 this.mostrarContacto = !this.mostrarContacto;
 },
 alternarTema() {
 this.temaOscuro = !this.temaOscuro;
 },
 restablecer() {
 Object.assign(this, crearPerfilInicial());
 }
 }
}).mount('#app');
