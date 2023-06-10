const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post);

Comment.belongsTo(User);

module.exports = { User, Post, Comment };
