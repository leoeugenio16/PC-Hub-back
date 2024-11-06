module.exports = ({ env }) => ({
  host: '0.0.0.0', // Aseguramos que esté escuchando en todas las interfaces.
  port: process.env.PORT || 1337, // Usamos el puerto de Render (también se puede forzar si lo necesitas)
  app: {
    keys: env.array('APP_KEYS'),
  },
});
