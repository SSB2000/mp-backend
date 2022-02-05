module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0cf0ca92eb163891cc00692009e21be5'),
  },
});
